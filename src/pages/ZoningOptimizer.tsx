
import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { IndianRupee, MapPin, Building } from "lucide-react";

const ZoningOptimizer = () => {
  const [propertySize, setPropertySize] = useState<string>("");
  const [marketDemand, setMarketDemand] = useState<number[]>([0.5]);
  const [constructionCost, setConstructionCost] = useState<string>("");
  const [zoneType, setZoneType] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [results, setResults] = useState<any>(null);

  const calculateZoning = () => {
    if (!propertySize || !constructionCost || !zoneType || !location) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Simulate AI calculation
    const size = parseFloat(propertySize);
    const cost = parseFloat(constructionCost);
    const demand = marketDemand[0];
    
    // Different calculations based on zone type and location
    let predictedValue = 0;
    let roi = 0;
    let recommendations = [];
    
    const locationMultiplier = getLocationMultiplier(location);
    
    switch(zoneType) {
      case "residential":
        predictedValue = size * demand * 15000 * locationMultiplier;
        roi = (predictedValue - cost) / cost * 100;
        recommendations = getLocationBasedRecommendations(location, "residential");
        break;
      case "commercial":
        predictedValue = size * demand * 20000 * locationMultiplier;
        roi = (predictedValue - cost) / cost * 100;
        recommendations = getLocationBasedRecommendations(location, "commercial");
        break;
      case "industrial":
        predictedValue = size * demand * 12000 * locationMultiplier;
        roi = (predictedValue - cost) / cost * 100;
        recommendations = getLocationBasedRecommendations(location, "industrial");
        break;
      default:
        predictedValue = size * demand * 10000 * locationMultiplier;
        roi = (predictedValue - cost) / cost * 100;
        recommendations = [
          "Consider rezoning application for higher value use",
          "Current zoning limits potential returns",
          "Explore variance options with local municipal corporation"
        ];
    }
    
    setResults({
      predictedValue: predictedValue.toFixed(2),
      roi: roi.toFixed(2),
      recommendations
    });
    
    toast.success("Zoning analysis complete!");
  };

  // Helper function to get location-specific multiplier
  const getLocationMultiplier = (location: string) => {
    switch(location) {
      case "mumbai": return 1.5;
      case "delhi": return 1.4;
      case "bangalore": return 1.3;
      case "hyderabad": return 1.1;
      case "pune": return 1.0;
      case "chennai": return 1.0;
      case "kolkata": return 0.9;
      default: return 1.0;
    }
  };
  
  // Helper function to get location-specific recommendations
  const getLocationBasedRecommendations = (location: string, zoneType: string) => {
    if (location === "mumbai" && zoneType === "residential") {
      return [
        "High-rise apartment buildings show highest demand in Mumbai",
        "Consider premium amenities like gym and pool for 18% value increase",
        "Optimize for 2-3 bedroom layouts to maximize Mumbai market demand"
      ];
    } else if (location === "bangalore" && zoneType === "commercial") {
      return [
        "Tech-friendly office spaces command premium rents in Bangalore",
        "Mixed-use development with co-working spaces recommended",
        "Green building certification can increase valuation by 12%"
      ];
    } else if (location === "delhi" && zoneType === "industrial") {
      return [
        "Warehousing facilities near Delhi's logistics hubs show strong demand",
        "Consider green energy features for NCR tax incentives",
        "Higher ceilings increase value for manufacturing tenants"
      ];
    } else {
      // Generic recommendations based on zone type
      if (zoneType === "residential") {
        return [
          "Residential complexes with modern amenities show highest demand",
          "Consider adding premium facilities for 15% value increase",
          "Optimize for 3-4 bedroom layouts to maximize return"
        ];
      } else if (zoneType === "commercial") {
        return [
          "Mixed-use development recommended for this location",
          "First floor retail with offices above optimize revenue",
          "Corner lot positioning increases visibility by 25%"
        ];
      } else {
        return [
          "Warehouse space with loading bays offers maximum flexibility",
          "Consider green energy features for tax incentives",
          "Higher ceilings increase value for manufacturing tenants"
        ];
      }
    }
  };

  // Format currency in Indian Rupees
  const formatIndianRupees = (value: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-2">Zoning Optimizer</h1>
            <p className="text-muted-foreground mb-8">
              Identify the best property use and development potential to maximize your investment returns across India.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Property Information</CardTitle>
                  <CardDescription>Enter your property details for zoning analysis</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Select value={location} onValueChange={setLocation}>
                      <SelectTrigger id="location">
                        <SelectValue placeholder="Select city" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mumbai">Mumbai</SelectItem>
                        <SelectItem value="delhi">Delhi</SelectItem>
                        <SelectItem value="bangalore">Bangalore</SelectItem>
                        <SelectItem value="hyderabad">Hyderabad</SelectItem>
                        <SelectItem value="pune">Pune</SelectItem>
                        <SelectItem value="chennai">Chennai</SelectItem>
                        <SelectItem value="kolkata">Kolkata</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                
                  <div className="space-y-2">
                    <Label htmlFor="propertySize">Property Size (sqft)</Label>
                    <Input 
                      id="propertySize" 
                      type="number" 
                      placeholder="e.g. 10000" 
                      value={propertySize}
                      onChange={(e) => setPropertySize(e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Market Demand ({marketDemand[0]})</Label>
                    <Slider 
                      value={marketDemand} 
                      onValueChange={setMarketDemand} 
                      max={1} 
                      step={0.01} 
                    />
                    <div className="flex justify-between text-xs">
                      <span>Low</span>
                      <span>Medium</span>
                      <span>High</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="constructionCost">Estimated Construction Cost (₹)</Label>
                    <div className="relative">
                      <IndianRupee className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input 
                        id="constructionCost" 
                        type="number" 
                        className="pl-9"
                        placeholder="e.g. 15000000" 
                        value={constructionCost}
                        onChange={(e) => setConstructionCost(e.target.value)}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="zoneType">Current Zoning</Label>
                    <Select value={zoneType} onValueChange={setZoneType}>
                      <SelectTrigger id="zoneType">
                        <SelectValue placeholder="Select zone type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="residential">Residential</SelectItem>
                        <SelectItem value="commercial">Commercial</SelectItem>
                        <SelectItem value="industrial">Industrial</SelectItem>
                        <SelectItem value="mixed">Mixed Use</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <Button className="w-full mt-4" onClick={calculateZoning}>
                    Calculate Optimal Zoning
                  </Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Results</CardTitle>
                  <CardDescription>AI-powered zoning analysis</CardDescription>
                </CardHeader>
                <CardContent>
                  {results ? (
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-medium">Predicted Property Value</h3>
                        <p className="text-2xl font-bold">{formatIndianRupees(parseFloat(results.predictedValue))}</p>
                      </div>
                      
                      <div>
                        <h3 className="font-medium">Potential ROI</h3>
                        <p className="text-xl font-semibold">{results.roi}%</p>
                      </div>
                      
                      <div>
                        <h3 className="font-medium">Recommendations</h3>
                        <ul className="list-disc pl-5 space-y-1 mt-2">
                          {results.recommendations.map((rec: string, index: number) => (
                            <li key={index} className="text-sm">{rec}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-8 text-muted-foreground">
                      <Building className="h-12 w-12 mx-auto mb-4 opacity-50" />
                      <p>Enter property details and calculate to see interactive zoning analysis results</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ZoningOptimizer;
