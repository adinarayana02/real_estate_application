
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PropertyAnalysisTool from "@/components/tools/PropertyAnalysis";

const PropertyAnalysisPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <PropertyAnalysisTool />
      </main>
      <Footer />
    </div>
  );
};

export default PropertyAnalysisPage;
