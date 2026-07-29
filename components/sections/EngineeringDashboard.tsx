"use client";

import React, { useState, useEffect, useRef } from "react";
import { 
  SiDocker, SiGithubactions, SiKubernetes, SiLinux, SiMongodb, 
  SiNodedotjs, SiPostgresql, SiPython, SiReact, SiTypescript, 
  SiJavascript, SiC, SiCplusplus, SiNextdotjs, SiHtml5, SiCss, 
  SiExpress, SiMysql, SiRedis, SiGit, SiOpenai, 
  SiOpencv, SiScikitlearn, SiPandas, SiNumpy 
} from "react-icons/si";
import { FaAws, FaJava } from "react-icons/fa";
import { Activity, Code2, Database, Terminal, Shield, RefreshCw, Layers } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";

const toolkitGroups = [
  {
    category: "Languages & Core",
    items: [
      { name: "TypeScript", icon: SiTypescript, tone: "#3178c6" },
      { name: "JavaScript (ES6)", icon: SiJavascript, tone: "#f7df1e" },
      { name: "Python", icon: SiPython, tone: "#3776ab" },
      { name: "Java", icon: FaJava, tone: "#f89820" },
      { name: "C++", icon: SiCplusplus, tone: "#00599c" },
      { name: "C", icon: SiC, tone: "#a8b9cc" },
      { name: "SQL", icon: Database, tone: "#0064a5" },
    ]
  },
  {
    category: "Frontend & UI",
    items: [
      { name: "React.js", icon: SiReact, tone: "#61dafb" },
      { name: "Next.js", icon: SiNextdotjs, tone: "#ffffff" },
      { name: "HTML5", icon: SiHtml5, tone: "#e34f26" },
      { name: "CSS3", icon: SiCss, tone: "#1572b6" },
    ]
  },
  {
    category: "Backend & Systems",
    items: [
      { name: "Node.js", icon: SiNodedotjs, tone: "#68a063" },
      { name: "Express.js", icon: SiExpress, tone: "#a5b4fc" },
      { name: "REST APIs", icon: Terminal, tone: "#38bdf8" },
      { name: "Microservices", icon: Layers, tone: "#a78bfa" },
    ]
  },
  {
    category: "Cloud, DevOps & Platforms",
    items: [
      { name: "AWS", icon: FaAws, tone: "#ff9900" },
      { name: "Docker", icon: SiDocker, tone: "#2496ed" },
      { name: "Kubernetes", icon: SiKubernetes, tone: "#326ce5" },
      { name: "Linux", icon: SiLinux, tone: "#f6c915" },
      { name: "CI/CD", icon: SiGithubactions, tone: "#2088ff" },
      { name: "Git", icon: SiGit, tone: "#f05032" },
      { name: "GitHub Actions", icon: SiGithubactions, tone: "#2088ff" },
    ]
  },
  {
    category: "Databases",
    items: [
      { name: "PostgreSQL", icon: SiPostgresql, tone: "#4169e1" },
      { name: "MongoDB", icon: SiMongodb, tone: "#47a248" },
      { name: "MySQL", icon: SiMysql, tone: "#00758f" },
      { name: "Redis", icon: SiRedis, tone: "#dc382d" },
    ]
  },
  {
    category: "AI, ML & Math",
    items: [
      { name: "OpenAI API", icon: SiOpenai, tone: "#412991" },
      { name: "OpenCV", icon: SiOpencv, tone: "#5c3ee6" },
      { name: "scikit-learn", icon: SiScikitlearn, tone: "#f7931e" },
      { name: "Pandas", icon: SiPandas, tone: "#150458" },
      { name: "NumPy", icon: SiNumpy, tone: "#013243" },
    ]
  }
];

const highlights = [
  { title: "Platform", icon: Terminal, value: "Linux · Docker · Kubernetes · AWS", color: "#f6c915" },
  { title: "Runtime", icon: Code2, value: "React · Next.js · TypeScript · Node.js", color: "#61dafb" },
  { title: "Data & Ops", icon: Database, value: "PostgreSQL · MongoDB · Redis · CI/CD", color: "#4169e1" },
];

type MetricType = "cpu" | "db" | "network";

const telemetryData: Record<MetricType, { values: number[]; max: number; label: string; unit: string; color: string }> = {
  cpu: {
    values: [12, 18, 45, 30, 24, 78, 92, 54, 40, 32, 28, 20],
    max: 100,
    label: "Core CPU Load",
    unit: "%",
    color: "#6366f1",
  },
  db: {
    values: [120, 150, 480, 620, 240, 380, 950, 810, 420, 300, 210, 180],
    max: 1000,
    label: "Database Operations",
    unit: " ops/s",
    color: "#38bdf8",
  },
  network: {
    values: [4.5, 6.2, 18.4, 25.1, 8.9, 14.5, 38.2, 30.4, 15.1, 10.8, 8.4, 5.2],
    max: 50,
    label: "Network Bandwidth",
    unit: " MB/s",
    color: "#10b981",
  },
};

