import { NextResponse } from "next/server";

const IG_API = "https://graph.instagram.com/v21.0";
const USER_ID = process.env.IG_USER_ID!;
const TOKEN = process.env.IG_ACCESS_TOKEN!;

function since30Days() {
  return Math.floor((Date.now() - 30 * 24 * 60 * 60 * 1000) / 1000);
}

function untilNow() {
  return Math.floor(Date.now() / 1000);
}

export async function GET() {
  if (!USER_ID || !TOKEN) {
    return NextResponse.json(
      { error: "Instagram credentials not configured. Set IG_USER_ID and IG_ACCESS_TOKEN in .env.local" },
      { status: 503 }
    );
  }

  try {
    // 1. Fetch follower count + basic info
    const profileRes = await fetch(
      `${IG_API}/${USER_ID}?fields=followers_count,media_count,profile_picture_url&access_token=${TOKEN}`
    );
    const profile = await profileRes.json();

    if (profile.error) {
      return NextResponse.json({ error: profile.error.message }, { status: 500 });
    }

    // 2. Fetch 30-day insights (profile views, impressions, reach)
    const insightsRes = await fetch(
      `${IG_API}/${USER_ID}/insights?metric=profile_views,impressions,reach&period=day&since=${since30Days()}&until=${untilNow()}&access_token=${TOKEN}`
    );
    const insightsData = await insightsRes.json();

    // Aggregate daily values
    const sumValues = (data: { value: number }[]) =>
      data?.reduce((acc, d) => acc + d.value, 0) ?? 0;

    const insights: Record<string, number> = {};
    if (insightsData?.data) {
      for (const metric of insightsData.data) {
        insights[metric.name] = sumValues(metric.values);
      }
    }

    // 3. Audience demographics — gender & age
    const genderAgeRes = await fetch(
      `${IG_API}/${USER_ID}/insights?metric=follower_demographics&period=lifetime&breakdown=age,gender&access_token=${TOKEN}`
    );
    const genderAgeData = await genderAgeRes.json();

    // 4. Top countries
    const countryRes = await fetch(
      `${IG_API}/${USER_ID}/insights?metric=follower_demographics&period=lifetime&breakdown=country&access_token=${TOKEN}`
    );
    const countryData = await countryRes.json();

    // 5. Top media posts (sorted by views or engagement)
    const mediaRes = await fetch(
      `${IG_API}/${USER_ID}/media?fields=id,caption,media_type,thumbnail_url,media_url,permalink,like_count,comments_count,video_views,timestamp&limit=20&access_token=${TOKEN}`
    );
    const mediaData = await mediaRes.json();

    type IgPost = {
      id: string;
      caption?: string;
      media_type: string;
      thumbnail_url?: string;
      media_url?: string;
      permalink: string;
      like_count: number;
      comments_count: number;
      video_views?: number;
      timestamp: string;
    };

    const allPosts: IgPost[] = mediaData?.data ?? [];
    const sortedPosts = [...allPosts].sort((a, b) => {
      const scoreA = (a.video_views ?? 0) || (a.like_count + a.comments_count);
      const scoreB = (b.video_views ?? 0) || (b.like_count + b.comments_count);
      return scoreB - scoreA;
    });
    const topPosts = sortedPosts.slice(0, 3);

    return NextResponse.json({
      followers: profile.followers_count ?? 0,
      media_count: profile.media_count ?? 0,
      profile_picture_url: profile.profile_picture_url ?? null,
      profile_views_30d: insights.profile_views ?? 0,
      impressions_30d: insights.impressions ?? 0,
      reach_30d: insights.reach ?? 0,
      demographics: genderAgeData?.data?.[0]?.total_value?.breakdowns ?? [],
      countries: countryData?.data?.[0]?.total_value?.breakdowns ?? [],
      top_posts: topPosts,
    });
  } catch {
    return NextResponse.json({ error: "Failed to fetch Instagram data" }, { status: 500 });
  }
}
