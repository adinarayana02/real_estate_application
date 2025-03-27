
import React from "react";
import FadeIn from "@/components/ui/animations/FadeIn";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BarChart, Building, Calculator, ChartPie, Compass, Database, FileText, HeartPulse, Home, Map, Ruler, Search, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Features: React.FC = () => {
  const features = [
    {
      icon: <BarChart className="h-10 w-10 text-accent" />,
      title: "Market & Cost Analysis",
      description:
        "Track real estate trends, supply-demand shifts, and zoning changes for actionable insights.",
      link: "/market-analysis",
    },
    {
      icon: <Building className="h-10 w-10 text-accent" />,
      title: "Zoning Optimizer",
      description:
        "Identify the best property use and development potential to maximize returns.",
      link: "/zoning-optimizer",
    },
    {
      icon: <Calculator className="h-10 w-10 text-accent" />,
      title: "Financial Planning",
      description:
        "Detailed financial modeling with cost estimates, projected revenue, and financing options.",
      link: "/financial-planning",
    },
    {
      icon: <ChartPie className="h-10 w-10 text-accent" />,
      title: "Scenario Planning",
      description:
        "Explore cost-effective strategies and design alternatives for maximum efficiency.",
      link: "/scenario-planning",
    },
    {
      icon: <Ruler className="h-10 w-10 text-accent" />,
      title: "Material Cost Estimates",
      description:
        "Predict required materials and expected cost variations for improved budgeting.",
      link: "/material-costs",
    },
    {
      icon: <FileText className="h-10 w-10 text-accent" />,
      title: "Project Management",
      description:
        "Structured checklists to ensure smooth execution from planning to completion.",
      link: "/project-management",
    },
    {
      icon: <Home className="h-10 w-10 text-accent" />,
      title: "3D Virtual Models",
      description:
        "Virtually explore and refine property designs before construction begins.",
      link: "/virtual-models",
    },
    {
      icon: <HeartPulse className="h-10 w-10 text-accent" />,
      title: "ROI Heatmap",
      description:
        "Highlight the most profitable areas within a property to maximize investment potential.",
      link: "/roi-heatmap",
    },
    {
      icon: <Shield className="h-10 w-10 text-accent" />,
      title: "Tax Optimization",
      description:
        "Insights into tax savings, deductions, and incentives tailored to each project.",
      link: "/tax-optimization",
    },
    {
      icon: <Map className="h-10 w-10 text-accent" />,
      title: "Land Acquisition Insights",
      description:
        "Scan and identify high-value nearby properties for expansion or investment.",
      link: "/land-acquisition",
    },
    {
      icon: <Database className="h-10 w-10 text-accent" />,
      title: "Regulatory Compliance",
      description:
        "Automate compliance checks for local, state, and federal regulations.",
      link: "/compliance",
    },
    {
      icon: <Zap className="h-10 w-10 text-accent" />,
      title: "AI Design Optimization",
      description:
        "Evaluate aesthetic appeal, views, and amenities to enhance buyer interest.",
      link: "/design-optimization",
    },
    {
      icon: <Compass className="h-10 w-10 text-accent" />,
      title: "Hyperlocal Forecasting",
      description:
        "Analyze neighborhood-specific trends to help investors stay ahead of the market.",
      link: "/hyperlocal-forecasting",
    },
    {
      icon: <Search className="h-10 w-10 text-accent" />,
      title: "Risk Simulation",
      description:
        "Run predictive models on economic downturns, market fluctuations, and environmental risks.",
      link: "/risk-simulation",
    },
  ];

  return (
    <div className="py-24 bg-background">
      <div className="container px-4 md:px-6">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Comprehensive AI-Powered Features</h2>
          <p className="text-lg text-muted-foreground">
            Our platform combines cutting-edge AI with real estate expertise to deliver actionable insights for your investments.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <FadeIn key={index} delay={0.05 * index} threshold={0.1}>
              <Card className="h-full glass-effect border-transparent transition-all duration-300 hover:shadow-glass-hover">
                <CardHeader className="pb-2">
                  <div className="mb-3">{feature.icon}</div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                  <Link to={feature.link} className="inline-flex items-center text-sm font-medium text-accent hover:underline">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
