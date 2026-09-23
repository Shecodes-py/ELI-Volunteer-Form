import React from 'react';
import { Check, ExternalLink } from 'lucide-react';

const TEAMS_LIST = [
  "Content",
  "Sponsorship",
  "Marketing",
  "Logistics",
  "Training",
  "Operations",
  "Design",
  "Quality Control",
  "External Relations",
  "Web Development"
];

export default function TeamSelectorCard({ selectedTeams = [], onChange, rrDocUrl }) {
  const handleToggle = (team) => {
    let updated = [];
    if (selectedTeams.includes(team)) {
      updated = selectedTeams.filter(t => t !== team);
    } else {
      updated = [...selectedTeams, team];
    }
    onChange(updated);
  };

  return (
    <div className="space-y-4 pt-2">
      
      {/* Label & Description */}
      <div>
        <label className="block text-base font-bold text-slate-900 mb-1">
          Which team are you most interested in <span className="text-[#E53350]">*</span>
        </label>
        <p className="text-xs text-slate-600">
          If you’re not sure of which to join, kindly go through the R and R expected from each teams:
        </p>
        
        {/* R & R Google Doc Link Button */}
        <a
          href={rrDocUrl || "https://docs.google.com/document/d/1dCbhSMp29WAuXs75mYSwqaxSHRCk3fe0s0kRLH7IEKs/edit?usp=drivesdk"}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-1.5 mt-2 px-4 py-1.5 rounded-full bg-white/70 hover:bg-white backdrop-blur-md text-[#E53350] text-xs font-bold border border-pink-200 shadow-xs transition-all hover:scale-[1.02]"
        >
          <span>📄 View Teams R & R Document</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Glassy Interactive Clickable Pink Boxes Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 gap-2.5 pt-1">
        {TEAMS_LIST.map((team) => {
          const isSelected = selectedTeams.includes(team);

          return (
            <div
              key={team}
              onClick={() => handleToggle(team)}
              className={`p-3.5 rounded-2xl cursor-pointer transition-all duration-200 flex items-center justify-between ${
                isSelected
                  ? 'glass-box-selected text-[#E53350] font-bold'
                  : 'glass-box text-slate-700 font-medium'
              }`}
            >
              <span className="text-sm">{team}</span>

              {/* Pink Glassy Tick Box */}
              <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all ${
                isSelected 
                  ? 'bg-[#E53350] border-[#E53350] text-white shadow-sm' 
                  : 'border-pink-300 bg-white/50'
              }`}>
                {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
              </div>
            </div>
          );
        })}
      </div>
      
      {selectedTeams.length === 0 && (
        <p className="text-xs text-[#E53350] font-semibold italic">
          * Tap on the boxes above to select your preferred team(s).
        </p>
      )}

    </div>
  );
}
