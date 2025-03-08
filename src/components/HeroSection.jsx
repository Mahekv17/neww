
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ChevronRight, GraduationCap, Briefcase, Users, Target } from 'lucide-react';

const HeroSection = () => {
  const heroRef = useRef(null);
  
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
    
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20">
      {/* Background Grid Animation */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Animated Floating Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 rounded-full bg-pathscout-primary/20 animate-float"></div>
      <div className="absolute bottom-1/4 right-10 w-32 h-32 rounded-full bg-pathscout-secondary/20 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-pathscout-gold/20 animate-pulse-soft"></div>
      
      <div 
        ref={heroRef}
        className="container mx-auto px-4 pt-10 transition-all duration-700 opacity-0 translate-y-10"
      >
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-block px-6 py-3 rounded-full bg-pathscout-primary/10 text-pathscout-primary mb-6 font-medium animate-bounce-light">
            Discover Your Perfect Career Path
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Guiding You To Your <span className="highlight-text">Dream Career</span>
          </h1>
          
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Interactive career guidance platform designed for grades 8-11 students. Discover your strengths, explore careers, and build skills through engaging, gamified experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Link to="/auth">
              <Button className="button-primary group">
                Get Started 
                <ChevronRight className="ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/dashboard/explore-careers">
              <Button variant="outline" className="button-secondary">
                Explore Careers
              </Button>
            </Link>
          </div>
          
          {/* Feature Icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div className="glass rounded-xl p-6 card-hover animate-zoom-in" style={{ animationDelay: '0.2s' }}>
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-pathscout-primary/20">
                  <GraduationCap className="w-8 h-8 text-pathscout-primary" />
                </div>
              </div>
              <h3 className="font-semibold mb-1">Career Assessment</h3>
              <p className="text-sm text-gray-400">Find your perfect match</p>
            </div>
            
            <div className="glass rounded-xl p-6 card-hover animate-zoom-in" style={{ animationDelay: '0.4s' }}>
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-pathscout-secondary/20">
                  <Target className="w-8 h-8 text-pathscout-secondary" />
                </div>
              </div>
              <h3 className="font-semibold mb-1">Skill Building</h3>
              <p className="text-sm text-gray-400">Develop essential skills</p>
            </div>
            
            <div className="glass rounded-xl p-6 card-hover animate-zoom-in" style={{ animationDelay: '0.6s' }}>
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-pathscout-gold/20">
                  <Briefcase className="w-8 h-8 text-pathscout-gold" />
                </div>
              </div>
              <h3 className="font-semibold mb-1">Job Simulation</h3>
              <p className="text-sm text-gray-400">Experience real careers</p>
            </div>
            
            <div className="glass rounded-xl p-6 card-hover animate-zoom-in" style={{ animationDelay: '0.8s' }}>
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-pathscout-primary/20">
                  <Users className="w-8 h-8 text-pathscout-primary" />
                </div>
              </div>
              <h3 className="font-semibold mb-1">Alumni Network</h3>
              <p className="text-sm text-gray-400">Connect with mentors</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll down animation */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="h-14 w-8 rounded-full border-2 border-white/20 flex justify-center pt-2">
          <div className="h-3 w-3 rounded-full bg-white/50 animate-bounce"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
