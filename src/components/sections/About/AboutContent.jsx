import React from 'react';
import AboutStory from './AboutStory';
import JourneyTimeline from './JourneyTimeline';
import SkillsGrid from './SkillsGrid';

export default function AboutContent({ activeTab }) {
  return (
    <>
      {activeTab === "about" && <AboutStory />}
      {activeTab === "journey" && <JourneyTimeline />}
      {activeTab === "skills" && <SkillsGrid />}
    </>
  );
}