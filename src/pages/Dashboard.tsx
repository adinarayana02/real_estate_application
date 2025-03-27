import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart, 
  LineChart, 
  Building, 
  MapPin, 
  IndianRupee, 
  Calendar, 
  AlertCircle, 
  CheckCircle2,
  Clock,
  ArrowUpRight,
  FileText,
  User,
  Settings,
  Plus,
  Building as Building3,
  Home,
  BarChart as BarChart3
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  ResponsiveContainer, 
  LineChart as ReLineChart, 
  Line, 
  XAxis, 
  YAxis, 
  Tooltip, 
  CartesianGrid,
  BarChart as ReBarChart,
  Bar
} from "recharts";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  
  // Mock data for dashboard
  const portfolioValue = "₹4,25,00,000";
  const totalROI = "+12.4%";
  const totalProperties = 7;
  
  const properties = [
    { 
      id: 1, 
      name: "Prestige Tech Park Office", 
      type: "Commercial", 
      location: "Bangalore", 
      value: "₹1,50,00,000", 
      roi: "+8.2%", 
      status: "Rented",
      lastUpdated: "2 days ago"
    },
    { 
      id: 2, 
      name: "Bandra Luxury Apartment", 
      type: "Residential", 
      location: "Mumbai", 
      value: "₹1,20,00,000", 
      roi: "+15.7%", 
      status: "Owned",
      lastUpdated: "1 week ago"
    },
    { 
      id: 3, 
      name: "Gurugram Commercial Plaza", 
      type: "Commercial", 
      location: "Gurgaon", 
      value: "₹95,00,000", 
      roi: "+11.3%", 
      status: "Rented",
      lastUpdated: "3 days ago"
    },
    { 
      id: 4, 
      name: "Whitefield Development Land", 
      type: "Land", 
      location: "Bangalore", 
      value: "₹60,00,000", 
      roi: "+18.9%", 
      status: "Development",
      lastUpdated: "5 days ago"
    },
  ];
  
  const recentAnalyses = [
    { 
      id: 1, 
      property: "Bandra Luxury Apartment", 
      type: "Zoning Analysis", 
      result: "Residential optimal use", 
      date: "May 15, 2023" 
    },
    { 
      id: 2, 
      property: "Whitefield Development Land", 
      type: "ROI Heatmap", 
      result: "High potential in East section", 
      date: "May 10, 2023" 
    },
    { 
      id: 3, 
      property: "Prestige Tech Park Office", 
      type: "Financial Model", 
      result: "12.4% projected annual return", 
      date: "May 5, 2023" 
    }
  ];
  
  const alerts = [
    { 
      id: 1, 
      message: "Property tax due for Bandra Apartment", 
      type: "warning", 
      date: "Jun 15, 2023" 
    },
    { 
      id: 2, 
      message: "Market analysis shows 5% increase in Whitefield area", 
      type: "info", 
      date: "May 20, 2023" 
    },
    { 
      id: 3, 
      message: "Rental contract renewal due in 30 days", 
      type: "warning", 
      date: "Jun 10, 2023" 
    }
  ];
  
  // Chart data
  const portfolioGrowthData = [
    { month: "Jan", value: 300 },
    { month: "Feb", value: 315 },
    { month: "Mar", value: 325 },
    { month: "Apr", value: 340 },
    { month: "May", value: 360 },
    { month: "Jun", value: 375 },
    { month: "Jul", value: 390 },
    { month: "Aug", value: 400 },
    { month: "Sep", value: 410 },
    { month: "Oct", value: 425 },
    { month: "Nov", value: 425 },
    { month: "Dec", value: 425 },
  ];
  
  const propertyTypeData = [
    { type: "Residential", value: 120 },
    { type: "Commercial", value: 245 },
    { type: "Industrial", value: 30 },
    { type: "Land", value: 60 },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20 pb-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
              <p className="text-muted-foreground">
                Manage and analyze your property investments portfolio
              </p>
            </div>
            <div className="flex gap-2">
              <Button className="gap-1">
                <Plus className="h-4 w-4" /> Add Property
              </Button>
              <Button variant="outline" className="gap-1">
                <FileText className="h-4 w-4" /> Reports
              </Button>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <Card className="md:w-1/3">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Total Portfolio Value</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-3xl font-bold">{portfolioValue}</div>
                  <IndianRupee className="h-8 w-8 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="md:w-1/3">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Total ROI</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-3xl font-bold text-green-500">{totalROI}</div>
                  <LineChart className="h-8 w-8 text-green-500" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="md:w-1/3">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Total Properties</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-3xl font-bold">{totalProperties}</div>
                  <Building className="h-8 w-8 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-6">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="properties">Properties</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="account">Account</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="md:col-span-2">
                  <CardHeader>
                    <CardTitle>Portfolio Growth</CardTitle>
                    <CardDescription>Your investment portfolio value over time (in lakhs ₹)</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <ReLineChart data={portfolioGrowthData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="month" />
                          <YAxis />
                          <Tooltip formatter={(value) => [`₹${value} lakhs`, 'Value']} />
                          <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} />
                        </ReLineChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Properties by Type</CardTitle>
                    <CardDescription>Distribution of your property investments</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <ReBarChart data={propertyTypeData} layout="vertical">
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis type="number" />
                          <YAxis dataKey="type" type="category" />
                          <Tooltip formatter={(value) => [`₹${value} lakhs`, 'Value']} />
                          <Bar dataKey="value" fill="#8884d8" radius={[0, 4, 4, 0]} />
                        </ReBarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Property Analyses</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentAnalyses.map(analysis => (
                        <div key={analysis.id} className="flex justify-between items-start border-b pb-3">
                          <div>
                            <h4 className="font-medium">{analysis.property}</h4>
                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                              <FileText className="h-3 w-3" />
                              <span>{analysis.type}</span>
                            </div>
                            <p className="text-sm mt-1">{analysis.result}</p>
                          </div>
                          <div className="text-xs text-muted-foreground">{analysis.date}</div>
                        </div>
                      ))}
                    </div>
                    <Button variant="ghost" className="w-full mt-4">
                      View All Analyses
                    </Button>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Alerts & Notifications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {alerts.map(alert => (
                        <div key={alert.id} className="flex items-start gap-3 border-b pb-3">
                          {alert.type === "warning" ? (
                            <AlertCircle className="h-5 w-5 text-yellow-500 mt-0.5" />
                          ) : (
                            <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                          )}
                          <div className="flex-1">
                            <p className="text-sm">{alert.message}</p>
                            <div className="flex items-center gap-1 mt-1 text-xs text-muted-foreground">
                              <Calendar className="h-3 w-3" />
                              <span>{alert.date}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <Button variant="ghost" className="w-full mt-4">
                      View All Alerts
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="md:col-span-1">
                  <CardHeader>
                    <CardTitle>Top Performing Properties</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {properties.slice(0, 3).sort((a, b) => parseFloat(b.roi.replace('+', '').replace('%', '')) - parseFloat(a.roi.replace('+', '').replace('%', ''))).map(property => (
                        <div key={property.id} className="flex items-center gap-4 border-b pb-3">
                          <div className="w-12 h-12 rounded bg-muted flex items-center justify-center">
                            {property.type === 'Commercial' ? (
                              <Building3 className="h-6 w-6 text-muted-foreground" />
                            ) : property.type === 'Residential' ? (
                              <Home className="h-6 w-6 text-muted-foreground" />
                            ) : (
                              <MapPin className="h-6 w-6 text-muted-foreground" />
                            )}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium text-sm">{property.name}</h4>
                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                              <MapPin className="h-3 w-3" />
                              <span>{property.location}</span>
                            </div>
                          </div>
                          <div className="text-green-500 font-semibold">
                            {property.roi}
                          </div>
                        </div>
                      ))}
                    </div>
                    <Button variant="ghost" className="w-full mt-4">
                      View All Properties
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="properties">
              <div className="grid grid-cols-1 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Your Properties</CardTitle>
                    <CardDescription>Manage your real estate portfolio</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {properties.map(property => (
                        <div key={property.id} className="grid grid-cols-1 md:grid-cols-6 gap-4 items-center border-b pb-4">
                          <div className="md:col-span-2">
                            <h4 className="font-medium">{property.name}</h4>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                              <MapPin className="h-3.5 w-3.5" />
                              <span>{property.location}</span>
                              <Badge variant="outline">{property.type}</Badge>
                            </div>
                          </div>
                          
                          <div className="flex flex-col">
                            <span className="text-sm text-muted-foreground">Value</span>
                            <span className="font-medium">{property.value}</span>
                          </div>
                          
                          <div className="flex flex-col">
                            <span className="text-sm text-muted-foreground">ROI</span>
                            <span className="font-medium text-green-500">{property.roi}</span>
                          </div>
                          
                          <div className="flex flex-col">
                            <span className="text-sm text-muted-foreground">Status</span>
                            <Badge variant={
                              property.status === "Rented" ? "default" : 
                              property.status === "Owned" ? "secondary" : 
                              "outline"
                            }>
                              {property.status}
                            </Badge>
                          </div>
                          
                          <div className="flex justify-end gap-2">
                            <Button variant="outline" size="sm">Details</Button>
                            <Button size="sm">Analyze</Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="analytics">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Comprehensive Analysis</CardTitle>
                    <CardDescription>AI-powered insights for your portfolio</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 bg-muted rounded-lg">
                        <h3 className="font-medium mb-2">Portfolio Health: Excellent</h3>
                        <p className="text-sm mb-4">Your property portfolio is well-diversified across residential and commercial sectors, with strong performance in high-growth Indian metro areas.</p>
                        <Progress value={85} className="h-2" />
                      </div>
                      
                      <div className="p-4 bg-muted rounded-lg">
                        <h3 className="font-medium mb-2">Investment Opportunities</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <ArrowUpRight className="h-4 w-4 text-green-500 mt-0.5" />
                            <p className="text-sm">Consider expanding commercial holdings in Pune tech corridor</p>
                          </li>
                          <li className="flex items-start gap-2">
                            <ArrowUpRight className="h-4 w-4 text-green-500 mt-0.5" />
                            <p className="text-sm">Mumbai residential properties showing signs of value correction</p>
                          </li>
                          <li className="flex items-start gap-2">
                            <ArrowUpRight className="h-4 w-4 text-green-500 mt-0.5" />
                            <p className="text-sm">Explore emerging opportunities in Chennai's OMR area</p>
                          </li>
                        </ul>
                      </div>
                      
                      <Button className="w-full">Generate Full Portfolio Analysis</Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Analysis Tools</CardTitle>
                    <CardDescription>Access powerful analytics features</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Button variant="outline" className="h-auto py-6 flex flex-col items-center justify-center gap-2">
                        <Building3 className="h-8 w-8 mb-2" />
                        <span>Zoning Optimizer</span>
                        <span className="text-xs text-muted-foreground">Maximize property potential</span>
                      </Button>
                      
                      <Button variant="outline" className="h-auto py-6 flex flex-col items-center justify-center gap-2">
                        <BarChart3 className="h-8 w-8 mb-2" />
                        <span>ROI Heatmap</span>
                        <span className="text-xs text-muted-foreground">Identify high-value areas</span>
                      </Button>
                      
                      <Button variant="outline" className="h-auto py-6 flex flex-col items-center justify-center gap-2">
                        <LineChart className="h-8 w-8 mb-2" />
                        <span>Financial Modeling</span>
                        <span className="text-xs text-muted-foreground">Project future returns</span>
                      </Button>
                      
                      <Button variant="outline" className="h-auto py-6 flex flex-col items-center justify-center gap-2">
                        <MapPin className="h-8 w-8 mb-2" />
                        <span>Market Analyzer</span>
                        <span className="text-xs text-muted-foreground">Track local trends</span>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="account">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="md:col-span-1">
                  <CardHeader>
                    <CardTitle>Account Information</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col items-center mb-6">
                      <Avatar className="h-20 w-20 mb-4">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <h3 className="text-xl font-medium">Rahul Sharma</h3>
                      <p className="text-muted-foreground">Premium Member</p>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex justify-between border-b pb-2">
                        <span className="text-muted-foreground">Email</span>
                        <span>rahul.sharma@example.com</span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span className="text-muted-foreground">Phone</span>
                        <span>+91 98765 43210</span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span className="text-muted-foreground">Membership</span>
                        <Badge>Premium</Badge>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span className="text-muted-foreground">Member Since</span>
                        <span>March 2023</span>
                      </div>
                    </div>
                    
                    <Button variant="outline" className="w-full mt-6">
                      <User className="mr-2 h-4 w-4" /> Edit Profile
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="md:col-span-2">
                  <CardHeader>
                    <CardTitle>Account Settings</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <h3 className="font-medium">Notification Preferences</h3>
                        <div className="flex items-center justify-between py-2">
                          <div>
                            <p className="font-medium">Email Notifications</p>
                            <p className="text-sm text-muted-foreground">Receive updates via email</p>
                          </div>
                          <Button variant="outline" size="sm">Configure</Button>
                        </div>
                        <div className="flex items-center justify-between py-2">
                          <div>
                            <p className="font-medium">SMS Alerts</p>
                            <p className="text-sm text-muted-foreground">Get time-sensitive alerts via SMS</p>
                          </div>
                          <Button variant="outline" size="sm">Configure</Button>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <h3 className="font-medium">Security Settings</h3>
                        <div className="flex items-center justify-between py-2">
                          <div>
                            <p className="font-medium">Change Password</p>
                            <p className="text-sm text-muted-foreground">Update your account password</p>
                          </div>
                          <Button variant="outline" size="sm">Update</Button>
                        </div>
                        <div className="flex items-center justify-between py-2">
                          <div>
                            <p className="font-medium">Two-Factor Authentication</p>
                            <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
                          </div>
                          <Button variant="outline" size="sm">Enable</Button>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <h3 className="font-medium">API Access</h3>
                        <div className="flex items-center justify-between py-2">
                          <div>
                            <p className="font-medium">API Keys</p>
                            <p className="text-sm text-muted-foreground">Manage your API access</p>
                          </div>
                          <Button variant="outline" size="sm">Manage</Button>
                        </div>
                      </div>
                      
                      <Button className="w-full">
                        <Settings className="mr-2 h-4 w-4" /> Save Settings
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
