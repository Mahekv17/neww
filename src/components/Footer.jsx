
import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Mail, Phone, MapPin, Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-pathscout-darkblue pt-20 pb-10 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/4 w-1/2 h-1/2 bg-pathscout-primary/5 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <Rocket className="h-8 w-8 text-pathscout-primary" />
              <span className="text-2xl font-heading font-bold text-white">
                Path<span className="text-pathscout-primary">Scout</span>
              </span>
            </Link>
            
            <p className="text-gray-400 mb-6">
              Guiding students to discover their perfect career paths through interactive, gamified experiences.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-pathscout-primary/30 transition-colors">
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-pathscout-primary/30 transition-colors">
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-pathscout-primary/30 transition-colors">
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-pathscout-primary/30 transition-colors">
                <Facebook className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-xl mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-gray-400 hover:text-pathscout-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/features" className="text-gray-400 hover:text-pathscout-primary transition-colors">Features</Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-400 hover:text-pathscout-primary transition-colors">Careers</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-pathscout-primary transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/auth" className="text-gray-400 hover:text-pathscout-primary transition-colors">Login</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-xl mb-6">Features</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/dashboard/career" className="text-gray-400 hover:text-pathscout-primary transition-colors">Career Assessment</Link>
              </li>
              <li>
                <Link to="/dashboard/skills" className="text-gray-400 hover:text-pathscout-primary transition-colors">Skill Development</Link>
              </li>
              <li>
                <Link to="/dashboard/job-simulation" className="text-gray-400 hover:text-pathscout-primary transition-colors">Job Simulation</Link>
              </li>
              <li>
                <Link to="/dashboard/alumni" className="text-gray-400 hover:text-pathscout-primary transition-colors">Alumni Network</Link>
              </li>
              <li>
                <Link to="/dashboard/daily-tasks" className="text-gray-400 hover:text-pathscout-primary transition-colors">Daily Tasks</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-xl mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-pathscout-primary mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">123 Education St, Learning City, CA 90210</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-pathscout-primary mr-3 flex-shrink-0" />
                <a href="mailto:info@pathscout.edu" className="text-gray-400 hover:text-pathscout-primary transition-colors">info@pathscout.edu</a>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-pathscout-primary mr-3 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-pathscout-primary transition-colors">(123) 456-7890</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center md:flex md:justify-between md:text-left">
          <p className="text-gray-500 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} PathScout. All rights reserved.
          </p>
          <div className="flex space-x-6 justify-center md:justify-end">
            <a href="#" className="text-gray-500 hover:text-pathscout-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-pathscout-primary transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-pathscout-primary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
