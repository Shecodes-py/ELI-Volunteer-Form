import React, { useState } from 'react';
import { 
  Layers, 
  Plus, 
  ExternalLink, 
  Copy, 
  Check, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight,
  Crown,
  FileSpreadsheet,
  Globe
} from 'lucide-react';

export default function FormHub({ formsList, currentForm, onSelectForm, onCreateNewForm, setActiveTab }) {
  const [copiedSlug, setCopiedSlug] = useState(null);

  const handleCopyLink = (slug) => {
    const fullUrl = `${window.location.origin}/forms/${slug}`;
    navigator.clipboard.writeText(fullUrl);
    setCopiedSlug(slug);
    setTimeout(() => setCopiedSlug(null), 2000);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 glass-panel p-6 sm:p-8 rounded-2xl border border-white/10">
        <div>
          <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-bold uppercase border border-purple-500/30 mb-2 inline-block">
            Subdomain Route Manager
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
            ELi Active Forms Catalog
          </h1>
          <p className="text-sm text-slate-300 mt-1">
            Host unlimited form paths under <code className="text-pink-400 font-mono">forms.engineeringladies.ng/&lt;path&gt;</code> without buying extra domain names.
          </p>
        </div>

        <button
          onClick={onCreateNewForm}
          className="px-5 py-3 rounded-xl bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white text-sm font-bold flex items-center space-x-2 shadow-lg shadow-pink-600/30 shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span>Create New Mini-Form</span>
        </button>
      </div>

      {/* CATALOG GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {formsList.map((form) => {
          const isActive = currentForm?.id === form.id;

          return (
            <div
              key={form.id}
              className={`gradient-border-card p-6 flex flex-col justify-between space-y-5 transition-all ${
                isActive ? 'ring-2 ring-pink-500 shadow-xl shadow-pink-950/40' : 'hover:scale-[1.01]'
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full bg-pink-500/20 text-pink-300 text-[11px] font-bold border border-pink-500/30">
                    {form.badge || 'ELi Form'}
                  </span>
                  {isActive && (
                    <span className="flex items-center space-x-1 text-[11px] font-bold text-emerald-400">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Active</span>
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-white font-display leading-snug">
                  {form.title}
                </h3>

                <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                  {form.welcome?.body || form.welcome?.subheading || 'Mini form site'}
                </p>

                {/* Subdomain URL tag */}
                <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300 flex items-center justify-between">
                  <span className="text-pink-400 truncate">/forms/{form.slug}</span>
                  <button
                    onClick={() => handleCopyLink(form.slug)}
                    className="text-slate-400 hover:text-white p-1"
                    title="Copy full URL"
                  >
                    {copiedSlug === form.slug ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-2 flex items-center gap-2 border-t border-white/10">
                <button
                  onClick={() => {
                    onSelectForm(form);
                    setActiveTab('view');
                  }}
                  className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center space-x-1.5 ${
                    isActive
                      ? 'bg-pink-600 text-white shadow-md shadow-pink-600/30'
                      : 'bg-slate-800 hover:bg-slate-700 text-slate-200'
                  }`}
                >
                  <span>Open Form</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => {
                    onSelectForm(form);
                    setActiveTab('builder');
                  }}
                  className="py-2 px-3 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 text-xs font-semibold"
                >
                  Edit Copy
                </button>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
}
