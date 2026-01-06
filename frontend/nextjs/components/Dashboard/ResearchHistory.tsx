"use client";

import React from "react";
import { fa } from "@/locales/fa";
import { formatDistanceToNow } from "date-fns";

interface ResearchHistoryProps {
  history: any[];
  onSelectResearch: (id: string) => void;
  onDeleteResearch: (id: string) => void;
}

const ResearchHistory: React.FC<ResearchHistoryProps> = ({
  history,
  onSelectResearch,
  onDeleteResearch,
}) => {
  const recentHistory = history.slice(0, 5);

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden sticky top-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 px-6 py-4 border-b border-gray-200">
        <h2 className="text-xl font-bold text-gray-900">
          {fa.history.title}
        </h2>
        <p className="text-sm text-gray-600 mt-1">
          {fa.history.recent}
        </p>
      </div>

      {/* History List */}
      <div className="p-4 space-y-3 max-h-[600px] overflow-y-auto">
        {recentHistory.length === 0 ? (
          <div className="text-center py-12">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <p className="mt-4 text-sm text-gray-500">
              {fa.history.noHistory}
            </p>
          </div>
        ) : (
          recentHistory.map((item, index) => (
            <div
              key={item.id || index}
              className="group bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg p-4 transition-all duration-200 cursor-pointer"
              onClick={() => onSelectResearch(item.id)}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-gray-900 line-clamp-2 mb-2">
                    {item.question}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>
                      {item.timestamp
                        ? formatDistanceToNow(new Date(item.timestamp), {
                            addSuffix: false,
                          }) + " پیش"
                        : "اخیراً"}
                    </span>
                  </div>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onDeleteResearch(item.id);
                  }}
                  className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-red-100 rounded"
                  title={fa.history.delete}
                >
                  <svg
                    className="w-4 h-4 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* View All Button */}
      {history.length > 5 && (
        <div className="px-4 py-3 bg-gray-50 border-t border-gray-200">
          <button className="w-full text-sm font-medium text-teal-600 hover:text-teal-700 transition-colors">
            {fa.history.viewAll} ({history.length})
          </button>
        </div>
      )}
    </div>
  );
};

export default ResearchHistory;
