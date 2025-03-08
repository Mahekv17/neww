
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Rocket, User, BookOpen, Briefcase, Target, Users, Calendar, LogOut } from 'lucide-react';

const DashboardSidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  
  const isActive = (path) => currentPath === path;
  
  return (
    <div className="w-64 bg-pathscout-darkblue border-r border-white/10 p-4 hidden md:block">
      <div className="mb-8">
        <Link to="/" className="flex items-center space-x-2">
          <Rocket className="h-7 w-7 text-pathscout-primary" />
          <span className="text-xl font-heading font-bold text-white">
            Path<span className="text-pathscout-primary">Scout</span>
          </span>
        </Link>
      </div>
      
      <nav className="space-y-1">
        <Link to="/dashboard" className={`flex items-center space-x-3 px-4 py-3 rounded-lg ${isActive('/dashboard') ? 'bg-white/10 text-white' : 'text-gray-400 hover:bg-white/5 hover:text-white transition-colors'}`}>
          <User className="w-5 h-5" />
          <span>Dashboard</span>
        </Link>
        
        <Link to="/dashboard/career" className={`flex items-center space-x-3 px-4 py-3 rounded-lg ${isActive('/dashboard/career') ? 'bg-white/10 text-white' : 'text-gray-400 hover:bg-white/5 hover:text-white transition-colors'}`}>
          <Target className="w-5 h-5" />
          <span>Career Assessment</span>
        </Link>
        
        <Link to="/dashboard/skills" className={`flex items-center space-x-3 px-4 py-3 rounded-lg ${isActive('/dashboard/skills') ? 'bg-white/10 text-white' : 'text-gray-400 hover:bg-white/5 hover:text-white transition-colors'}`}>
          <BookOpen className="w-5 h-5" />
          <span>Skill Development</span>
        </Link>
        
        <Link to="/dashboard/job-simulation" className={`flex items-center space-x-3 px-4 py-3 rounded-lg ${isActive('/dashboard/job-simulation') ? 'bg-white/10 text-white' : 'text-gray-400 hover:bg-white/5 hover:text-white transition-colors'}`}>
          <Briefcase className="w-5 h-5" />
          <span>Job Simulation</span>
        </Link>
        
        <Link to="/dashboard/alumni" className={`flex items-center space-x-3 px-4 py-3 rounded-lg ${isActive('/dashboard/alumni') ? 'bg-white/10 text-white' : 'text-gray-400 hover:bg-white/5 hover:text-white transition-colors'}`}>
          <Users className="w-5 h-5" />
          <span>Alumni Network</span>
        </Link>
        
        <Link to="/dashboard/daily-tasks" className={`flex items-center space-x-3 px-4 py-3 rounded-lg ${isActive('/dashboard/daily-tasks') ? 'bg-white/10 text-white' : 'text-gray-400 hover:bg-white/5 hover:text-white transition-colors'}`}>
          <Calendar className="w-5 h-5" />
          <span>Daily Tasks</span>
        </Link>
      </nav>
      
      <div className="absolute bottom-4 left-4 right-4">
        <Link to="/">
          <Button variant="outline" className="w-full border border-white/10 text-gray-400 hover:bg-white/5 hover:text-white justify-start">
            <LogOut className="w-5 h-5 mr-3" />
            Sign Out
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default DashboardSidebar;
