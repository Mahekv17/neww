
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ChevronRight, RocketIcon } from 'lucide-react';

const CTASection = () => {
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pathscout-darkblue via-pathscout-darkblue to-black opacity-90 z-0"></div>
      
      {/* Animated Particles */}
      <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-pathscout-primary/20 animate-float"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-pathscout-secondary/20 animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div 
        ref={sectionRef}
        className="container mx-auto px-4 relative z-10 transition-all duration-700 opacity-0 translate-y-10"
      >
        <div className="glass rounded-3xl p-8 md:p-16 border border-pathscout-primary/30 overflow-hidden relative">
          {/* Background Glow */}
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-pathscout-primary/20 rounded-full filter blur-3xl"></div>
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-pathscout-secondary/20 rounded-full filter blur-3xl"></div>
          
          <div className="max-w-3xl mx-auto text-center">
            <RocketIcon className="w-16 h-16 text-pathscout-primary mx-auto mb-6 animate-float" />
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to <span className="highlight-text">Launch Your Future?</span>
            </h2>
            
            <p className="text-lg text-gray-300 mb-8">
              Start your journey today. Discover your ideal career path, build valuable skills, and connect with mentors who can guide you along the way.
            </p>
            
            <Link to="/auth">
              <Button size="lg" className="button-primary group text-lg py-6 px-10">
                Get Started Now
                <ChevronRight className="ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
