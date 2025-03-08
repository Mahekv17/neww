
import React from 'react';
import DashboardLayout from '../components/DashboardLayout';
import { Rocket, Code, Palette, LineChart, Stethoscope, Building, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const CareerCard = ({ title, field, description, salary, growth, icon: Icon, color }) => {
  return (
    <div className="glass rounded-xl p-6 hover:border hover:border-pathscout-primary/30 transition-all h-full">
      <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center mb-4`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      
      <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
      <p className="text-sm text-pathscout-primary mb-3">{field}</p>
      
      <p className="text-gray-400 text-sm mb-4">{description}</p>
      
      <div className="flex items-center mb-4">
        <div className="flex-1">
          <p className="text-xs text-gray-500">Average Salary</p>
          <p className="text-white font-medium">{salary}</p>
        </div>
        <div className="flex-1">
          <p className="text-xs text-gray-500">Growth</p>
          <p className="text-white font-medium">{growth}</p>
        </div>
      </div>
      
      <Button className="w-full bg-white/5 hover:bg-white/10 text-white justify-between group">
        <span>Learn More</span>
        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Button>
    </div>
  );
};

const ExploreCareers = () => {
  return (
    <DashboardLayout 
      pageTitle="Explore Careers" 
      pageDescription="Browse detailed information about different careers"
    >
      <div className="mb-8">
        <div className="glass rounded-xl p-4 mb-6 flex flex-wrap items-center">
          <input 
            type="text" 
            placeholder="Search for a career..." 
            className="bg-transparent border-none flex-1 min-w-[200px] focus:outline-none text-white py-2" 
          />
          
          <div className="flex space-x-2 ml-auto mt-2 sm:mt-0">
            <select className="bg-pathscout-darkblue border border-white/10 rounded-md px-3 py-2 text-white">
              <option>All Fields</option>
              <option>Technology</option>
              <option>Design</option>
              <option>Business</option>
              <option>Healthcare</option>
            </select>
            
            <Button className="bg-pathscout-primary hover:bg-pathscout-primary/80">Search</Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CareerCard 
            title="Software Developer" 
            field="Technology"
            description="Design, build, and maintain software applications and systems. Work with various programming languages and frameworks."
            salary="$110,000/year"
            growth="+22% by 2030"
            icon={Code}
            color="bg-pathscout-primary/80"
          />
          
          <CareerCard 
            title="UX/UI Designer" 
            field="Design"
            description="Create user-centered designs for digital products. Focus on usability, accessibility, and visual appeal."
            salary="$85,000/year"
            growth="+13% by 2030"
            icon={Palette}
            color="bg-pathscout-secondary/80"
          />
          
          <CareerCard 
            title="Data Analyst" 
            field="Business & Technology"
            description="Collect, process, and analyze data to help organizations make informed decisions."
            salary="$75,000/year"
            growth="+20% by 2030"
            icon={LineChart}
            color="bg-pathscout-gold/80"
          />
          
          <CareerCard 
            title="Healthcare Administrator" 
            field="Healthcare"
            description="Manage healthcare facilities, services, programs, staff, budgets, and relations with other organizations."
            salary="$104,000/year"
            growth="+28% by 2030"
            icon={Stethoscope}
            color="bg-green-500/80"
          />
          
          <CareerCard 
            title="Marketing Specialist" 
            field="Business"
            description="Develop and implement marketing strategies to promote products, services, or brands."
            salary="$73,000/year"
            growth="+10% by 2030"
            icon={Rocket}
            color="bg-purple-500/80"
          />
          
          <CareerCard 
            title="Financial Analyst" 
            field="Finance"
            description="Evaluate investment opportunities and provide guidance for businesses and individuals on investment decisions."
            salary="$95,000/year"
            growth="+9% by 2030"
            icon={Building}
            color="bg-blue-500/80"
          />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ExploreCareers;
