
import React, { useEffect, useRef } from 'react';
import { Book, Target, Puzzle, Award, ArrowUpRight } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, delay, color, hoverColor }) => {
  const cardRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);
  
  return (
    <div 
      ref={cardRef}
      className={`glass rounded-2xl p-6 transition-all duration-700 opacity-0 translate-y-10 card-hover group`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors ${color} group-hover:${hoverColor}`}>
        <Icon className="w-7 h-7 text-white" />
      </div>
      <h3 className="text-xl font-bold mb-3 group-hover:text-white">{title}</h3>
      <p className="text-gray-400 mb-6 group-hover:text-gray-300">{description}</p>
      <div className="flex items-center text-pathscout-primary font-medium">
        <span>Learn more</span>
        <ArrowUpRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:translate-y-[-4px]" />
      </div>
    </div>
  );
};

const FeatureSection = () => {
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0');
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
    <section className="py-24 relative overflow-hidden" id="features">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-pathscout-primary/10 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pathscout-secondary/10 rounded-full filter blur-3xl opacity-20"></div>
      
      <div 
        ref={sectionRef}
        className="container mx-auto px-4 transition-opacity duration-1000 opacity-0"
      >
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Discover Our <span className="highlight-text">Key Features</span>
          </h2>
          <p className="text-gray-400">
            PathScout provides a comprehensive set of tools and features designed to help students explore and navigate their career journey with confidence and clarity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard 
            icon={Book}
            title="Career Assessment" 
            description="Discover your perfect career match through personality and aptitude tests designed for students."
            delay={100}
            color="bg-pathscout-primary/80"
            hoverColor="bg-pathscout-primary"
          />
          
          <FeatureCard 
            icon={Target}
            title="Skill Development" 
            description="Build essential skills with interactive courses, challenges, and progress tracking."
            delay={200}
            color="bg-pathscout-secondary/80"
            hoverColor="bg-pathscout-secondary"
          />
          
          <FeatureCard 
            icon={Puzzle}
            title="Job Simulation" 
            description="Experience different careers through immersive 3D simulations and interactive scenarios."
            delay={300}
            color="bg-pathscout-gold/80"
            hoverColor="bg-pathscout-gold"
          />
          
          <FeatureCard 
            icon={Award}
            title="Alumni Network" 
            description="Connect with mentors and alumni for real-world insights and guidance."
            delay={400}
            color="bg-pathscout-primary/80"
            hoverColor="bg-pathscout-primary"
          />
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
