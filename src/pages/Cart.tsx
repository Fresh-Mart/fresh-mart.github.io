import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ShoppingBag, Trash2, Plus, Minus } from "lucide-react";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems: any[] = [];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <div className="bg-gradient-hero py-12 text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold">Shopping Cart</h1>
            <p className="mt-2 text-lg opacity-90">
              Review your items before checkout
            </p>
          </div>
        </div>

        <section className="container mx-auto px-4 py-12">
          {cartItems.length === 0 ? (
            <Card className="flex flex-col items-center justify-center p-12 text-center shadow-card">
              <ShoppingBag className="mb-4 h-24 w-24 text-muted-foreground" />
              <h2 className="mb-2 text-2xl font-bold">Your cart is empty</h2>
              <p className="mb-6 text-muted-foreground">
                Start shopping to add items to your cart
              </p>
              <Link to="/shop">
                <Button size="lg">Continue Shopping</Button>
              </Link>
            </Card>
          ) : (
            <div className="grid gap-8 lg:grid-cols-3">
              <div className="lg:col-span-2">
                {/* Cart items would go here */}
              </div>
              <div>
                <Card className="sticky top-24 p-6 shadow-card">
                  <h2 className="mb-4 text-xl font-bold">Order Summary</h2>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>$0.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Delivery</span>
                      <span>$0.00</span>
                    </div>
                    <div className="border-t pt-2">
                      <div className="flex justify-between text-lg font-bold">
                        <span>Total</span>
                        <span>$0.00</span>
                      </div>
                    </div>
                  </div>
                  <Button className="mt-6 w-full" size="lg">
                    Proceed to Checkout
                  </Button>
                </Card>
              </div>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Cart;
