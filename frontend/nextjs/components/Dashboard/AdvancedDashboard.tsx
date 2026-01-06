"use client";

import React, { useState } from "react";
import { fa } from "@/locales/fa";
import SearchWizard from "./SearchWizard";
import ResearchHistory from "./ResearchHistory";
import QuickTemplates from "./QuickTemplates";
import SettingsModal from "./SettingsModal";
import { ChatBoxSettings } from "@/types/data";

interface AdvancedDashboardProps {
  promptValue: string;
  setPromptValue: React.Dispatch<React.SetStateAction<string>>;
  handleDisplayResult: (query: string) => void;
  chatBoxSettings: ChatBoxSettings;
  setChatBoxSettings: React.Dispatch<React.SetStateAction<ChatBoxSettings>>;
  history: any[];
  onSelectResearch: (id: string) => void;
  onDeleteResearch: (id: string) => void;
}

const AdvancedDashboard: React.FC<AdvancedDashboardProps> = ({
  promptValue,
  setPromptValue,
  handleDisplayResult,
  chatBoxSettings,
  setChatBoxSettings,
  history,
  onSelectResearch,
  onDeleteResearch,
}) => {
  const [showSettings, setShowSettings] = useState(false);

  const handleTemplateClick = (query: string) => {
    setPromptValue(query);
    const element = document.getElementById('search-input');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50" dir="rtl">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                {fa.dashboard.title}
              </h1>
              <p className="mt-1 text-sm text-gray-600">
                {fa.dashboard.subtitle}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setShowSettings(true)}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {fa.buttons.settings}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Search Wizard */}
          <div className="lg:col-span-2 space-y-6">
            {/* Welcome Card */}
            <div className="bg-gradient-to-r from-teal-500 to-blue-600 rounded-xl p-6 text-white shadow-lg">
              <h2 className="text-2xl font-bold mb-2">
                {fa.dashboard.welcomeMessage}
              </h2>
              <p className="text-teal-50">
                سامانه پژوهش مبتنی بر هوش مصنوعی با قابلیت جستجوی سیستماتیک، تحلیل منابع علمی و تولید گزارش‌های تحلیلی جامع با رویکرد روش‌شناختی معتبر.
              </p>
            </div>

            {/* Search Wizard */}
            <SearchWizard
              promptValue={promptValue}
              setPromptValue={setPromptValue}
              handleDisplayResult={handleDisplayResult}
              chatBoxSettings={chatBoxSettings}
              setChatBoxSettings={setChatBoxSettings}
            />

            {/* Quick Templates */}
            <QuickTemplates onTemplateClick={handleTemplateClick} />

            {/* Info Steps */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-center w-12 h-12 bg-teal-100 rounded-lg mb-3">
                  <span className="text-2xl font-bold text-teal-600">۱</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {fa.steps.step1.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {fa.steps.step1.description}
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-3">
                  <span className="text-2xl font-bold text-blue-600">۲</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {fa.steps.step2.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {fa.steps.step2.description}
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-3">
                  <span className="text-2xl font-bold text-purple-600">۳</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {fa.steps.step3.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {fa.steps.step3.description}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - History */}
          <div className="lg:col-span-1">
            <ResearchHistory
              history={history}
              onSelectResearch={onSelectResearch}
              onDeleteResearch={onDeleteResearch}
            />
          </div>
        </div>
      </main>

      {/* Settings Modal */}
      <SettingsModal
        isOpen={showSettings}
        onClose={() => setShowSettings(false)}
        chatBoxSettings={chatBoxSettings}
        setChatBoxSettings={setChatBoxSettings}
      />
    </div>
  );
};

export default AdvancedDashboard;
