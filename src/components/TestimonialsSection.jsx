
import React, { useState, useEffect, useRef } from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "10th Grade Student",
    quote: "PathScout helped me discover my passion for computer science. The career assessment was so accurate!",
    avatar: "https://i.pravatar.cc/150?img=11",
    stars: 5
  },
  {
    id: 2,
    name: "Sophia Chen",
    role: "11th Grade Student",
    quote: "I wasn't sure what I wanted to do, but after using the job simulation, I'm excited about pursuing biotech!",
    avatar: "https://i.pravatar.cc/150?img=5",
    stars: 5
  },
  {
    id: 3,
    name: "Jamal Williams",
    role: "9th Grade Student",
    quote: "The skill-building exercises are fun and actually helped me improve. I feel more prepared for my future.",
    avatar: "https://i.pravatar.cc/150?img=15",
    stars: 4
  },
  {
    id: 4,
    name: "Isabella Garcia",
    role: "High School Teacher",
    quote: "I've recommended PathScout to all my students. It's an incredible tool for career guidance.",
    avatar: "https://i.pravatar.cc/150?img=3",
    stars: 5
  },
  {
    id: 5,
    name: "Tyler Mitchell",
    role: "8th Grade Student",
    quote: "The gamification makes learning about careers actually fun! I love earning badges and competing with friends.",
    avatar: "https://i.pravatar.cc/150?img=4",
    stars: 5
  }
];

const TestimonialCard = ({ testimonial, isActive }) => {
  return (
    <div 
      className={`glass rounded-2xl p-6 transition-all duration-500 h-full ${
        isActive 
          ? 'opacity-100 scale-100 shadow-[0_0_30px_rgba(108,99,255,0.2)]' 
          : 'opacity-50 scale-90'
      }`}
    >
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
            <img 
              src={testimonial.avatar} 
              alt={testimonial.name} 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h4 className="font-bold">{testimonial.name}</h4>
            <p className="text-sm text-gray-400">{testimonial.role}</p>
          </div>
        </div>
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`w-4 h-4 ${i < testimonial.stars ? 'text-pathscout-gold' : 'text-gray-600'}`} 
              fill={i < testimonial.stars ? 'currentColor' : 'none'} 
            />
          ))}
        </div>
      </div>
      
      <div className="relative">
        <Quote className="w-10 h-10 text-pathscout-primary/20 absolute -top-2 -left-2" />
        <p className="text-gray-300 relative z-10 pl-5">{testimonial.quote}</p>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const intervalRef = useRef(null);
  const sectionRef = useRef(null);
  
  const startAutoPlay = () => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => 
        prevIndex === testimonials.length - visibleCards ? 0 : prevIndex + 1
      );
    }, 5000);
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
    
    startAutoPlay();
    
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
      clearInterval(intervalRef.current);
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  // Restart autoplay when activeIndex changes
  useEffect(() => {
    clearInterval(intervalRef.current);
    startAutoPlay();
    return () => clearInterval(intervalRef.current);
  }, [activeIndex]);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-pathscout-primary/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-pathscout-secondary/10 rounded-full filter blur-3xl"></div>
      
      <div 
        ref={sectionRef}
        className="container mx-auto px-4 transition-opacity duration-1000 opacity-0"
      >
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            What Our <span className="highlight-text">Users Say</span>
          </h2>
          <p className="text-gray-400">
            Hear from students who have discovered their career paths and developed valuable skills using PathScout.
          </p>
        </div>
        
        <div className="relative -mx-4">
          <div className="flex overflow-hidden px-4">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * (100 / visibleCards)}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id}
                  className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 p-4"
                >
                  <TestimonialCard 
                    testimonial={testimonial} 
                    isActive={index >= activeIndex && index < activeIndex + visibleCards}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Pagination Dots */}
        <div className="flex justify-center mt-10 space-x-2">
          {[...Array(testimonials.length - visibleCards + 1)].map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                activeIndex === index ? 'bg-pathscout-primary w-10' : 'bg-gray-600 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial set ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
