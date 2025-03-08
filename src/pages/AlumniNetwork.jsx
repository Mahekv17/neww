
import React from 'react';
import DashboardLayout from '../components/DashboardLayout';
import { Users, Search, MessageCircle, User } from 'lucide-react';
import { Button } from "@/components/ui/button";

const AlumniCard = ({ name, role, company, avatar, status }) => {
  return (
    <div className="glass rounded-xl p-6 hover:border hover:border-pathscout-primary/30 transition-all">
      <div className="flex items-start mb-4">
        <div className="w-16 h-16 rounded-full bg-pathscout-primary/20 flex items-center justify-center mr-4">
          {avatar ? (
            <img src={avatar} alt={name} className="w-full h-full rounded-full object-cover" />
          ) : (
            <User className="w-8 h-8 text-pathscout-primary" />
          )}
        </div>
        <div>
          <h3 className="text-lg font-bold text-white">{name}</h3>
          <p className="text-pathscout-primary text-sm">{role}</p>
          <p className="text-gray-400 text-sm">{company}</p>
        </div>
        <div className="ml-auto">
          <span className={`inline-block w-3 h-3 rounded-full ${status === 'online' ? 'bg-green-500' : 'bg-gray-500'}`}></span>
        </div>
      </div>
      
      <p className="text-gray-400 text-sm mb-4">
        Graduated from PathScout program and now working in the industry. Happy to mentor students interested in this career path.
      </p>
      
      <div className="flex space-x-2">
        <Button variant="outline" className="flex-1 text-gray-400 border-white/10 hover:text-white hover:bg-white/5">
          View Profile
        </Button>
        <Button className="flex-1 bg-pathscout-primary hover:bg-pathscout-primary/80">
          <MessageCircle className="w-4 h-4 mr-2" />
          Connect
        </Button>
      </div>
    </div>
  );
};

const AlumniNetwork = () => {
  return (
    <DashboardLayout 
      pageTitle="Alumni Network" 
      pageDescription="Connect with professionals who share your interests"
    >
      <div className="mb-8">
        <div className="glass rounded-xl p-4 mb-6 flex items-center">
          <Search className="w-5 h-5 text-gray-400 mr-2" />
          <input 
            type="text" 
            placeholder="Search alumni by name, role, or company..." 
            className="bg-transparent border-none w-full focus:outline-none text-white" 
          />
          <Button size="sm" className="ml-2 bg-pathscout-primary hover:bg-pathscout-primary/80">Search</Button>
        </div>
        
        <div className="flex overflow-x-auto pb-2 mb-6 space-x-2">
          <Button className="bg-pathscout-primary hover:bg-pathscout-primary/80">All Alumni</Button>
          <Button variant="outline" className="text-gray-400 border-white/10 hover:text-white hover:bg-white/5 whitespace-nowrap">Software Engineering</Button>
          <Button variant="outline" className="text-gray-400 border-white/10 hover:text-white hover:bg-white/5 whitespace-nowrap">Graphic Design</Button>
          <Button variant="outline" className="text-gray-400 border-white/10 hover:text-white hover:bg-white/5 whitespace-nowrap">Marketing</Button>
          <Button variant="outline" className="text-gray-400 border-white/10 hover:text-white hover:bg-white/5 whitespace-nowrap">Data Science</Button>
          <Button variant="outline" className="text-gray-400 border-white/10 hover:text-white hover:bg-white/5 whitespace-nowrap">Healthcare</Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AlumniCard 
            name="Sarah Martinez" 
            role="Software Engineer" 
            company="Tech Innovations Inc." 
            status="online" 
          />
          
          <AlumniCard 
            name="David Chen" 
            role="UX Designer" 
            company="Creative Studio" 
            status="offline" 
          />
          
          <AlumniCard 
            name="Jordan Smith" 
            role="Marketing Specialist" 
            company="Brand Elevate" 
            status="online" 
          />
          
          <AlumniCard 
            name="Taylor Wilson" 
            role="Data Scientist" 
            company="Analytics Pro" 
            status="online" 
          />
          
          <AlumniCard 
            name="Morgan Lee" 
            role="Healthcare Administrator" 
            company="City Hospital" 
            status="offline" 
          />
          
          <AlumniCard 
            name="Alex Johnson" 
            role="Finance Analyst" 
            company="Global Banking" 
            status="offline" 
          />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AlumniNetwork;
