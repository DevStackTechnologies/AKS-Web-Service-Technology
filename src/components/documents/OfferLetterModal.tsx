import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AksLogo } from '../common/AksLogo';
import { Printer, X, ShieldCheck } from 'lucide-react';

interface OfferLetterModalProps {
  isOpen: boolean;
  onClose: () => void;
  candidateName: string;
  designation: string;
  ctc: string;
  joiningDate: string;
}

export const OfferLetterModal: React.FC<OfferLetterModalProps> = ({
  isOpen,
  onClose,
  candidateName,
  designation,
  ctc,
  joiningDate
}) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', stiffness: 350, damping: 28 }}
            className="bg-white rounded-2xl shadow-2xl border border-[#CDD2DA] w-full max-w-3xl overflow-hidden my-8"
          >
            
            {/* Modal Toolbar (hidden during print) */}
            <div className="bg-[#1A2031] text-white px-6 py-4 flex items-center justify-between no-print">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#38BDF8]" />
                <h3 className="text-sm font-bold">Official Offer Letter Preview</h3>
              </div>
              <div className="flex items-center gap-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handlePrint}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#0A4EDB] hover:bg-[#139EF8] text-white text-xs font-semibold transition-colors shadow-sm"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print / Save PDF</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="p-1 rounded-lg hover:bg-white/20 text-white"
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>
            </div>

            {/* Document Body (Printable Area) */}
            <div className="printable-document p-10 bg-white text-[#1A2031] space-y-6 text-xs leading-relaxed font-sans">
              
              {/* Document Header */}
              <div className="flex items-center justify-between border-b-2 border-[#0A4EDB] pb-6">
                <AksLogo height={46} />
                <div className="text-right">
                  <span className="text-[10px] font-bold tracking-widest text-[#0A4EDB] uppercase block">Ref: AKS/HR/2026/OFFER-8942</span>
                  <span className="text-[10px] text-[#8590A6]">Date: July 29, 2026</span>
                </div>
              </div>

              {/* Recipient Info */}
              <div>
                <p className="font-bold text-sm text-[#1A2031]">{candidateName}</p>
                <p className="text-[#8590A6]">Candidate Ref ID: AKS-CAND-2026-99</p>
                <p className="text-[#8590A6]">India</p>
              </div>

              {/* Letter Title */}
              <div className="text-center py-2.5 bg-[#EEF2F7] rounded-lg border border-[#CDD2DA]">
                <h2 className="text-base font-extrabold text-[#0A4EDB] uppercase tracking-wider">
                  Letter of Appointment & Employment Offer
                </h2>
              </div>

              {/* Content */}
              <p>
                Dear <strong>{candidateName}</strong>,
              </p>

              <p>
                On behalf of <strong>TecVor Technologies</strong>, we are pleased to offer you the position of{' '}
                <strong className="text-[#0A4EDB]">{designation}</strong>. We were thoroughly impressed by your technical skills, experience, and alignment with our core engineering values.
              </p>

              {/* Key Offer Details Box */}
              <div className="grid grid-cols-3 gap-4 bg-gradient-to-r from-[#EEF2F7] to-white p-4 rounded-xl border border-[#CDD2DA]">
                <div>
                  <span className="text-[10px] font-bold uppercase text-[#8590A6] block">Designation</span>
                  <span className="font-bold text-xs text-[#1A2031]">{designation}</span>
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase text-[#8590A6] block">Annual CTC</span>
                  <span className="font-bold text-xs text-[#0A4EDB]">{ctc}</span>
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase text-[#8590A6] block">Joining Date</span>
                  <span className="font-bold text-xs text-[#1A2031]">{joiningDate}</span>
                </div>
              </div>

              {/* Terms & Conditions */}
              <div className="space-y-2">
                <h4 className="font-bold text-xs text-[#1A2031] uppercase tracking-wide">Key Terms & Benefits:</h4>
                <ul className="list-disc pl-5 space-y-1 text-[#8590A6]">
                  <li>You will be eligible for health insurance coverage, annual learning credits, and performance bonuses.</li>
                  <li>Your initial employment location will be Remote (Work From Anywhere / Distributed Global) as per company policy.</li>
                  <li>This offer is contingent upon successful verification of educational and employment credentials.</li>
                </ul>
              </div>

              <p>
                Please sign and return a duplicate copy of this letter within 5 business days as acceptance of this offer.
              </p>

              {/* Signatures */}
              <div className="pt-8 flex items-end justify-between border-t border-[#CDD2DA]">
                <div>
                  <div className="h-10 w-32 border-b border-[#1A2031] mb-1 flex items-end">
                    <span className="text-[10px] font-serif italic text-[#0A4EDB]">Official HR Seal</span>
                  </div>
                  <p className="font-bold text-xs text-[#1A2031]">Head of Human Resources</p>
                  <p className="text-[10px] text-[#8590A6]">TecVor Technologies</p>
                </div>
                <div className="text-right">
                  <div className="h-10 w-32 border-b border-[#CDD2DA] mb-1"></div>
                  <p className="font-bold text-xs text-[#1A2031]">Candidate Signature</p>
                  <p className="text-[10px] text-[#8590A6]">Accepted & Agreed</p>
                </div>
              </div>

              {/* Document Footer */}
              <div className="text-center pt-4 text-[9px] text-[#8590A6] border-t border-[#EEF2F7]">
                TecVor Technologies • www.tecvor.com • Private & Confidential
              </div>

            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