const podMeta: Record<string, { image: string; cpu: string; memory: string; ports: string; role: string }> = {
  "api-gateway": { image: "nginx:alpine", cpu: "12%", memory: "180MB", ports: "80:80, 443:443", role: "Routing & Rate Limiting" },
  "auth-service": { image: "node:20-alpine", cpu: "4%", memory: "95MB", ports: "3001:3001", role: "Session & JWT Issuer" },
  "db-connector": { image: "postgres:15-alpine", cpu: "8%", memory: "210MB", ports: "5432:5432", role: "Data Layer Connection Pool" },
  "worker-agent": { image: "python:3.11-alpine", cpu: "24%", memory: "310MB", ports: "N/A", role: "Background AI Worker" }
};

const mockLogsTemplates: Record<string, string[]> = {
  "api-gateway": [
    "GET /api/v1/auth/session - 200 OK - 8ms",
    "GET /api/v1/projects - 200 OK - 42ms",
    "POST /api/v1/telemetry/stream - 101 Switching Protocols",
    "proxy: forwarded event to telemetry-consumer-service",
    "GET /api/v1/profile - 304 Not Modified - 2ms",
    "GET /api/v1/metrics - 200 OK - 5ms",
    "rate limit check passed for IP 172.24.12.9"
  ],
  "auth-service": [
    "verification request for token payload (user_id=8923)",
    "jwt verification success (user_id=8923)",
    "verification request for token payload (user_id=1084)",
    "jwt verification success (user_id=1084)",
    "signing keys rotated successfully",
    "session database connected",
    "invalid login attempt from IP 185.220.101.4"
  ],
  "db-connector": [
    "SELECT * FROM projects ORDER BY rank ASC (5ms)",
    "upsert telemetry logs - success - modifiedCount: 1",
    "transaction committed: workflow_approval_audit",
    "connection pool health check: OK",
    "mongodb master replica node selected. connection active",
    "SELECT COUNT(*) FROM sessions WHERE active = true"
  ],
  "worker-agent": [
    "background queue listener active. processing partition 0",
    "token limit check: 2400 / 90000 TPM",
    "sending evaluation payload to model gpt-4o",
    "response received. validation score: 0.98. parsing successful",
    "job completed: ai-content-feedback-run-89f4",
    "cleared cache queue partition (ai-feedback-89f4)"
  ]
};

