
import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { toast } from "sonner";
import AIAnalysisChat from "@/components/chat/AIAnalysisChat";
import { LineChart, BarChart, PieChart, Map, Building, ShieldAlert, Percent, Receipt, Users, Blocks, Mountain, User, Star, Heart, LayoutGrid, Megaphone, Cube3d, Download, Save, FileText, BarChart3, Trending3D } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const ComprehensiveAnalysis = () => {
  const [activeTab, setActiveTab] = useState("zoning");
  const [property, setProperty] = useState({
    address: "123 Main St, Bangalore, India",
    type: "residential",
    size: 2500,
    bedrooms: 4,
    bathrooms: 3,
    price: "₹1,85,00,000"
  });
  
  const [analysisResults, setAnalysisResults] = useState({});
  const [isGenerating, setIsGenerating] = useState(false);
  
  const features = [
    { id: "zoning", name: "Zoning", icon: <Building className="h-4 w-4" /> },
    { id: "scenario", name: "Scenario", icon: <PieChart className="h-4 w-4" /> },
    { id: "financial", name: "Financial", icon: <LineChart className="h-4 w-4" /> },
    { id: "risk", name: "Risk", icon: <ShieldAlert className="h-4 w-4" /> },
    { id: "roi", name: "ROI", icon: <Percent className="h-4 w-4" /> },
    { id: "tax", name: "Tax", icon: <Receipt className="h-4 w-4" /> },
    { id: "demand", name: "Demand", icon: <Users className="h-4 w-4" /> },
    { id: "material", name: "Material", icon: <Blocks className="h-4 w-4" /> },
    { id: "land", name: "Land", icon: <Mountain className="h-4 w-4" /> },
    { id: "investor", name: "Investor", icon: <User className="h-4 w-4" /> },
    { id: "recommendation", name: "Recommendation", icon: <Star className="h-4 w-4" /> },
    { id: "emotional", name: "Emotional Appeal", icon: <Heart className="h-4 w-4" /> },
    { id: "floorplan", name: "Floorplan", icon: <LayoutGrid className="h-4 w-4" /> },
    { id: "marketing", name: "Marketing", icon: <Megaphone className="h-4 w-4" /> },
    { id: "3dmodel", name: "3D Model", icon: <Cube3d className="h-4 w-4" /> }
  ];
  
  const generateAnalysis = () => {
    setIsGenerating(true);
    
    // Simulate analysis generation
    setTimeout(() => {
      const newResults = {
        ...analysisResults,
        [activeTab]: generateMockAnalysisData(activeTab)
      };
      
      setAnalysisResults(newResults);
      setIsGenerating(false);
      toast.success(`${getFeatureName(activeTab)} analysis completed successfully!`);
    }, 2000);
  };
  
  const getFeatureName = (featureId) => {
    const feature = features.find(f => f.id === featureId);
    return feature ? feature.name : '';
  };
  
  const generateMockAnalysisData = (featureId) => {
    // Generate mock data based on the feature
    const baseData = {
      score: Math.floor(Math.random() * 100),
      insights: [],
      recommendations: []
    };
    
    // Add feature-specific data
    switch(featureId) {
      case 'zoning':
        return {
          ...baseData,
          currentZoning: "Residential R2",
          potentialZoning: ["Mixed-use MU1", "Commercial C1"],
          floorAreaRatio: 1.8,
          maxHeight: "18 meters",
          setbacks: { front: "3 meters", sides: "1.5 meters", rear: "2 meters" },
          insights: [
            "Property falls under Bangalore's R2 residential zoning with potential for change",
            "Recent zoning amendments allow for additional floor area with affordable housing inclusion",
            "Corner lot advantage gives 15% additional FAR potential"
          ],
          recommendations: [
            "Apply for mixed-use rezoning to increase property value by approximately 35%",
            "Consider vertical expansion within height restrictions for additional 1200 sq ft",
            "Leverage TOD (Transit Oriented Development) policy for reduced parking requirements"
          ]
        };
      case 'scenario':
        return {
          ...baseData,
          scenarios: [
            { name: "Status Quo", roi: "8%", timeline: "0 months", investment: "₹0" },
            { name: "Minor Renovation", roi: "12%", timeline: "3 months", investment: "₹15,00,000" },
            { name: "Major Renovation", roi: "18%", timeline: "8 months", investment: "₹45,00,000" },
            { name: "Teardown & Rebuild", roi: "25%", timeline: "24 months", investment: "₹1,20,00,000" }
          ],
          optimalScenario: "Major Renovation",
          insights: [
            "Major renovation offers best balance of ROI and timeline",
            "Market demand for modern amenities can increase rental value by 35%",
            "Energy-efficient upgrades qualify for GRIHA certification and tax benefits"
          ]
        };
      case 'financial':
        return {
          ...baseData,
          initialInvestment: "₹1,85,00,000",
          renovationCost: "₹45,00,000",
          expectedAnnualRevenue: "₹24,00,000",
          expectedExpenses: "₹8,40,000",
          netOperatingIncome: "₹15,60,000",
          capRate: "6.8%",
          breakEvenPoint: "11.8 years",
          irr: "14.2%",
          cashFlowProjection: [
            { year: 1, value: "₹14,40,000" },
            { year: 2, value: "₹15,12,000" },
            { year: 3, value: "₹15,87,600" },
            { year: 5, value: "₹17,48,994" },
            { year: 10, value: "₹22,32,851" }
          ],
          insights: [
            "Property shows strong stable cash flow with 5% annual growth potential",
            "Current interest rates in Bangalore favor refinancing within 2 years",
            "Tax depreciation benefits significantly improve after-tax returns"
          ]
        };
      case 'risk':
        return {
          ...baseData,
          riskFactors: [
            { name: "Market Volatility", level: "Medium", impact: "Moderate", mitigation: "Staggered investment approach" },
            { name: "Regulatory Changes", level: "High", impact: "Significant", mitigation: "Engaging local consultants" },
            { name: "Construction Delays", level: "Medium", impact: "Moderate", mitigation: "Performance contracts" },
            { name: "Tenant Default", level: "Low", impact: "Moderate", mitigation: "Strict screening, security deposits" },
            { name: "Natural Disasters", level: "Low", impact: "High", mitigation: "Comprehensive insurance" }
          ],
          overallRiskRating: "Medium",
          insights: [
            "Bangalore's technology corridor provides rental stability despite broader market fluctuations",
            "Upcoming metro extension will likely reduce vacancy risk by 30%",
            "Corporate leasing offers lower returns but significantly reduced tenant default risk"
          ]
        };
      // Additional cases for other features
      default:
        return {
          ...baseData,
          insights: [
            "Analysis complete with high confidence score",
            "Property shows good potential in the current market",
            "Consider recommended optimizations for maximum value"
          ],
          recommendations: [
            "Implement suggested improvements for better returns",
            "Monitor market trends for optimal timing",
            "Consider engaging local experts for detailed guidance"
          ]
        };
    }
  };
  
  const exportAnalysis = (format) => {
    toast.success(`Exporting ${getFeatureName(activeTab)} analysis as ${format}...`);
    
    // Simulate export delay
    setTimeout(() => {
      toast.success(`${getFeatureName(activeTab)} analysis exported successfully as ${format}!`);
    }, 1500);
  };
  
  const saveAnalysis = () => {
    toast.success(`Saving ${getFeatureName(activeTab)} analysis...`);
    
    // Simulate save delay
    setTimeout(() => {
      toast.success(`${getFeatureName(activeTab)} analysis saved successfully!`);
    }, 1000);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20 pb-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-bold mb-2">Comprehensive Property Analysis</h1>
              <p className="text-muted-foreground">
                Analyze every aspect of your property with our AI-powered tools.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Property Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="address">Property Address</Label>
                    <Input 
                      id="address" 
                      value={property.address} 
                      onChange={(e) => setProperty({...property, address: e.target.value})}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="type">Property Type</Label>
                    <Select 
                      value={property.type} 
                      onValueChange={(value) => setProperty({...property, type: value})}
                    >
                      <SelectTrigger id="type">
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
                  
                  <div className="space-y-2">
                    <Label htmlFor="size">Square Footage</Label>
                    <Input 
                      id="size" 
                      type="number" 
                      value={property.size} 
                      onChange={(e) => setProperty({...property, size: parseInt(e.target.value)})}
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="bedrooms">Bedrooms</Label>
                      <Input 
                        id="bedrooms" 
                        type="number" 
                        value={property.bedrooms} 
                        onChange={(e) => setProperty({...property, bedrooms: parseInt(e.target.value)})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="bathrooms">Bathrooms</Label>
                      <Input 
                        id="bathrooms" 
                        type="number" 
                        value={property.bathrooms} 
                        onChange={(e) => setProperty({...property, bathrooms: parseInt(e.target.value)})}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="price">Property Price</Label>
                    <Input 
                      id="price" 
                      value={property.price} 
                      onChange={(e) => setProperty({...property, price: e.target.value})}
                      placeholder="₹0,00,000"
                    />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Analysis Tools</CardTitle>
                  <CardDescription>Select a tool to analyze your property</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    {features.map((feature) => (
                      <TooltipProvider key={feature.id}>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              variant={activeTab === feature.id ? "default" : "outline"}
                              className="justify-start"
                              onClick={() => setActiveTab(feature.id)}
                            >
                              <span className="mr-2">{feature.icon}</span>
                              <span>{feature.name}</span>
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{getFeatureDescription(feature.id)}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <div className="mt-6">
                <AIAnalysisChat />
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid grid-cols-3 lg:grid-cols-5 mb-6">
                  {features.slice(0, 5).map((feature) => (
                    <TabsTrigger key={feature.id} value={feature.id} className="flex items-center gap-1">
                      {feature.icon}
                      <span className="hidden sm:inline">{feature.name}</span>
                    </TabsTrigger>
                  ))}
                </TabsList>
                
                {features.map((feature) => (
                  <TabsContent key={feature.id} value={feature.id}>
                    <Card>
                      <CardHeader>
                        <CardTitle>{feature.name} Analysis</CardTitle>
                        <CardDescription>
                          {getFeatureDescription(feature.id)}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        {renderFeatureContent(feature.id, analysisResults[feature.id], isGenerating, generateAnalysis, saveAnalysis, exportAnalysis)}
                      </CardContent>
                    </Card>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

// Helper function to get feature descriptions
const getFeatureDescription = (featureId: string): string => {
  const descriptions: Record<string, string> = {
    zoning: "Evaluate the property to find the highest value potential based on Indian zoning regulations.",
    scenario: "Develop different scenarios for property development or improvement in the Indian market.",
    financial: "Comprehensive financial modeling showing costs, timing, and cash flows for Indian properties.",
    risk: "Analyze various risk factors that could impact your investment in the Indian real estate market.",
    roi: "Calculate return on investment under various scenarios for Indian property market.",
    tax: "Understand tax implications and potential tax benefits under Indian tax laws.",
    demand: "Analyze market demand for different property types and features in Indian cities.",
    material: "Estimate construction materials required and their costs in the Indian market.",
    land: "Evaluate land characteristics and development potential in Indian regions.",
    investor: "Create investor-focused analyses and presentations for Indian real estate investment.",
    recommendation: "Get AI-powered recommendations for maximizing property value in India.",
    emotional: "Assess emotional appeal factors that impact property value in Indian cultural context.",
    floorplan: "Analyze and optimize property floorplans for maximum value in Indian living standards.",
    marketing: "Develop a marketing plan for the property with budget and KPI targets for Indian buyers.",
    "3dmodel": "Generate a 3D virtual model of the property for visualization of Indian architectural elements."
  };
  
  return descriptions[featureId] || "Analyze your property with AI-powered tools customized for the Indian market.";
};

// Helper function to render content for each feature
const renderFeatureContent = (featureId: string, analysisData: any, isGenerating: boolean, generateAnalysis: () => void, saveAnalysis: () => void, exportAnalysis: (format: string) => void) => {
  if (!analysisData && !isGenerating) {
    return (
      <div className="space-y-6">
        <div className="bg-muted p-12 rounded-md flex flex-col items-center justify-center space-y-4">
          <p className="text-muted-foreground text-center">Generate interactive {featureId} analysis to see detailed insights</p>
          <Button onClick={generateAnalysis} className="mt-2">
            Generate {featureId.charAt(0).toUpperCase() + featureId.slice(1)} Analysis
          </Button>
        </div>
      </div>
    );
  }
  
  if (isGenerating) {
    return (
      <div className="space-y-6">
        <div className="bg-muted p-12 rounded-md flex flex-col items-center justify-center">
          <div className="flex space-x-2 justify-center items-center">
            <div className="h-4 w-4 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
            <div className="h-4 w-4 bg-primary rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
            <div className="h-4 w-4 bg-primary rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
          </div>
          <p className="text-muted-foreground mt-4">Generating {featureId} analysis...</p>
        </div>
      </div>
    );
  }
  
  // Render feature-specific interactive content based on analysisData
  return (
    <div className="space-y-6">
      {renderInteractiveAnalysis(featureId, analysisData)}
      
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-medium mb-2">Key Insights</h3>
          <ul className="list-disc pl-5 space-y-1">
            {analysisData.insights.map((insight: string, index: number) => (
              <li key={index}>{insight}</li>
            ))}
          </ul>
        </div>
        
        {analysisData.recommendations && (
          <div>
            <h3 className="text-lg font-medium mb-2">Recommendations</h3>
            <ul className="list-disc pl-5 space-y-1">
              {analysisData.recommendations.map((recommendation: string, index: number) => (
                <li key={index}>{recommendation}</li>
              ))}
            </ul>
          </div>
        )}
        
        <div>
          <h3 className="text-lg font-medium mb-2">Actions</h3>
          <div className="flex flex-wrap gap-2">
            <Dialog>
              <DialogTrigger asChild>
                <Button className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  Generate Full Report
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Generate Full Report</DialogTitle>
                  <DialogDescription>
                    Choose report options and format for your {featureId} analysis.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="report-type">Report Type</Label>
                    <Select defaultValue="comprehensive">
                      <SelectTrigger id="report-type">
                        <SelectValue placeholder="Select report type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="summary">Summary Report</SelectItem>
                        <SelectItem value="comprehensive">Comprehensive Report</SelectItem>
                        <SelectItem value="executive">Executive Summary</SelectItem>
                        <SelectItem value="investor">Investor Presentation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="report-format">Report Format</Label>
                    <Select defaultValue="pdf">
                      <SelectTrigger id="report-format">
                        <SelectValue placeholder="Select format" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pdf">PDF Document</SelectItem>
                        <SelectItem value="docx">Word Document</SelectItem>
                        <SelectItem value="pptx">PowerPoint Presentation</SelectItem>
                        <SelectItem value="excel">Excel Spreadsheet</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button className="w-full" onClick={() => {
                    toast.success("Generating full report...");
                    setTimeout(() => {
                      toast.success("Report generated successfully! Check your downloads folder.");
                    }, 2000);
                  }}>
                    Generate Report
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
            
            <Button variant="outline" onClick={saveAnalysis} className="flex items-center gap-2">
              <Save className="h-4 w-4" />
              Save Analysis
            </Button>
            
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  Export Data
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Export Analysis Data</DialogTitle>
                  <DialogDescription>
                    Choose a format to export your {featureId} analysis data.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid grid-cols-2 gap-4 py-4">
                  <Button onClick={() => exportAnalysis("CSV")} variant="outline" className="flex items-center justify-center gap-2">
                    <FileText className="h-4 w-4" />
                    CSV
                  </Button>
                  <Button onClick={() => exportAnalysis("JSON")} variant="outline" className="flex items-center justify-center gap-2">
                    <FileText className="h-4 w-4" />
                    JSON
                  </Button>
                  <Button onClick={() => exportAnalysis("Excel")} variant="outline" className="flex items-center justify-center gap-2">
                    <FileText className="h-4 w-4" />
                    Excel
                  </Button>
                  <Button onClick={() => exportAnalysis("PDF")} variant="outline" className="flex items-center justify-center gap-2">
                    <FileText className="h-4 w-4" />
                    PDF
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper function to render interactive analysis based on the feature type
const renderInteractiveAnalysis = (featureId: string, data: any) => {
  if (!data) return null;
  
  switch (featureId) {
    case 'zoning':
      return (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="border rounded-md p-4">
              <h4 className="font-medium mb-2">Current Zoning</h4>
              <p className="text-2xl font-bold">{data.currentZoning}</p>
            </div>
            <div className="border rounded-md p-4">
              <h4 className="font-medium mb-2">Floor Area Ratio (FAR)</h4>
              <p className="text-2xl font-bold">{data.floorAreaRatio}</p>
            </div>
          </div>
          
          <div className="border rounded-md p-4">
            <h4 className="font-medium mb-2">Potential Zoning Options</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
              {data.potentialZoning.map((zone: string, index: number) => (
                <div key={index} className="bg-primary/10 rounded-md p-3 flex items-center justify-between">
                  <span>{zone}</span>
                  <Button variant="outline" size="sm" onClick={() => toast.success(`Analyzing ${zone} zoning potential...`)}>
                    Analyze
                  </Button>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border rounded-md p-4">
              <h4 className="font-medium mb-2">Maximum Height</h4>
              <p>{data.maxHeight}</p>
            </div>
            <div className="border rounded-md p-4">
              <h4 className="font-medium mb-2">Front Setback</h4>
              <p>{data.setbacks.front}</p>
            </div>
            <div className="border rounded-md p-4">
              <h4 className="font-medium mb-2">Side Setbacks</h4>
              <p>{data.setbacks.sides}</p>
            </div>
          </div>
        </div>
      );
      
    case 'financial':
      return (
        <div className="space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="border rounded-md p-4">
              <h4 className="font-medium mb-1 text-sm">Initial Investment</h4>
              <p className="text-xl font-bold">{data.initialInvestment}</p>
            </div>
            <div className="border rounded-md p-4">
              <h4 className="font-medium mb-1 text-sm">Annual Revenue</h4>
              <p className="text-xl font-bold">{data.expectedAnnualRevenue}</p>
            </div>
            <div className="border rounded-md p-4">
              <h4 className="font-medium mb-1 text-sm">Cap Rate</h4>
              <p className="text-xl font-bold">{data.capRate}</p>
            </div>
            <div className="border rounded-md p-4">
              <h4 className="font-medium mb-1 text-sm">IRR</h4>
              <p className="text-xl font-bold">{data.irr}</p>
            </div>
          </div>
          
          <div className="border rounded-md p-4">
            <h4 className="font-medium mb-2">Cash Flow Projection</h4>
            <div className="h-40 bg-slate-100 rounded-md flex items-end justify-between p-4">
              {data.cashFlowProjection.map((cf: any, index: number) => (
                <div key={index} className="flex flex-col items-center">
                  <div 
                    className="bg-primary w-10 rounded-t-md" 
                    style={{ 
                      height: `${(index + 1) * 20}px`,
                      maxHeight: "120px" 
                    }}
                  ></div>
                  <span className="text-xs mt-1">Year {cf.year}</span>
                  <span className="text-xs font-medium">{cf.value.split(',')[0]}L</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
      
    case 'scenario':
      return (
        <div className="space-y-4">
          <div className="border rounded-md p-4">
            <h4 className="font-medium mb-2">Development Scenarios</h4>
            <div className="space-y-3 mt-2">
              {data.scenarios.map((scenario: any, index: number) => (
                <div 
                  key={index} 
                  className={`border p-3 rounded-md ${scenario.name === data.optimalScenario ? 'border-primary bg-primary/5' : ''}`}
                >
                  <div className="flex justify-between items-center">
                    <h5 className="font-medium">
                      {scenario.name}
                      {scenario.name === data.optimalScenario && (
                        <span className="ml-2 text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded-full">
                          Recommended
                        </span>
                      )}
                    </h5>
                    <Button variant="outline" size="sm" onClick={() => toast.success(`Analyzing ${scenario.name} scenario in detail...`)}>
                      Details
                    </Button>
                  </div>
                  <div className="grid grid-cols-3 gap-2 mt-2 text-sm">
                    <div>
                      <span className="text-muted-foreground">ROI:</span> <span className="font-medium">{scenario.roi}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Timeline:</span> <span className="font-medium">{scenario.timeline}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Investment:</span> <span className="font-medium">{scenario.investment}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
      
    case 'risk':
      return (
        <div className="space-y-4">
          <div className="border rounded-md p-4">
            <div className="flex justify-between items-center mb-4">
              <h4 className="font-medium">Risk Assessment</h4>
              <div className="flex items-center space-x-2">
                <span className="text-sm">Overall Risk:</span>
                <span className={`px-2 py-0.5 rounded-full text-xs font-medium
                  ${data.overallRiskRating === 'Low' ? 'bg-green-100 text-green-800' : 
                    data.overallRiskRating === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 
                    'bg-red-100 text-red-800'}`}
                >
                  {data.overallRiskRating}
                </span>
              </div>
            </div>
            <div className="space-y-3">
              {data.riskFactors.map((risk: any, index: number) => (
                <div key={index} className="border rounded-md p-3">
                  <div className="flex justify-between items-center">
                    <h5 className="font-medium">{risk.name}</h5>
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium
                      ${risk.level === 'Low' ? 'bg-green-100 text-green-800' : 
                        risk.level === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 
                        'bg-red-100 text-red-800'}`}
                    >
                      {risk.level}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-2 text-sm">
                    <div>
                      <span className="text-muted-foreground">Impact:</span> <span className="font-medium">{risk.impact}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Mitigation:</span> <span className="font-medium">{risk.mitigation}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
      
    // Add more feature-specific interactive UI as needed
    default:
      return (
        <div className="space-y-4">
          <div className="border rounded-md p-6">
            <h4 className="font-medium mb-4 text-center">Analysis Score</h4>
            <div className="flex justify-center">
              <div className="relative h-32 w-32">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl font-bold">{data.score}</span>
                </div>
                <svg className="h-full w-full" viewBox="0 0 36 36">
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#eee"
                    strokeWidth="3"
                  />
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="3"
                    strokeDasharray={`${data.score}, 100`}
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      );
  }
};

export default ComprehensiveAnalysis;
