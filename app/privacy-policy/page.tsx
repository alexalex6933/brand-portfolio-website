export const metadata = {
  title: "Privacy Policy — Alexander Leung",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white px-6 py-20">
      <div className="max-w-2xl mx-auto space-y-8 text-[#06122B]">
        <div>
          <h1 className="text-3xl font-extrabold mb-2">Privacy Policy</h1>
          <p className="text-sm text-[#5A6B8A]">Last updated: March 4, 2026</p>
        </div>

        <section className="space-y-3">
          <h2 className="text-lg font-bold">Overview</h2>
          <p className="text-sm text-[#5A6B8A] leading-relaxed">
            This website (<strong>alexleuung.com</strong>) is a personal media kit owned and
            operated by Alexander Leung. It displays publicly available social media metrics
            for the purpose of brand partnership outreach. This policy explains how data is
            handled.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold">Data We Collect</h2>
          <p className="text-sm text-[#5A6B8A] leading-relaxed">
            This site does not collect, store, or process any personal data from visitors.
            There are no contact forms, user accounts, cookies, or tracking scripts.
          </p>
          <p className="text-sm text-[#5A6B8A] leading-relaxed">
            The site uses the Instagram Graph API to display aggregated account metrics
            (follower count, reach, impressions, demographics) belonging solely to the site
            owner. No visitor data is accessed or stored via this integration.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold">Third-Party Services</h2>
          <p className="text-sm text-[#5A6B8A] leading-relaxed">
            This site is hosted on <strong>Vercel</strong>. Vercel may collect standard
            server access logs (IP address, browser type, pages visited) as part of their
            hosting infrastructure. See{" "}
            <a
              href="https://vercel.com/legal/privacy-policy"
              className="text-[#1D4ED8] hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vercel&apos;s Privacy Policy
            </a>{" "}
            for details.
          </p>
          <p className="text-sm text-[#5A6B8A] leading-relaxed">
            Aggregated Instagram metrics are fetched via the{" "}
            <strong>Meta Instagram Graph API</strong> using the site owner&apos;s own
            credentials. No third-party user data is requested or stored.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold">Contact</h2>
          <p className="text-sm text-[#5A6B8A] leading-relaxed">
            For any privacy-related questions, contact:{" "}
            <a
              href="mailto:alexleuung1@gmail.com"
              className="text-[#1D4ED8] hover:underline"
            >
              alexleuung1@gmail.com
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}
