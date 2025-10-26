import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Percent, Zap, Gift } from "lucide-react";
import { products } from "@/data/products";

const promotionalProducts = products.filter((p) => p.discount);

const Promotions = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <div className="bg-gradient-hero py-12 text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold">Special Promotions</h1>
            <p className="mt-2 text-lg opacity-90">
              Don't miss out on our amazing deals and offers
            </p>
          </div>
        </div>

        {/* Promotion Banners */}
        <section className="container mx-auto px-4 py-12">
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="bg-gradient-deal p-6 text-white shadow-card">
              <Zap className="mb-4 h-12 w-12" />
              <h3 className="mb-2 text-xl font-bold">Flash Sale</h3>
              <p className="mb-4 opacity-90">Up to 50% off on selected items</p>
              <Badge className="bg-white text-deal">Limited Time</Badge>
            </Card>
            <Card className="bg-gradient-to-br from-primary to-primary/80 p-6 text-white shadow-card">
              <Percent className="mb-4 h-12 w-12" />
              <h3 className="mb-2 text-xl font-bold">Weekend Deals</h3>
              <p className="mb-4 opacity-90">Extra discounts every weekend</p>
              <Badge className="bg-white text-primary">Save More</Badge>
            </Card>
            <Card className="bg-gradient-to-br from-secondary to-secondary/80 p-6 text-secondary-foreground shadow-card">
              <Gift className="mb-4 h-12 w-12" />
              <h3 className="mb-2 text-xl font-bold">Buy 1 Get 1</h3>
              <p className="mb-4 opacity-90">On selected fresh produce</p>
              <Badge className="bg-primary text-white">Special Offer</Badge>
            </Card>
          </div>
        </section>

        {/* Promotional Products */}
        <section className="bg-muted/30 py-12">
          <div className="container mx-auto px-4">
            <h2 className="mb-6 text-2xl font-bold">Discounted Products</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {promotionalProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Promotions;
