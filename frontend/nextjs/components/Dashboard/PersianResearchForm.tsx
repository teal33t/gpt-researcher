"use client";

import React, { useState, useEffect } from "react";
import { fa } from "@/locales/fa";
import FileUpload from "../Settings/FileUpload";
import ToneSelector from "../Settings/ToneSelector";
import MCPSelector from "../Settings/MCPSelector";
import LayoutSelector from "../Settings/LayoutSelector";
import DomainFilter from "../Task/DomainFilter";
import { ChatBoxSettings, Domain, MCPConfig } from "@/types/data";

interface PersianResearchFormProps {
  chatBoxSettings: ChatBoxSettings;
  setChatBoxSettings: React.Dispatch<React.SetStateAction<ChatBoxSettings>>;
}

export default function PersianResearchForm({
  chatBoxSettings,
  setChatBoxSettings,
}: PersianResearchFormProps) {
  const [newDomain, setNewDomain] = useState("");

  const [domains, setDomains] = useState<Domain[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("domainFilters");
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("domainFilters", JSON.stringify(domains));
    setChatBoxSettings((prev) => ({
      ...prev,
      domains: domains.map((domain) => domain.value),
    }));
  }, [domains, setChatBoxSettings]);

  const handleAddDomain = (e: React.FormEvent) => {
    e.preventDefault();
    if (newDomain.trim()) {
      setDomains([...domains, { value: newDomain.trim() }]);
      setNewDomain("");
    }
  };

  const handleRemoveDomain = (domainToRemove: string) => {
    setDomains(domains.filter((domain) => domain.value !== domainToRemove));
  };

  const onFormChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setChatBoxSettings((prevSettings: any) => ({
      ...prevSettings,
      [name]: value,
    }));
  };

  const onToneChange = (e: { target: { value: any } }) => {
    const { value } = e.target;
    setChatBoxSettings((prevSettings: any) => ({
      ...prevSettings,
      tone: value,
    }));
  };

  const onLayoutChange = (e: { target: { value: any } }) => {
    const { value } = e.target;
    setChatBoxSettings((prevSettings: any) => ({
      ...prevSettings,
      layoutType: value,
    }));
  };

  const onMCPChange = (enabled: boolean, configs: MCPConfig[]) => {
    setChatBoxSettings((prevSettings: any) => ({
      ...prevSettings,
      mcp_enabled: enabled,
      mcp_configs: configs,
    }));
  };

  return (
    <div className="space-y-6" dir="rtl">
      {/* Report Type */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          {fa.searchWizard.reportType}
        </label>
        <select
          name="report_type"
          value={chatBoxSettings.report_type}
          onChange={onFormChange}
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-gray-900 bg-white"
          required
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
          name="report_source"
          value={chatBoxSettings.report_source}
          onChange={onFormChange}
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-gray-900 bg-white"
          required
        >
          <option value="web">{fa.reportSources.web}</option>
          <option value="local">{fa.reportSources.local}</option>
          <option value="hybrid">{fa.reportSources.hybrid}</option>
        </select>
      </div>

      {/* File Upload for local/hybrid */}
      {(chatBoxSettings.report_source === "local" ||
        chatBoxSettings.report_source === "hybrid") && (
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            {fa.settings.fileUploadLabel}
          </label>
          <FileUpload />
        </div>
      )}

      {/* Tone Selector */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          {fa.searchWizard.tone}
        </label>
        <ToneSelector tone={chatBoxSettings.tone} onToneChange={onToneChange} />
      </div>

      {/* MCP Selector */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          {fa.settings.mcpLabel}
        </label>
        <MCPSelector
          mcpEnabled={chatBoxSettings.mcp_enabled || false}
          mcpConfigs={chatBoxSettings.mcp_configs || []}
          onMCPChange={onMCPChange}
        />
      </div>

      {/* Layout Selector */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          {fa.settings.layoutLabel}
        </label>
        <LayoutSelector
          layoutType={chatBoxSettings.layoutType || "copilot"}
          onLayoutChange={onLayoutChange}
        />
      </div>

      {/* Domain Filter for web/hybrid */}
      {(chatBoxSettings.report_source === "web" ||
        chatBoxSettings.report_source === "hybrid") && (
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            {fa.settings.domainFilterLabel}
          </label>
          <DomainFilter
            domains={domains}
            newDomain={newDomain}
            setNewDomain={setNewDomain}
            onAddDomain={handleAddDomain}
            onRemoveDomain={handleRemoveDomain}
          />
        </div>
      )}
    </div>
  );
}
