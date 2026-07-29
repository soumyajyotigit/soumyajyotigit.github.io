export interface Project {
  number: string;
  title: string;
  type: string;
  description: string;
  impact: string;
  stack: string[];
  details: string[];
  architecture: string;
  challenge: string;
  solution: string;
  metrics: string[];
  containerSpec?: {
    tool: "docker" | "k8s" | "linux";
    label: string;
    code: string;
  };
}

export const projects: Project[] = [
  {
    number: "01",
    title: "Real-time Training Platform",
    type: "AI-enabled simulation platform",
    description: "A collaborative simulation environment connecting instructors, trainees, AI coaching, and physical training hardware in real time. Socket.IO orchestrates session state while MQTT streams live telemetry. The edge clients operate on custom Linux systems controlled by automated scripts.",
    impact: "Live telemetry delivered in under 200 ms with synchronized edge device orchestration.",
    stack: ["React", "Node.js", "PostgreSQL", "MongoDB", "Socket.IO", "MQTT", "Linux", "Docker"],
    details: [
      "Real-time session orchestration with low-latency device telemetry streams",
      "Event-throttled MQTT data ingestion to prevent database bottlenecks",
      "Edge client services running under Linux systemd supervisor daemons",
      "Containerized deployment with multi-stage Docker builds to run on x86/ARM platforms",
      "Auto-updating scripts and device telemetry heartbeat indicators"
    ],
    architecture: `Trainee Device ---> [Edge Linux client / MQTT Broker] ---> [Telemetry Consumer]
                                                                        |
Instructor Dashboard <--- [Socket.IO Event Stream] <--- [Central Node Service] ---> [PostgreSQL / MongoDB]`,
    challenge: "Handling concurrent streams of high-frequency telemetry from 50+ simulator devices without causing UI freezing, message queue backlogs, or edge daemon crashes under unstable network conditions.",
    solution: "Implemented an event-throttle layer in the Node.js server that aggregates and batches telemetry readings every 50ms before broadcasting via Socket.IO, offloaded heavy persistence tasks to a background worker queue utilizing Redis, and deployed automated systemd service recovery on edge Linux gateways.",
    metrics: [
      "Average telemetry latency: 120ms (down from 750ms)",
      "UI rendering cycles reduced by 40% via state batching",
      "Support for up to 150 concurrent active IoT training sessions",
      "Zero manual daemon restarts needed over 90 days due to systemd auto-restart rules"
    ],
    containerSpec: {
      tool: "linux",
      label: "/etc/systemd/system/telemetry-agent.service",
      code: `[Unit]
Description=IoT Telemetry Collection Daemon
After=network.target mqtt.service

[Service]
Type=simple
User=pi
WorkingDirectory=/opt/telemetry
ExecStart=/usr/bin/node dist/agent.js
Restart=always
RestartSec=5
StandardOutput=journal
StandardError=journal
SyslogIdentifier=telemetry-agent
Environment=NODE_ENV=production PORT=3200

[Install]
WantedBy=multi-user.target`
    }
  },
  {
    number: "02",
    title: "Portable Cloud-Native Stack",
    type: "Multi-environment deployment system",
    description: "A container-first stack designed to run identical software environments on developer workstations, Raspberry Pi edge gateways, and AWS cloud clusters. Powered by Docker multi-stage builds and Kubernetes orchestrations.",
    impact: "Consistent deployment with 99.9% availability readiness across laptop, edge, and cloud.",
    stack: ["Docker", "Kubernetes", "AWS", "Nginx", "Redis", "Raspberry Pi", "Linux", "Bash"],
    details: [
      "Multi-platform Docker images utilizing docker buildx to support amd64 and arm64 targets",
      "Kubernetes deployment profiles supporting self-healing pods, local ingress, and environment variables",
      "Nginx-driven reverse proxying with custom ssl termination and rate-limiting rules",
      "CI/CD automation targeting AWS EKS cluster and Docker Hub via GitHub Actions",
      "Linux bash scripts managing cluster bootstrapping, secrets rotation, and telemetry aggregation"
    ],
    architecture: `[GitHub Repo] ---> [GitHub Actions CI] ---> [Docker Hub / ECR Registry]
                                                  |
           +--------------------------------------+------------------------------------+
           |                                      |                                    |
     [Developer Laptop]                      [Edge Gateway]                       [AWS EKS Cluster]
     (Docker Compose)                        (K3s / Raspberry Pi)                 (K8s manifests + ALB)`,
    challenge: "Bridging the gap between resource-constrained edge gateways (like Raspberry Pi running edge Linux) and scalable AWS nodes, ensuring identical image configurations without maintaining separate configuration codebases.",
    solution: "Used Docker multi-platform builds (buildx) to target both amd64 and arm64 architectures. Abstracted environment configurations using Kubernetes ConfigMaps and Secrets, which are simulated locally through Docker Compose environment files (.env) and Docker volumes.",
    metrics: [
      "Zero modifications required between local dev and AWS staging pipelines",
      "Deployment cycle times reduced from 45 mins to 8 mins via cached multi-stage builds",
      "Pod failover recovery in AWS cluster takes less than 12 seconds",
      "Container size optimized to under 120MB using Alpine node bases"
    ],
    containerSpec: {
      tool: "k8s",
      label: "k8s/deployment.yaml",
      code: `apiVersion: apps/v1
kind: Deployment
metadata:
  name: web-app-deployment
  labels:
    app: web-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: web-app
  template:
    metadata:
      labels:
        app: web-app
    spec:
      containers:
      - name: web-app
        image: soumyajyoti/web-app:latest
        ports:
        - containerPort: 3000
        resources:
          limits:
            cpu: "500m"
            memory: "512Mi"
          requests:
            cpu: "250m"
            memory: "256Mi"
        livenessProbe:
          httpGet:
            path: /healthz
            port: 3000
          initialDelaySeconds: 15
          periodSeconds: 20`
    }
  },
  {
    number: "03",
    title: "Enterprise Workflow Platform",
    type: "Operations and resource management",
    description: "A secure, role-aware web application centralizing business workflows, dynamic approval routing, and resource tracking. Docker orchestration handles microservices while PostgreSQL and Redis caches drive sub-80ms dashboard responses.",
    impact: "API performance improved from 300 ms to under 80 ms under heavy concurrent load.",
    stack: ["React", "Express", "PostgreSQL", "Redis", "Docker", "Docker Compose", "AWS", "Nginx"],
    details: [
      "Fully containerized local multi-service environment utilizing Docker Compose",
      "Normalized relational database schema with composite indexing and materialized views",
      "Real-time operational notifications using Server-Sent Events (SSE) and Redis Pub/Sub",
      "Configured Redis cache layers with active cache-invalidation rules",
      "Automated unit and integration testing inside CI test containers"
    ],
    architecture: `Client App ---> [Nginx Reverse Proxy] ---> [Node.js Express App]
                                                   |
                               +--------------------+--------------------+
                               |                                         |
                        [Redis Cache Layer]                     [PostgreSQL Database]
                        (Session/Dashboard Cache)               (Normalized Tables & Indices)`,
    challenge: "Complex database joins on millions of operational workflow and approval records caused dashboard response times to degrade during peak business hours. Local Linux server environments had resource contention under load.",
    solution: "Redesigned PostgreSQL schema with proper composite indices, created materialized views for daily aggregations, and added a Redis-based cache layer with write-through invalidation for static department logs. Tuned Linux kernel TCP buffers and file descriptor limits to handle peak connection loads.",
    metrics: [
      "99th percentile API response time: 65ms (improved from 320ms)",
      "Database server CPU utilization dropped from 85% to 18%",
      "Automated CI/CD testing coverage increased to 82%",
      "Redis memory footprint optimized by 35% through hash key compacting"
    ],
    containerSpec: {
      tool: "docker",
      label: "docker-compose.yml",
      code: `version: '3.8'

services:
  web:
    image: node:20-alpine
    working_dir: /usr/src/app
    command: npm start
    ports:
      - "3000:3000"
    environment:
      - REDIS_URL=redis://cache:6379
      - DATABASE_URL=postgres://user:pw@db:5432/workflow
    depends_on:
      - db
      - cache

  db:
    image: postgres:15-alpine
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: pw
      POSTGRES_DB: workflow
    volumes:
      - pgdata:/var/lib/postgresql/data
    ports:
      - "5432:5432"

  cache:
    image: redis:7-alpine
    ports:
      - "6379:6379"

volumes:
  pgdata:`
    }
  },
  {
    number: "04",
    title: "AI Content Feedback Service",
    type: "Intelligent workflow automation",
    description: "An API-first microservice integrating AI-powered critique and feedback loops into digital content publishing pipelines. Employs Docker-packaged Node services and robust validation guardrails.",
    impact: "Reduced manual review cycle times by 50% while preserving fully traceable feedback audits.",
    stack: ["OpenAI API", "Node.js", "Express", "MongoDB", "Docker", "Kubernetes", "AWS"],
    details: [
      "Structured schema prompt engineering ensuring 100% downstream JSON parsing safety",
      "Audit logs with immutable storage mapping all incoming requests, LLM feedback, and manual revisions",
      "Dockerized microservice configuration running seamlessly on AWS cloud infrastructure",
      "Resilient backoff-and-retry queue handling external API limits and server issues",
      "Role-based secure access tokens safeguarding API ingestion ports"
    ],
    architecture: `Workflow Client App ---> [Express API Gateway] ---> [Input Validation & Guardrails]
                                                                      |
                                   [MongoDB Audit Store] <--- [OpenAI API Handler]`,
    challenge: "Handling OpenAI API rate limits and structural inconsistencies in AI responses, which caused failures in downstream workflow parsers. Managing secrets and API credentials securely across developer and cloud environments.",
    solution: "Implemented an exponential backoff retry mechanism with queueing for OpenAI API requests. Used JSON schema constraints in system prompts combined with response-validation logic to guarantee structured outputs. Integrated Kubernetes Sealed Secrets and AWS Secrets Manager.",
    metrics: [
      "AI output parsing success rate: 99.8%",
      "System average processing turnaround: 1.8 seconds",
      "API request throughput scaled to 10k requests/day",
      "Zero credential leaks in environment transitions via Docker Secrets mounting"
    ],
    containerSpec: {
      tool: "docker",
      label: "Dockerfile",
      code: `# Multi-stage Build for Optimized Production Image
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY package*.json ./
RUN npm ci --only=production
COPY --from=builder /app/dist ./dist

USER node
EXPOSE 3000
CMD ["node", "dist/server.js"]`
    }
  },
  {
    number: "05",
    title: "Document Intelligence RAG Platform",
    type: "LLM Retrieval-Augmented Generation",
    description: "An AI-powered Q&A engine that ingests PDF documents, parses layout structures, and runs retrieval-augmented generation (RAG) to provide grounded bot replies. Leverages vector search and semantic chunking.",
    impact: "Reduces data retrieval times for enterprise PDF audits from hours to seconds with 98% factual grounding.",
    stack: ["OpenAI API", "Python", "LangChain", "Pinecone", "Docker", "FastAPI", "React"],
    details: [
      "Chunking engine that extracts text, tables, and structures from multi-page PDFs",
      "Vector embedding generation and ingestion pipelines running against Pinecone vector databases",
      "Grounded Q&A agent utilizing semantic search retrieval and LLM context window compression",
      "Fully containerized deployment using Docker and FastAPI backend endpoints",
      "Interactive chat interface showing source citations and semantic chunks"
    ],
    architecture: `PDF Upload ---> [Document Parsing & Chunking] ---> [Embedding Model] ---> [Pinecone Vector DB]
                                                                                             |
    User Query ---> [Semantic Search Retrieval] ---> [LLM Prompt Context] ---> [Bot Reply Output]`,
    challenge: "Chunking long PDFs while preserving contextual references (like document sections or table captions), which resulted in degraded answer quality when context chunks were split arbitrarily.",
    solution: "Implemented a layout-aware parent-child chunking strategy using LangChain. Stored small semantic chunks for vector matching while retrieving larger parent document contexts to feed into the LLM prompt wrapper.",
    metrics: [
      "Vector search retrieval precision: 94.2% MRR",
      "Factual hallucination rate reduced to under 1.5% using grounding guardrails",
      "Interactive Q&A response time: 1.2 seconds average",
      "Document parsing ingestion capacity: 150+ pages per minute"
    ],
    containerSpec: {
      tool: "docker",
      label: "Dockerfile",
      code: `# Multi-stage Dockerfile for FastAPI RAG backend
FROM python:3.11-slim AS builder
WORKDIR /app
COPY requirements.txt .
RUN pip install --user --no-cache-dir -r requirements.txt

FROM python:3.11-slim AS runner
WORKDIR /app
COPY --from=builder /root/.local /root/.local
COPY . .
ENV PATH=/root/.local/bin:$PATH
ENV PORT=8000
EXPOSE 8000
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]`
    }
  }
];
