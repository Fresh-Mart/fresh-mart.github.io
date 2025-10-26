import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Tag, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroBanner1 from "@/assets/hero-banner-1.jpg";
import heroBanner2 from "@/assets/hero-banner-2.jpg";
import { products } from "@/data/products";

const banners = [heroBanner1, heroBanner2];

const flashDeals = products.filter((p) => p.discount).slice(0, 4);
const featuredProducts = products.slice(0, 8);

const Index = () => {
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextBanner = () => {
    setCurrentBanner((prev) => (prev + 1) % banners.length);
  };

  const prevBanner = () => {
    setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Carousel */}
        <section className="relative">
          <div className="relative h-[400px] overflow-hidden md:h-[500px]">
            {banners.map((banner, index) => (
              <img
                key={index}
                src={banner}
                alt={`Banner ${index + 1}`}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
                  index === currentBanner ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent">
              <div className="container mx-auto flex h-full items-center px-4">
                <div className="max-w-xl text-white">
                  <h1 className="mb-4 text-4xl font-bold md:text-5xl">
                    Fresh Groceries Delivered
                  </h1>
                  <p className="mb-6 text-lg">
                    Get the best quality products at unbeatable prices
                  </p>
                  <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                    Shop Now
                  </Button>
                </div>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
              onClick={prevBanner}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
              onClick={nextBanner}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-2">
              {banners.map((_, index) => (
                <button
                  key={index}
                  className={`h-2 w-2 rounded-full transition-all ${
                    index === currentBanner ? "w-8 bg-white" : "bg-white/50"
                  }`}
                  onClick={() => setCurrentBanner(index)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Vouchers Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold">Vouchers Available</h2>
            <Button variant="link" className="text-primary">
              See all
            </Button>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <Card className="flex items-center space-x-4 p-4 shadow-card">
              <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
                <Tag className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">$10 OFF</h3>
                <p className="text-sm text-muted-foreground">Min. spend $80</p>
                <p className="text-xs text-muted-foreground">Expires in 7 days</p>
              </div>
            </Card>
            <Card className="flex items-center space-x-4 p-4 shadow-card">
              <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-secondary/20">
                <Tag className="h-8 w-8 text-secondary" />
              </div>
              <div>
                <h3 className="font-semibold">20% OFF</h3>
                <p className="text-sm text-muted-foreground">On fresh produce</p>
                <p className="text-xs text-muted-foreground">Expires in 3 days</p>
              </div>
            </Card>
            <Card className="flex items-center space-x-4 p-4 shadow-card">
              <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-deal/20">
                <Tag className="h-8 w-8 text-deal" />
              </div>
              <div>
                <h3 className="font-semibold">Free Delivery</h3>
                <p className="text-sm text-muted-foreground">Min. spend $50</p>
                <p className="text-xs text-muted-foreground">Expires in 5 days</p>
              </div>
            </Card>
          </div>
        </section>

        {/* Flash Deals */}
        <section className="bg-muted/30 py-12">
          <div className="container mx-auto px-4">
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <h2 className="text-2xl font-bold">Flash Deals</h2>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>While stocks last!</span>
                </div>
              </div>
              <Button variant="link" className="text-primary">
                See all
              </Button>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {flashDeals.map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="container mx-auto px-4 py-12">
          <h2 className="mb-6 text-2xl font-bold">Featured Products</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
