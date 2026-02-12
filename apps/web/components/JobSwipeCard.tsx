import React from 'react';

export interface JobSwipeCardProps {
  job: {
    title: string;
    company: string;
    location: string;
    skills: string[];
    logo?: string;
  };
}

export const JobSwipeCard: React.FC<JobSwipeCardProps> = ({ job }) => (
  <div className="rounded-xl shadow-lg bg-white p-6 flex flex-col items-center gap-2">
    {job.logo && <img src={job.logo} alt={job.company + ' logo'} className="w-16 h-16 object-contain mb-2" />}
    <h2 className="text-xl font-bold">{job.title}</h2>
    <div className="text-gray-600">{job.company}</div>
    <div className="text-gray-500 text-sm">{job.location}</div>
    <div className="flex flex-wrap gap-2 mt-2">
      {job.skills.map((skill) => (
        <span key={skill} className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">
          {skill}
        </span>
      ))}
    </div>
  </div>
);
