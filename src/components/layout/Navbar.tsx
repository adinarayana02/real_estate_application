
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => setIsOpen(!isOpen);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);
  
  const navLinks = [
    { text: "Home", href: "/", dropdown: false },
    { text: "Properties", href: "/properties", dropdown: false },
    { 
      text: "AI Analysis", 
      href: "#", 
      dropdown: true,
      items: [
        { text: "Comprehensive Analysis", href: "/comprehensive-analysis" },
        { text: "Property Valuation", href: "/property-analysis" },
        { text: "Zoning Optimizer", href: "/zoning-optimizer" },
        { text: "ROI Heatmap", href: "/roi-heatmap" },
      ]
    },
    { text: "Dashboard", href: "/dashboard", dropdown: false },
    { text: "About", href: "/about", dropdown: false },
    { text: "Contact", href: "/contact", dropdown: false },
  ];
  
  const isActive = (path: string) => {
    if (path === "/") return location.pathname === path;
    return location.pathname.startsWith(path);
  };
  
  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-sm" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl md:text-2xl font-semibold tracking-tight">
              AI Property Optimus
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link, index) => (
              !link.dropdown ? (
                <Link
                  key={index}
                  to={link.href}
                  className={`text-sm font-medium transition-colors hover:text-accent ${
                    isActive(link.href) 
                      ? "text-accent" 
                      : "text-foreground/80"
                  }`}
                >
                  {link.text}
                </Link>
              ) : (
                <div key={index} className="relative group">
                  <button className="flex items-center text-sm font-medium transition-colors hover:text-accent">
                    {link.text}
                    <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
                  </button>
                  <div className="absolute left-0 top-full w-48 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="py-2 mt-2 glass-effect rounded-lg shadow-md">
                      {link.items?.map((item, idx) => (
                        <Link
                          key={idx}
                          to={item.href}
                          className="block px-4 py-2 text-sm hover:bg-accent/10 transition-colors"
                        >
                          {item.text}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )
            ))}
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login">
              <Button variant="outline" size="sm">
                Log in
              </Button>
            </Link>
            <Link to="/register">
              <Button size="sm">Register</Button>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-screen opacity-100 visible"
            : "max-h-0 opacity-0 invisible"
        }`}
      >
        <div className="container mx-auto px-4 pb-4 glass-effect mt-1 rounded-lg">
          <nav className="flex flex-col space-y-4 py-4">
            {navLinks.map((link, index) => (
              <React.Fragment key={index}>
                {!link.dropdown ? (
                  <Link
                    to={link.href}
                    className={`text-base font-medium transition-colors ${
                      isActive(link.href) 
                        ? "text-accent" 
                        : "text-foreground/80"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.text}
                  </Link>
                ) : (
                  <>
                    <div className="text-base font-medium">{link.text}</div>
                    <div className="pl-4 space-y-2">
                      {link.items?.map((item, idx) => (
                        <Link
                          key={idx}
                          to={item.href}
                          className="block text-sm text-foreground/70 hover:text-accent transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.text}
                        </Link>
                      ))}
                    </div>
                  </>
                )}
              </React.Fragment>
            ))}
          </nav>
          <div className="flex flex-col space-y-3 pt-2 pb-3">
            <Link to="/login" onClick={() => setIsOpen(false)}>
              <Button variant="outline" className="w-full">
                Log in
              </Button>
            </Link>
            <Link to="/register" onClick={() => setIsOpen(false)}>
              <Button className="w-full">Register</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
