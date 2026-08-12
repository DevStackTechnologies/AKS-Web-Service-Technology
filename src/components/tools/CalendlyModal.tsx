import React, { useState } from 'react';
import { Calendar, X, Clock, Video, CheckCircle2 } from 'lucide-react';

interface CalendlyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CalendlyModal: React.FC<CalendlyModalProps> = ({ isOpen, onClose }) => {
  const [selectedDate, setSelectedDate] = useState(() => new Date().toISOString().split('T')[0]);
  const [selectedTime, setSelectedTime] = useState('10:00 AM IST');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setSubmitted(true);
  };

  const timeSlots = [
    '09:30 AM IST', '10:30 AM IST', '02:00 PM IST', '04:30 PM IST', '07:00 PM IST'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in overflow-y-auto">
      <div className="relative w-full max-w-xl bg-white border border-slate-200 rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-2xl text-slate-900 my-auto max-h-[90vh] overflow-y-auto">
        
        <button
          onClick={() => { setSubmitted(false); onClose(); }}
          className="absolute top-3.5 right-3.5 sm:top-5 sm:right-5 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-100 hover:bg-slate-200 active:scale-95 text-slate-700 hover:text-slate-900 flex items-center justify-center transition-all z-10 shadow-sm"
          title="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div className="space-y-5 sm:space-y-6">
            <div className="flex items-center gap-3 pr-8">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-center flex-shrink-0">
                <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-sky-600" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">Book a 1-on-1 Consultation</h2>
                <p className="text-slate-500 text-xs">Schedule a 30-min strategy call with our Senior Solutions Architect.</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-base sm:text-xs focus:border-sky-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block mb-1">Work Email</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-base sm:text-xs focus:border-sky-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block mb-1">Available Date</label>
                <input
                  type="date"
                  value={selectedDate}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-base sm:text-xs focus:border-sky-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block mb-1">Select Time Slot</label>
                <div className="grid grid-cols-3 gap-2">
                  {timeSlots.map((slot) => (
                    <button
                      type="button"
                      key={slot}
                      onClick={() => setSelectedTime(slot)}
                      className={`p-2 rounded-xl text-xs font-bold border transition-all ${
                        selectedTime === slot
                          ? 'bg-sky-50 border-sky-500 text-sky-700 font-extrabold shadow-sm'
                          : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-2xl font-black text-white bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 shadow-md hover:opacity-90 transition-all flex items-center justify-center gap-2 mt-4"
              >
                <Video className="w-4 h-4" /> Confirm Video Meeting
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8 text-emerald-600" />
            </div>
            <h3 className="text-2xl font-black text-slate-900">Consultation Confirmed!</h3>
            <p className="text-slate-600 text-xs max-w-sm mx-auto">
              We have sent a Google Meet invitation & calendar event to <span className="text-sky-600 font-bold">{email}</span> for {selectedDate} at {selectedTime}.
            </p>
            <button
              onClick={() => { setSubmitted(false); onClose(); }}
              className="px-6 py-2.5 rounded-xl bg-slate-100 text-xs font-bold text-slate-700 hover:bg-slate-200"
            >
              Close
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
