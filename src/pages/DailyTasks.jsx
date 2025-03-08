
import React from 'react';
import DashboardLayout from '../components/DashboardLayout';
import { Calendar, CheckCircle, Circle, Clock, Trophy } from 'lucide-react';
import { Button } from "@/components/ui/button";

const TaskCard = ({ title, description, dueTime, completed }) => {
  return (
    <div className={`glass rounded-xl p-5 border ${completed ? 'border-green-500/30' : 'border-white/10'} mb-4`}>
      <div className="flex items-start">
        <div className="mr-3 mt-1">
          {completed ? (
            <CheckCircle className="w-5 h-5 text-green-500" />
          ) : (
            <Circle className="w-5 h-5 text-pathscout-primary" />
          )}
        </div>
        <div className="flex-1">
          <h3 className={`font-medium ${completed ? 'text-gray-400 line-through' : 'text-white'}`}>{title}</h3>
          <p className={`text-sm ${completed ? 'text-gray-500 line-through' : 'text-gray-400'}`}>{description}</p>
        </div>
        <div className="flex items-center text-sm text-gray-500 ml-2">
          <Clock className="w-4 h-4 mr-1" />
          <span>{dueTime}</span>
        </div>
      </div>
    </div>
  );
};

const DailyTasks = () => {
  return (
    <DashboardLayout 
      pageTitle="Daily Tasks" 
      pageDescription="Complete daily challenges to earn rewards and build skills"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="glass rounded-xl p-6 mb-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-white flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-pathscout-primary" />
                Today's Tasks
              </h2>
              <span className="text-sm px-3 py-1 rounded-full bg-pathscout-primary/20 text-pathscout-primary">
                3 Remaining
              </span>
            </div>
            
            <TaskCard 
              title="Complete Career Assessment Quiz" 
              description="Take Part 2 of your career personality assessment" 
              dueTime="9:00 AM"
              completed={true}
            />
            
            <TaskCard 
              title="Watch 'Introduction to Web Design' Video" 
              description="Learn the basics of UI/UX principles in the skill development section" 
              dueTime="11:00 AM"
              completed={false}
            />
            
            <TaskCard 
              title="Try the Software Developer Simulation" 
              description="Experience a day in the life of a programmer in our virtual office" 
              dueTime="2:00 PM"
              completed={false}
            />
            
            <TaskCard 
              title="Connect with an Alumni Mentor" 
              description="Reach out to Sarah Martinez for advice on technology careers" 
              dueTime="4:00 PM"
              completed={false}
            />
            
            <TaskCard 
              title="Read About Data Science Careers" 
              description="Explore the career path and requirements for data scientists" 
              dueTime="5:00 PM"
              completed={false}
            />
          </div>
          
          <div className="glass rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-4">Upcoming Tasks</h2>
            
            <div className="space-y-4">
              <div className="flex items-center p-3 bg-white/5 rounded-lg">
                <div className="w-10 h-10 rounded-full bg-pathscout-gold/20 flex items-center justify-center mr-3">
                  <Calendar className="w-5 h-5 text-pathscout-gold" />
                </div>
                <div>
                  <h3 className="text-white font-medium">Tomorrow's Career Workshop</h3>
                  <p className="text-sm text-gray-400">Join a live session with industry professionals</p>
                </div>
                <Button size="sm" variant="outline" className="ml-auto text-gray-400 border-white/10 hover:text-white hover:bg-white/5">
                  Set Reminder
                </Button>
              </div>
              
              <div className="flex items-center p-3 bg-white/5 rounded-lg">
                <div className="w-10 h-10 rounded-full bg-pathscout-secondary/20 flex items-center justify-center mr-3">
                  <Calendar className="w-5 h-5 text-pathscout-secondary" />
                </div>
                <div>
                  <h3 className="text-white font-medium">Weekly Progress Review</h3>
                  <p className="text-sm text-gray-400">Check your achievement stats and set new goals</p>
                </div>
                <Button size="sm" variant="outline" className="ml-auto text-gray-400 border-white/10 hover:text-white hover:bg-white/5">
                  Set Reminder
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="glass rounded-xl p-6 h-fit">
          <div className="flex items-center mb-6">
            <Trophy className="w-6 h-6 text-pathscout-gold mr-2" />
            <h2 className="text-xl font-bold text-white">Your Achievements</h2>
          </div>
          
          <div className="space-y-4">
            <div className="p-4 bg-white/5 rounded-lg border border-pathscout-gold/30">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium text-white">Current Streak</h3>
                <span className="text-pathscout-gold font-bold text-xl">5 days</span>
              </div>
              <p className="text-sm text-gray-400">Keep completing daily tasks to maintain your streak!</p>
            </div>
            
            <div className="p-4 bg-white/5 rounded-lg">
              <h3 className="font-medium text-white mb-3">Weekly Progress</h3>
              <div className="grid grid-cols-7 gap-1">
                {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
                  <div key={i} className="text-center">
                    <div className={`w-8 h-8 rounded-full mx-auto mb-1 flex items-center justify-center ${i < 5 ? 'bg-pathscout-primary' : 'bg-white/10'}`}>
                      {i < 5 && <CheckCircle className="w-4 h-4 text-white" />}
                    </div>
                    <span className="text-xs text-gray-400">{day}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="p-4 bg-white/5 rounded-lg">
              <h3 className="font-medium text-white mb-3">Recent Badges</h3>
              <div className="grid grid-cols-3 gap-2">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-pathscout-primary/20 flex items-center justify-center mx-auto mb-1">
                    <span className="text-pathscout-primary font-bold">1</span>
                  </div>
                  <span className="text-xs text-gray-400">First Day</span>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-pathscout-secondary/20 flex items-center justify-center mx-auto mb-1">
                    <span className="text-pathscout-secondary font-bold">Q</span>
                  </div>
                  <span className="text-xs text-gray-400">Quiz Pro</span>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-pathscout-gold/20 flex items-center justify-center mx-auto mb-1">
                    <span className="text-pathscout-gold font-bold">5</span>
                  </div>
                  <span className="text-xs text-gray-400">5-Day Streak</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DailyTasks;
