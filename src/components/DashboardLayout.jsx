
import React from 'react';
import { User } from 'lucide-react';
import DashboardSidebar from './DashboardSidebar';

const DashboardLayout = ({ children, pageTitle, pageDescription }) => {
  return (
    <div className="min-h-screen bg-pathscout-dark flex">
      <DashboardSidebar />
      
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Top Bar */}
        <div className="bg-pathscout-darkblue/80 backdrop-blur-lg border-b border-white/10 p-4 flex justify-between items-center sticky top-0 z-10">
          <h1 className="text-xl font-bold text-white md:hidden">
            PathScout
          </h1>
          
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-pathscout-primary/20 flex items-center justify-center">
              <User className="w-5 h-5 text-pathscout-primary" />
            </div>
            <div className="ml-3 hidden sm:block">
              <p className="text-sm font-medium text-white">Alex Johnson</p>
              <p className="text-xs text-gray-400">Grade 10 Student</p>
            </div>
          </div>
        </div>
        
        {/* Dashboard Content */}
        <div className="p-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">{pageTitle}</h1>
            <p className="text-gray-400">{pageDescription}</p>
          </div>
          
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
