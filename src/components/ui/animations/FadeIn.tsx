
import React, { useEffect, useRef, ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  className?: string;
  threshold?: number;
}

const FadeIn: React.FC<FadeInProps> = ({ 
  children, 
  delay = 0, 
  direction = "up", 
  duration = 0.5, 
  className = "", 
  threshold = 0.1 
}) => {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0");
            entry.target.classList.add("animate-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    const element = ref.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold]);

  let transform = "translateY(10px)";
  if (direction === "down") transform = "translateY(-10px)";
  if (direction === "left") transform = "translateX(10px)";
  if (direction === "right") transform = "translateX(-10px)";
  if (direction === "none") transform = "none";

  return (
    <div
      ref={ref}
      className={`opacity-0 ${className}`}
      style={{
        transform,
        transition: `opacity ${duration}s ease-out ${delay}s, transform ${duration}s ease-out ${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

export default FadeIn;
