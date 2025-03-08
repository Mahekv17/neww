
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Rocket, Mail, Lock, User, ArrowRight } from 'lucide-react';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock authentication - would be replaced with Firebase Auth
    console.log(isLogin ? 'Logging in...' : 'Signing up...', { email, password, name });
    
    // Redirect to dashboard
    window.location.href = '/dashboard';
  };
  
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Section - Animation/Illustration */}
      <div className="w-full md:w-1/2 bg-pathscout-darkblue p-8 md:p-16 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-pathscout-primary/20 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-pathscout-secondary/20 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="max-w-md text-center relative z-10">
          <Rocket className="w-20 h-20 text-pathscout-primary mx-auto mb-8 animate-float" />
          <h1 className="text-4xl font-bold mb-6 text-white">
            {isLogin ? 'Welcome Back!' : 'Join PathScout Today'}
          </h1>
          <p className="text-gray-300 mb-8">
            {isLogin 
              ? 'Sign in to continue your career exploration journey with PathScout.'
              : 'Create an account and start discovering your perfect career path.'}
          </p>
          <div className="glass rounded-2xl p-8 animate-float" style={{ animationDelay: '1s' }}>
            <div className="text-left">
              <h3 className="text-xl font-bold mb-4">Why Join PathScout?</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300">
                  <div className="w-8 h-8 rounded-full bg-pathscout-primary/20 flex items-center justify-center mr-3">
                    <ArrowRight className="w-4 h-4 text-pathscout-primary" />
                  </div>
                  Personalized career recommendations
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-8 h-8 rounded-full bg-pathscout-primary/20 flex items-center justify-center mr-3">
                    <ArrowRight className="w-4 h-4 text-pathscout-primary" />
                  </div>
                  Interactive skill-building activities
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-8 h-8 rounded-full bg-pathscout-primary/20 flex items-center justify-center mr-3">
                    <ArrowRight className="w-4 h-4 text-pathscout-primary" />
                  </div>
                  Connect with alumni and mentors
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Right Section - Auth Form */}
      <div className="w-full md:w-1/2 bg-pathscout-dark p-8 md:p-16 flex items-center justify-center">
        <div className="w-full max-w-md">
          <div className="mb-10">
            <Link to="/" className="flex items-center space-x-2">
              <Rocket className="h-7 w-7 text-pathscout-primary" />
              <span className="text-xl font-heading font-bold text-white">
                Path<span className="text-pathscout-primary">Scout</span>
              </span>
            </Link>
          </div>
          
          <h2 className="text-2xl font-bold mb-6 text-white">
            {isLogin ? 'Sign in to your account' : 'Create a new account'}
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {!isLogin && (
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-300">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <Input 
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    className="pl-10 bg-white/5 border-white/10 text-white"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required={!isLogin}
                  />
                </div>
              </div>
            )}
            
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input 
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="pl-10 bg-white/5 border-white/10 text-white"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label htmlFor="password" className="text-sm font-medium text-gray-300">Password</label>
                {isLogin && (
                  <a href="#" className="text-sm text-pathscout-primary hover:text-pathscout-primary/80">
                    Forgot password?
                  </a>
                )}
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input 
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className="pl-10 bg-white/5 border-white/10 text-white"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            
            <Button type="submit" className="w-full button-primary">
              {isLogin ? 'Sign In' : 'Create Account'}
            </Button>
            
            <div className="flex items-center justify-center">
              <div className="h-px bg-white/10 w-full"></div>
              <span className="px-4 text-sm text-gray-400">OR</span>
              <div className="h-px bg-white/10 w-full"></div>
            </div>
            
            <Button 
              type="button" 
              variant="outline" 
              className="w-full border border-white/10 text-white hover:bg-white/5"
            >
              <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Continue with Google
            </Button>
          </form>
          
          <p className="mt-8 text-center text-sm text-gray-400">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button 
              onClick={() => setIsLogin(!isLogin)}
              className="ml-1 text-pathscout-primary hover:text-pathscout-primary/80 font-medium"
            >
              {isLogin ? 'Sign up' : 'Sign in'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
