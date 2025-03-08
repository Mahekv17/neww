
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Rocket, Home } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-pathscout-dark flex flex-col items-center justify-center p-4">
      <div className="text-center">
        <Rocket className="w-20 h-20 text-pathscout-primary mx-auto mb-6 animate-float" />
        
        <h1 className="text-6xl md:text-9xl font-bold mb-4 text-white opacity-20">404</h1>
        
        <h2 className="text-3xl font-bold mb-6 highlight-text">Page Not Found</h2>
        
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          Oops! It seems you've ventured into uncharted territory. Let's get you back on track.
        </p>
        
        <Link to="/">
          <Button className="button-primary">
            <Home className="mr-2 h-5 w-5" />
            Back to Home
          </Button>
        </Link>
      </div>
      
      {/* Background Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 rounded-full bg-pathscout-primary/20 animate-float"></div>
      <div className="absolute bottom-1/4 right-10 w-32 h-32 rounded-full bg-pathscout-secondary/20 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-pathscout-gold/20 animate-pulse-soft"></div>
    </div>
  );
};

export default NotFoundPage;
