import React, { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import FormRenderer from './components/FormRenderer';
import AppsScriptGuide from './components/AppsScriptGuide';
import { ELI_VOLUNTEER_FORM_SCHEMA } from './data/eliFormSchema';

export default function App() {
  const [showGuide, setShowGuide] = useState(false);
  const [appsScriptUrl, setAppsScriptUrl] = useState('');

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF0F4] text-[#2D1B2D]">
      
      {/* Clean White & Pink Navbar */}
      <Navbar showGuide={showGuide} setShowGuide={setShowGuide} />

      {/* Main Form Content */}
      <main className="flex-1 pb-16">
        {showGuide ? (
          <div className="max-w-3xl mx-auto px-4 py-6 space-y-4">
            <div className="pink-card p-6 space-y-3">
              <h2 className="text-lg font-bold text-[#E53350]">Google Apps Script Web App URL</h2>
              <p className="text-xs text-slate-600">
                Paste your deployed Google Apps Script Web App URL below so responses write directly to your Google Sheet:
              </p>
              <input
                type="url"
                placeholder="https://script.google.com/macros/s/.../exec"
                value={appsScriptUrl}
                onChange={(e) => setAppsScriptUrl(e.target.value)}
                className="w-full px-4 py-2.5 pink-input text-xs font-mono"
              />
            </div>
            <AppsScriptGuide schema={ELI_VOLUNTEER_FORM_SCHEMA} />
          </div>
        ) : (
          <FormRenderer appsScriptUrl={appsScriptUrl} />
        )}
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-xs text-pink-400 border-t border-pink-100">
        <p className="font-semibold">
          💖 Engineering Ladies Initiative (ELi 4.0) — Government for the girls, by the girls, with the girls
        </p>
      </footer>

      {/* Vercel Analytics */}
      <Analytics />

    </div>
  );
}
