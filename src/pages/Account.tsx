import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Package, Heart, MapPin } from "lucide-react";

const Account = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <div className="bg-gradient-hero py-12 text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold">My Account</h1>
            <p className="mt-2 text-lg opacity-90">
              Manage your account and orders
            </p>
          </div>
        </div>

        <section className="container mx-auto px-4 py-12">
          <Tabs defaultValue="profile" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="profile">
                <User className="mr-2 h-4 w-4" />
                Profile
              </TabsTrigger>
              <TabsTrigger value="orders">
                <Package className="mr-2 h-4 w-4" />
                Orders
              </TabsTrigger>
              <TabsTrigger value="wishlist">
                <Heart className="mr-2 h-4 w-4" />
                Wishlist
              </TabsTrigger>
              <TabsTrigger value="addresses">
                <MapPin className="mr-2 h-4 w-4" />
                Addresses
              </TabsTrigger>
            </TabsList>

            <TabsContent value="profile">
              <Card className="p-6 shadow-card">
                <h2 className="mb-6 text-xl font-bold">Personal Information</h2>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john.doe@example.com" />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+1 234 567 8900" />
                  </div>
                </div>
                <Button className="mt-6">Save Changes</Button>
              </Card>
            </TabsContent>

            <TabsContent value="orders">
              <Card className="p-6 shadow-card">
                <h2 className="mb-6 text-xl font-bold">Order History</h2>
                <div className="text-center py-12">
                  <Package className="mx-auto mb-4 h-16 w-16 text-muted-foreground" />
                  <p className="text-muted-foreground">No orders yet</p>
                  <Button className="mt-4" variant="outline">
                    Start Shopping
                  </Button>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="wishlist">
              <Card className="p-6 shadow-card">
                <h2 className="mb-6 text-xl font-bold">My Wishlist</h2>
                <div className="text-center py-12">
                  <Heart className="mx-auto mb-4 h-16 w-16 text-muted-foreground" />
                  <p className="text-muted-foreground">Your wishlist is empty</p>
                  <Button className="mt-4" variant="outline">
                    Browse Products
                  </Button>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="addresses">
              <Card className="p-6 shadow-card">
                <div className="mb-6 flex items-center justify-between">
                  <h2 className="text-xl font-bold">Saved Addresses</h2>
                  <Button>Add New Address</Button>
                </div>
                <div className="text-center py-12">
                  <MapPin className="mx-auto mb-4 h-16 w-16 text-muted-foreground" />
                  <p className="text-muted-foreground">No saved addresses</p>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Account;