export default function EngineeringDashboard() {
  const [activeMetric, setActiveMetric] = useState<MetricType>("cpu");
  const [liveData, setLiveData] = useState<number[]>([]);
  const [isSyncing, setIsSyncing] = useState(false);
  
  // Dashboard view toggle: "telemetry" or "cluster"
  const [dashboardTab, setDashboardTab] = useState<"telemetry" | "cluster">("telemetry");
  
  // K8s interactive states
  const [selectedPod, setSelectedPod] = useState<string>("api-gateway");
  const [podLogs, setPodLogs] = useState<string[]>([]);
  const logsEndRef = useRef<HTMLDivElement>(null);

  const currentTelemetry = telemetryData[activeMetric];

  // Initialize and update telemetry data
  useEffect(() => {
    setLiveData(currentTelemetry.values);
  }, [activeMetric, currentTelemetry.values]);

  // Simulate real-time telemetry updates
  useEffect(() => {
    const interval = setInterval(() => {
      setIsSyncing(true);
      setLiveData((prev) => {
        const next = [...prev.slice(1)];
        const base = currentTelemetry.values[currentTelemetry.values.length - 1];
        const variance = (Math.random() - 0.5) * (currentTelemetry.max * 0.15);
        const nextVal = Math.max(0, Math.min(currentTelemetry.max, Math.round(base + variance)));
        next.push(nextVal);
        return next;
      });
      setTimeout(() => setIsSyncing(false), 600);
    }, 4000);

    return () => clearInterval(interval);
  }, [activeMetric, currentTelemetry.max, currentTelemetry.values]);

  // K8s Mock Logs Streaming Loop
  useEffect(() => {
    const initialLogs = [
      `[k8s] Pod ${selectedPod} cluster sync complete.`,
      `[k8s] Running container image: ${podMeta[selectedPod].image}`,
      `[k8s] Port bindings: ${podMeta[selectedPod].ports}`,
      `[k8s] Role: ${podMeta[selectedPod].role}`,
      `--------------------------------------------------`,
      `[system] starting services logs...`
    ];
    setPodLogs(initialLogs);

    const logInterval = setInterval(() => {
      const templates = mockLogsTemplates[selectedPod];
      const randomLine = templates[Math.floor(Math.random() * templates.length)];
      const timestamp = new Date().toLocaleTimeString();
      setPodLogs((prev) => {
        const next = [...prev];
        if (next.length > 20) next.shift(); // keep list bound
        next.push(`[${timestamp}] ${randomLine}`);
        return next;
      });
    }, 2000);

    return () => clearInterval(logInterval);
  }, [selectedPod]);

  // Scroll logs container to bottom when logs update
  useEffect(() => {
    if (logsEndRef.current) {
      logsEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [podLogs]);

  // SVG Chart Dimensions
  const width = 500;
  const height = 150;
  const padding = 20;

  // Generate SVG path coordinates
  const points = liveData.map((val, index) => {
    const x = padding + (index / (liveData.length - 1)) * (width - padding * 2);
    const y = height - padding - (val / currentTelemetry.max) * (height - padding * 2);
    return { x, y };
  });

  const linePath = points.length > 0
    ? `M ${points[0].x} ${points[0].y} ` + points.slice(1).map((p) => `L ${p.x} ${p.y}`).join(" ")
    : "";

  const areaPath = points.length > 0
    ? `${linePath} L ${points[points.length - 1].x} ${height - padding} L ${points[0].x} ${height - padding} Z`
    : "";

  return (
    <section id="toolkit" className="section px-6 relative">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <div className="dashboard-heading flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div>
              <p className="eyebrow">Engineering dashboard</p>
              <h2 className="mt-2">Modern tooling, cloud-native delivery, and cluster ops.</h2>
            </div>
            <p className="text-slate-400 max-w-md">
              A comprehensive toolkit for developing high-performance web systems, managing containerized Kubernetes environments, and monitoring live telemetry.
            </p>
          </div>
        </FadeIn>

        <div className="mt-12">
          {/* Toolkit Panel */}
          <FadeIn delay={0.1} className="w-full">
            <article className="metric-panel toolkit-panel w-full flex flex-col">
              <div className="panel-topline flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2 text-indigo-300 font-mono text-xs uppercase tracking-wider">
                  <Terminal size={17} />
                  <span>Core Toolkit & Technologies</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] text-slate-500 font-mono">System Active</span>
                </div>
              </div>

              <p className="panel-copy text-sm text-slate-400 mt-4 mb-2">
                A granular inventory of core programming languages, frameworks, cloud-native services, and engineering practices.
              </p>

              {/* Categorized Skills Grid */}
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-6">
                {toolkitGroups.map((group) => (
                  <div key={group.category} className="space-y-3 p-4 rounded-xl border border-white/5 bg-white/[0.01]">
                    <span className="text-[10px] font-mono text-indigo-300/80 uppercase tracking-widest block font-bold">
                      {group.category}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => {
                        const Icon = item.icon;
                        return (
                          <div
                            key={item.name}
                            className="flex items-center gap-2 px-3 py-2 rounded-lg border border-white/[0.04] bg-white/[0.01] hover:bg-[#6366f1]/10 hover:border-indigo-500/40 transition-all text-xs sm:text-[13px] text-slate-300 font-medium group shadow-[0_2px_8px_rgba(0,0,0,0.15)]"
                          >
                            <Icon style={{ color: item.tone }} size={16} className="shrink-0 transition-transform duration-200 group-hover:scale-115" />
                            <span className="group-hover:text-white transition-colors">{item.name}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              <div className="tool-summary mt-6 pt-6 border-t border-white/10 grid gap-4 grid-cols-1 sm:grid-cols-3">
                {highlights.map(({ title, icon: Icon, value, color }) => (
                  <div key={title} className="bg-white/[0.02] border border-white/5 p-3 rounded-lg flex flex-col justify-between">
                    <div className="flex items-center gap-1.5">
                      <Icon size={13} style={{ color }} className="shrink-0" />
                      <span className="block text-[10px] font-mono text-indigo-300 uppercase tracking-wider">{title}</span>
                    </div>
                    <span className="block text-xs text-slate-300 mt-2 font-medium leading-relaxed">{value}</span>
                  </div>
                ))}
              </div>
            </article>
          </FadeIn>

          {/* Telemetry and K8s Cluster commented out as requested */}
          {/* 
          <FadeIn delay={0.2} className="h-full">
            <article className="metric-panel signal-panel h-full flex flex-col justify-between">
              ...
            </article>
          </FadeIn>
          */}
        </div>
      </div>
    </section>
  );
}

