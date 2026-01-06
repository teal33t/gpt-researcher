"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { fa } from "@/locales/fa";
import { ChatBoxSettings } from "@/types/data";
import PersianResearchForm from "./PersianResearchForm";

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  chatBoxSettings: ChatBoxSettings;
  setChatBoxSettings: React.Dispatch<React.SetStateAction<ChatBoxSettings>>;
}

const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen,
  onClose,
  chatBoxSettings,
  setChatBoxSettings,
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleSaveChanges = () => {
    localStorage.setItem("chatBoxSettings", JSON.stringify(chatBoxSettings));
    onClose();
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
  };

  const slideUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const modalContent = isOpen && (
    <AnimatePresence>
      <motion.div
        key="modal-overlay"
        className="fixed inset-0 z-[1000] flex items-center justify-center overflow-auto"
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={fadeIn}
        style={{ backdropFilter: "blur(5px)" }}
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <motion.div
          className="relative w-auto max-w-3xl z-[1001] mx-6 my-8 md:mx-auto"
          variants={slideUp}
        >
          <div className="relative">
            {/* Modal content with light theme */}
            <div className="relative flex flex-col rounded-xl overflow-hidden bg-white border border-gray-200 shadow-2xl">
              {/* Header */}
              <div className="bg-gradient-to-r from-teal-50 to-blue-50 p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7 text-teal-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span>{fa.settings.title}</span>
                  </h3>
                  <button
                    className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                    onClick={onClose}
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Body */}
              <div className="relative p-6 flex-auto bg-white max-h-[70vh] overflow-y-auto" dir="rtl">
                <PersianResearchForm
                  chatBoxSettings={chatBoxSettings}
                  setChatBoxSettings={setChatBoxSettings}
                />
              </div>

              {/* Footer */}
              <div className="flex items-center justify-start gap-3 p-6 border-t border-gray-200 bg-gray-50">
                <button
                  className="px-6 py-2.5 text-sm font-medium rounded-lg text-white bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 shadow-md hover:shadow-lg transition-all duration-300"
                  onClick={handleSaveChanges}
                >
                  {fa.settings.save}
                </button>
                <button
                  className="px-6 py-2.5 text-sm font-medium text-gray-700 bg-white hover:bg-gray-100 border border-gray-300 rounded-lg transition-colors duration-200"
                  onClick={onClose}
                >
                  {fa.settings.cancel}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        key="modal-background"
        className="fixed inset-0 z-[999] bg-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        exit={{ opacity: 0 }}
      ></motion.div>
    </AnimatePresence>
  );

  return <>{mounted && isOpen && createPortal(modalContent, document.body)}</>;
};

export default SettingsModal;
