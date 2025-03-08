
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AuthPage from "./pages/AuthPage";
import Dashboard from "./pages/Dashboard";
import NotFoundPage from "./pages/NotFoundPage";
import CareerAssessment from "./pages/CareerAssessment";
import SkillDevelopment from "./pages/SkillDevelopment";
import JobSimulation from "./pages/JobSimulation";
import AlumniNetwork from "./pages/AlumniNetwork";
import ExploreCareers from "./pages/ExploreCareers";
import DailyTasks from "./pages/DailyTasks";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/career" element={<CareerAssessment />} />
          <Route path="/dashboard/skills" element={<SkillDevelopment />} />
          <Route path="/dashboard/job-simulation" element={<JobSimulation />} />
          <Route path="/dashboard/alumni" element={<AlumniNetwork />} />
          <Route path="/dashboard/explore-careers" element={<ExploreCareers />} />
          <Route path="/dashboard/daily-tasks" element={<DailyTasks />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
