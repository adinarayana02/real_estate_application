
import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, IndianRupee, Building } from "lucide-react";
import { toast } from "sonner";

const ROIHeatmap = () => {
  const [location, setLocation] = useState<string>("Mumbai");
  const [propertySize, setPropertySize] = useState<string>("1000");
  const [budget, setBudget] = useState<string>("5000000");
  const [propertyType, setPropertyType] = useState<string>("residential");
  const [heatmapData, setHeatmapData] = useState<any>(null);
  
  const generateHeatmap = () => {
    if (!location || !propertySize || !budget) {
      toast.error("Please fill in all required fields");
      return;
    }
    
    // Simulate AI generation of heatmap data
    const size = parseFloat(propertySize);
    const budgetValue = parseFloat(budget);
    
    const mockHeatmapData = {
      highROIAreas: [
        { area: "Andheri East", roi: "12.5%", price: "₹85,000/sqft" },
        { area: "Powai", roi: "10.8%", price: "₹92,000/sqft" },
        { area: "Bandra West", roi: "9.2%", price: "₹110,000/sqft" }
      ],
      mediumROIAreas: [
        { area: "Goregaon", roi: "8.5%", price: "₹75,000/sqft" },
        { area: "Malad", roi: "7.9%", price: "₹68,000/sqft" },
      ],
      lowROIAreas: [
        { area: "Borivali", roi: "6.5%", price: "₹62,000/sqft" },
        { area: "Thane", roi: "5.8%", price: "₹55,000/sqft" },
      ],
      recommendedAction: "Focus on Andheri East for residential properties under ₹85,000/sqft for best ROI potential."
    };
    
    // Different data based on property type
    if (propertyType === "commercial") {
      mockHeatmapData.highROIAreas = [
        { area: "Bandra Kurla Complex", roi: "14.2%", price: "₹125,000/sqft" },
        { area: "Lower Parel", roi: "12.8%", price: "₹105,000/sqft" },
      ];
      mockHeatmapData.recommendedAction = "Commercial properties in BKC continue to yield highest returns despite higher entry costs.";
    } else if (propertyType === "industrial") {
      mockHeatmapData.highROIAreas = [
        { area: "Bhiwandi", roi: "11.5%", price: "₹45,000/sqft" },
        { area: "Taloja", roi: "10.2%", price: "₹38,000/sqft" },
      ];
      mockHeatmapData.recommendedAction = "Bhiwandi offers excellent ROI for industrial properties with improving infrastructure.";
    }
    
    setHeatmapData(mockHeatmapData);
    toast.success("ROI Heatmap generated successfully!");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold mb-2">ROI Heatmap Analysis</h1>
            <p className="text-muted-foreground mb-8">
              Identify high-ROI areas for your property investments across India with our AI-powered heatmap analysis.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="md:col-span-1">
                <CardHeader>
                  <CardTitle>Property Parameters</CardTitle>
                  <CardDescription>Enter details to generate ROI heatmap</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Select value={location} onValueChange={setLocation}>
                      <SelectTrigger id="location">
                        <SelectValue placeholder="Select city" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Mumbai">Mumbai</SelectItem>
                        <SelectItem value="Delhi">Delhi</SelectItem>
                        <SelectItem value="Bangalore">Bangalore</SelectItem>
                        <SelectItem value="Hyderabad">Hyderabad</SelectItem>
                        <SelectItem value="Chennai">Chennai</SelectItem>
                        <SelectItem value="Pune">Pune</SelectItem>
                        <SelectItem value="Kolkata">Kolkata</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="propertySize">Property Size (sqft)</Label>
                    <Input 
                      id="propertySize" 
                      type="number" 
                      placeholder="e.g. 1000" 
                      value={propertySize}
                      onChange={(e) => setPropertySize(e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="budget">Budget (₹)</Label>
                    <div className="relative">
                      <IndianRupee className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input 
                        id="budget" 
                        type="number" 
                        className="pl-9"
                        placeholder="e.g. 5000000" 
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="propertyType">Property Type</Label>
                    <Select value={propertyType} onValueChange={setPropertyType}>
                      <SelectTrigger id="propertyType">
                        <SelectValue placeholder="Select property type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="residential">Residential</SelectItem>
                        <SelectItem value="commercial">Commercial</SelectItem>
                        <SelectItem value="industrial">Industrial</SelectItem>
                        <SelectItem value="mixed">Mixed Use</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <Button className="w-full mt-6" onClick={generateHeatmap}>
                    Generate ROI Heatmap
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>ROI Heatmap Analysis</CardTitle>
                  <CardDescription>AI-analyzed investment hotspots</CardDescription>
                </CardHeader>
                <CardContent>
                  {heatmapData ? (
                    <div className="space-y-6">
                      <div className="bg-muted p-4 rounded-lg">
                        <h3 className="font-semibold text-lg mb-2">High ROI Areas</h3>
                        <div className="space-y-2">
                          {heatmapData.highROIAreas.map((area: any, index: number) => (
                            <div key={index} className="flex items-center justify-between p-2 bg-green-100 rounded">
                              <div className="flex items-center">
                                <MapPin className="h-4 w-4 mr-2 text-green-600" />
                                <span>{area.area}</span>
                              </div>
                              <div className="flex items-center gap-4">
                                <span className="text-green-600 font-medium">{area.roi}</span>
                                <span className="text-sm text-muted-foreground">{area.price}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="bg-muted p-4 rounded-lg">
                        <h3 className="font-semibold text-lg mb-2">Medium ROI Areas</h3>
                        <div className="space-y-2">
                          {heatmapData.mediumROIAreas.map((area: any, index: number) => (
                            <div key={index} className="flex items-center justify-between p-2 bg-yellow-100 rounded">
                              <div className="flex items-center">
                                <MapPin className="h-4 w-4 mr-2 text-yellow-600" />
                                <span>{area.area}</span>
                              </div>
                              <div className="flex items-center gap-4">
                                <span className="text-yellow-600 font-medium">{area.roi}</span>
                                <span className="text-sm text-muted-foreground">{area.price}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="bg-muted p-4 rounded-lg">
                        <h3 className="font-semibold text-lg mb-2">Low ROI Areas</h3>
                        <div className="space-y-2">
                          {heatmapData.lowROIAreas.map((area: any, index: number) => (
                            <div key={index} className="flex items-center justify-between p-2 bg-red-100 rounded">
                              <div className="flex items-center">
                                <MapPin className="h-4 w-4 mr-2 text-red-600" />
                                <span>{area.area}</span>
                              </div>
                              <div className="flex items-center gap-4">
                                <span className="text-red-600 font-medium">{area.roi}</span>
                                <span className="text-sm text-muted-foreground">{area.price}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="bg-accent/10 p-4 rounded-lg">
                        <h3 className="font-semibold text-lg mb-2">AI Recommendation</h3>
                        <p>{heatmapData.recommendedAction}</p>
                      </div>
                      
                      <div className="flex justify-end space-x-2">
                        <Button variant="outline">Export Report</Button>
                        <Button variant="outline">Save Analysis</Button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center h-80 text-center">
                      <Building className="h-16 w-16 mb-4 text-muted-foreground" />
                      <h3 className="text-xl font-medium mb-2">Interactive ROI Heatmap</h3>
                      <p className="text-muted-foreground max-w-md">
                        Enter your property parameters and generate an AI-powered ROI heatmap analysis for optimal investment decisions
                      </p>
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

export default ROIHeatmap;
