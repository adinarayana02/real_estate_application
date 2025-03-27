
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { toast } from "sonner";
import FadeIn from "@/components/ui/animations/FadeIn";
import { BarChart, BarChart2, LineChart, PieChart } from "lucide-react";

const PropertyAnalysis: React.FC = () => {
  const [activeTab, setActiveTab] = useState("zoning");
  const [isCalculating, setIsCalculating] = useState(false);
  const [results, setResults] = useState<Record<string, any>>({
    zoning: null,
    scenario: null,
    financial: null,
    emotional: null,
  });

  // Zoning Optimizer state
  const [zoningData, setZoningData] = useState({
    size: 1000,
    demand: 0.7,
    cost: 150000,
  });

  // Scenario Planning state
  const [scenarioData, setScenarioData] = useState({
    demand: 0.8,
    cost: 200000,
  });

  // Financial Modeling state
  const [financialData, setFinancialData] = useState({
    value: 500000,
    yield: 5,
    term: 5,
  });

  // Emotional Appeal state
  const [emotionalData, setEmotionalData] = useState({
    aesthetic: 80,
    view: 75,
    amenity: 85,
  });

  const calculateZoning = () => {
    setIsCalculating(true);
    // Mock calculation with timeout to simulate API call
    setTimeout(() => {
      const predictedValue = zoningData.size * zoningData.demand * 100;
      const roi = ((predictedValue - zoningData.cost) / zoningData.cost) * 100;
      
      setResults({
        ...results,
        zoning: {
          predictedValue,
          bestUse: zoningData.demand > 0.6 ? "Mixed Use Development" : "Residential",
          roi,
          potentialIncrease: zoningData.size * 0.2,
        },
      });
      
      setIsCalculating(false);
      toast.success("Zoning analysis completed!");
    }, 1500);
  };

  const calculateScenario = () => {
    setIsCalculating(true);
    // Mock calculation
    setTimeout(() => {
      const scenarioValue = scenarioData.demand * 1000000 - scenarioData.cost;
      const optimalScenario = scenarioData.demand > 0.7 ? "Luxury Condominiums" : "Mid-Range Apartments";
      
      setResults({
        ...results,
        scenario: {
          scenarioValue,
          optimalScenario,
          riskFactor: (1 - scenarioData.demand) * 10,
          timeToROI: Math.ceil(scenarioData.cost / (scenarioValue * 0.1)),
        },
      });
      
      setIsCalculating(false);
      toast.success("Scenario analysis completed!");
    }, 1500);
  };

  const calculateFinancial = () => {
    setIsCalculating(true);
    // Mock calculation
    setTimeout(() => {
      const annualIncome = financialData.value * (financialData.yield / 100);
      const loanAmount = financialData.value * 0.8;
      const interestRate = 0.05;
      const monthlyInterestRate = interestRate / 12;
      const loanMonthlyPayment =
        (loanAmount * monthlyInterestRate) /
        (1 - Math.pow(1 + monthlyInterestRate, -financialData.term * 12));
      const annualLoanPayment = loanMonthlyPayment * 12;
      const constructionCost = financialData.value * 0.5;
      const fiveYearProfit = annualIncome * 5 - annualLoanPayment * 5;
      const adjustedFiveYearProfit = fiveYearProfit - constructionCost * 0.1;
      const roi = (adjustedFiveYearProfit / constructionCost) * 100;
      
      setResults({
        ...results,
        financial: {
          annualIncome,
          annualLoanPayment,
          fiveYearProfit,
          adjustedFiveYearProfit,
          roi,
        },
      });
      
      setIsCalculating(false);
      toast.success("Financial analysis completed!");
    }, 1500);
  };

  const calculateEmotionalAppeal = () => {
    setIsCalculating(true);
    // Mock calculation
    setTimeout(() => {
      const appealScore = (emotionalData.aesthetic + emotionalData.view + emotionalData.amenity) / 3;
      const marketBoost = appealScore > 80 ? "High" : appealScore > 70 ? "Medium" : "Low";
      
      setResults({
        ...results,
        emotional: {
          appealScore,
          marketBoost,
          sellTimeReduction: appealScore > 80 ? "30-45 days" : appealScore > 70 ? "15-30 days" : "0-15 days",
          premiumPotential: `${Math.round(appealScore / 10)}%`,
        },
      });
      
      setIsCalculating(false);
      toast.success("Emotional appeal analysis completed!");
    }, 1500);
  };

  return (
    <div className="container px-4 md:px-6 max-w-6xl mx-auto py-12">
      <FadeIn className="space-y-4 text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold">Property Analysis Tools</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Use our AI-powered tools to analyze and optimize your real estate investments.
        </p>
      </FadeIn>

      <FadeIn delay={0.2}>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full md:w-auto">
              <TabsTrigger value="zoning" className="flex items-center gap-2">
                <BarChart className="h-4 w-4" /> Zoning Optimizer
              </TabsTrigger>
              <TabsTrigger value="scenario" className="flex items-center gap-2">
                <PieChart className="h-4 w-4" /> Scenario Planning
              </TabsTrigger>
              <TabsTrigger value="financial" className="flex items-center gap-2">
                <LineChart className="h-4 w-4" /> Financial Modeling
              </TabsTrigger>
              <TabsTrigger value="emotional" className="flex items-center gap-2">
                <BarChart2 className="h-4 w-4" /> Emotional Appeal
              </TabsTrigger>
            </TabsList>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Zoning Optimizer */}
            <TabsContent value="zoning" className="animate-fade-in">
              <Card className="h-full glass-effect">
                <CardHeader>
                  <CardTitle>Zoning Optimizer</CardTitle>
                  <CardDescription>
                    Identify the best property use and development potential to maximize returns.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="size">Property Size (sqft)</Label>
                    <div className="flex items-center gap-4">
                      <Input
                        id="size"
                        type="number"
                        value={zoningData.size}
                        onChange={(e) => setZoningData({ ...zoningData, size: parseFloat(e.target.value) || 0 })}
                      />
                      <span className="w-16 text-right">{zoningData.size.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="demand">Market Demand (0 to 1)</Label>
                    <div className="flex items-center gap-4">
                      <Slider
                        id="demand"
                        min={0}
                        max={1}
                        step={0.01}
                        value={[zoningData.demand]}
                        onValueChange={(values) => setZoningData({ ...zoningData, demand: values[0] })}
                      />
                      <span className="w-16 text-right">{zoningData.demand.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="cost">Construction Cost ($)</Label>
                    <div className="flex items-center gap-4">
                      <Input
                        id="cost"
                        type="number"
                        value={zoningData.cost}
                        onChange={(e) => setZoningData({ ...zoningData, cost: parseFloat(e.target.value) || 0 })}
                      />
                      <span className="w-16 text-right">${zoningData.cost.toLocaleString()}</span>
                    </div>
                  </div>

                  <Button 
                    onClick={calculateZoning} 
                    disabled={isCalculating} 
                    className="w-full mt-4"
                  >
                    {isCalculating && activeTab === "zoning" ? "Calculating..." : "Calculate Zoning"}
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Scenario Planning */}
            <TabsContent value="scenario" className="animate-fade-in">
              <Card className="h-full glass-effect">
                <CardHeader>
                  <CardTitle>Scenario Planning Model</CardTitle>
                  <CardDescription>
                    Explore different development scenarios to find the most profitable approach.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="scenarioDemand">Market Demand (0 to 1)</Label>
                    <div className="flex items-center gap-4">
                      <Slider
                        id="scenarioDemand"
                        min={0}
                        max={1}
                        step={0.01}
                        value={[scenarioData.demand]}
                        onValueChange={(values) => setScenarioData({ ...scenarioData, demand: values[0] })}
                      />
                      <span className="w-16 text-right">{scenarioData.demand.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="scenarioCost">Construction Cost ($)</Label>
                    <div className="flex items-center gap-4">
                      <Input
                        id="scenarioCost"
                        type="number"
                        value={scenarioData.cost}
                        onChange={(e) => setScenarioData({ ...scenarioData, cost: parseFloat(e.target.value) || 0 })}
                      />
                      <span className="w-16 text-right">${scenarioData.cost.toLocaleString()}</span>
                    </div>
                  </div>

                  <Button 
                    onClick={calculateScenario} 
                    disabled={isCalculating} 
                    className="w-full mt-4"
                  >
                    {isCalculating && activeTab === "scenario" ? "Calculating..." : "Calculate Scenario"}
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Financial Modeling */}
            <TabsContent value="financial" className="animate-fade-in">
              <Card className="h-full glass-effect">
                <CardHeader>
                  <CardTitle>Financial Modeling</CardTitle>
                  <CardDescription>
                    Comprehensive financial analysis for your real estate investment.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="financialValue">Property Value ($)</Label>
                    <div className="flex items-center gap-4">
                      <Input
                        id="financialValue"
                        type="number"
                        value={financialData.value}
                        onChange={(e) => setFinancialData({ ...financialData, value: parseFloat(e.target.value) || 0 })}
                      />
                      <span className="w-16 text-right">${financialData.value.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="financialYield">Yield Percent (%)</Label>
                    <div className="flex items-center gap-4">
                      <Slider
                        id="financialYield"
                        min={1}
                        max={10}
                        step={0.1}
                        value={[financialData.yield]}
                        onValueChange={(values) => setFinancialData({ ...financialData, yield: values[0] })}
                      />
                      <span className="w-16 text-right">{financialData.yield.toFixed(1)}%</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="financialTerm">Term (Years)</Label>
                    <div className="flex items-center gap-4">
                      <Slider
                        id="financialTerm"
                        min={1}
                        max={30}
                        step={1}
                        value={[financialData.term]}
                        onValueChange={(values) => setFinancialData({ ...financialData, term: values[0] })}
                      />
                      <span className="w-16 text-right">{financialData.term} years</span>
                    </div>
                  </div>

                  <Button 
                    onClick={calculateFinancial} 
                    disabled={isCalculating} 
                    className="w-full mt-4"
                  >
                    {isCalculating && activeTab === "financial" ? "Calculating..." : "Calculate Financials"}
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Emotional Appeal */}
            <TabsContent value="emotional" className="animate-fade-in">
              <Card className="h-full glass-effect">
                <CardHeader>
                  <CardTitle>Emotional Appeal Evaluator</CardTitle>
                  <CardDescription>
                    Assess the emotional appeal of your property design to maximize buyer interest.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="aestheticScore">Aesthetic Score (0-100)</Label>
                    <div className="flex items-center gap-4">
                      <Slider
                        id="aestheticScore"
                        min={0}
                        max={100}
                        step={1}
                        value={[emotionalData.aesthetic]}
                        onValueChange={(values) => setEmotionalData({ ...emotionalData, aesthetic: values[0] })}
                      />
                      <span className="w-16 text-right">{emotionalData.aesthetic}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="viewScore">View Score (0-100)</Label>
                    <div className="flex items-center gap-4">
                      <Slider
                        id="viewScore"
                        min={0}
                        max={100}
                        step={1}
                        value={[emotionalData.view]}
                        onValueChange={(values) => setEmotionalData({ ...emotionalData, view: values[0] })}
                      />
                      <span className="w-16 text-right">{emotionalData.view}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="amenityScore">Amenity Score (0-100)</Label>
                    <div className="flex items-center gap-4">
                      <Slider
                        id="amenityScore"
                        min={0}
                        max={100}
                        step={1}
                        value={[emotionalData.amenity]}
                        onValueChange={(values) => setEmotionalData({ ...emotionalData, amenity: values[0] })}
                      />
                      <span className="w-16 text-right">{emotionalData.amenity}</span>
                    </div>
                  </div>

                  <Button 
                    onClick={calculateEmotionalAppeal} 
                    disabled={isCalculating} 
                    className="w-full mt-4"
                  >
                    {isCalculating && activeTab === "emotional" ? "Calculating..." : "Calculate Appeal"}
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Results Cards */}
            <div className="md:col-span-1">
              {activeTab === "zoning" && results.zoning && (
                <Card className="h-full glass-effect animate-fade-in">
                  <CardHeader>
                    <CardTitle>Zoning Analysis Results</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="text-sm text-muted-foreground">Predicted Property Value:</div>
                      <div className="text-2xl font-semibold">${results.zoning.predictedValue.toLocaleString()}</div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm text-muted-foreground">Best Use:</div>
                      <div className="text-lg">{results.zoning.bestUse}</div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm text-muted-foreground">Return on Investment:</div>
                      <div className="text-lg">{results.zoning.roi.toFixed(2)}%</div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm text-muted-foreground">Potential sq. ft. Increase:</div>
                      <div className="text-lg">{results.zoning.potentialIncrease.toLocaleString()} sq. ft</div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {activeTab === "scenario" && results.scenario && (
                <Card className="h-full glass-effect animate-fade-in">
                  <CardHeader>
                    <CardTitle>Scenario Analysis Results</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="text-sm text-muted-foreground">Projected Value:</div>
                      <div className="text-2xl font-semibold">${results.scenario.scenarioValue.toLocaleString()}</div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm text-muted-foreground">Optimal Scenario:</div>
                      <div className="text-lg">{results.scenario.optimalScenario}</div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm text-muted-foreground">Risk Factor:</div>
                      <div className="text-lg">{results.scenario.riskFactor.toFixed(1)}/10</div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm text-muted-foreground">Time to ROI:</div>
                      <div className="text-lg">{results.scenario.timeToROI} years</div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {activeTab === "financial" && results.financial && (
                <Card className="h-full glass-effect animate-fade-in">
                  <CardHeader>
                    <CardTitle>Financial Analysis Results</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="text-sm text-muted-foreground">Annual Rental Income:</div>
                      <div className="text-lg">${results.financial.annualIncome.toLocaleString()}</div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm text-muted-foreground">Annual Loan Payment:</div>
                      <div className="text-lg">${results.financial.annualLoanPayment.toLocaleString()}</div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm text-muted-foreground">5-Year Profit:</div>
                      <div className="text-lg">${results.financial.fiveYearProfit.toLocaleString()}</div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm text-muted-foreground">Adjusted 5-Year Profit:</div>
                      <div className="text-lg">${results.financial.adjustedFiveYearProfit.toLocaleString()}</div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm text-muted-foreground">Return on Investment:</div>
                      <div className="text-xl font-semibold text-accent">{results.financial.roi.toFixed(2)}%</div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {activeTab === "emotional" && results.emotional && (
                <Card className="h-full glass-effect animate-fade-in">
                  <CardHeader>
                    <CardTitle>Emotional Appeal Results</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="text-sm text-muted-foreground">Appeal Score:</div>
                      <div className="text-2xl font-semibold">{results.emotional.appealScore.toFixed(2)}/100</div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm text-muted-foreground">Market Boost:</div>
                      <div className="text-lg">{results.emotional.marketBoost}</div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm text-muted-foreground">Sell Time Reduction:</div>
                      <div className="text-lg">{results.emotional.sellTimeReduction}</div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm text-muted-foreground">Premium Potential:</div>
                      <div className="text-lg">{results.emotional.premiumPotential}</div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </Tabs>
      </FadeIn>
    </div>
  );
};

export default PropertyAnalysis;
