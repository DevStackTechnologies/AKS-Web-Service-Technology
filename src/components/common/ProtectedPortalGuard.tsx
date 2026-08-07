import React from 'react';
import { ShieldAlert, Lock, ArrowLeft, KeyRound } from 'lucide-react';
import { AksLogo } from './AksLogo';

interface ProtectedPortalGuardProps {
  portalName: 'HR Recruiter ATS' | 'System Admin Panel' | 'Candidate Workspace';
  requiredRole: 'hr' | 'admin' | 'candidate';
  onOpenAuth: () => void;
  onNavigateHome: () => void;
}

export const ProtectedPortalGuard: React.FC<ProtectedPortalGuardProps> = ({
  portalName,
  requiredRole,
  onOpenAuth,
  onNavigateHome,
}) => {
  return (
    <div className="min-h-[75vh] flex items-center justify-center p-4 bg-slate-50">
      <div className="w-full max-w-lg bg-white border border-slate-200 rounded-3xl p-8 text-center space-y-6 shadow-xl">
        <div className="flex justify-center mb-2">
          <AksLogo height={44} />
        </div>

        <div className="w-16 h-16 mx-auto rounded-full bg-rose-50 border border-rose-200 flex items-center justify-center">
          <Lock className="w-8 h-8 text-rose-600" />
        </div>

        <div className="space-y-2">
          <span className="text-[10px] font-black uppercase tracking-widest text-rose-600 px-3 py-1 rounded-full bg-rose-50 border border-rose-200">
            Restricted Staff Portal
          </span>
          <h2 className="text-2xl font-black text-slate-900">{portalName} Access Denied</h2>
          <p className="text-slate-600 text-xs max-w-sm mx-auto leading-relaxed">
            This internal portal is restricted to authorized <span className="font-bold text-slate-900 capitalize">{requiredRole}</span> staff members. Public website visitors cannot view internal company records.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-left text-xs text-slate-600 space-y-1">
          <div className="font-bold text-slate-800 flex items-center gap-1.5">
            <ShieldAlert className="w-4 h-4 text-amber-500" /> Enterprise Security Protocol:
          </div>
          <p>Multi-factor authentication & verified employee credentials are required to unlock access.</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button
            onClick={onOpenAuth}
            className="flex-1 py-3 rounded-2xl font-black text-xs text-white bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 shadow-md hover:opacity-90 transition-all flex items-center justify-center gap-2"
          >
            <KeyRound className="w-4 h-4" /> Sign In as {requiredRole.toUpperCase()}
          </button>
          
          <button
            onClick={onNavigateHome}
            className="py-3 px-5 rounded-2xl font-bold text-xs text-slate-700 bg-slate-100 hover:bg-slate-200 transition-all flex items-center justify-center gap-1.5"
          >
            <ArrowLeft className="w-4 h-4" /> Return to Main Website
          </button>
        </div>
      </div>
    </div>
  );
};
