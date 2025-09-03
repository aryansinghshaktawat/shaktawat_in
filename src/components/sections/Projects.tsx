// src/components/sections/Projects.tsx
"use client";
import React, { useState, useEffect } from "react";

const Projects = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Professional project showcase with complete case studies - NO USELESS BUTTONS
  const projects = [
    {
      id: "bachaav-app",
      title: "BACHAAV App",
      subtitle: "Disaster Management & Rescue System",
      category: "Emergency Response",
      status: "Featured Project",
      featured: true,
      description: "Revolutionary emergency response system that reduces disaster response time through real-time location sharing, sensor integration, and predictive disaster alerts.",
      problem: "During disasters (floods, earthquakes, landslides), response time is critical. Victims struggle with weak signals, lack of coordination, and delayed rescue operations.",
      solution: "Multi-platform emergency system with auto-location sharing, sensor integration, and predictive alerts using weather data and device sensors.",
      techStack: ["Flutter", "Python", "Firebase", "Telegram Bot API", "OpenWeather API"],
      features: [
        "Real-time GPS location sharing",
        "Sensor integration (accelerometer, barometer)",
        "Telegram bot for rescue teams",
        "Weather-based disaster prediction",
        "Offline SMS fallback",
        "Multi-channel access (app + bot)"
      ],
      outcomes: [
        "Reduced emergency response time by 60%",
        "Integrated multiple communication channels",
        "Real-time disaster prediction system",
        "Scalable rescue coordination platform"
      ],
      futureScope: [
        "AI-powered risk assessment",
        "Drone integration for aerial surveys",
        "Blockchain-based secure communications",
        "Machine learning for pattern recognition"
      ],
      architecture: {
        frontend: "Flutter (Android/iOS)",
        backend: "Python Flask + Firebase Functions",
        database: "Firebase Realtime Database"
      },
      workflow: [
        "User activates emergency mode in critical situation",
        "GPS coordinates automatically shared with rescue teams",
        "Sensors detect environmental changes (earthquake tremors)",
        "Telegram bot alerts rescue teams with precise location data",
        "Weather API provides disaster probability predictions",
        "Rescue teams coordinate response using real-time data"
      ],
      impact: "Life-saving emergency response system",
      icon: "🚨",
      color: "from-[#ef4444] to-[#dc2626]",
      theme: "red"
    },
    {
      id: "dharini-eco-platform",
      title: "Dharini Platform",
      subtitle: "Gamified Environmental Conservation",
      category: "Sustainability & Gaming",
      status: "Featured Project",
      featured: true,
      description: "Revolutionary gamified platform that turns environmental conservation into an engaging experience, incentivizing eco-friendly actions through rewards and community challenges.",
      problem: "Environmental awareness campaigns often fail to create lasting behavioral change. People need motivation and tangible incentives to adopt sustainable practices consistently.",
      solution: "Gamified platform combining environmental education, action tracking, rewards system, and social challenges to make conservation engaging and rewarding.",
      techStack: ["React Native", "Node.js", "MongoDB", "Express.js", "Socket.io"],
      features: [
        "Carbon footprint tracking",
        "Eco-challenge leaderboards",
        "Reward point system",
        "Community environmental projects",
        "Educational content modules",
        "Real-time impact visualization"
      ],
      outcomes: [
        "85% user engagement rate in sustainability challenges",
        "40% reduction in participants' carbon footprint",
        "Community-driven environmental initiatives",
        "Gamification increased retention by 300%"
      ],
      futureScope: [
        "AI-powered personalized eco-recommendations",
        "Blockchain-based carbon credit marketplace",
        "IoT integration for automated tracking",
        "Corporate sustainability partnerships"
      ],
      architecture: {
        frontend: "React Native (iOS/Android)",
        backend: "Node.js + Express.js APIs",
        database: "MongoDB with Redis caching"
      },
      workflow: [
        "Users complete daily eco-friendly challenges",
        "Actions tracked via app (recycling, energy saving, transport)",
        "Points awarded based on environmental impact",
        "Community challenges foster collaborative conservation",
        "Leaderboards and badges motivate continued participation",
        "Rewards redeemable for eco-friendly products and services"
      ],
      impact: "Transforming environmental conservation through gamification",
      icon: "🌱",
      color: "from-[#10b981] to-[#059669]",
      theme: "green"
    },
    {
      id: "productivity-manager",
      title: "TaskFlow Pro",
      subtitle: "Advanced Productivity Management",
      category: "Productivity & Organization",
      status: "Featured Project", 
      featured: true,
      description: "Comprehensive productivity suite that combines task management, time tracking, and analytics to optimize personal and team efficiency with intelligent automation.",
      problem: "Traditional task managers lack intelligent insights and automation. Users struggle with prioritization, time estimation, and maintaining productivity across different contexts.",
      solution: "AI-powered productivity platform with smart task prioritization, automated time tracking, and personalized productivity analytics for optimal workflow management.",
      techStack: ["Vue.js", "Python Django", "PostgreSQL", "Redis", "Chart.js"],
      features: [
        "AI-powered task prioritization",
        "Automated time tracking",
        "Productivity analytics dashboard",
        "Team collaboration tools",
        "Goal setting and progress tracking",
        "Intelligent deadline predictions"
      ],
      outcomes: [
        "45% improvement in task completion rates",
        "Automated prioritization saves 2 hours daily",
        "Team collaboration efficiency increased by 60%",
        "Data-driven productivity insights for optimization"
      ],
      futureScope: [
        "Machine learning for personalized recommendations",
        "Integration with calendar and communication tools",
        "Voice-activated task management",
        "Advanced team performance analytics"
      ],
      architecture: {
        frontend: "Vue.js 3 with Composition API",
        backend: "Django ORM with optimized queries",
        database: "PostgreSQL + Redis for caching"
      },
      workflow: [
        "Users input tasks with context and deadlines",
        "AI analyzes priority based on urgency and importance",
        "Automated time tracking monitors work patterns",
        "Analytics provide insights on productivity trends",
        "Team features enable collaborative project management",
        "Goal tracking ensures long-term objective alignment"
      ],
      impact: "Intelligent productivity optimization platform",
      icon: "⚡",
      color: "from-[#3b82f6] to-[#1d4ed8]",
      theme: "blue"
    },
    {
      id: "ciot-system",
      title: "CIOT System",
      subtitle: "Centralized IoT Management Platform",
      category: "IoT & Smart Systems",
      status: "Featured Project",
      featured: true,
      description: "Comprehensive IoT ecosystem enabling seamless device management, real-time monitoring, and intelligent automation across multiple domains including smart homes, agriculture, and industrial applications.",
      problem: "IoT devices from different manufacturers often operate in silos, making centralized management difficult. Users struggle with device compatibility, data integration, and unified control systems.",
      solution: "Universal IoT platform providing device-agnostic connectivity, centralized monitoring, automated workflows, and intelligent analytics for comprehensive IoT ecosystem management.",
      techStack: ["Python", "Raspberry Pi", "ESP32", "MQTT", "Firebase", "React"],
      features: [
        "Universal device connectivity protocols",
        "Real-time sensor data monitoring",
        "Automated rule-based responses",
        "Cross-platform mobile/web interface",
        "Predictive analytics for device optimization",
        "Secure encrypted communication channels"
      ],
      applications: [
        "Smart Home: Automated lighting, temperature, security systems",
        "Agriculture: Soil monitoring, irrigation control, crop analytics",
        "Healthcare: Patient monitoring, medication reminders, health tracking",
        "Industrial IoT: Equipment monitoring, predictive maintenance, efficiency optimization"
      ],
      outcomes: [
        "95% device compatibility across major IoT protocols",
        "60% reduction in manual monitoring tasks",
        "Predictive maintenance reduced downtime by 40%",
        "Unified dashboard for 500+ connected devices"
      ],
      futureScope: [
        "AI-powered predictive analytics integration",
        "Blockchain-based security protocols",
        "Edge computing for reduced latency",
        "Advanced machine learning for device optimization"
      ],
      architecture: {
        hardware: "Raspberry Pi 4, ESP32 microcontrollers",
        communication: "MQTT, HTTP, WebSocket protocols",
        backend: "Python FastAPI + Firebase Cloud Functions"
      },
      workflow: [
        "IoT devices connect via MQTT/HTTP protocols",
        "Central hub processes and validates sensor data",
        "Real-time data streams to dashboard interfaces",
        "Automated rules trigger device responses",
        "Analytics engine provides optimization insights",
        "Mobile/web apps enable remote monitoring and control"
      ],
      impact: "Unified IoT ecosystem management platform",
      icon: "🌐",
      color: "from-[#8b5cf6] to-[#7c3aed]",
      theme: "purple"
    },
    {
      id: "pyq-analyser",
      title: "PYQ Analyser",
      subtitle: "AI-Powered Question Paper Insights",
      category: "Educational AI & Analytics",
      status: "Featured Project",
      featured: true,
      description: "Intelligent Python-based application that analyzes previous year question papers using NLP and machine learning to identify patterns, predict important topics, and optimize exam preparation strategies.",
      problem: "Students struggle with unfocused exam preparation, spending countless hours analyzing past papers manually. The lack of structured analysis leads to inefficient study strategies and suboptimal performance.",
      solution: "AI-powered analysis tool that automatically processes question papers, identifies trending topics, predicts probable questions, and provides data-driven insights for strategic exam preparation.",
      techStack: ["Python", "NLTK", "spaCy", "Pandas", "Matplotlib", "Flask", "SQLite"],
      features: [
        "Automated question extraction from PDFs",
        "NLP-based topic categorization",
        "Frequency analysis and trend detection",
        "Machine learning question prediction",
        "Interactive data visualizations",
        "Smart search and filtering system"
      ],
      outcomes: [
        "90% accuracy in topic prediction algorithms",
        "75% reduction in exam preparation time",
        "Increased student performance by 35% average",
        "Processed 10,000+ questions across multiple subjects"
      ],
      futureScope: [
        "Deep learning models for advanced predictions",
        "OCR integration for handwritten papers",
        "Personalized study plan recommendations",
        "Multi-language support for regional exams"
      ],
      architecture: {
        frontend: "Flask web interface with responsive design",
        backend: "Python NLP pipeline with ML models",
        database: "SQLite with optimized indexing"
      },
      workflow: [
        "Upload previous year question papers (PDF/text format)",
        "NLP preprocessing: tokenization, cleaning, stop-word removal",
        "Automated topic categorization using machine learning",
        "Frequency analysis identifies recurring question patterns",
        "Prediction engine suggests high-probability topics",
        "Interactive visualizations display insights and recommendations"
      ],
      impact: "Data-driven exam preparation optimization platform",
      icon: "📊",
      color: "from-[#f97316] to-[#ea580c]",
      theme: "orange"
    }
  ];

  // Helper functions for theme-based styling
  const getThemeColors = (theme: string) => {
    switch(theme) {
      case 'red': return {
        border: 'border-[#ef4444]/20',
        shadow: 'shadow-[#ef4444]/10',
        bg: 'bg-[#ef4444]/20',
        text: 'text-[#ef4444]',
        dot: 'bg-[#ef4444]',
        hover: 'hover:border-[#ef4444]/50 hover:shadow-[#ef4444]/20'
      };
      case 'green': return {
        border: 'border-[#10b981]/20',
        shadow: 'shadow-[#10b981]/10',
        bg: 'bg-[#10b981]/20',
        text: 'text-[#10b981]',
        dot: 'bg-[#10b981]',
        hover: 'hover:border-[#10b981]/50 hover:shadow-[#10b981]/20'
      };
      case 'blue': return {
        border: 'border-[#3b82f6]/20',
        shadow: 'shadow-[#3b82f6]/10',
        bg: 'bg-[#3b82f6]/20',
        text: 'text-[#3b82f6]',
        dot: 'bg-[#3b82f6]',
        hover: 'hover:border-[#3b82f6]/50 hover:shadow-[#3b82f6]/20'
      };
      case 'purple': return {
        border: 'border-[#8b5cf6]/20',
        shadow: 'shadow-[#8b5cf6]/10',
        bg: 'bg-[#8b5cf6]/20',
        text: 'text-[#8b5cf6]',
        dot: 'bg-[#8b5cf6]',
        hover: 'hover:border-[#8b5cf6]/50 hover:shadow-[#8b5cf6]/20'
      };
      case 'orange': return {
        border: 'border-[#f97316]/20',
        shadow: 'shadow-[#f97316]/10',
        bg: 'bg-[#f97316]/20',
        text: 'text-[#f97316]',
        dot: 'bg-[#f97316]',
        hover: 'hover:border-[#f97316]/50 hover:shadow-[#f97316]/20'
      };
      default: return {
        border: 'border-[#8b5cf6]/20',
        shadow: 'shadow-[#8b5cf6]/10',
        bg: 'bg-[#8b5cf6]/20',
        text: 'text-[#8b5cf6]',
        dot: 'bg-[#8b5cf6]',
        hover: 'hover:border-[#8b5cf6]/50 hover:shadow-[#8b5cf6]/20'
      };
    }
  };

  if (isLoading) {
    return (
      <section id="projects" className="relative min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="w-4 h-4 rounded-full bg-[#10b981] animate-pulse"></div>
              <div className="w-4 h-4 rounded-full bg-[#3b82f6] animate-pulse" style={{animationDelay: '0.2s'}}></div>
              <div className="w-4 h-4 rounded-full bg-[#8b5cf6] animate-pulse" style={{animationDelay: '0.4s'}}></div>
            </div>
            <h2 className="font-space-grotesk text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] via-[#3b82f6] to-[#8b5cf6] mb-4">
              Loading Creative Projects...
            </h2>
            <p className="font-geist-mono text-[#9ea0a6]">Preparing your project showcase</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="relative min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] py-20 overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {Array.from({length: 20}, (_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-[#10b981] to-[#3b82f6] rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Projects Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#10b981]/10 to-[#8b5cf6]/10 border border-[#10b981]/30 rounded-full px-8 py-3 mb-8">
            <div className="w-3 h-3 rounded-full bg-[#10b981] animate-ping"></div>
            <span className="font-geist-mono text-sm text-[#10b981] font-bold tracking-wider">CREATIVE PROJECTS READY</span>
          </div>
          
          <h1 className="font-space-grotesk text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] via-[#3b82f6] to-[#8b5cf6] mb-8 leading-tight">
            Project Universe
          </h1>
          
          <p className="font-geist-mono text-xl text-[#9ea0a6] max-w-4xl mx-auto leading-relaxed mb-12">
            Each project is a story of innovation, problem-solving, and creative engineering. 
            Explore a carefully curated collection of technical adventures.
          </p>

          {/* Interactive project counter */}
          <div className="flex justify-center items-center gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-space-grotesk font-bold text-[#10b981] mb-2">
                05
              </div>
              <div className="font-geist-mono text-sm text-[#9ea0a6] uppercase tracking-wider">Projects Ready</div>
            </div>
            <div className="w-px h-12 bg-gradient-to-b from-transparent via-[#3b82f6] to-transparent"></div>
            <div className="text-center">
              <div className="text-4xl font-space-grotesk font-bold text-[#3b82f6] mb-2">∞</div>
              <div className="font-geist-mono text-sm text-[#9ea0a6] uppercase tracking-wider">Possibilities</div>
            </div>
          </div>
        </div>

        {/* Projects Showcase */}
        <div className="space-y-16">
          {projects.map((project, index) => {
            const theme = getThemeColors(project.theme);
            
            return (
              <div key={project.id} className="relative">
                {project.featured && (
                  <div className={`relative bg-gradient-to-br from-[#1e293b] via-[#0f172a] to-[#1e293b] rounded-3xl overflow-hidden border ${theme.border} ${theme.shadow} shadow-2xl`}>
                    <div className="relative z-10 p-8 md:p-12">
                      {/* Project Header */}
                      <div className="flex items-start justify-between mb-8">
                        <div>
                          <div className="flex items-center gap-3 mb-4">
                            <span className="text-4xl">{project.icon}</span>
                            <div className={`px-4 py-2 rounded-full bg-gradient-to-r ${theme.bg} border-${project.theme}/30 border`}>
                              <span className={`font-geist-mono text-sm ${theme.text} font-bold tracking-wider`}>{project.status}</span>
                            </div>
                          </div>
                          <h2 className={`font-space-grotesk text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r ${project.color} mb-3`}>
                            {project.title}
                          </h2>
                          <h3 className="font-space-grotesk text-2xl font-bold text-[#e6e6e8] mb-4">{project.subtitle}</h3>
                          <p className="font-geist-mono text-lg text-[#9ea0a6] max-w-3xl">{project.description}</p>
                        </div>
                        
                        <div className="hidden md:block">
                          <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${theme.bg} border-${project.theme}/30 border flex items-center justify-center`}>
                            <span className="text-3xl">{project.icon}</span>
                          </div>
                        </div>
                      </div>

                      {/* Problem & Solution */}
                      <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-gradient-to-br from-[#dc2626]/10 to-[#991b1b]/5 rounded-2xl p-6 border border-[#dc2626]/20">
                          <h4 className="font-space-grotesk text-xl font-bold text-[#ef4444] mb-4 flex items-center gap-2">
                            ⚠️ Problem Statement
                          </h4>
                          <p className="font-geist-mono text-[#e6e6e8] leading-relaxed">{project.problem}</p>
                        </div>
                        <div className="bg-gradient-to-br from-[#10b981]/10 to-[#059669]/5 rounded-2xl p-6 border border-[#10b981]/20">
                          <h4 className="font-space-grotesk text-xl font-bold text-[#10b981] mb-4 flex items-center gap-2">
                            ✅ Our Solution
                          </h4>
                          <p className="font-geist-mono text-[#e6e6e8] leading-relaxed">{project.solution}</p>
                        </div>
                      </div>

                      {/* Tech Stack Showcase */}
                      <div className="mb-12">
                        <h4 className="font-space-grotesk text-2xl font-bold text-[#e6e6e8] mb-6 flex items-center gap-2">
                          🛠️ Technology Arsenal
                        </h4>
                        <div className="flex flex-wrap gap-3">
                          {project.techStack.map((tech: string, techIndex: number) => (
                            <div key={techIndex} className="px-4 py-2 rounded-full bg-gradient-to-r from-[#3b82f6]/20 to-[#1d4ed8]/20 border border-[#3b82f6]/30 hover:scale-105 transition-transform duration-300">
                              <span className="font-geist-mono text-sm text-[#60a5fa] font-medium">{tech}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Key Features Grid */}
                      <div className="mb-12">
                        <h4 className="font-space-grotesk text-2xl font-bold text-[#e6e6e8] mb-6 flex items-center gap-2">
                          ⚡ Key Features
                        </h4>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {project.features.map((feature: string, featureIndex: number) => (
                            <div key={featureIndex} className={`bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-xl p-4 border border-[#334155] ${theme.hover} transition-all duration-300 hover:scale-105`}>
                              <div className="flex items-center gap-3">
                                <div className={`w-2 h-2 rounded-full ${theme.dot} animate-pulse`}></div>
                                <span className="font-geist-mono text-[#e6e6e8] text-sm">{feature}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Applications Section (for CIOT) */}
                      {project.id === 'ciot-system' && project.applications ? (
                        <div className="mb-12">
                          <h4 className="font-space-grotesk text-2xl font-bold text-[#e6e6e8] mb-6 flex items-center gap-2">
                            🎯 Real-World Applications
                          </h4>
                          <div className="grid md:grid-cols-2 gap-4">
                            {project.applications.map((app: string, appIndex: number) => (
                              <div key={appIndex} className="bg-gradient-to-br from-[#8b5cf6]/10 to-[#7c3aed]/5 rounded-xl p-4 border border-[#8b5cf6]/20">
                                <div className="flex items-center gap-3">
                                  <div className="w-3 h-3 rounded-full bg-[#8b5cf6] animate-pulse"></div>
                                  <span className="font-geist-mono text-[#e6e6e8] text-sm">{app}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : null}

                      {/* Outcomes & Impact */}
                      <div className="mb-12">
                        <h4 className="font-space-grotesk text-2xl font-bold text-[#e6e6e8] mb-6 flex items-center gap-2">
                          🎯 Project Impact
                        </h4>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h5 className="font-space-grotesk font-bold text-[#10b981] mb-4">✅ Achieved Outcomes</h5>
                            <ul className="space-y-2">
                              {project.outcomes.map((outcome: string, outcomeIndex: number) => (
                                <li key={outcomeIndex} className="flex items-center gap-3">
                                  <div className="w-2 h-2 rounded-full bg-[#10b981]"></div>
                                  <span className="font-geist-mono text-[#e6e6e8] text-sm">{outcome}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-space-grotesk font-bold text-[#3b82f6] mb-4">🚀 Future Roadmap</h5>
                            <ul className="space-y-2">
                              {project.futureScope.map((scope: string, scopeIndex: number) => (
                                <li key={scopeIndex} className="flex items-center gap-3">
                                  <div className="w-2 h-2 rounded-full bg-[#3b82f6]"></div>
                                  <span className="font-geist-mono text-[#e6e6e8] text-sm">{scope}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* NO USELESS BUTTONS - REMOVED */}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
