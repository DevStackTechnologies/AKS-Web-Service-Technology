import React, { useState } from 'react';
import { AksLogo } from '../common/AksLogo';
import { useApp } from '../../context/AppContext';
import { UserCheck, ShieldCheck, Briefcase, ChevronDown, ArrowLeft, Database, Activity, Lock, Settings, Server } from 'lucide-react';

interface AdminNavbarProps {
  onNavigate: (tab: string) => void;
}

export const AdminNavbar: React.FC<AdminNavbarProps> = ({ onNavigate }) => {
  const { role, setRole } = useApp();
  const [roleDropdownOpen, setRoleDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-indigo-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Portal Identity */}
          <div className="flex items-center gap-4">
            <button onClick={() => onNavigate('home')} className="focus:outline-none">
              <AksLogo height={44} />
            </button>
            <div className="h-8 w-[1px] bg-slate-200 hidden sm:block"></div>
            <div className="flex flex-col">
              <span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                System Admin & Governance
              </span>
              <span className="text-xs font-bold text-slate-800">Master Control & Audits</span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-2">
            <button
              onClick={() => onNavigate('admin-dashboard')}
              className="px-3.5 py-2 rounded-xl text-xs font-bold text-indigo-700 bg-indigo-50 border border-indigo-200 flex items-center gap-1.5"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-indigo-600" />
              <span>System Control</span>
            </button>

            <button
              onClick={() => onNavigate('admin-dashboard')}
              className="px-3.5 py-2 rounded-xl text-xs font-bold text-slate-700 hover:text-indigo-600 hover:bg-indigo-50 flex items-center gap-1.5"
            >
              <Activity className="w-3.5 h-3.5 text-emerald-600" />
              <span>Audit Logs</span>
            </button>

            <button
              onClick={() => onNavigate('admin-dashboard')}
              className="px-3.5 py-2 rounded-xl text-xs font-bold text-slate-700 hover:text-indigo-600 hover:bg-indigo-50 flex items-center gap-1.5"
            >
              <Database className="w-3.5 h-3.5 text-purple-600" />
              <span>Database Health</span>
            </button>
          </nav>

          {/* Right Action Switcher */}
          <div className="flex items-center space-x-3">
            
            {/* Role Switcher */}
            <div className="relative">
              <button
                onClick={() => setRoleDropdownOpen(!roleDropdownOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-indigo-50 border border-indigo-300 text-indigo-800 hover:bg-indigo-100 transition-all shadow-sm"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-indigo-600" />
                <span>System Admin Panel</span>
                <ChevronDown className="w-3.5 h-3.5 text-indigo-600" />
              </button>

              {roleDropdownOpen && (
                <div className="absolute right-0 mt-2 w-60 bg-white border border-slate-200 rounded-2xl shadow-xl p-2 z-50 animate-in fade-in">
                  <div className="px-3 py-1 text-[10px] font-black text-slate-400 uppercase tracking-wider">
                    Switch Portal View
                  </div>
                  <button
                    onClick={() => { setRole('candidate'); onNavigate('candidate-dashboard'); setRoleDropdownOpen(false); }}
                    className="w-full flex items-center gap-2 px-3 py-2 text-xs font-bold rounded-xl hover:bg-sky-50 text-left text-slate-700"
                  >
                    <UserCheck className="w-4 h-4 text-sky-600" />
                    Candidate Portal
                  </button>
                  <button
                    onClick={() => { setRole('hr'); onNavigate('hr-dashboard'); setRoleDropdownOpen(false); }}
                    className="w-full flex items-center gap-2 px-3 py-2 text-xs font-bold rounded-xl hover:bg-sky-50 text-left text-slate-700"
                  >
                    <Briefcase className="w-4 h-4 text-blue-600" />
                    HR Recruiter ATS
                  </button>
                  <button
                    onClick={() => { setRole('admin'); onNavigate('admin-dashboard'); setRoleDropdownOpen(false); }}
                    className="w-full flex items-center gap-2 px-3 py-2 text-xs font-bold rounded-xl bg-indigo-50 text-indigo-700 text-left"
                  >
                    <ShieldCheck className="w-4 h-4 text-indigo-600" />
                    System Admin Panel
                  </button>
                </div>
              )}
            </div>

            {/* Exit to Main Website Button */}
            <button
              onClick={() => onNavigate('home')}
              className="px-4 py-2 rounded-full text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-all flex items-center gap-1.5"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Main Website</span>
            </button>

          </div>

        </div>
      </div>
    </header>
  );
};
