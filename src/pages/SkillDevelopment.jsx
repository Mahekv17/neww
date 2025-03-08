
import React from 'react';
import DashboardLayout from '../components/DashboardLayout';
import { BookOpen, CheckCircle, Circle } from 'lucide-react';
import { Button } from "@/components/ui/button";

const SkillDevelopment = () => {
  return (
    <DashboardLayout 
      pageTitle="Skill Development" 
      pageDescription="Build essential skills with interactive learning paths"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="glass rounded-xl p-6 col-span-1">
          <h3 className="text-xl font-bold text-white mb-4">Learning Paths</h3>
          
          <div className="space-y-3">
            <div className="flex items-center p-3 bg-white/5 rounded-lg border border-white/10">
              <div className="w-10 h-10 rounded-full bg-pathscout-primary/20 flex items-center justify-center mr-3">
                <BookOpen className="w-5 h-5 text-pathscout-primary" />
              </div>
              <div className="flex-1">
                <h4 className="text-white font-medium">Digital Literacy</h4>
                <div className="w-full bg-white/10 h-2 rounded-full mt-1">
                  <div className="bg-pathscout-primary h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
              <span className="text-pathscout-primary font-medium ml-2">75%</span>
            </div>
            
            <div className="flex items-center p-3 bg-white/5 rounded-lg border border-white/10">
              <div className="w-10 h-10 rounded-full bg-pathscout-secondary/20 flex items-center justify-center mr-3">
                <BookOpen className="w-5 h-5 text-pathscout-secondary" />
              </div>
              <div className="flex-1">
                <h4 className="text-white font-medium">Communication</h4>
                <div className="w-full bg-white/10 h-2 rounded-full mt-1">
                  <div className="bg-pathscout-secondary h-2 rounded-full" style={{ width: '45%' }}></div>
                </div>
              </div>
              <span className="text-pathscout-secondary font-medium ml-2">45%</span>
            </div>
            
            <div className="flex items-center p-3 bg-white/5 rounded-lg border border-white/10">
              <div className="w-10 h-10 rounded-full bg-pathscout-gold/20 flex items-center justify-center mr-3">
                <BookOpen className="w-5 h-5 text-pathscout-gold" />
              </div>
              <div className="flex-1">
                <h4 className="text-white font-medium">Problem Solving</h4>
                <div className="w-full bg-white/10 h-2 rounded-full mt-1">
                  <div className="bg-pathscout-gold h-2 rounded-full" style={{ width: '30%' }}></div>
                </div>
              </div>
              <span className="text-pathscout-gold font-medium ml-2">30%</span>
            </div>
          </div>
        </div>
        
        <div className="glass rounded-xl p-6 col-span-1 lg:col-span-2">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-white">Digital Literacy</h3>
            <span className="text-sm font-medium px-3 py-1 rounded-full bg-pathscout-primary/20 text-pathscout-primary">In Progress</span>
          </div>
          
          <p className="text-gray-400 mb-6">Master the essential digital skills needed for modern careers.</p>
          
          <div className="space-y-3 mb-6">
            <div className="flex items-center p-3 bg-white/5 rounded-lg">
              <CheckCircle className="w-5 h-5 text-pathscout-primary mr-3" />
              <div className="flex-1">
                <h4 className="text-white font-medium">Introduction to Computing</h4>
                <p className="text-xs text-gray-400">Completed on May 12, 2023</p>
              </div>
              <Button variant="outline" size="sm" className="ml-2" disabled>Completed</Button>
            </div>
            
            <div className="flex items-center p-3 bg-white/5 rounded-lg">
              <CheckCircle className="w-5 h-5 text-pathscout-primary mr-3" />
              <div className="flex-1">
                <h4 className="text-white font-medium">Internet Basics & Online Safety</h4>
                <p className="text-xs text-gray-400">Completed on May 18, 2023</p>
              </div>
              <Button variant="outline" size="sm" className="ml-2" disabled>Completed</Button>
            </div>
            
            <div className="flex items-center p-3 bg-white/5 rounded-lg border border-pathscout-primary/30">
              <Circle className="w-5 h-5 text-pathscout-primary mr-3" />
              <div className="flex-1">
                <h4 className="text-white font-medium">Using Word Processing Software</h4>
                <p className="text-xs text-gray-400">Unlock skills for creating documents</p>
              </div>
              <Button size="sm" className="ml-2 bg-pathscout-primary hover:bg-pathscout-primary/80">Start</Button>
            </div>
            
            <div className="flex items-center p-3 bg-white/5 rounded-lg opacity-60">
              <Circle className="w-5 h-5 text-gray-400 mr-3" />
              <div className="flex-1">
                <h4 className="text-white font-medium">Spreadsheet Basics</h4>
                <p className="text-xs text-gray-400">Learn to organize and analyze data</p>
              </div>
              <Button variant="outline" size="sm" className="ml-2" disabled>Locked</Button>
            </div>
          </div>
          
          <div className="flex justify-end">
            <Button className="button-primary">Continue Learning</Button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default SkillDevelopment;
