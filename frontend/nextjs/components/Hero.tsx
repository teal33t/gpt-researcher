import React, { FC } from "react";
import InputArea from "./ResearchBlocks/elements/InputArea";

type THeroProps = {
  promptValue: string;
  setPromptValue: React.Dispatch<React.SetStateAction<string>>;
  handleDisplayResult: (query: string) => void;
};

const Hero: FC<THeroProps> = ({
  promptValue,
  setPromptValue,
  handleDisplayResult,
}) => {
  const handleClickSuggestion = (value: string) => {
    setPromptValue(value);
  };

  return (
    <div className="min-h-[calc(100vh-140px)] flex flex-col pt-8 sm:pt-12 md:pt-16">
      {/* Dashboard Container */}
      <div className="flex-1 flex flex-col items-center justify-start w-full max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Welcome Section */}
        <div className="text-center mb-8 sm:mb-10">
          <h1 className="text-2xl sm:text-3xl font-semibold text-white mb-3">
            Research Dashboard
          </h1>
          <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto">
            Enter your research topic below. The AI agent will search, analyze, and create a report for you.
          </p>
        </div>

        {/* Main Input Card */}
        <div className="w-full bg-gray-900/50 border border-gray-700/50 rounded-xl p-4 sm:p-6 mb-6">
          <label className="block text-sm font-medium text-gray-300 mb-3">
            Research Query
          </label>
          <InputArea
            promptValue={promptValue}
            setPromptValue={setPromptValue}
            handleSubmit={handleDisplayResult}
          />
          <p className="mt-3 text-gray-500 text-xs sm:text-sm">
            Press Enter to start. Results may contain errors — always check sources.
          </p>
        </div>

        {/* Quick Start Templates */}
        <div className="w-full">
          <h2 className="text-sm font-medium text-gray-400 mb-3">Quick Start Templates</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {quickStartTemplates.map((template) => (
              <button
                key={template.id}
                onClick={() => handleClickSuggestion(template.query)}
                className="flex items-start gap-3 p-4 bg-gray-800/40 border border-gray-700/40 rounded-lg 
                         hover:bg-gray-800/60 hover:border-gray-600/60 transition-all duration-200 text-left group"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-teal-900/40 rounded-lg flex items-center justify-center">
                  <img
                    src={template.icon}
                    alt=""
                    width={18}
                    height={18}
                    className="opacity-70 filter invert"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors">
                    {template.title}
                  </p>
                  <p className="text-xs text-gray-500 mt-1 truncate">
                    {template.description}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Info Cards */}
        <div className="w-full mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-gray-800/30 border border-gray-700/30 rounded-lg p-4">
            <div className="text-teal-400 text-lg font-semibold mb-1">Step 1</div>
            <p className="text-gray-400 text-sm">Enter your topic or question</p>
          </div>
          <div className="bg-gray-800/30 border border-gray-700/30 rounded-lg p-4">
            <div className="text-teal-400 text-lg font-semibold mb-1">Step 2</div>
            <p className="text-gray-400 text-sm">AI searches multiple sources</p>
          </div>
          <div className="bg-gray-800/30 border border-gray-700/30 rounded-lg p-4">
            <div className="text-teal-400 text-lg font-semibold mb-1">Step 3</div>
            <p className="text-gray-400 text-sm">Get a detailed report with citations</p>
          </div>
        </div>

      </div>
    </div>
  );
};

type TemplateType = {
  id: number;
  title: string;
  description: string;
  query: string;
  icon: string;
};

const quickStartTemplates: TemplateType[] = [
  {
    id: 1,
    title: "Market Analysis",
    description: "Research market trends and data",
    query: "Analyze the current market trends for ",
    icon: "/img/stock2.svg",
  },
  {
    id: 2,
    title: "Technical Review",
    description: "Compare tools and technologies",
    query: "Compare the pros and cons of ",
    icon: "/img/news.svg",
  },
  {
    id: 3,
    title: "Industry Report",
    description: "Get insights on any industry",
    query: "Create an industry report on ",
    icon: "/img/hiker.svg",
  },
];

export default Hero;
