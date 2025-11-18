import { useState } from "react";

export function useAbout() {
  const [activeTab, setActiveTab] = useState("about");
  
  return {
    activeTab,
    setActiveTab
  };
}