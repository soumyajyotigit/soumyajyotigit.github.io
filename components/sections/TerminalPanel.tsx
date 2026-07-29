"use client";

import React, { useState, useEffect, useRef } from "react";
import FadeIn from "@/components/animations/FadeIn";

interface TerminalLine {
  type: "input" | "output" | "error" | "ascii";
  text: string;
}

export default function TerminalPanel() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<TerminalLine[]>([
    { type: "output", text: "Soumyajyoti Studio OS v1.0.0 (x86_64-pc-linux-gnu)" },
    { type: "output", text: "Type 'help' to view available commands, 'neofetch' for system details." },
    { type: "input", text: "neofetch" },
    {
      type: "ascii",
      text: `   .---.       OS: Debian GNU/Linux 12 (bookworm)
  /     \\      Kernel: Linux 6.8.0-generic-x86_64
  \\   _  /     Shell: bash 5.2.15
   '-(_)-'     Uptime: 4 hours, 32 mins
  /  _ _  \\    CPU: Intel Core i7-13700H (14 cores)
 /  ( ' )  \\   Memory: 16.2 GB / 32 GB (50%)
 \\   \\_/   /   Containers: 4 Docker containers running
  '-------'    Kubernetes: Cluster active (local/edge)`,
    },
  ]);

  const [cmdHistory, setCmdHistory] = useState<string[]>(["neofetch"]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll on content updates
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [history]);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const command = input.trim();
      const newHistory = [...history, { type: "input" as const, text: command }];

      if (command) {
        setCmdHistory((prev) => [...prev, command]);
        setHistoryIndex(-1);
        const resolvedLines = executeCommand(command);
        setHistory([...newHistory, ...resolvedLines]);
      } else {
        setHistory(newHistory);
      }
      setInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (cmdHistory.length === 0) return;
      const nextIndex = historyIndex === -1 ? cmdHistory.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIndex);
      setInput(cmdHistory[nextIndex]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex === -1) return;
      const nextIndex = historyIndex + 1;
      if (nextIndex >= cmdHistory.length) {
        setHistoryIndex(-1);
        setInput("");
      } else {
        setHistoryIndex(nextIndex);
        setInput(cmdHistory[nextIndex]);
      }
    }
  };

  const executeCommand = (cmdStr: string): TerminalLine[] => {
    const args = cmdStr.split(" ");
    const command = args[0].toLowerCase();

    switch (command) {
      case "help":
        return [
          { type: "output", text: "Available commands:" },
          { type: "output", text: "  neofetch      - Display system parameters & ASCII art" },
          { type: "output", text: "  about         - Background bio and introduction" },
          { type: "output", text: "  skills        - List expertise in columns" },
          { type: "output", text: "  projects      - List details of built systems" },
          { type: "output", text: "  docker ps     - Show mock running containers" },
          { type: "output", text: "  docker logs   - View mock streaming logs (e.g. 'docker logs node')" },
          { type: "output", text: "  kubectl pods  - Show status of local Kubernetes pods" },
          { type: "output", text: "  clear         - Clear terminal history" },
        ];
      case "clear":
        setTimeout(() => setHistory([]), 5);
        return [];
      case "about":
        return [
          { type: "output", text: "Soumyajyoti Karmakar | Full-Stack & AI Developer" },
          { type: "output", text: "Based in Kolkata, India. Passionate about building cloud-native apps," },
          { type: "output", text: "real-time synchronization models, and robust microservices." },
          { type: "output", text: "Core stack focus: Next.js/React, Node.js, Docker, K8s, PostgreSQL, and AWS." },
        ];
      case "skills":
        return [
          { type: "output", text: "LANGUAGES:   TypeScript, JavaScript, Python, SQL, HTML/CSS" },
          { type: "output", text: "FRAMEWORKS:  React, Next.js, Express, Node.js, Tailwind CSS" },
          { type: "output", text: "DATABASES:   PostgreSQL, MongoDB, Redis, MySQL" },
          { type: "output", text: "PLATFORMS:   Docker, Kubernetes (K8s), AWS, Linux, Git, CI/CD" },
        ];
      case "projects":
        return [
          { type: "output", text: "PROJECT 01: Real-time Training Platform (Socket.IO, MQTT, MongoDB)" },
          { type: "output", text: "PROJECT 02: Portable Cloud-Native Stack (Docker, Kubernetes, AWS)" },
          { type: "output", text: "PROJECT 03: Enterprise Workflow Platform (React, Express, PostgreSQL, Redis)" },
          { type: "output", text: "PROJECT 04: AI Content Feedback Service (OpenAI API, Node.js, Express)" },
          { type: "output", text: "Type project details in browser above for architecture and challenges." },
        ];
      case "neofetch":
        return [
          {
            type: "ascii",
            text: `   .---.       OS: Debian GNU/Linux 12 (bookworm)
  /     \\      Kernel: Linux 6.8.0-generic-x86_64
  \\   _  /     Shell: bash 5.2.15
   '-(_)-'     Uptime: 4 hours, 32 mins
  /  _ _  \\    CPU: Intel Core i7-13700H (14 cores)
 /  ( ' )  \\   Memory: 16.2 GB / 32 GB (50%)
 \\   \\_/   /   Containers: 4 Docker containers running
  '-------'    Kubernetes: Cluster active (local/edge)`,
          },
        ];
      case "docker":
        if (args[1] === "ps") {
          return [
            { type: "output", text: "CONTAINER ID   IMAGE                 COMMAND                  STATUS         PORTS" },
            { type: "output", text: "a8f4c2b9d031   nginx:alpine          \"/docker-entrypoint.s…\"  Up 2 hours     0.0.0.0:80->80/tcp" },
            { type: "output", text: "91f3e8c20d1e   node:20-alpine        \"docker-entrypoint.sh…\"  Up 2 hours     0.0.0.0:3000->3000/tcp" },
            { type: "output", text: "f23d8a11a8b9   postgres:15-alpine    \"docker-entrypoint.s…\"  Up 5 hours     0.0.0.0:5432->5432/tcp" },
            { type: "output", text: "e48c27d81a9f   redis:7-alpine        \"docker-entrypoint.s…\"  Up 5 hours     0.0.0.0:6379->6379/tcp" },
          ];
        } else if (args[1] === "logs") {
          const containerName = args[2] || "node";
          if (containerName.includes("node") || containerName.includes("91f3")) {
            return [
              { type: "output", text: "[node-server] Starting server on port 3000..." },
              { type: "output", text: "[node-server] Connected to PostgreSQL at database.local:5432" },
              { type: "output", text: "[node-server] Connected to Redis Cache at cache.local:6379" },
              { type: "output", text: "[node-server] Socket.IO: client connected [id=7f5c8d23]" },
              { type: "output", text: "[node-server] Telemetry: MQTT payload received - 120ms latency" },
            ];
          } else if (containerName.includes("nginx") || containerName.includes("a8f4")) {
            return [
              { type: "output", text: "nginx - 172.17.0.1 - [30/Jul/2026:01:48:02 +0530] \"GET / HTTP/1.1\" 200 3426" },
              { type: "output", text: "nginx - 172.17.0.1 - [30/Jul/2026:01:48:05 +0530] \"GET /_next/static/css/app.css HTTP/1.1\" 200 14773" },
              { type: "output", text: "nginx - 172.17.0.1 - [30/Jul/2026:01:48:09 +0530] \"GET /api/telemetry HTTP/1.1\" 101 0" },
            ];
          } else {
            return [
              { type: "output", text: `Streaming mock logs for ${containerName}...` },
              { type: "output", text: "Database connection pools active. Uptime stability nominal." },
            ];
          }
        }
        return [{ type: "error", text: "Usage: docker ps | docker logs [container_name]" }];
      case "kubectl":
        if (args[1] === "get" && (args[2] === "pods" || args[2] === "pod")) {
          return [
            { type: "output", text: "NAME                               READY   STATUS    RESTARTS   AGE" },
            { type: "output", text: "api-gateway-7f5c8d2345-v2x4k       1/1     Running   0          4h" },
            { type: "output", text: "auth-service-5d9b6e82ef-m9lwp       1/1     Running   1          4h" },
            { type: "output", text: "db-connector-81c4a23de4-9k2pj       1/1     Running   0          4h" },
            { type: "output", text: "worker-agent-77a84e2bd9-l1opq       1/1     Running   0          4h" },
          ];
        } else if (args[1] === "pods" || args[1] === "pod") {
          return [
            { type: "output", text: "NAME                               READY   STATUS    RESTARTS   AGE" },
            { type: "output", text: "api-gateway-7f5c8d2345-v2x4k       1/1     Running   0          4h" },
            { type: "output", text: "auth-service-5d9b6e82ef-m9lwp       1/1     Running   1          4h" },
            { type: "output", text: "db-connector-81c4a23de4-9k2pj       1/1     Running   0          4h" },
            { type: "output", text: "worker-agent-77a84e2bd9-l1opq       1/1     Running   0          4h" },
          ];
        }
        return [{ type: "error", text: "Usage: kubectl get pods" }];
      default:
        return [{ type: "error", text: `bash: command not found: ${command}. Type 'help' for options.` }];
    }
  };

  return (
    <section className="px-6 pb-16 pt-2 relative">
      <div className="mx-auto max-w-6xl">
        <FadeIn delay={0.1}>
          <div className="terminal-shell mx-auto" onClick={focusInput}>
            {/* Terminal Top Titlebar */}
            <div className="terminal-bar flex items-center justify-between">
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-rose-500 hover:scale-105 transition-transform cursor-pointer" />
                <span className="h-3 w-3 rounded-full bg-amber-400 hover:scale-105 transition-transform cursor-pointer" />
                <span className="h-3 w-3 rounded-full bg-emerald-500 hover:scale-105 transition-transform cursor-pointer" />
              </div>
              <span className="text-[11px] font-mono text-slate-400 select-none">
                soumyajyoti@studio: ~/workspace
              </span>
              <span className="text-[10px] font-mono bg-white/[0.04] border border-white/5 px-2 py-0.5 rounded text-indigo-300 select-none">
                bash
              </span>
            </div>

            {/* Terminal Body Screen */}
            <div
              ref={containerRef}
              className="terminal-content h-[340px] overflow-y-auto overflow-x-hidden font-mono p-5 bg-[#08090f]/95 border-t border-white/5 select-text"
            >
              {history.map((line, idx) => (
                <div key={idx} className="mb-2 leading-relaxed">
                  {line.type === "input" && (
                    <div className="flex items-center gap-2">
                      <span className="text-violet-400">soumyajyoti@studio:~$</span>
                      <span className="text-slate-100">{line.text}</span>
                    </div>
                  )}
                  {line.type === "output" && (
                    <div className="text-slate-300 text-[12px] pl-2">{line.text}</div>
                  )}
                  {line.type === "error" && (
                    <div className="text-rose-400 text-[12px] pl-2">{line.text}</div>
                  )}
                  {line.type === "ascii" && (
                    <pre className="text-sky-300 text-[11px] md:text-[12px] leading-relaxed whitespace-pre pl-2 overflow-x-auto select-text font-mono">
                      {line.text}
                    </pre>
                  )}
                </div>
              ))}

              {/* Interactive Line */}
              <div className="flex items-center gap-2 mt-4">
                <span className="text-violet-400 select-none">soumyajyoti@studio:~$</span>
                <div className="flex-1 flex items-center">
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="flex-1 bg-transparent text-slate-100 border-none outline-none ring-0 font-mono text-[13px] p-0 m-0"
                    autoComplete="off"
                    autoCorrect="off"
                    autoCapitalize="off"
                    spellCheck="false"
                  />
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
