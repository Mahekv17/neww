
import React from 'react';
import DashboardLayout from '../components/DashboardLayout';
import { Briefcase, Computer, Monitor, Users, Coffee, Play } from 'lucide-react';
import { Button } from "@/components/ui/button";

const JobSimulation = () => {
  return (
    <DashboardLayout 
      pageTitle="Job Simulation" 
      pageDescription="Experience different careers in interactive environments"
    >
      <div className="glass rounded-xl p-6 mb-8">
        <div className="flex items-center justify-center mb-6">
          <div className="w-16 h-16 rounded-xl bg-pathscout-primary/20 flex items-center justify-center">
            <Briefcase className="w-8 h-8 text-pathscout-primary" />
          </div>
        </div>
        
        <h2 className="text-2xl font-bold text-white text-center mb-2">Virtual Office Experience</h2>
        <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto">
          Explore different roles in a simulated workplace. Click on different areas of the office to learn about various careers.
        </p>
        
        <div className="relative aspect-video max-w-4xl mx-auto rounded-xl overflow-hidden border-2 border-pathscout-primary/30 mb-8">
          {/* Virtual Office Background */}
          <div className="absolute inset-0 bg-pathscout-darkblue/80 flex items-center justify-center">
            <div className="text-center">
              <Play className="w-16 h-16 text-pathscout-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Start Job Simulation</h3>
              <p className="text-gray-400 mb-4 max-w-md mx-auto">
                Experience a day in the life of different professionals
              </p>
              <Button className="button-primary">Enter Virtual Office</Button>
            </div>
          </div>
          
          {/* This would be replaced with the actual 3D environment in a production app */}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="glass p-4 rounded-lg text-center hover:border hover:border-pathscout-primary/50 transition-colors cursor-pointer group">
            <div className="w-12 h-12 rounded-full bg-pathscout-primary/20 flex items-center justify-center mx-auto mb-3 group-hover:bg-pathscout-primary/40 transition-colors">
              <Computer className="w-6 h-6 text-pathscout-primary" />
            </div>
            <h3 className="font-medium text-white mb-1">Developer Desk</h3>
            <p className="text-xs text-gray-400">Software Engineering</p>
          </div>
          
          <div className="glass p-4 rounded-lg text-center hover:border hover:border-pathscout-secondary/50 transition-colors cursor-pointer group">
            <div className="w-12 h-12 rounded-full bg-pathscout-secondary/20 flex items-center justify-center mx-auto mb-3 group-hover:bg-pathscout-secondary/40 transition-colors">
              <Monitor className="w-6 h-6 text-pathscout-secondary" />
            </div>
            <h3 className="font-medium text-white mb-1">Design Studio</h3>
            <p className="text-xs text-gray-400">Graphic Design</p>
          </div>
          
          <div className="glass p-4 rounded-lg text-center hover:border hover:border-pathscout-gold/50 transition-colors cursor-pointer group">
            <div className="w-12 h-12 rounded-full bg-pathscout-gold/20 flex items-center justify-center mx-auto mb-3 group-hover:bg-pathscout-gold/40 transition-colors">
              <Users className="w-6 h-6 text-pathscout-gold" />
            </div>
            <h3 className="font-medium text-white mb-1">Meeting Room</h3>
            <p className="text-xs text-gray-400">Business & Management</p>
          </div>
          
          <div className="glass p-4 rounded-lg text-center hover:border hover:border-white/20 transition-colors cursor-pointer group">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-white/20 transition-colors">
              <Coffee className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-medium text-white mb-1">Break Room</h3>
            <p className="text-xs text-gray-400">Social Interactions</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default JobSimulation;
