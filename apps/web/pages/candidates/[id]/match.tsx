import React from "react";
import { Radar } from "react-chartjs-2";
import { motion } from "framer-motion";
import { User, Video } from "lucide-react";
import { VerificationSignal } from "../../../components/VerificationSignal";

const radarData = {
  labels: ["Communication", "Tech", "Leadership", "Creativity", "Adaptability", "Teamwork"],
  datasets: [
    {
      label: "Candidate",
      data: [85, 92, 78, 88, 80, 90],
      backgroundColor: "rgba(59, 130, 246, 0.15)",
      borderColor: "#3B82F6",
      borderWidth: 2,
      pointBackgroundColor: "#3B82F6",
    },
    {
      label: "Role Ideal",
      data: [80, 95, 80, 85, 85, 95],
      backgroundColor: "rgba(30, 58, 138, 0.08)",
      borderColor: "#1E3A8A",
      borderWidth: 2,
      pointBackgroundColor: "#1E3A8A",
    },
  ],
};

const radarOptions = {
  plugins: {
    legend: { display: false },
  },
  scales: {
    r: {
      angleLines: { color: "#E5E7EB" },
      grid: { color: "#E5E7EB" },
      pointLabels: { color: "#6B7280", font: { size: 14 } },
      min: 0,
      max: 100,
      ticks: { display: false },
    },
  },
};

export default function CandidateMatchScreen() {
  return (
    <div className="min-h-screen bg-brand-surface py-20 px-4">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        {/* Radar Chart Card */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="bg-white border border-gray-border rounded-xl shadow-premium p-8 flex flex-col"
        >
          <div className="flex items-center justify-between gap-3 mb-6">
            <div className="flex items-center gap-3">
              <User className="w-6 h-6 text-brand-primary" />
              <h2 className="text-2xl font-bold text-gray-heading">Skill Match</h2>
            </div>
            <VerificationSignal />
          </div>
          <Radar data={radarData} options={radarOptions} className="!max-w-[400px] mx-auto" />
          <div className="mt-8 text-center">
            <span className="inline-block bg-blue-50 text-brand-primary text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
              89% Overall Match
            </span>
          </div>
        </motion.div>

        {/* Vibe Check Card */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="bg-white border border-gray-border rounded-xl shadow-premium p-8 flex flex-col"
        >
          <div className="flex items-center gap-3 mb-6">
            <Video className="w-6 h-6 text-brand-primary" />
            <h2 className="text-2xl font-bold text-gray-heading">Vibe Check</h2>
          </div>
          <div className="aspect-video bg-slate-50 border border-gray-border rounded-lg flex items-center justify-center mb-6">
            {/* Replace with actual video or thumbnail */}
            <span className="text-gray-400 text-lg">[Video Pitch Placeholder]</span>
          </div>
          <div className="space-y-3">
            <p className="text-gray-heading font-semibold">Summary</p>
            <p className="text-gray-body text-base">
              “Alex’s communication and leadership skills are outstanding. Their video pitch demonstrates high energy, clarity, and a strong cultural fit for fast-paced teams.”
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
