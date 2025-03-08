
import React, { useEffect, useRef, useState } from 'react';
import { ChevronRight, ChevronLeft, Code, Palette, VideoIcon, ChartBar, Stethoscope, Microscope } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const careerData = [
  {
    id: 1,
    title: "Software Developer",
    icon: Code,
    color: "bg-blue-500",
    description: "Build apps and websites that change the world.",
    skills: ["Problem Solving", "Coding", "Creativity"],
    growth: "22% by 2030"
  },
  {
    id: 2,
    title: "UX/UI Designer",
    icon: Palette,
    color: "bg-purple-500",
    description: "Design beautiful, user-friendly digital experiences.",
    skills: ["Visual Design", "Empathy", "Prototyping"],
    growth: "13% by 2030"
  },
  {
    id: 3,
    title: "Digital Content Creator",
    icon: VideoIcon,
    color: "bg-red-500",
    description: "Create engaging videos, graphics, and digital content.",
    skills: ["Storytelling", "Visual Composition", "Editing"],
    growth: "16% by 2030"
  },
  {
    id: 4,
    title: "Data Analyst",
    icon: ChartBar,
    color: "bg-green-500",
    description: "Find meaningful patterns in data to guide decisions.",
    skills: ["Analytics", "Math", "Communication"],
    growth: "25% by 2030"
  },
  {
    id: 5,
    title: "Healthcare Professional",
    icon: Stethoscope,
    color: "bg-pathscout-primary",
    description: "Help people stay healthy and treat medical conditions.",
    skills: ["Compassion", "Science", "Communication"],
    growth: "15% by 2030"
  },
  {
    id: 6,
    title: "Biotechnologist",
    icon: Microscope,
    color: "bg-pathscout-secondary",
    description: "Develop new medicines and solve biological challenges.",
    skills: ["Research", "Lab Skills", "Critical Thinking"],
    growth: "19% by 2030"
  }
];

const CareerCard = ({ career, isActive }) => {
  const Icon = career.icon;
  
  return (
    <div className={`glass rounded-2xl p-6 md:p-8 transition-all duration-500 card-hover ${isActive ? 'scale-105 shadow-[0_0_30px_rgba(108,99,255,0.2)]' : 'opacity-70 scale-95'}`}>
      <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${career.color}`}>
        <Icon className="w-8 h-8 text-white" />
      </div>
      
      <h3 className="text-2xl font-bold mb-3">{career.title}</h3>
      <p className="text-gray-400 mb-6">{career.description}</p>
      
      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-300 mb-2">Key Skills:</h4>
        <div className="flex flex-wrap gap-2">
          {career.skills.map((skill, index) => (
            <span key={index} className="px-3 py-1 bg-white/5 rounded-full text-xs">
              {skill}
            </span>
          ))}
        </div>
      </div>
      
      <div className="flex justify-between items-center">
        <div>
          <p className="text-xs text-gray-400">Job Growth</p>
          <p className="text-pathscout-secondary font-medium">{career.growth}</p>
        </div>
        <Link to="/dashboard/explore-careers">
          <Button className="button-primary text-sm py-2">Explore</Button>
        </Link>
      </div>
    </div>
  );
};

const CareersExplore = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const sectionRef = useRef(null);
  
  const nextSlide = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === careerData.length - visibleCards ? 0 : prevIndex + 1
    );
  };
  
  const prevSlide = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? careerData.length - visibleCards : prevIndex - 1
    );
  };
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
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
      window.removeEventListener('resize', handleResize);
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="py-24 bg-pathscout-darkblue relative" id="careers">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-pathscout-primary/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-pathscout-secondary/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div 
        ref={sectionRef}
        className="container mx-auto px-4 transition-opacity duration-1000 opacity-0"
      >
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Explore <span className="highlight-text">Career Paths</span>
          </h2>
          <p className="text-gray-400">
            Discover exciting career options that match your interests and skills. Our platform helps you explore diverse opportunities across industries.
          </p>
        </div>
        
        <div className="relative">
          <div className="flex overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * (100 / visibleCards)}%)` }}
            >
              {careerData.map((career, index) => (
                <div 
                  key={career.id}
                  className={`w-full md:w-1/2 lg:w-1/3 flex-shrink-0 p-4 transition-opacity duration-500`}
                >
                  <CareerCard 
                    career={career} 
                    isActive={index >= activeIndex && index < activeIndex + visibleCards}
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide} 
            className="absolute left-2 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full glass flex items-center justify-center text-white z-10 hover:bg-pathscout-primary/30 transition-colors"
            aria-label="Previous career"
          >
            <ChevronLeft />
          </button>
          
          <button 
            onClick={nextSlide} 
            className="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full glass flex items-center justify-center text-white z-10 hover:bg-pathscout-primary/30 transition-colors"
            aria-label="Next career"
          >
            <ChevronRight />
          </button>
        </div>
        
        <div className="flex justify-center mt-10">
          <Link to="/dashboard/explore-careers">
            <Button className="button-primary group">
              View All Careers
              <ChevronRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CareersExplore;
