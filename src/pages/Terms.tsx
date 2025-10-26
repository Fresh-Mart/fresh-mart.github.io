
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

const Terms = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <section className="bg-muted/30 py-12">
          <div className="container mx-auto px-4">
            <h1 className="mb-4 text-4xl font-bold">Terms of Service</h1>
            <p className="text-muted-foreground">Last updated: January 2025</p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <Card className="p-8 shadow-card">
            <div className="prose max-w-none">
              <h2 className="mb-4 text-2xl font-bold">Agreement to Terms</h2>
              <p className="mb-6 text-muted-foreground">
                By accessing and using FreshMart, you agree to be bound by these Terms of Service and all applicable laws and regulations.
              </p>

              <h2 className="mb-4 text-2xl font-bold">Use of Service</h2>
              <p className="mb-4 text-muted-foreground">
                You agree to use our service only for lawful purposes and in accordance with these Terms. You must not:
              </p>
              <ul className="mb-6 list-disc pl-6 text-muted-foreground">
                <li>Use the service in any way that violates applicable laws</li>
                <li>Transmit any harmful or malicious code</li>
                <li>Interfere with the security or proper functioning of the service</li>
                <li>Attempt to gain unauthorized access to any part of the service</li>
              </ul>

              <h2 className="mb-4 text-2xl font-bold">Product Information and Pricing</h2>
              <p className="mb-6 text-muted-foreground">
                We strive to provide accurate product descriptions and pricing. However, we do not warrant that product descriptions, pricing, or other content is accurate, complete, or error-free. We reserve the right to correct any errors and to change or update information at any time.
              </p>

              <h2 className="mb-4 text-2xl font-bold">Orders and Payment</h2>
              <p className="mb-6 text-muted-foreground">
                All orders are subject to acceptance and availability. We reserve the right to refuse or cancel any order for any reason. Payment must be received before order processing.
              </p>

              <h2 className="mb-4 text-2xl font-bold">Delivery</h2>
              <p className="mb-6 text-muted-foreground">
                Delivery times are estimates only and we are not responsible for delays. Risk of loss passes to you upon delivery to the carrier.
              </p>

              <h2 className="mb-4 text-2xl font-bold">Returns and Refunds</h2>
              <p className="mb-6 text-muted-foreground">
                Please refer to our Returns Policy for information about returns and refunds. Perishable items may not be eligible for return.
              </p>

              <h2 className="mb-4 text-2xl font-bold">Limitation of Liability</h2>
              <p className="mb-6 text-muted-foreground">
                FreshMart shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service.
              </p>

              <h2 className="mb-4 text-2xl font-bold">Changes to Terms</h2>
              <p className="mb-6 text-muted-foreground">
                We reserve the right to modify these terms at any time. Continued use of the service after changes constitutes acceptance of the modified terms.
              </p>

              <h2 className="mb-4 text-2xl font-bold">Contact Information</h2>
              <p className="text-muted-foreground">
                For questions about these Terms, contact us at support@freshmart.com
              </p>
            </div>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
