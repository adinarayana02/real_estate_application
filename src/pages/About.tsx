
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FadeIn from "@/components/ui/animations/FadeIn";
import { Building, Calculator, LineChart, MapPin, IndianRupee, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h1 className="text-3xl font-bold mb-6">About AI Property Optimus</h1>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground mb-6">
                  AI Property Optimus is a cutting-edge platform revolutionizing real estate investment analysis through artificial intelligence across India.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
                <p>
                  Our mission is to democratize real estate investment intelligence in the Indian market by providing sophisticated, AI-powered analysis tools that were previously only available to large institutional investors.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">How It Works</h2>
                <p>
                  Our platform analyzes thousands of data points across multiple dimensions including market trends, zoning regulations, construction costs, and demographic shifts across Indian metropolitan areas to provide comprehensive property analysis and optimization recommendations.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                  <div className="bg-muted p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3 flex items-center">
                      <Users className="h-5 w-5 mr-2 text-primary" />
                      For Investors
                    </h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Identify high-ROI investment opportunities in emerging Indian markets</li>
                      <li>Analyze market trends and property values across metropolitan cities</li>
                      <li>Optimize property development for maximum returns in local contexts</li>
                      <li>Access sophisticated financial modeling tools with INR calculations</li>
                    </ul>
                  </div>
                  
                  <div className="bg-muted p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3 flex items-center">
                      <Building className="h-5 w-5 mr-2 text-primary" />
                      For Developers
                    </h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Optimize zoning and land use strategies for Indian regulatory frameworks</li>
                      <li>Model construction costs and timelines for local material availability</li>
                      <li>Identify potential development challenges in different Indian regions</li>
                      <li>Create compelling marketing materials for the domestic market</li>
                    </ul>
                  </div>
                </div>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">Our Technology</h2>
                <p>
                  We leverage advanced machine learning algorithms, big data analytics, and spatial computing to deliver accurate and actionable insights about real estate properties across India. Our AI models are continuously trained on the latest market data from Indian property markets to ensure the most up-to-date recommendations.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-12">
                  <div className="flex flex-col items-center text-center p-4">
                    <LineChart className="h-12 w-12 mb-4 text-primary" />
                    <h3 className="text-lg font-medium mb-2">Market Analysis</h3>
                    <p className="text-sm text-muted-foreground">
                      Detailed insights on property trends across major Indian metros and tier-2 cities
                    </p>
                  </div>
                  
                  <div className="flex flex-col items-center text-center p-4">
                    <Calculator className="h-12 w-12 mb-4 text-primary" />
                    <h3 className="text-lg font-medium mb-2">Financial Modeling</h3>
                    <p className="text-sm text-muted-foreground">
                      Comprehensive INR-based ROI calculations tailored to Indian tax structures
                    </p>
                  </div>
                  
                  <div className="flex flex-col items-center text-center p-4">
                    <MapPin className="h-12 w-12 mb-4 text-primary" />
                    <h3 className="text-lg font-medium mb-2">Location Intelligence</h3>
                    <p className="text-sm text-muted-foreground">
                      Hyperlocal insights on emerging neighborhoods across India's growing urban centers
                    </p>
                  </div>
                </div>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
                <p>
                  Have questions or interested in a demo? Contact our team at <a href="mailto:info@aipropertyoptimus.com" className="text-blue-600 hover:text-blue-800">info@aipropertyoptimus.com</a> or call us at +91 98765 43210.
                </p>
                <p className="mt-4">
                  Our office: 
                  <br />
                  42nd Floor, World Trade Center
                  <br />
                  Bangalore, Karnataka 560001
                  <br />
                  India
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
