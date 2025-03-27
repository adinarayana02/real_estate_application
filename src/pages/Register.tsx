
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AuthModal from "@/components/auth/AuthModal";
import { useNavigate } from "react-router-dom";
import FadeIn from "@/components/ui/animations/FadeIn";

const Register = () => {
  const navigate = useNavigate();
  
  const handleAuthSuccess = () => {
    navigate("/property-analysis");
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-20">
        <div className="w-full max-w-md px-4">
          <FadeIn>
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold">Create an Account</h1>
              <p className="text-muted-foreground mt-2">
                Join our platform to optimize your real estate investments
              </p>
            </div>
            <AuthModal defaultTab="register" onSuccess={handleAuthSuccess} />
          </FadeIn>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Register;
