import React from 'react';
import { Code2 } from 'lucide-react';

export default function Navbar({ showGuide, setShowGuide }) {
  return (
    <header className="bg-white/90 backdrop-blur-md border-b border-pink-100 sticky top-0 z-50 py-3 shadow-xs">
      <div className="max-w-3xl mx-auto px-4 flex items-center justify-between">
        
        {/* Official ELi Logo & Name */}
        <div className="flex items-center space-x-3">
          <img 
            src="/eli-logo.png" 
            alt="ELi Logo" 
            className="w-10 h-10 rounded-full shadow-sm object-cover" 
          />
          <div>
            <h1 className="font-display font-extrabold text-lg text-[#E53350] tracking-tight flex items-center space-x-1.5">
              <span>ELi</span>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-pink-100 text-[#E53350] border border-pink-200">
                4.0
              </span>
            </h1>
            <p className="text-[11px] text-slate-500 font-medium">Engineering Ladies Initiative</p>
          </div>
        </div>

        {/* Minimal Setup Link */}
        <button
          onClick={() => setShowGuide(!showGuide)}
          className="text-xs font-semibold text-[#E53350] hover:bg-pink-100/80 bg-pink-50 px-3.5 py-1.5 rounded-full border border-pink-200 transition-all flex items-center space-x-1.5"
        >
          <Code2 className="w-3.5 h-3.5" />
          <span>{showGuide ? 'Back to Form' : 'Google Sheets Webhook'}</span>
        </button>

      </div>
    </header>
  );
}
