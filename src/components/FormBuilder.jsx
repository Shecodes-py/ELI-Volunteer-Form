import React, { useState } from 'react';
import { 
  Sparkles, 
  Plus, 
  Trash2, 
  Save, 
  Copy, 
  Check, 
  Globe, 
  Code2, 
  HelpCircle,
  FileText,
  Settings
} from 'lucide-react';

export default function FormBuilder({ currentForm, onSaveForm, setActiveTab }) {
  const [schema, setSchema] = useState(JSON.parse(JSON.stringify(currentForm)));
  const [copied, setCopied] = useState(false);

  const handleUpdateBasic = (key, value) => {
    setSchema(prev => ({ ...prev, [key]: value }));
  };

  const handleUpdateWelcome = (key, value) => {
    setSchema(prev => ({
      ...prev,
      welcome: { ...prev.welcome, [key]: value }
    }));
  };

  const handleUpdateClosing = (key, value) => {
    setSchema(prev => ({
      ...prev,
      closing: { ...prev.closing, [key]: value }
    }));
  };

  const handleSave = () => {
    onSaveForm(schema);
    alert(`Form "${schema.title}" saved successfully!`);
    setActiveTab('view');
  };

  const handleCopyJSON = () => {
    navigator.clipboard.writeText(JSON.stringify(schema, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 glass-panel p-6 rounded-2xl border border-white/10">
        <div>
          <div className="flex items-center space-x-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-bold uppercase border border-indigo-500/30">
              Form Customizer
            </span>
            <span className="text-xs text-slate-400 font-mono">slug: /{schema.slug}</span>
          </div>
          <h1 className="text-2xl font-bold font-display text-white">
            Customize Form & Brand Copy
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Modify welcome messages, questions, Google Apps Script URL, and branding without writing code.
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={handleCopyJSON}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center space-x-1.5 border border-white/10"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'Copied JSON' : 'Export JSON'}</span>
          </button>

          <button
            onClick={handleSave}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white text-sm font-bold flex items-center space-x-2 shadow-lg shadow-pink-600/30"
          >
            <Save className="w-4 h-4" />
            <span>Save & Apply</span>
          </button>
        </div>
      </div>

      {/* SECTION 1: GENERAL & GOOGLE SHEET WEBHOOK */}
      <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-4">
        <h2 className="text-lg font-bold text-white flex items-center space-x-2 border-b border-white/10 pb-3">
          <Settings className="w-5 h-5 text-pink-400" />
          <span>Basic Form Settings & Webhook</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-slate-300">Form Title</label>
            <input
              type="text"
              value={schema.title || ''}
              onChange={(e) => handleUpdateBasic('title', e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl glass-input text-xs"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-slate-300">URL Subdomain Path (Slug)</label>
            <div className="flex items-center">
              <span className="px-3 py-2.5 rounded-l-xl bg-slate-900 border border-r-0 border-white/10 text-xs font-mono text-slate-400">
                /
              </span>
              <input
                type="text"
                value={schema.slug || ''}
                onChange={(e) => handleUpdateBasic('slug', e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-r-xl glass-input text-xs font-mono"
              />
            </div>
          </div>
        </div>

        <div className="space-y-1.5 pt-2">
          <label className="block text-xs font-semibold text-slate-300 flex items-center justify-between">
            <span>Google Apps Script Web App URL</span>
            <button 
              onClick={() => setActiveTab('guide')} 
              className="text-[11px] text-pink-400 hover:underline flex items-center space-x-1"
            >
              <Code2 className="w-3 h-3" />
              <span>How to generate script?</span>
            </button>
          </label>
          <input
            type="url"
            placeholder="https://script.google.com/macros/s/AKfycb.../exec"
            value={schema.appsScriptUrl || ''}
            onChange={(e) => handleUpdateBasic('appsScriptUrl', e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl glass-input text-xs font-mono text-pink-300"
          />
          <p className="text-[11px] text-slate-400">
            Paste your deployed Google Apps Script Web App URL here. Leave empty to test in simulation mode.
          </p>
        </div>

        <div className="space-y-1.5 pt-2">
          <label className="block text-xs font-semibold text-slate-300">Roles & Responsibilities Google Doc Link</label>
          <input
            type="url"
            value={schema.rrDocUrl || ''}
            onChange={(e) => handleUpdateBasic('rrDocUrl', e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl glass-input text-xs font-mono"
          />
        </div>
      </div>

      {/* SECTION 2: WELCOME MESSAGE COPY */}
      <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-4">
        <h2 className="text-lg font-bold text-white flex items-center space-x-2 border-b border-white/10 pb-3">
          <Sparkles className="w-5 h-5 text-purple-400" />
          <span>Welcome Header Copy</span>
        </h2>

        <div className="space-y-3">
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-slate-300">Welcome Heading</label>
            <input
              type="text"
              value={schema.welcome?.heading || ''}
              onChange={(e) => handleUpdateWelcome('heading', e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl glass-input text-xs"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-slate-300">Subheading</label>
            <input
              type="text"
              value={schema.welcome?.subheading || ''}
              onChange={(e) => handleUpdateWelcome('subheading', e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl glass-input text-xs"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-slate-300">Body Description</label>
            <textarea
              rows={3}
              value={schema.welcome?.body || ''}
              onChange={(e) => handleUpdateWelcome('body', e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl glass-input text-xs"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-slate-300">CTA Text</label>
            <input
              type="text"
              value={schema.welcome?.cta || ''}
              onChange={(e) => handleUpdateWelcome('cta', e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl glass-input text-xs"
            />
          </div>
        </div>
      </div>

      {/* SECTION 3: CLOSING RADAR SCREEN COPY */}
      <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-4">
        <h2 className="text-lg font-bold text-white flex items-center space-x-2 border-b border-white/10 pb-3">
          <Check className="w-5 h-5 text-emerald-400" />
          <span>Closing Celebration Screen Copy</span>
        </h2>

        <div className="space-y-3">
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-slate-300">Closing Heading</label>
            <input
              type="text"
              value={schema.closing?.heading || ''}
              onChange={(e) => handleUpdateClosing('heading', e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl glass-input text-xs font-bold text-pink-300"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-slate-300">Closing Message</label>
            <textarea
              rows={4}
              value={schema.closing?.message || ''}
              onChange={(e) => handleUpdateClosing('message', e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl glass-input text-xs"
            />
          </div>
        </div>
      </div>

    </div>
  );
}
