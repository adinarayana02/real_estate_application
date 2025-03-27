
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import FadeIn from "@/components/ui/animations/FadeIn";

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center pt-20">
      <div 
        className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent -z-10"
        style={{ 
          backgroundImage: "radial-gradient(circle at 20% 50%, rgba(17, 24, 39, 0.1), transparent 70%)" 
        }}
      ></div>
      
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <FadeIn delay={0.1} className="space-y-4">
              <p className="subtitle">AI-Powered Real Estate Analysis</p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                Optimize Your
                <span className="text-accent"> Real Estate</span> Investments
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
                Our AI-powered platform analyzes resale value, rental yield, durability, and maintenance costs to maximize your property investments.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.3} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/property-analysis">
                <Button size="lg" className="font-medium">
                  Start Analyzing
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="font-medium">
                  Learn More
                </Button>
              </Link>
            </FadeIn>
            
            <FadeIn delay={0.5} direction="up">
              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                {[
                  { number: "98%", text: "Accuracy" },
                  { number: "10x", text: "ROI Boost" },
                  { number: "5000+", text: "Properties" },
                  { number: "24/7", text: "Support" },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-accent">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.text}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
          
          <div className="flex-1 relative">
            <div className={`rounded-2xl overflow-hidden transition-all duration-1000 ${isLoaded ? 'shadow-2xl' : 'shadow-none'}`}>
              <div className="image-blur-wrapper aspect-[4/3] sm:aspect-[16/10] md:aspect-[4/3] lg:aspect-[16/9] bg-muted">
                <div 
                  className={`image-blur ${isLoaded ? 'loaded' : ''}`}
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "100%",
                    height: "100%"
                  }}
                ></div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-accent rounded-full -z-10"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-primary/10 rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
