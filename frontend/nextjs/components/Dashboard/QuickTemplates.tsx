"use client";

import React from "react";
import { fa } from "@/locales/fa";

interface QuickTemplatesProps {
  onTemplateClick: (query: string) => void;
}

const QuickTemplates: React.FC<QuickTemplatesProps> = ({ onTemplateClick }) => {
  const templates = [
    {
      id: 1,
      title: fa.templates.marketAnalysis.title,
      description: fa.templates.marketAnalysis.description,
      query: fa.templates.marketAnalysis.query,
      icon: "📊",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      title: fa.templates.technicalReview.title,
      description: fa.templates.technicalReview.description,
      query: fa.templates.technicalReview.query,
      icon: "⚙️",
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 3,
      title: fa.templates.industryReport.title,
      description: fa.templates.industryReport.description,
      query: fa.templates.industryReport.query,
      icon: "🏭",
      color: "from-green-500 to-teal-500",
    },
    {
      id: 4,
      title: fa.templates.academicResearch.title,
      description: fa.templates.academicResearch.description,
      query: fa.templates.academicResearch.query,
      icon: "🎓",
      color: "from-indigo-500 to-blue-500",
    },
    {
      id: 5,
      title: fa.templates.competitorAnalysis.title,
      description: fa.templates.competitorAnalysis.description,
      query: fa.templates.competitorAnalysis.query,
      icon: "🎯",
      color: "from-orange-500 to-red-500",
    },
    {
      id: 6,
      title: fa.templates.trendAnalysis.title,
      description: fa.templates.trendAnalysis.description,
      query: fa.templates.trendAnalysis.query,
      icon: "📈",
      color: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4">
        {fa.templates.title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {templates.map((template) => (
          <button
            key={template.id}
            onClick={() => onTemplateClick(template.query)}
            className="group relative bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg p-5 hover:shadow-lg transition-all duration-200 text-right overflow-hidden"
          >
            {/* Gradient overlay on hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${template.color} opacity-0 group-hover:opacity-5 transition-opacity duration-200`} />
            
            <div className="relative">
              <div className="flex items-start justify-between mb-3">
                <div className="text-3xl">{template.icon}</div>
                <svg
                  className="w-5 h-5 text-gray-400 group-hover:text-teal-600 transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">
                {template.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {template.description}
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickTemplates;
