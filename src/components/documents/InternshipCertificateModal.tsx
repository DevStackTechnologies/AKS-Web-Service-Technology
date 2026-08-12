import React from 'react';
import { AksLogo } from '../common/AksLogo';
import { Printer, X, Award, ShieldCheck } from 'lucide-react';

interface InternshipCertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  internName?: string;
  domain?: string;
  duration?: string;
}

export const InternshipCertificateModal: React.FC<InternshipCertificateModalProps> = ({
  isOpen,
  onClose,
  internName = 'Akash Kumar',
  domain = 'Web Development & Modern React Architecture',
  duration = '3 Months (May 2026 - July 2026)'
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 bg-black/75 backdrop-blur-sm overflow-y-auto">
      <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-[#CDD2DA] w-full max-w-4xl overflow-hidden my-auto max-h-[92vh] flex flex-col animate-in zoom-in-95">
        
        {/* Modal Controls - Fixed Header */}
        <div className="bg-[#1A2031] text-white px-4 sm:px-6 py-3.5 flex items-center justify-between no-print flex-shrink-0">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-[#38BDF8]" />
            <h3 className="text-xs sm:text-sm font-bold truncate">Internship Certificate Preview</h3>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => window.print()}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0A4EDB] hover:bg-[#139EF8] text-white text-[11px] sm:text-xs font-semibold transition-colors shadow-sm"
            >
              <Printer className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">Print / Download Certificate</span>
              <span className="sm:hidden">Print</span>
            </button>
            <button 
              onClick={onClose} 
              className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              title="Close"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* Printable Certificate Frame - Scrollable and Adaptive */}
        <div className="printable-document p-3 sm:p-6 md:p-8 bg-[#FFFFFF] border-4 sm:border-[8px] md:border-[12px] border-[#0A4EDB] relative text-center text-[#1A2031] overflow-y-auto overflow-x-hidden">
          
          {/* Inner Decorative Border */}
          <div className="border-2 border-[#CDD2DA] p-4 sm:p-6 md:p-8 rounded-xl space-y-4 sm:space-y-6">
            
            {/* Header Logo */}
            <div className="flex justify-center">
              <AksLogo height={42} />
            </div>

            <div className="space-y-1">
              <span className="text-[9px] sm:text-[11px] font-bold tracking-[0.2em] sm:tracking-[0.3em] uppercase text-[#139EF8]">
                Certificate of Completion
              </span>
              <h1 className="text-lg sm:text-2xl md:text-3xl font-extrabold text-[#1A2031] tracking-tight">
                INTERNSHIP EXCELLENCE AWARD
              </h1>
            </div>

            <p className="text-[11px] sm:text-xs text-[#8590A6]">This is to proudly certify that</p>

            <div className="py-1">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#0A4EDB] via-[#139EF8] to-[#38BDF8] py-1 border-b-2 border-[#CDD2DA] inline-block px-4 sm:px-8 max-w-full break-words">
                {internName}
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-[#1A2031] max-w-xl mx-auto leading-relaxed px-2">
              has successfully completed a comprehensive technology internship in{' '}
              <strong className="text-[#0A4EDB]">{domain}</strong> at TecVor Technologies for the duration of{' '}
              <strong>{duration}</strong>.
            </p>

            <p className="text-[11px] sm:text-xs text-[#8590A6] max-w-lg mx-auto leading-relaxed px-2">
              During this period, the candidate demonstrated outstanding technical capability, problem-solving skills, dedication, and exemplary professional conduct.
            </p>

            {/* Verification Code & Signatures */}
            <div className="pt-6 sm:pt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 items-center sm:items-end border-t border-[#CDD2DA]">
              <div className="text-center sm:text-left space-y-0.5">
                <p className="text-[9px] sm:text-[10px] font-bold text-[#8590A6] uppercase tracking-wider">CERTIFICATE ID</p>
                <p className="text-xs sm:text-sm font-mono font-black text-[#0A4EDB]">TECVOR-CERT-2026-8819</p>
              </div>

              <div className="flex flex-col items-center justify-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-[#139EF8] flex items-center justify-center p-1 bg-[#EEF2F7] shadow-sm">
                  <ShieldCheck className="w-7 h-7 sm:w-8 sm:h-8 text-[#0A4EDB]" />
                </div>
                <span className="text-[8px] sm:text-[9px] font-bold text-[#8590A6] mt-1">Verified Digital Stamp</span>
              </div>

              <div className="text-center sm:text-right space-y-0.5">
                <div className="h-6 sm:h-8 border-b border-[#1A2031] mb-1 mx-auto sm:ml-auto sm:mr-0 w-32"></div>
                <p className="font-bold text-xs sm:text-sm text-[#1A2031]">Managing Director</p>
                <p className="text-[9px] sm:text-[10px] text-[#8590A6]">TecVor Technologies</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
