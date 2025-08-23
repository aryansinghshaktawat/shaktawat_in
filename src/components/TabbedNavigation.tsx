// src/components/TabbedNavigation.tsx
"use client";
import { useState } from 'react';
import About from './sections/About';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Resume from './sections/Resume';
import Contact from './sections/Contact';

const TabbedNavigation = () => {
  const [activeTab, setActiveTab] = useState('About');

  const tabs = ['About', 'Projects', 'Experience', 'Resume', 'Contact'];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'About':
        return <About />;
      case 'Projects':
        return <Projects />;
      case 'Experience':
        return <Experience />;
      case 'Resume':
        return <Resume />;
      case 'Contact':
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold font-sans">Aryan Singh Shaktawat</h1>
        <p className="text-lg text-dark-text-200 dark:text-dark-text-200">Cybersecurity Enthusiast & Developer</p>
      </div>
      <div className="flex justify-center border-b mb-8">
        {tabs.map(tab => (
          <button
            key={tab}
            className={`py-2 px-4 text-lg ${activeTab === tab ? 'border-b-2 border-accent text-accent' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div>
        {renderTabContent()}
      </div>
    </div>
  );
};

export default TabbedNavigation;
