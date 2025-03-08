
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X, Moon, Sun, Rocket } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-pathscout-darkblue/80 backdrop-blur-lg py-2 shadow-lg' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <Rocket className="h-8 w-8 text-pathscout-primary" />
          <span className="text-2xl font-heading font-bold text-white">
            Path<span className="text-pathscout-primary">Scout</span>
          </span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-white hover:text-pathscout-primary transition-colors">Home</Link>
          <Link to="/features" className="text-white hover:text-pathscout-primary transition-colors">Features</Link>
          <Link to="/careers" className="text-white hover:text-pathscout-primary transition-colors">Careers</Link>
          <Link to="/about" className="text-white hover:text-pathscout-primary transition-colors">About Us</Link>
          <Link to="/auth">
            <Button className="button-primary">Get Started</Button>
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white focus:outline-none"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass animate-slide-down absolute w-full">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link to="/" className="text-white hover:text-pathscout-primary transition-colors p-2">Home</Link>
            <Link to="/features" className="text-white hover:text-pathscout-primary transition-colors p-2">Features</Link>
            <Link to="/careers" className="text-white hover:text-pathscout-primary transition-colors p-2">Careers</Link>
            <Link to="/about" className="text-white hover:text-pathscout-primary transition-colors p-2">About Us</Link>
            <Link to="/auth" className="p-2">
              <Button className="button-primary w-full">Get Started</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
