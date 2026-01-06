"use client";

import React, { useState } from "react";
import { fa } from "@/locales/fa";
import { ChatBoxSettings } from "@/types/data";

interface SearchWizardProps {
  promptValue: string;
  setPromptValue: React.Dispatch<React.SetStateAction<string>>;
  handleDisplayResult: (query: string) => void;
  chatBoxSettings: ChatBoxSettings;
  setChatBoxSettings: React.Dispatch<React.SetStateAction<ChatBoxSettings>>;
}

const SearchWizard: React.FC<SearchWizardProps> = ({
  promptValue,
  setPromptValue,
  handleDisplayResult,
  chatBoxSettings,
  setChatBoxSettings,
}) => {
  const [showAdvanced, setShowAdvanced] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (promptValue.trim()) {
      handleDisplayResult(promptValue);
    }
  };

  const handleSettingChange = (key: keyof ChatBoxSettings, value: any) => {
    setChatBoxSettings((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-50 to-blue-50 px-6 py-4 border-b border-gray-200">
        <h2 className="text-xl font-bold text-gray-900">
          {fa.searchWizard.title}
        </h2>
        <p className="text-sm text-gray-600 mt-1">
          {fa.searchWizard.preferences}
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="p-6 space-y-5">
        {/* Search Input */}
        <div id="search-input">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            پرسش پژوهشی
          </label>
          <textarea
            value={promptValue}
            onChange={(e) => setPromptValue(e.target.value)}
            placeholder={fa.searchWizard.placeholder}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none text-gray-900 placeholder-gray-400"
            rows={4}
            dir="rtl"
          />
          <p className="mt-2 text-xs text-gray-500">
            {fa.messages.disclaimer}
          </p>
        </div>

        {/* Quick Settings */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Report Type */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              {fa.searchWizard.reportType}
            </label>
            <select
              value={chatBoxSettings.report_type}
              onChange={(e) => handleSettingChange("report_type", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm text-gray-900"
              dir="rtl"
            >
              <option value="research_report">{fa.reportTypes.research_report}</option>
              <option value="deep">{fa.reportTypes.deep}</option>
              <option value="multi_agents">{fa.reportTypes.multi_agents}</option>
              <option value="detailed_report">{fa.reportTypes.detailed_report}</option>
            </select>
          </div>

          {/* Report Source */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              {fa.searchWizard.reportSource}
            </label>
            <select
              value={chatBoxSettings.report_source}
              onChange={(e) => handleSettingChange("report_source", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm text-gray-900"
              dir="rtl"
            >
              <option value="web">{fa.reportSources.web}</option>
              <option value="local">{fa.reportSources.local}</option>
              <option value="hybrid">{fa.reportSources.hybrid}</option>
            </select>
          </div>

          {/* Tone */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              {fa.searchWizard.tone}
            </label>
            <select
              value={chatBoxSettings.tone}
              onChange={(e) => handleSettingChange("tone", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm text-gray-900"
              dir="rtl"
            >
              <option value="Objective">{fa.tones.Objective}</option>
              <option value="Formal">{fa.tones.Formal}</option>
              <option value="Analytical">{fa.tones.Analytical}</option>
              <option value="Persuasive">{fa.tones.Persuasive}</option>
              <option value="Informative">{fa.tones.Informative}</option>
              <option value="Explanatory">{fa.tones.Explanatory}</option>
              <option value="Descriptive">{fa.tones.Descriptive}</option>
              <option value="Critical">{fa.tones.Critical}</option>
              <option value="Comparative">{fa.tones.Comparative}</option>
            </select>
          </div>
        </div>

        {/* Advanced Settings Toggle */}
        <button
          type="button"
          onClick={() => setShowAdvanced(!showAdvanced)}
          className="text-sm text-teal-600 hover:text-teal-700 font-medium flex items-center gap-2"
        >
          <svg
            className={`w-4 h-4 transition-transform ${showAdvanced ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
          {fa.searchWizard.advanced}
        </button>

        {/* Advanced Settings */}
        {showAdvanced && (
          <div className="bg-gray-50 rounded-lg p-4 space-y-4 border border-gray-200">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Layout Type
                </label>
                <select
                  value={chatBoxSettings.layoutType || 'copilot'}
                  onChange={(e) => handleSettingChange("layoutType", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 text-sm text-gray-900"
                  dir="rtl"
                >
                  <option value="copilot">Copilot</option>
                  <option value="standard">Standard</option>
                </select>
              </div>

              <div>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={chatBoxSettings.mcp_enabled || false}
                    onChange={(e) => handleSettingChange("mcp_enabled", e.target.checked)}
                    className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                  />
                  <span className="text-sm font-medium text-gray-700">
                    فعال‌سازی MCP
                  </span>
                </label>
              </div>
            </div>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={!promptValue.trim()}
          className="w-full bg-gradient-to-r from-teal-500 to-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-teal-600 hover:to-blue-700 transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {fa.searchWizard.startResearch}
        </button>
      </form>
    </div>
  );
};

export default SearchWizard;
