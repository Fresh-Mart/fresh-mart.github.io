import { Apple, Beef, Milk, Carrot, Sandwich, Cookie } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

const categories = [
  {
    name: "Fresh Fruits",
    slug: "fruits",
    icon: Apple,
    count: "150+ items",
    color: "bg-green-100 text-green-600",
  },
  {
    name: "Vegetables",
    slug: "vegetables",
    icon: Carrot,
    count: "200+ items",
    color: "bg-orange-100 text-orange-600",
  },
  {
    name: "Meat & Seafood",
    slug: "meat",
    icon: Beef,
    count: "120+ items",
    color: "bg-red-100 text-red-600",
  },
  {
    name: "Dairy & Eggs",
    slug: "dairy",
    icon: Milk,
    count: "80+ items",
    color: "bg-blue-100 text-blue-600",
  },
  {
    name: "Bakery",
    slug: "bakery",
    icon: Sandwich,
    count: "90+ items",
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    name: "Snacks",
    slug: "snacks",
    icon: Cookie,
    count: "300+ items",
    color: "bg-purple-100 text-purple-600",
  },
];

const Categories = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <div className="bg-gradient-hero py-12 text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold">Shop by Category</h1>
            <p className="mt-2 text-lg opacity-90">
              Browse through our wide selection of products
            </p>
          </div>
        </div>

        <section className="container mx-auto px-4 py-12">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Link key={index} to={`/categories/${category.slug}`}>
                  <Card className="group cursor-pointer overflow-hidden shadow-card transition-all hover:shadow-hover">
                    <div className="flex items-center space-x-4 p-6">
                      <div className={`flex h-16 w-16 items-center justify-center rounded-lg ${category.color}`}>
                        <Icon className="h-8 w-8" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold group-hover:text-primary">
                          {category.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">{category.count}</p>
                      </div>
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Categories;
