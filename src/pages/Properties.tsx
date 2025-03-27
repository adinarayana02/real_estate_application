
import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Building, Home, IndianRupee, MapPin, Search } from "lucide-react";

const PropertiesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  
  const properties = [
    {
      id: 1,
      title: "Luxury Apartment in Bandra",
      location: "Bandra West, Mumbai",
      type: "residential",
      price: 12500000,
      size: 1200,
      bedrooms: 3,
      bathrooms: 2,
      amenities: ["Gym", "Swimming Pool", "24/7 Security"],
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXBhcnRtZW50JTIwYnVpbGRpbmd8ZW58MHx8MHx8fDA%3D"
    },
    {
      id: 2,
      title: "Commercial Space in Cyber City",
      location: "Cyber City, Gurgaon",
      type: "commercial",
      price: 30000000,
      size: 2500,
      amenities: ["Parking", "24/7 Security", "Backup Power"],
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tbWVyY2lhbCUyMGJ1aWxkaW5nfGVufDB8fDB8fHww"
    },
    {
      id: 3,
      title: "Villa in Koramangala",
      location: "Koramangala, Bangalore",
      type: "residential",
      price: 35000000,
      size: 3500,
      bedrooms: 5,
      bathrooms: 4,
      amenities: ["Garden", "Swimming Pool", "Terrace"],
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dmlsbGF8ZW58MHx8MHx8fDA%3D"
    },
    {
      id: 4,
      title: "Warehouse in Bhiwandi",
      location: "Bhiwandi, Mumbai",
      type: "industrial",
      price: 45000000,
      size: 10000,
      amenities: ["Loading Dock", "Security", "Parking"],
      image: "https://images.unsplash.com/photo-1565891741441-64926e441838?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdhcmVob3VzZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      id: 5,
      title: "Modern Office in Whitefield",
      location: "Whitefield, Bangalore",
      type: "commercial",
      price: 18000000,
      size: 1800,
      amenities: ["Conference Room", "Cafeteria", "Parking"],
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b2ZmaWNlfGVufDB8fDB8fHww"
    },
    {
      id: 6,
      title: "Residential Plot in Noida",
      location: "Sector 50, Noida",
      type: "land",
      price: 15000000,
      size: 2400,
      amenities: ["Corner Plot", "Park View", "Gated Community"],
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGFuZHxlbnwwfHwwfHx8MA%3D%3D"
    }
  ];
  
  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         property.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTab = activeTab === "all" || property.type === activeTab;
    
    return matchesSearch && matchesTab;
  });
  
  // Format price to Indian currency format
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
              <div>
                <h1 className="text-3xl font-bold mb-2">Properties</h1>
                <p className="text-muted-foreground">
                  Browse our curated list of prime properties across India for investment
                </p>
              </div>
              <div className="w-full md:w-auto flex gap-2">
                <div className="relative w-full md:w-64">
                  <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search properties..."
                    className="pl-9"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Button>Add Property</Button>
              </div>
            </div>
            
            <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="mb-8">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="residential">Residential</TabsTrigger>
                <TabsTrigger value="commercial">Commercial</TabsTrigger>
                <TabsTrigger value="industrial">Industrial</TabsTrigger>
                <TabsTrigger value="land">Land</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProperties.map(property => (
                    <PropertyCard key={property.id} property={property} formatPrice={formatPrice} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="residential" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProperties.map(property => (
                    <PropertyCard key={property.id} property={property} formatPrice={formatPrice} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="commercial" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProperties.map(property => (
                    <PropertyCard key={property.id} property={property} formatPrice={formatPrice} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="industrial" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProperties.map(property => (
                    <PropertyCard key={property.id} property={property} formatPrice={formatPrice} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="land" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProperties.map(property => (
                    <PropertyCard key={property.id} property={property} formatPrice={formatPrice} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

interface PropertyCardProps {
  property: any;
  formatPrice: (price: number) => string;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property, formatPrice }) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
      <div className="relative h-48 w-full">
        <img 
          src={property.image} 
          alt={property.title} 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2">
          <Badge variant={
            property.type === "residential" ? "default" : 
            property.type === "commercial" ? "secondary" : 
            property.type === "industrial" ? "destructive" : 
            "outline"
          }>
            {property.type.charAt(0).toUpperCase() + property.type.slice(1)}
          </Badge>
        </div>
      </div>
      <CardContent className="p-6 flex-grow flex flex-col">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-bold text-lg">{property.title}</h3>
        </div>
        <div className="flex items-center mb-2 text-muted-foreground">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">{property.location}</span>
        </div>
        <div className="flex items-center mb-3 font-semibold text-lg">
          <IndianRupee className="h-4 w-4 mr-1" />
          <span>{formatPrice(property.price)}</span>
        </div>
        <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
          <div className="flex items-center">
            <span className="text-muted-foreground mr-2">Size:</span>
            <span>{property.size} sq.ft</span>
          </div>
          {property.bedrooms && (
            <div className="flex items-center">
              <span className="text-muted-foreground mr-2">Beds:</span>
              <span>{property.bedrooms}</span>
            </div>
          )}
          {property.bathrooms && (
            <div className="flex items-center">
              <span className="text-muted-foreground mr-2">Baths:</span>
              <span>{property.bathrooms}</span>
            </div>
          )}
        </div>
        <div className="mt-auto">
          <div className="flex flex-wrap gap-1 mb-4">
            {property.amenities.slice(0, 3).map((amenity: string, index: number) => (
              <Badge key={index} variant="outline" className="text-xs">
                {amenity}
              </Badge>
            ))}
          </div>
          <Button className="w-full">View Details</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertiesPage;
