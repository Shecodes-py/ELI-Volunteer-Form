import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Send, RefreshCw } from 'lucide-react';
import TeamSelectorCard from './TeamSelectorCard';

const ENGINEERING_DEPARTMENTS = [
  "Biomedical Engineering",
  "Chemical Engineering",
  "Civil and Environmental Engineering",
  "Computer Engineering",
  "Electrical and Electronics Engineering",
  "Mechanical Engineering",
  "Metallurgical and Materials Engineering",
  "Petroleum and Gas Engineering",
  "Systems Engineering",
  "Not in Engineering / Other Faculty"
];

export default function FormRenderer({ appsScriptUrl }) {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    engineering_dept: '',
    non_engineering: '',
    level: '',
    role: '',
    why_join: '',
    skills: '',
    previous_volunteering: '',
    time_commitment: ''
  });

  const [selectedTeams, setSelectedTeams] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (selectedTeams.length === 0) {
      setErrorMessage('Please select at least one team you are interested in.');
      return;
    }

    setIsSubmitting(true);

    const payload = {
      ...formData,
      teams_interested: selectedTeams.join(', '),
      submitted_at: new Date().toLocaleString()
    };

    try {
      if (appsScriptUrl) {
        await fetch(appsScriptUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: JSON.stringify(payload)
        });
      } else {
        await new Promise(r => setTimeout(r, 800));
      }

      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#E53350', '#FF85A0', '#FFDE59']
      });

      setIsSubmitted(true);
    } catch (err) {
      console.error(err);
      confetti({ particleCount: 80, spread: 60 });
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  // CLOSING RADAR CELEBRATION SCREEN
  if (isSubmitted) {
    return (
      <div className="max-w-xl mx-auto px-4 py-12">
        <div className="pink-card p-8 sm:p-10 text-center space-y-6">
          
          <img 
            src="/eli-logo.png" 
            alt="ELi Logo" 
            className="w-20 h-20 mx-auto rounded-full shadow-md object-cover" 
          />

          <div className="space-y-2">
            <span className="inline-block px-3 py-1 rounded-full bg-pink-100 text-[#E53350] text-xs font-bold uppercase tracking-wider">
              Application Confirmed
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-[#E53350]">
              YOU’RE OFFICIALLY ON OUR RADAR!
            </h2>
          </div>

          <div className="p-6 rounded-2xl bg-pink-50/70 border border-pink-100 text-slate-800 text-sm leading-relaxed whitespace-pre-line text-left sm:text-center">
            {"Thank you for volunteering with ELi. Your application has been received, and we’re so excited about the possibility of having you on our team.\n\nKeep an eye on your email/WhatsApp for the next steps."}
          </div>

          <button
            onClick={() => {
              setFormData({
                full_name: '', email: '', phone: '', engineering_dept: '', non_engineering: '',
                level: '', role: '', why_join: '', skills: '', previous_volunteering: '', time_commitment: ''
              });
              setSelectedTeams([]);
              setIsSubmitted(false);
            }}
            className="px-6 py-3 rounded-full bg-pink-100 hover:bg-pink-200 text-[#E53350] text-xs font-bold transition-all inline-flex items-center space-x-2"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Submit another response</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
      
      {/* OFFICIAL ELI BANNER HEADER */}
      <div className="rounded-2xl overflow-hidden shadow-md border border-pink-100 bg-white">
        <img 
          src="/eli-banner.png" 
          alt="Engineering Ladies Initiative Banner" 
          className="w-full h-auto object-cover" 
        />
      </div>

      {/* CUTE WELCOME CARD */}
      <div className="pink-card p-6 sm:p-8 space-y-4 border-t-4 border-t-[#E53350]">
        
        <div className="flex items-center space-x-3 border-b border-pink-100 pb-3">
          <img src="/eli-logo.png" alt="ELi Logo" className="w-10 h-10 rounded-full shadow-sm" />
          <div>
            <h3 className="text-base font-extrabold text-[#E53350]">ELi 4.0 Recruitment</h3>
            <p className="text-xs text-slate-500">Engineering Ladies Initiative</p>
          </div>
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold font-display text-[#E53350] leading-tight">
          Hey girl, welcome to ELi!
        </h1>

        <div className="space-y-2 text-slate-700 text-sm sm:text-base leading-relaxed">
          <p className="font-semibold text-[#E53350]">
            We’re so excited that you’re interested in being part of the team.
          </p>
          <p>
            ELi is a community of ambitious women in engineering who are here to connect, grow, create and make things happen and we’d love to have you be part of it.
          </p>
        </div>

        <div className="pt-2 text-[#E53350] font-bold text-sm">
          Ready to join us? Let’s get to know you 💕
        </div>
      </div>

      {/* FORM BODY */}
      <form onSubmit={handleSubmit} className="pink-card p-6 sm:p-8 space-y-6">
        
        {/* Full Name */}
        <div className="space-y-1.5">
          <label className="block text-sm font-bold text-slate-900">
            Full Name <span className="text-[#E53350]">*</span>
          </label>
          <input
            type="text"
            required
            placeholder="Ada Lovelace"
            value={formData.full_name}
            onChange={(e) => handleChange('full_name', e.target.value)}
            className="w-full px-4 py-3 pink-input text-sm"
          />
        </div>

        {/* Email */}
        <div className="space-y-1.5">
          <label className="block text-sm font-bold text-slate-900">
            Email <span className="text-[#E53350]">*</span>
          </label>
          <input
            type="email"
            required
            placeholder="you@example.com"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            className="w-full px-4 py-3 pink-input text-sm"
          />
        </div>

        {/* Phone number */}
        <div className="space-y-1.5">
          <label className="block text-sm font-bold text-slate-900">
            Phone number (WhatsApp) <span className="text-[#E53350]">*</span>
          </label>
          <input
            type="tel"
            required
            placeholder="+234 800 000 0000"
            value={formData.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            className="w-full px-4 py-3 pink-input text-sm"
          />
        </div>

        {/* Engineering Department Dropdown */}
        <div className="space-y-1.5">
          <label className="block text-sm font-bold text-slate-900">
            Are you in engineering? Select your department <span className="text-[#E53350]">*</span>
          </label>
          <select
            required
            value={formData.engineering_dept}
            onChange={(e) => handleChange('engineering_dept', e.target.value)}
            className="w-full px-4 py-3 pink-input text-sm cursor-pointer"
          >
            <option value="" disabled>Select Department...</option>
            {ENGINEERING_DEPARTMENTS.map(dept => (
              <option key={dept} value={dept}>{dept}</option>
            ))}
          </select>
        </div>

        {/* If no, what faculty/department */}
        <div className="space-y-1.5">
          <label className="block text-sm font-bold text-slate-900">
            If not in Engineering, specify your faculty/department
          </label>
          <input
            type="text"
            placeholder="e.g. Computer Science, Faculty of Science"
            value={formData.non_engineering}
            onChange={(e) => handleChange('non_engineering', e.target.value)}
            className="w-full px-4 py-3 pink-input text-sm"
          />
        </div>

        {/* Level */}
        <div className="space-y-1.5">
          <label className="block text-sm font-bold text-slate-900">
            Level <span className="text-[#E53350]">*</span>
          </label>
          <select
            required
            value={formData.level}
            onChange={(e) => handleChange('level', e.target.value)}
            className="w-full px-4 py-3 pink-input text-sm cursor-pointer"
          >
            <option value="" disabled>Select Level...</option>
            <option value="100 Level">100 Level</option>
            <option value="200 Level">200 Level</option>
            <option value="300 Level">300 Level</option>
            <option value="400 Level">400 Level</option>
            <option value="500 Level">500 Level</option>
            <option value="Postgraduate">Postgraduate</option>
            <option value="Alumna">Alumna</option>
          </select>
        </div>

        <hr className="border-pink-100" />

        {/* Which team are you most interested in */}
        <TeamSelectorCard
          selectedTeams={selectedTeams}
          onChange={setSelectedTeams}
        />

        {/* Role selection */}
        <div className="space-y-2 pt-2">
          <label className="block text-sm font-bold text-slate-900">
            Role <span className="text-[#E53350]">*</span>
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {["Team Lead", "Deputy Team Lead", "Team Member"].map(r => (
              <div
                key={r}
                onClick={() => handleChange('role', r)}
                className={`p-3.5 rounded-xl cursor-pointer text-center text-sm font-semibold border transition-all ${
                  formData.role === r
                    ? 'bg-[#E53350] text-white border-[#E53350] shadow-md font-bold'
                    : 'bg-white hover:bg-pink-50 border-pink-200 text-slate-700'
                }`}
              >
                {r}
              </div>
            ))}
          </div>
        </div>

        <hr className="border-pink-100" />

        {/* Why would you want to join ELi 4.0? */}
        <div className="space-y-1.5">
          <label className="block text-sm font-bold text-slate-900">
            Why would you want to join ELi 4.0? <span className="text-[#E53350]">*</span>
          </label>
          <textarea
            required
            rows={3}
            placeholder="Tell us what excites you..."
            value={formData.why_join}
            onChange={(e) => handleChange('why_join', e.target.value)}
            className="w-full px-4 py-3 pink-input text-sm resize-y"
          />
        </div>

        {/* What skills/strength would you bring to the team? */}
        <div className="space-y-1.5">
          <label className="block text-sm font-bold text-slate-900">
            What skills/strength would you bring to the team? <span className="text-[#E53350]">*</span>
          </label>
          <textarea
            required
            rows={3}
            placeholder="Share your strengths..."
            value={formData.skills}
            onChange={(e) => handleChange('skills', e.target.value)}
            className="w-full px-4 py-3 pink-input text-sm resize-y"
          />
        </div>

        {/* Have you ever volunteered or held a leadership role? */}
        <div className="space-y-1.5">
          <label className="block text-sm font-bold text-slate-900">
            Have you ever volunteered or held a leadership role? If yes, share the experience with us <span className="text-[#E53350]">*</span>
          </label>
          <textarea
            required
            rows={3}
            placeholder="Briefly share past roles..."
            value={formData.previous_volunteering}
            onChange={(e) => handleChange('previous_volunteering', e.target.value)}
            className="w-full px-4 py-3 pink-input text-sm resize-y"
          />
        </div>

        {/* How much time can you commit to ELi activities */}
        <div className="space-y-1.5">
          <label className="block text-sm font-bold text-slate-900">
            How much time can you commit to ELi activities <span className="text-[#E53350]">*</span>
          </label>
          <select
            required
            value={formData.time_commitment}
            onChange={(e) => handleChange('time_commitment', e.target.value)}
            className="w-full px-4 py-3 pink-input text-sm cursor-pointer"
          >
            <option value="" disabled>Select Commitment...</option>
            <option value="2 - 4 hours per week">2 - 4 hours per week</option>
            <option value="5 - 8 hours per week">5 - 8 hours per week</option>
            <option value="8+ hours per week">8+ hours per week</option>
          </select>
        </div>

        {errorMessage && (
          <p className="text-xs text-[#E53350] font-bold bg-pink-100 p-3 rounded-xl border border-pink-200">
            {errorMessage}
          </p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 pink-button text-base font-bold flex items-center justify-center space-x-2 disabled:opacity-50"
        >
          {isSubmitting ? (
            <span>Submitting...</span>
          ) : (
            <>
              <span>Submit Application 💖</span>
              <Send className="w-4 h-4" />
            </>
          )}
        </button>

      </form>

    </div>
  );
}
