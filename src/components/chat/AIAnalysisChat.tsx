
import React, { useState, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { Bot, IndianRupee, MessageCircle, SendHorizontal, User, Building as BuildingIcon, AlertCircle, Lightbulb, History, Trash2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

type Message = {
  id: string;
  content: string;
  sender: "user" | "ai";
  timestamp: Date;
};

type AIProvider = "openai" | "anthropic" | "google" | "grok";

const AIAnalysisChat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [provider, setProvider] = useState<AIProvider>("openai");
  const [apiKey, setApiKey] = useState<string>("");
  const [showApiKeyInput, setShowApiKeyInput] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("chat");
  const [chatHistory, setChatHistory] = useState<Array<{id: string, title: string, date: Date}>>([
    { id: "history1", title: "Mumbai Property Analysis", date: new Date(Date.now() - 86400000) },
    { id: "history2", title: "Bangalore Commercial ROI", date: new Date(Date.now() - 172800000) },
    { id: "history3", title: "Delhi NCR Zoning Options", date: new Date(Date.now() - 345600000) }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const apiKeys = {
    openai: "#",
    anthropic: "#",
    google: "#",
    grok: "#"
  };

  useEffect(() => {
    setMessages([
      {
        id: "welcome",
        content: "नमस्ते! I'm your AI Property Analysis assistant for the Indian real estate market. How can I help you analyze your property investment today?",
        sender: "ai",
        timestamp: new Date(),
      },
    ]);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const currentApiKey = apiKeys[provider];
    
    if (!currentApiKey && !showApiKeyInput) {
      setShowApiKeyInput(true);
      toast.info(`Please enter your ${provider.toUpperCase()} API key to continue`);
      return;
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    try {
      setTimeout(() => {
        generateAIResponse(inputMessage, provider);
      }, 1000);
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to get a response. Please try again.");
      setIsTyping(false);
    }
  };

  const generateAIResponse = (userQuery: string, aiProvider: AIProvider) => {
    let responseContent = "";
    
    if (userQuery.toLowerCase().includes("zoning") || userQuery.toLowerCase().includes("land use")) {
      responseContent = "Based on my analysis of the Indian zoning regulations, the current zoning in Mumbai allows for mixed-use development with a Floor Space Index (FSI) of 3.5. You could potentially build up to 15,000 square feet on this property, with retail on the ground floor and residential units above. The local Development Control Rules also require 1.5 parking spaces per residential unit, which is critical given Mumbai's parking challenges.";
    } else if (userQuery.toLowerCase().includes("roi") || userQuery.toLowerCase().includes("return")) {
      responseContent = "Looking at comparable properties in Bangalore's tech corridor, I estimate an ROI of approximately 12.5% over a 5-year period. This assumes a purchase price of ₹7.5 crore, renovation costs of ₹2 crore, and an eventual sale price of ₹12 crore. Annual rental income would provide an additional 6% cash-on-cash return during the hold period, which is strong compared to the current commercial rental yields in Bangalore.";
    } else if (userQuery.toLowerCase().includes("market") || userQuery.toLowerCase().includes("trends")) {
      responseContent = "The real estate market in Hyderabad has shown steady growth of 5.8% annually over the last 3 years, outperforming other major Indian metros. Vacancy rates are low at 2.7%, and the average days on market for similar properties is 34 days. There's particularly strong demand for 2-bedroom units targeting young IT professionals, especially in areas near HITEC City and Financial District.";
    } else if (userQuery.toLowerCase().includes("tax") || userQuery.toLowerCase().includes("financial")) {
      responseContent = "The property in Delhi NCR falls under a tax jurisdiction with significant recent changes. Annual property tax is approximately ₹84,000. There are potential tax benefits through the affordable housing scheme, which could reduce your tax liability. Additionally, if you maintain it as a rental for 3+ years, you'll benefit from long-term capital gains tax rates when selling. I recommend consulting with a CA to maximize these benefits under the latest Indian tax code amendments.";
    } else if (userQuery.toLowerCase().includes("gurgaon") || userQuery.toLowerCase().includes("gurugram")) {
      responseContent = "Gurgaon's property market has evolved significantly in the last decade. The Golf Course Road and Golf Course Extension Road areas command premium prices of ₹12,000-15,000 per sq ft for residential properties. New sectors in West Gurgaon offer better entry prices at ₹7,000-9,000 per sq ft with strong appreciation potential. Commercial properties near Cyber City can yield 6-7% annual returns, which is excellent for the Indian market.";
    } else if (userQuery.toLowerCase().includes("pune") || userQuery.toLowerCase().includes("maharashtra")) {
      responseContent = "Pune's real estate market offers an excellent balance of affordability and growth potential. Areas like Hinjewadi, Kharadi and Baner are seeing robust demand due to IT/ITES growth. Current residential prices range from ₹6,500-9,000 per sq ft depending on the micro-market. New infrastructure projects like the Metro line are already positively impacting property values in connected neighborhoods.";
    } else if (userQuery.toLowerCase().includes("floor plan") || userQuery.toLowerCase().includes("layout")) {
      responseContent = "For a typical 2BHK apartment in urban India, the ideal floor plan maximizes space efficiency while respecting Vastu principles. A rectangular layout of about 1000 sq ft with kitchen in the southeast, master bedroom in southwest, and entrance from north or east is most desirable. Modern Indian homebuyers increasingly prefer open kitchen-living room concepts while maintaining dedicated pooja space. Your floor plan could be optimized by shifting the kitchen location and adding a balcony extension.";
    } else if (userQuery.toLowerCase().includes("construction") || userQuery.toLowerCase().includes("material")) {
      responseContent = "For construction in Bangalore, I recommend using locally sourced materials to reduce costs. AAC blocks are ₹5,500-6,000 per cubic meter and offer better insulation than traditional red bricks. Current steel prices are at ₹62,000-65,000 per ton for TMT bars. Premium tile options like vitrified tiles cost ₹70-120 per sq ft while natural stone ranges from ₹150-300 per sq ft. Consider rainwater harvesting and solar panels which now have excellent ROI given water scarcity and electricity costs in Karnataka.";
    } else {
      responseContent = "I've analyzed your query in the context of the Indian real estate market. Would you like me to provide a detailed breakdown of financial projections, zoning opportunities, or market analysis for properties in a specific Indian city? I can also help with tax planning under Indian laws, construction costs based on local materials, or investment strategy for different Indian metros.";
    }
    
    const aiMessage: Message = {
      id: Date.now().toString(),
      content: responseContent,
      sender: "ai",
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, aiMessage]);
    setIsTyping(false);
  };

  const suggestedQueries = [
    "What's the current ROI for commercial property in Bangalore?",
    "Explain zoning regulations in Mumbai for mixed-use buildings",
    "Compare property markets in Delhi vs Gurgaon",
    "What are the tax implications for selling property in India after 3 years?",
    "Which areas in Pune show the best appreciation potential?"
  ];

  const handleSuggestedQuery = (query: string) => {
    setInputMessage(query);
  };

  const propertyContext = {
    location: "Whitefield, Bangalore",
    type: "Commercial Office Space",
    size: "20,000 sq.ft",
    price: "₹18 crore",
    currentYield: "5.8% per annum",
    tenantProfile: "Tech companies, co-working spaces",
    infraDevelopments: "Upcoming metro connectivity, ring road expansion"
  };

  const clearChat = () => {
    toast.info("Clearing chat history...");
    setMessages([
      {
        id: "welcome",
        content: "नमस्ते! I'm your AI Property Analysis assistant for the Indian real estate market. How can I help you analyze your property investment today?",
        sender: "ai",
        timestamp: new Date(),
      },
    ]);
  };
  
  const saveChat = () => {
    toast.success("Chat saved successfully!");
    const newChatHistory = [
      { 
        id: Date.now().toString(), 
        title: inputMessage.length > 0 
          ? inputMessage.substring(0, 30) + "..." 
          : "Property Analysis " + new Date().toLocaleDateString(), 
        date: new Date() 
      },
      ...chatHistory
    ];
    setChatHistory(newChatHistory);
  };

  return (
    <Card className="w-full h-[600px] flex flex-col">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>AI Property Analysis Chat</CardTitle>
            <CardDescription>Chat with our AI to analyze your Indian property investments</CardDescription>
          </div>
          <div className="flex space-x-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="icon" onClick={clearChat}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Clear chat</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="icon" onClick={saveChat}>
                    <History className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Save chat</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow overflow-hidden flex flex-col pt-2">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-grow flex flex-col">
          <div className="flex items-center justify-between mb-3">
            <TabsList>
              <TabsTrigger value="chat" className="flex items-center gap-1">
                <MessageCircle className="h-3.5 w-3.5" />
                <span>Chat</span>
              </TabsTrigger>
              <TabsTrigger value="context" className="flex items-center gap-1">
                <BuildingIcon className="h-3.5 w-3.5" />
                <span>Property Context</span>
              </TabsTrigger>
              <TabsTrigger value="history" className="flex items-center gap-1">
                <History className="h-3.5 w-3.5" />
                <span>History</span>
              </TabsTrigger>
            </TabsList>
            
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium">AI Model:</span>
              <Select value={provider} onValueChange={(value) => setProvider(value as AIProvider)}>
                <SelectTrigger className="w-40 h-8">
                  <SelectValue placeholder="Select model" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="openai">OpenAI</SelectItem>
                  <SelectItem value="anthropic">Anthropic</SelectItem>
                  <SelectItem value="google">Google Gemini</SelectItem>
                  <SelectItem value="grok">Grok AI</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <TabsContent value="chat" className="flex-grow flex flex-col space-y-3 mt-0">
            <div className="flex-grow overflow-y-auto p-4 border rounded-md bg-slate-50 dark:bg-slate-900 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-2 rounded-lg ${
                      message.sender === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted"
                    }`}
                  >
                    <div className="flex items-center mb-1">
                      {message.sender === "ai" ? (
                        <Bot className="h-4 w-4 mr-1 opacity-70" />
                      ) : (
                        <User className="h-4 w-4 mr-1 opacity-70" />
                      )}
                      <span className="text-xs opacity-70">
                        {message.sender === "ai" ? (
                          <>AI Assistant <Badge variant="outline" className="text-[10px] ml-1">{provider}</Badge></>
                        ) : (
                          "You"
                        )}
                      </span>
                    </div>
                    <p className="whitespace-pre-wrap">{message.content}</p>
                    <div className="flex justify-between items-center mt-1">
                      <span className="text-xs opacity-70">
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                      
                      {message.sender === "ai" && (
                        <div className="flex space-x-1">
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                                  <Lightbulb className="h-3 w-3" />
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Ask for more insights</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="max-w-[80%] px-4 py-2 rounded-lg bg-muted">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "0ms" }}></div>
                      <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "200ms" }}></div>
                      <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "400ms" }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
            
            <div className="flex flex-wrap gap-1 px-1">
              {suggestedQueries.map((query, index) => (
                <Badge 
                  key={index}
                  variant="outline"
                  className="cursor-pointer hover:bg-accent transition-colors"
                  onClick={() => handleSuggestedQuery(query)}
                >
                  {query.length > 40 ? `${query.substring(0, 40)}...` : query}
                </Badge>
              ))}
            </div>
            
            {showApiKeyInput && !apiKeys[provider] && (
              <div className="flex space-x-2">
                <Input
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  placeholder={`Enter your ${provider} API key`}
                  type="password"
                  className="flex-grow"
                />
                <Button 
                  onClick={() => {
                    if (apiKey) {
                      toast.success(`${provider} API key saved`);
                      setShowApiKeyInput(false);
                    } else {
                      toast.error("Please enter a valid API key");
                    }
                  }}
                >
                  Save
                </Button>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="context" className="mt-0 flex-grow">
            <div className="border rounded-md p-4 h-full overflow-y-auto bg-slate-50 dark:bg-slate-900">
              <h3 className="font-medium text-lg mb-4">Current Property Context</h3>
              
              <div className="space-y-4">
                {Object.entries(propertyContext).map(([key, value]) => (
                  <div key={key} className="flex justify-between border-b pb-2">
                    <span className="font-medium capitalize">{key}:</span>
                    <span className="text-muted-foreground">{value}</span>
                  </div>
                ))}
                
                <div className="pt-4">
                  <h4 className="font-medium mb-2">Area Analysis</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Whitefield is one of Bangalore's premier IT hubs, with strong rental demand from technology sector. The area has seen approximately 8% year-on-year property value appreciation over the last 5 years.
                  </p>
                  
                  <h4 className="font-medium mb-2 mt-4">Market Trends</h4>
                  <p className="text-sm text-muted-foreground">
                    Commercial property in this micro-market currently trades at ₹9,000-11,000 per sq.ft with rental yields of 5-7% annually. Vacancy rates are below 5%, indicating strong demand.
                  </p>
                </div>
                
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full mt-4">
                      Edit Property Context
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Edit Property Context</DialogTitle>
                      <DialogDescription>
                        Update property details to get more accurate analysis
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div className="space-y-2">
                        <Label htmlFor="edit-location">Location</Label>
                        <Input id="edit-location" defaultValue={propertyContext.location} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="edit-type">Property Type</Label>
                        <Select defaultValue={propertyContext.type}>
                          <SelectTrigger id="edit-type">
                            <SelectValue placeholder="Select property type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Commercial Office Space">Commercial Office Space</SelectItem>
                            <SelectItem value="Residential Apartment">Residential Apartment</SelectItem>
                            <SelectItem value="Retail Space">Retail Space</SelectItem>
                            <SelectItem value="Industrial">Industrial</SelectItem>
                            <SelectItem value="Mixed Use">Mixed Use</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="edit-size">Size (sq.ft)</Label>
                          <Input id="edit-size" defaultValue="20000" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="edit-price">Price</Label>
                          <Input id="edit-price" defaultValue="₹18 crore" />
                        </div>
                      </div>
                      <Button className="w-full" onClick={() => {
                        toast.success("Property context updated successfully!");
                      }}>
                        Update Context
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
                
                <Button 
                  className="w-full mt-2"
                  onClick={() => {
                    setActiveTab("chat");
                    toast.success("Using updated property context in analysis");
                  }}
                >
                  Use This Context in Chat
                </Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="history" className="mt-0 flex-grow">
            <div className="border rounded-md p-4 h-full overflow-y-auto bg-slate-50 dark:bg-slate-900">
              <h3 className="font-medium text-lg mb-4">Saved Conversations</h3>
              
              {chatHistory.length > 0 ? (
                <div className="space-y-3">
                  {chatHistory.map((chat) => (
                    <div key={chat.id} className="border rounded-md p-3 hover:bg-slate-100 cursor-pointer" onClick={() => {
                      toast.info("Loading saved conversation...");
                      setActiveTab("chat");
                    }}>
                      <div className="flex justify-between items-center">
                        <h4 className="font-medium">{chat.title}</h4>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        {chat.date.toLocaleDateString()} at {chat.date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  <p>No saved conversations yet</p>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="flex w-full space-x-2"
        >
          <Input
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Ask about property analysis, ROI, zoning, market trends..."
            className="flex-grow"
            disabled={isTyping}
          />
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button type="submit" disabled={isTyping || !inputMessage.trim()} className="px-3">
                  <SendHorizontal className="h-5 w-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Send message</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </form>
      </CardFooter>
    </Card>
  );
};

export default AIAnalysisChat;
