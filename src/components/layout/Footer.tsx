
import React from "react";
import { Link } from "react-router-dom";
import FadeIn from "@/components/ui/animations/FadeIn";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: "Platform",
      links: [
        { text: "Home", href: "/" },
        { text: "Properties", href: "/properties" },
        { text: "AI Analysis", href: "/property-analysis" },
        { text: "Pricing", href: "/pricing" },
      ],
    },
    {
      title: "Resources",
      links: [
        { text: "Documentation", href: "/docs" },
        { text: "Blog", href: "/blog" },
        { text: "Case Studies", href: "/case-studies" },
        { text: "Support", href: "/support" },
      ],
    },
    {
      title: "Company",
      links: [
        { text: "About Us", href: "/about" },
        { text: "Careers", href: "/careers" },
        { text: "Contact", href: "/contact" },
        { text: "Privacy Policy", href: "/privacy" },
      ],
    },
    {
      title: "Legal",
      links: [
        { text: "Terms of Service", href: "/terms" },
        { text: "Privacy Policy", href: "/privacy" },
        { text: "Cookie Policy", href: "/cookies" },
        { text: "GDPR", href: "/gdpr" },
      ],
    },
  ];

  return (
    <footer className="border-t bg-secondary/50">
      <div className="container px-4 md:px-6 py-12 md:py-16">
        <FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {footerLinks.map((group, groupIndex) => (
              <div key={groupIndex} className="space-y-3">
                <h3 className="text-base font-semibold">{group.title}</h3>
                <ul className="space-y-2">
                  {group.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        to={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-semibold tracking-tight">
                AI Property Optimus
              </span>
            </div>
            <div className="text-sm text-muted-foreground">
              © {currentYear} AI Property Optimus. All rights reserved.
            </div>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
};

export default Footer;
