
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Rocket, User, BookOpen, Briefcase, Target, Users, Calendar, LogOut, ChevronRight } from 'lucide-react';

const DashboardCard = ({ title, description, icon: Icon, linkTo, color }) => {
  return (
    <Link to={linkTo} className="block">
      <div className="glass rounded-xl p-6 h-full card-hover group">
        <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-colors ${color} group-hover:opacity-100`}>
          <Icon className="w-7 h-7 text-white" />
        </div>
        <h3 className="text-xl font-bold mb-2 group-hover:text-white">{title}</h3>
        <p className="text-gray-400 mb-4 group-hover:text-gray-300">{description}</p>
        <div className="flex items-center text-pathscout-primary font-medium">
          <span>Go to {title}</span>
          <ChevronRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
};

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-pathscout-dark flex">
      {/* Sidebar */}
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
          <Link to="/dashboard" className="flex items-center space-x-3 px-4 py-3 rounded-lg bg-white/10 text-white">
            <User className="w-5 h-5" />
            <span>Dashboard</span>
          </Link>
          
          <Link to="/dashboard/career" className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-white/5 hover:text-white transition-colors">
            <Target className="w-5 h-5" />
            <span>Career Assessment</span>
          </Link>
          
          <Link to="/dashboard/skills" className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-white/5 hover:text-white transition-colors">
            <BookOpen className="w-5 h-5" />
            <span>Skill Development</span>
          </Link>
          
          <Link to="/dashboard/job-simulation" className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-white/5 hover:text-white transition-colors">
            <Briefcase className="w-5 h-5" />
            <span>Job Simulation</span>
          </Link>
          
          <Link to="/dashboard/alumni" className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-white/5 hover:text-white transition-colors">
            <Users className="w-5 h-5" />
            <span>Alumni Network</span>
          </Link>
          
          <Link to="/dashboard/daily-tasks" className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-white/5 hover:text-white transition-colors">
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
            <h1 className="text-3xl font-bold text-white mb-2">Welcome back, Alex!</h1>
            <p className="text-gray-400">Continue your career exploration journey.</p>
          </div>
          
          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="glass rounded-xl p-6 flex items-center">
              <div className="w-14 h-14 rounded-xl bg-pathscout-primary/20 flex items-center justify-center mr-4">
                <Target className="w-7 h-7 text-pathscout-primary" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Career Match</p>
                <p className="text-2xl font-bold text-white">Software Developer</p>
              </div>
            </div>
            
            <div className="glass rounded-xl p-6 flex items-center">
              <div className="w-14 h-14 rounded-xl bg-pathscout-secondary/20 flex items-center justify-center mr-4">
                <BookOpen className="w-7 h-7 text-pathscout-secondary" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Skills Progress</p>
                <p className="text-2xl font-bold text-white">72% Complete</p>
              </div>
            </div>
            
            <div className="glass rounded-xl p-6 flex items-center">
              <div className="w-14 h-14 rounded-xl bg-pathscout-gold/20 flex items-center justify-center mr-4">
                <Calendar className="w-7 h-7 text-pathscout-gold" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Daily Tasks</p>
                <p className="text-2xl font-bold text-white">3 Remaining</p>
              </div>
            </div>
          </div>
          
          {/* Feature Cards */}
          <h2 className="text-xl font-bold text-white mb-6">Explore Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <DashboardCard 
              title="Career Assessment" 
              description="Discover careers that match your personality and skills."
              icon={Target}
              linkTo="/dashboard/career"
              color="bg-pathscout-primary/80"
            />
            
            <DashboardCard 
              title="Skill Development" 
              description="Build essential skills with interactive learning paths."
              icon={BookOpen}
              linkTo="/dashboard/skills"
              color="bg-pathscout-secondary/80"
            />
            
            <DashboardCard 
              title="Job Simulation" 
              description="Experience different careers in interactive environments."
              icon={Briefcase}
              linkTo="/dashboard/job-simulation"
              color="bg-pathscout-gold/80"
            />
            
            <DashboardCard 
              title="Alumni Network" 
              description="Connect with professionals who share your interests."
              icon={Users}
              linkTo="/dashboard/alumni"
              color="bg-pathscout-primary/80"
            />
            
            <DashboardCard 
              title="Explore Careers" 
              description="Browse detailed information about different careers."
              icon={Rocket}
              linkTo="/dashboard/explore-careers"
              color="bg-pathscout-secondary/80"
            />
            
            <DashboardCard 
              title="Daily Tasks" 
              description="Complete daily challenges to earn rewards and build skills."
              icon={Calendar}
              linkTo="/dashboard/daily-tasks"
              color="bg-pathscout-gold/80"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
