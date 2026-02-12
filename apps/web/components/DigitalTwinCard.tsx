import React from 'react';

interface Candidate {
  name: string;
  title?: string;
  skills: string[];
  verified?: boolean;
  zkpTime?: number;
  avatar?: string;
}

interface DigitalTwinCardProps {
  candidate: Candidate;
  auditionHandler?: () => void;
}

export const DigitalTwinCard: React.FC<DigitalTwinCardProps> = ({ candidate, auditionHandler }) => {
  const { name, title, skills, verified, zkpTime, avatar } = candidate;
  return (
    <div className="relative w-full max-w-md rounded-3xl bg-white/10 backdrop-blur-md border border-cyan-300/40 shadow-xl p-8 flex flex-col items-center gap-6 sm:max-w-full sm:p-4">
      {/* 3D Volumetric Skill Graph Placeholder */}
      <div className="w-40 h-40 mb-4 flex items-center justify-center sm:w-28 sm:h-28">
        {/* Replace with actual 3D graph */}
        <div className="w-full h-full rounded-full bg-gradient-to-br from-sky-400/30 via-cyan-400/20 to-emerald-400/30 shadow-[0_0_40px_rgba(56,189,248,0.25)] animate-pulse" />
      </div>
      {avatar && (
        <img src={avatar} alt={name + ' avatar'} className="w-16 h-16 rounded-full object-cover mb-2" />
      )}
      <div className="text-center">
        <h3 className="text-xl font-bold text-slate-50 mb-1 sm:text-lg">{name}</h3>
        {title && <div className="text-cyan-100 text-sm mb-1">{title}</div>}
        <div className="flex flex-wrap justify-center gap-2 mb-2">
          {skills && skills.map((skill) => (
            <span key={skill} className="rounded-full bg-slate-800/80 px-3 py-1 text-xs font-mono text-cyan-100 border border-cyan-300/30">
              {skill}
            </span>
          ))}
        </div>
        {verified && (
          <div className="flex items-center justify-center gap-2 mt-2">
            <span className="inline-flex items-center gap-1 rounded-full border border-emerald-400/80 bg-emerald-500/10 text-emerald-200 px-2 py-1 text-xs font-mono animate-pulse">
              ZKP Verified
            </span>
            {zkpTime !== undefined && (
              <span className="text-xs font-mono text-emerald-100/90">{zkpTime.toFixed(2)}s</span>
            )}
          </div>
        )}
      </div>
      <button
        onClick={auditionHandler}
        className="mt-2 rounded-lg bg-gradient-to-r from-sky-500 to-emerald-400 px-5 py-2 font-bold text-white shadow-lg hover:scale-105 transition-transform focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2"
        style={{
          minWidth: '180px',
          background: 'linear-gradient(90deg, #1FB6FF 0%, #0099A8 100%)',
          color: '#fff',
          border: '1.5px solid #0099A8',
          textShadow: '0 1px 8px rgba(31,182,255,0.25)',
        }}
      >
        Simulate-Before-Ship
      </button>
    </div>
  );
};
