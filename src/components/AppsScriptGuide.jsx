import React, { useState } from 'react';
import { generateAppsScriptCode } from '../utils/appsScriptGenerator';
import { Code2, Copy, Check, ExternalLink, ShieldAlert, CheckCircle2, Terminal } from 'lucide-react';

export default function AppsScriptGuide({ schema }) {
  const [copied, setCopied] = useState(false);
  const scriptCode = generateAppsScriptCode(schema);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(scriptCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      
      {/* Header */}
      <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 space-y-3">
        <div className="flex items-center space-x-2">
          <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase border border-emerald-500/30">
            Google Sheets Serverless Bridge
          </span>
          <span className="text-xs font-mono text-slate-400">Zero backend setup</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
          Google Apps Script Setup Guide
        </h1>
        <p className="text-sm text-slate-300 leading-relaxed">
          Google Apps Script acts as a secure, free serverless middleware. It receives form submissions from your ELi mini-site and appends them to your Google Sheet in real time.
        </p>
      </div>

      {/* 4 STEP DEPLOYMENT CHECKLIST */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        <div className="glass-card p-5 rounded-xl border border-white/10 space-y-2">
          <div className="flex items-center space-x-2 text-pink-400 font-bold text-sm">
            <span className="w-6 h-6 rounded-full bg-pink-500/20 border border-pink-500/40 flex items-center justify-center text-xs">1</span>
            <span>Create Google Sheet</span>
          </div>
          <p className="text-xs text-slate-300 leading-normal">
            Open <a href="https://sheets.google.com" target="_blank" rel="noreferrer" className="text-pink-400 underline font-semibold">Google Sheets</a> and create a new blank spreadsheet (e.g. <em>"ELi 4.0 Volunteer Responses"</em>).
          </p>
        </div>

        <div className="glass-card p-5 rounded-xl border border-white/10 space-y-2">
          <div className="flex items-center space-x-2 text-purple-400 font-bold text-sm">
            <span className="w-6 h-6 rounded-full bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-xs">2</span>
            <span>Open Apps Script Editor</span>
          </div>
          <p className="text-xs text-slate-300 leading-normal">
            In your Google Sheet menu bar, click <strong>Extensions</strong> &gt; <strong>Apps Script</strong>. Clear any default code in <code>Code.gs</code>.
          </p>
        </div>

        <div className="glass-card p-5 rounded-xl border border-white/10 space-y-2">
          <div className="flex items-center space-x-2 text-indigo-400 font-bold text-sm">
            <span className="w-6 h-6 rounded-full bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-xs">3</span>
            <span>Paste Generated Script</span>
          </div>
          <p className="text-xs text-slate-300 leading-normal">
            Copy the auto-generated code snippet below and paste it directly into the <code>Code.gs</code> editor file. Click 💾 <strong>Save</strong>.
          </p>
        </div>

        <div className="glass-card p-5 rounded-xl border border-white/10 space-y-2">
          <div className="flex items-center space-x-2 text-emerald-400 font-bold text-sm">
            <span className="w-6 h-6 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-xs">4</span>
            <span>Deploy as Web App</span>
          </div>
          <p className="text-xs text-slate-300 leading-normal">
            Click <strong>Deploy</strong> &gt; <strong>New deployment</strong>. Choose <em>Web App</em>. Set <em>Execute as:</em> <strong>Me</strong> and <em>Who has access:</em> <strong className="text-emerald-300">Anyone</strong>.
          </p>
        </div>

      </div>

      {/* GENERATED CODE SNIPPET BOX */}
      <div className="glass-panel rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
        
        <div className="bg-slate-900/90 px-6 py-4 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Terminal className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-mono text-slate-200 font-bold">
              Code.gs — Generated for "{schema.title}"
            </span>
          </div>

          <button
            onClick={handleCopyCode}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold transition-all shadow-md shadow-emerald-950/40 flex items-center space-x-2"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-white" />
                <span>Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copy Apps Script Code</span>
              </>
            )}
          </button>
        </div>

        <div className="p-6 bg-[#0B0817] overflow-x-auto">
          <pre className="text-xs font-mono text-slate-300 leading-relaxed">
            {scriptCode}
          </pre>
        </div>

      </div>

      {/* Security Tip Box */}
      <div className="p-4 rounded-xl bg-purple-950/40 border border-purple-500/30 flex items-start space-x-3 text-xs text-slate-300">
        <ShieldAlert className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
        <div>
          <strong className="text-purple-300 block mb-0.5">Why this architecture works so well:</strong>
          Your Google account credentials and spreadsheet secrets remain 100% private inside Google's servers. The client site only speaks to the public Web App URL, making this method completely safe for Vercel / Netlify static hosting!
        </div>
      </div>

    </div>
  );
}
