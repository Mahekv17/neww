
import React from 'react';
import DashboardLayout from '../components/DashboardLayout';
import { Target } from 'lucide-react';
import { Button } from "@/components/ui/button";

const CareerAssessment = () => {
  return (
    <DashboardLayout 
      pageTitle="Career Assessment" 
      pageDescription="Discover careers that match your personality and interests"
    >
      <div className="glass rounded-xl p-8 max-w-3xl mx-auto">
        <div className="w-16 h-16 rounded-xl bg-pathscout-primary/20 flex items-center justify-center mb-6 mx-auto">
          <Target className="w-8 h-8 text-pathscout-primary" />
        </div>
        
        <h2 className="text-2xl font-bold text-white text-center mb-6">Personality & Aptitude Test</h2>
        
        <p className="text-gray-400 mb-8 text-center">
          Take our comprehensive assessment to discover careers that align with your unique traits and abilities.
        </p>
        
        <div className="space-y-6 mb-8">
          <div className="glass p-4 rounded-lg">
            <h3 className="font-medium text-white mb-2">What energizes you more?</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <input type="radio" id="q1-a" name="q1" className="text-pathscout-primary" />
                <label htmlFor="q1-a" className="text-gray-300">Being around people and socializing</label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="radio" id="q1-b" name="q1" className="text-pathscout-primary" />
                <label htmlFor="q1-b" className="text-gray-300">Having time alone to think and recharge</label>
              </div>
            </div>
          </div>
          
          <div className="glass p-4 rounded-lg">
            <h3 className="font-medium text-white mb-2">How do you prefer to learn?</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <input type="radio" id="q2-a" name="q2" className="text-pathscout-primary" />
                <label htmlFor="q2-a" className="text-gray-300">Through practical, hands-on experiences</label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="radio" id="q2-b" name="q2" className="text-pathscout-primary" />
                <label htmlFor="q2-b" className="text-gray-300">By reading and thinking about concepts</label>
              </div>
            </div>
          </div>
          
          <div className="glass p-4 rounded-lg">
            <h3 className="font-medium text-white mb-2">What subjects do you enjoy most in school?</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <input type="radio" id="q3-a" name="q3" className="text-pathscout-primary" />
                <label htmlFor="q3-a" className="text-gray-300">Science and Mathematics</label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="radio" id="q3-b" name="q3" className="text-pathscout-primary" />
                <label htmlFor="q3-b" className="text-gray-300">Art, Music, or Literature</label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="radio" id="q3-c" name="q3" className="text-pathscout-primary" />
                <label htmlFor="q3-c" className="text-gray-300">History and Social Studies</label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="radio" id="q3-d" name="q3" className="text-pathscout-primary" />
                <label htmlFor="q3-d" className="text-gray-300">Physical Education and Sports</label>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center">
          <Button className="button-primary w-full max-w-xs">Continue Assessment</Button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CareerAssessment;
