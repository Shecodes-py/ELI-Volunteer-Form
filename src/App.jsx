import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import FormRenderer from './components/FormRenderer';

export default function App() {
  // Read Webhook URL from Vercel environment variable VITE_APPS_SCRIPT_URL
  const appsScriptUrl = import.meta.env.VITE_APPS_SCRIPT_URL || '';

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF0F4] text-[#2D1B2D]">
      
      {/* Clean White & Pink Navbar */}
      <Navbar />

      {/* Main Public Form Content */}
      <main className="flex-1 pb-16">
        <FormRenderer appsScriptUrl={appsScriptUrl} />
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
