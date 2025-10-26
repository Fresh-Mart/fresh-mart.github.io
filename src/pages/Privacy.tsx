
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

const Privacy = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <section className="bg-muted/30 py-12">
          <div className="container mx-auto px-4">
            <h1 className="mb-4 text-4xl font-bold">Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: January 2025</p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <Card className="p-8 shadow-card">
            <div className="prose max-w-none">
              <h2 className="mb-4 text-2xl font-bold">Introduction</h2>
              <p className="mb-6 text-muted-foreground">
                FreshMart ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
              </p>

              <h2 className="mb-4 text-2xl font-bold">Information We Collect</h2>
              <p className="mb-4 text-muted-foreground">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="mb-6 list-disc pl-6 text-muted-foreground">
                <li>Name and contact information</li>
                <li>Delivery address</li>
                <li>Payment information</li>
                <li>Purchase history</li>
                <li>Account credentials</li>
              </ul>

              <h2 className="mb-4 text-2xl font-bold">Google AdSense and Advertising</h2>
              <p className="mb-4 text-muted-foreground">
                We use Google AdSense to display advertisements on our website. Google AdSense uses cookies and web beacons to collect information about your visits to this and other websites in order to provide advertisements about goods and services of interest to you.
              </p>
              <p className="mb-6 text-muted-foreground">
                Third-party vendors, including Google, use cookies to serve ads based on your prior visits to our website or other websites. Google's use of advertising cookies enables it and its partners to serve ads based on your visit to our site and/or other sites on the Internet.
              </p>
              <p className="mb-6 text-muted-foreground">
                You may opt out of personalized advertising by visiting{" "}
                <a href="https://www.google.com/settings/ads" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                  Google Ads Settings
                </a>{" "}
                or{" "}
                <a href="http://www.aboutads.info/choices/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                  aboutads.info
                </a>.
              </p>

              <h2 className="mb-4 text-2xl font-bold">Cookies and Tracking Technologies</h2>
              <p className="mb-6 text-muted-foreground">
                We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with small amounts of data which may include an anonymous unique identifier.
              </p>

              <h2 className="mb-4 text-2xl font-bold">How We Use Your Information</h2>
              <p className="mb-4 text-muted-foreground">
                We use the information we collect to:
              </p>
              <ul className="mb-6 list-disc pl-6 text-muted-foreground">
                <li>Process and fulfill your orders</li>
                <li>Communicate with you about your account or transactions</li>
                <li>Send you marketing communications (with your consent)</li>
                <li>Improve our website and services</li>
                <li>Detect and prevent fraud</li>
              </ul>

              <h2 className="mb-4 text-2xl font-bold">Data Security</h2>
              <p className="mb-6 text-muted-foreground">
                We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.
              </p>

              <h2 className="mb-4 text-2xl font-bold">Your Rights</h2>
              <p className="mb-4 text-muted-foreground">
                You have the right to:
              </p>
              <ul className="mb-6 list-disc pl-6 text-muted-foreground">
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your data</li>
                <li>Withdraw consent at any time</li>
              </ul>

              <h2 className="mb-4 text-2xl font-bold">Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy, please contact us at privacy@freshmart.com
              </p>
            </div>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
