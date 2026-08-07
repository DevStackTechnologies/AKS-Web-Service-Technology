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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-2xl border border-[#CDD2DA] w-full max-w-4xl overflow-hidden my-8 animate-in zoom-in-95">
        
        {/* Modal Controls */}
        <div className="bg-[#1A2031] text-white px-6 py-4 flex items-center justify-between no-print">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-[#38BDF8]" />
            <h3 className="text-sm font-bold">Internship Certificate Preview</h3>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => window.print()}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0A4EDB] hover:bg-[#139EF8] text-white text-xs font-semibold transition-colors"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Download Certificate</span>
            </button>
            <button onClick={onClose} className="p-1 rounded-lg hover:bg-white/20 text-white">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Certificate Frame */}
        <div className="printable-document p-12 bg-[#FFFFFF] border-[12px] border-[#0A4EDB] relative text-center text-[#1A2031] space-y-6">
          
          {/* Inner Decorative Border */}
          <div className="border-2 border-[#CDD2DA] p-8 rounded-xl space-y-6">
            
            {/* Header Logo */}
            <div className="flex justify-center">
              <AksLogo height={52} />
            </div>

            <div className="space-y-1">
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#139EF8]">
                Certificate of Completion
              </span>
              <h1 className="text-2xl font-extrabold text-[#1A2031]">
                INTERNSHIP EXCELLENCE AWARD
              </h1>
            </div>

            <p className="text-xs text-[#8590A6]">This is to proudly certify that</p>

            <h2 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#0A4EDB] via-[#139EF8] to-[#38BDF8] py-1 border-b border-[#CDD2DA] inline-block px-8">
              {internName}
            </h2>

            <p className="text-xs text-[#1A2031] max-w-xl mx-auto leading-relaxed">
              has successfully completed a comprehensive technology internship in{' '}
              <strong className="text-[#0A4EDB]">{domain}</strong> at AKS Web Service Technologies for the duration of{' '}
              <strong>{duration}</strong>.
            </p>

            <p className="text-xs text-[#8590A6] max-w-lg mx-auto">
              During this period, the candidate demonstrated outstanding technical capability, problem-solving skills, dedication, and exemplary professional conduct.
            </p>

            {/* Verification Code & Signatures */}
            <div className="pt-10 grid grid-cols-3 gap-6 items-end border-t border-[#CDD2DA]">
              <div className="text-left">
                <p className="text-[10px] font-bold text-[#8590A6]">CERTIFICATE ID</p>
                <p className="text-xs font-mono font-bold text-[#0A4EDB]">AKS-CERT-2026-8819</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full border-2 border-[#139EF8] flex items-center justify-center p-1 bg-[#EEF2F7]">
                  <ShieldCheck className="w-10 h-10 text-[#0A4EDB]" />
                </div>
                <span className="text-[9px] text-[#8590A6] mt-1">Verified Digital Stamp</span>
              </div>

              <div className="text-right">
                <div className="h-8 border-b border-[#1A2031] mb-1"></div>
                <p className="font-bold text-xs text-[#1A2031]">Managing Director</p>
                <p className="text-[10px] text-[#8590A6]">AKS Web Service Technologies</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
