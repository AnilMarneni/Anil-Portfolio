import { PortfolioData } from "@/types";

export const portfolioData: PortfolioData = {
  name: "Marneni Anil Chiranjeeth",
  role: "Backend & Systems-Oriented Developer",
  status: "College Student",
  college: "Vignan Institute of Technology and Science",
  graduationYear: "2027",
  location: "Hyderabad, India",
  contact: {
    email: "anilmarneni30@gmail.com",
    github: "https://github.com/AnilMarneni",
    linkedin: "https://www.linkedin.com/in/anil-marneni",
  },
  codingProfiles: {
    leetcode: "https://leetcode.com/u/AnilMarneni/",
    codeforces: "https://codeforces.com/profile/AnilMarneni",
    hackerrank: "https://www.hackerrank.com/anilmarneni30",
  },
  leetcodeStats: {
    solved: 215,
    easy: 126,
    medium: 77,
    hard: 12,
    ranking: "708,860",
    contestRating: 1488,
    globalRanking: "416,845 / 874,449",
    topPercentage: "48.13%",
    acceptanceRate: "76.16%",
    submissions: 339,
    activeDays: 80,
    maxStreak: 30,
    recentSubmissions: [
      "Separate the Digits in an Array",
      "Maximum Number of Jumps to Reach the Last Index",
      "Cyclically Rotating a Grid",
      "Minimum Jumps to Reach End via Prime Teleportation",
      "Rotate List"
    ],
    recentBadge: "50 Days Badge 2026",
  },
  skills: [
    {
      title: "Programming Languages",
      skills: ["C++", "Java", "Python", "JavaScript", "TypeScript"],
    },
    {
      title: "Backend & Web Architecture",
      skills: ["Node.js", "Express.js", "FastAPI", "WebSockets", "REST APIs", "BullMQ"],
    },
    {
      title: "Databases & Caching",
      skills: ["PostgreSQL", "MongoDB", "Redis"],
    },
    {
      title: "Tools & Infrastructure",
      skills: ["Docker", "Nginx", "Git", "GitHub Actions", "Linux"],
    },
    {
      title: "CS Fundamentals",
      skills: ["Data Structures & Algorithms", "Object-Oriented Programming", "DBMS", "Operating Systems", "Computer Networks", "System Design"],
    },
  ],
  projects: [
    {
      id: "url-shortener",
      title: "Distributed URL Shortener Platform",
      description: "A high-performance link management platform designed for low-latency cache-first redirections.",
      longDescription: "I built this link shortener to handle redirect traffic efficiently by setting up a cache-first routing layer in Redis. To keep database operations from blocking the main redirection flow, link analytics are queued asynchronously using BullMQ and processed by background workers. I also implemented a Snowflake-inspired custom ID generator to guarantee unique redirection keys across distributed instances.",
      github: "https://github.com/AnilMarneni/Distributed-URL-Shortener-Platform",
      tags: ["Node.js", "Redis", "BullMQ", "PostgreSQL", "Docker", "Nginx"],
      category: "distributed-systems",
      architecture: {
        description: "Cache-first redirection routing backed by asynchronous queue workers.",
        nodes: [
          { id: "api-server", label: "Shortener API", type: "service" },
          { id: "redis-cache", label: "Redis Cache", type: "cache" },
          { id: "postgres", label: "PostgreSQL DB", type: "storage" },
        ],
        connections: [
          { from: "api-server", to: "redis-cache", label: "Check Cache" },
          { from: "api-server", to: "postgres", label: "Persist Stats" },
        ],
      },
      poster: "/images/projects/url-shortener.webp",
      scalabilityInsights: [
        "Sub-15ms redirects achieved via cache-first lookup strategy in Redis",
        "Asynchronous queue workers isolate core redirect paths from database write overhead",
        "Snowflake-inspired 64-bit keys eliminate ID collision risk in multi-container setups",
      ],
      highlights: [
        "Cache-first redirection layer",
        "BullMQ asynchronous analytics ingestion",
        "Snowflake-inspired distributed ID generation",
        "Dockerized service multi-node setup",
      ],
      challenges: [
        "Preventing cache stampedes when highly active shortened links expire simultaneously",
        "Managing database write backpressure under high analytics ingestion bursts",
      ],
    },
    {
      id: "fraud-detection",
      title: "NEURO-SIG Fraud Detection Platform",
      description: "A real-time fintech transaction analytics monitor using automated anomaly scoring.",
      longDescription: "I built this transaction monitoring dashboard to showcase real-time fraud detection workflows. The backend streams mock transaction events to a FastAPI service running anomaly detection in real time. Identified anomalies and risk scores are broadcasted instantly to an auditing dashboard via Socket.IO for incident response visualization.",
      github: "https://github.com/AnilMarneni/Real-Time-Transaction-Monitoring-Fraud-Detection-System",
      tags: ["FastAPI", "Socket.IO", "React", "Scikit-Learn", "Python", "MongoDB"],
      category: "real-time",
      architecture: {
        description: "Event-driven transaction telemetry linked to an anomaly classification service.",
        nodes: [
          { id: "txn-stream", label: "Transaction Stream", type: "stream" },
          { id: "gateway", label: "Express API", type: "service" },
          { id: "fastapi-ml", label: "FastAPI ML Service", type: "ai-model" },
          { id: "socket-server", label: "Socket.IO Server", type: "ws" },
          { id: "dashboard", label: "Analyst Console", type: "ui" },
        ],
        connections: [
          { from: "txn-stream", to: "gateway", label: "Submit Transaction" },
          { from: "gateway", to: "fastapi-ml", label: "Score Risk" },
          { from: "gateway", to: "socket-server", label: "Propagate Score" },
          { from: "socket-server", to: "dashboard", label: "Real-Time Alert" },
        ],
      },
      poster: "/images/projects/neuro-sig.webp",
      scalabilityInsights: [
        "FastAPI microservice isolates heavy machine learning models from the main HTTP API",
        "WebSocket event streaming updates the dashboard instantly without client-side polling",
        "Asynchronous logging provides smooth transaction recording for operational audits",
      ],
      highlights: [
        "FastAPI machine learning microservice",
        "Socket.IO real-time transaction sync",
        "Audit replay-based fraud investigation timeline",
        "Interactive dashboard for incident response simulation",
      ],
      challenges: [
        "Optimizing machine learning classifier execution time to ensure sub-200ms latency",
        "Handling socket reconnection gracefully while preserving event stream order",
      ],
    },
    {
      id: "dravidian-llm-benchmark",
      title: "Dravidian LLM Benchmark",
      description: "A multilingual evaluation platform mapping performance metrics for low-resource languages.",
      longDescription: "I developed this benchmarking tool to evaluate open-source language models on South Indian languages. The platform processes text documents using OCR pipelines, schedules heavy LLM tests via an asynchronous queue to prevent server timeouts, and displays structured model performance graphs on a FastAPI-MERN hybrid interface.",
      github: "https://github.com/AnilMarneni/Dravidian-LLM-Benchmark",
      tags: ["MERN Stack", "FastAPI", "OCR Ingestion", "MongoDB", "Asynchronous Queues"],
      category: "ai",
      architecture: {
        description: "Asynchronous benchmarking queue with batch OCR document processing pipelines.",
        nodes: [
          { id: "ocr-engine", label: "OCR Preprocessor", type: "compute" },
          { id: "api-backend", label: "Express API", type: "service" },
          { id: "eval-harness", label: "FastAPI Evaluator", type: "ai-model" },
          { id: "db-store", label: "MongoDB Ledger", type: "storage" },
          { id: "frontend-ui", label: "Benchmark UI", type: "ui" },
        ],
        connections: [
          { from: "ocr-engine", to: "api-backend", label: "Submit Text" },
          { from: "api-backend", to: "eval-harness", label: "Orchestrate Test" },
          { from: "eval-harness", to: "db-store", label: "Persist Metrics" },
          { from: "frontend-ui", to: "api-backend", label: "Query Results" },
        ],
      },
      poster: "/images/projects/dravidian-benchmark.webp",
      scalabilityInsights: [
        "Batch OCR processing optimizes server resources during large text uploads",
        "Asynchronous task queues prevent network timeouts during long-running LLM test runs",
        "Flexible NoSQL database schema supports progressive additions of benchmark indicators",
      ],
      highlights: [
        "Dravidian low-resource language evaluator",
        "Automated OCR ingestion workflow",
        "Asynchronous evaluation scheduling queue",
        "Structured model analytics board",
      ],
      challenges: [
        "Handling diverse character encodings in low-resource language training data",
        "Orchestrating concurrent API evaluation tasks to third-party LLMs safely within rate limits",
      ],
    },
    {
      id: "code-execution",
      title: "Secure Multi-Language Code Execution Platform",
      description: "A secure sandbox system for running and testing user code in isolated environments.",
      longDescription: "I built a sandboxed environment to run untrusted code safely, similar to an online judge. It launches user-submitted code in temporary Docker containers, enforcing strict limits on execution time, memory usage, and system access to prevent resource abuse.",
      github: "https://github.com/AnilMarneni/Distributed-Code-Execution-Engine",
      tags: ["Docker", "Node.js", "Process Isolation", "Redis", "C++"],
      category: "backend",
      architecture: {
        description: "Isolated container orchestration with resource-constrained execution boxes.",
        nodes: [
          { id: "gateway", label: "REST Gateway", type: "service" },
          { id: "runner", label: "Execution Manager", type: "compute" },
          { id: "sandbox", label: "Docker cgroup Box", type: "sandbox" },
        ],
        connections: [
          { from: "gateway", to: "runner", label: "Submit Source Code" },
          { from: "runner", to: "sandbox", label: "Instantiate Container" },
        ],
      },
      poster: "/images/projects/code-execution.webp",
      scalabilityInsights: [
        "Disposable containers terminate immediately after execution to keep worker environments clean",
        "Docker resource constraints restrict memory and CPU access to protect host servers",
      ],
      highlights: [
        "Docker container runtime sandboxing",
        "Memory and execution CPU limits enforcement",
        "Multi-language execution (C++, Java, Python)",
      ],
      challenges: [
        "Minimizing container boot overhead to achieve high compilation responsiveness",
      ],
    },
    {
      id: "veritas-marketplace",
      title: "Veritas QR Traceability Marketplace",
      description: "A MERN marketplace application tracking agricultural inventory via unique QR codes.",
      longDescription: "This agricultural marketplace allows buyers and sellers to trace crop batches from farms to consumers. It features dynamic QR code generation for batch tracking, secure JWT-based role authorizations, and transactional states to manage order lifecycles.",
      github: "https://github.com/AnilMarneni/Veritas-QR-Traceability-Marketplace",
      tags: ["MERN Stack", "JWT Auth", "QR Codes", "MongoDB", "State Machines"],
      category: "backend",
      architecture: {
        description: "State-driven inventory tracking with relational data mapping in MongoDB.",
        nodes: [
          { id: "client", label: "MERN Client", type: "ui" },
          { id: "api", label: "Marketplace Server", type: "service" },
          { id: "db", label: "MongoDB", type: "storage" },
        ],
        connections: [
          { from: "client", to: "api", label: "Scan QR Code / Buy" },
          { from: "api", to: "db", label: "Update Order State" },
        ],
      },
      poster: "/images/projects/veritas-marketplace.webp",
      scalabilityInsights: [
        "Transaction states prevent invalid routing during order lifecycle transitions",
        "Database indexing on tracking IDs ensures rapid lookup when scanning crop QR codes",
      ],
      highlights: [
        "Practical MERN commerce platform",
        "Automated QR code batch tracing",
        "JWT-based role authentication rules",
      ],
      challenges: [
        "Managing database transaction logic manually in MongoDB under high buyer traffic",
      ],
    },
    {
      id: "customer-support",
      title: "Customer Support Automation Platform",
      description: "A lightweight support ticketing dashboard mapping messages through basic rules.",
      longDescription: "A practical MERN stack application built to organize and automate customer support tickets. It captures user inquiries, categorizes them using a simple backend rules engine, and displays structured ticket details on a support agent dashboard.",
      github: "https://github.com/AnilMarneni/Customer-Support-Automation-Platform",
      tags: ["Express.js", "React", "MongoDB", "Node.js", "Rule Engines"],
      category: "backend",
      architecture: {
        description: "Support ticket ingestion with automated rule-based routing and analytics.",
        nodes: [
          { id: "ui", label: "Support Client", type: "ui" },
          { id: "api", label: "Ticketing Server", type: "service" },
          { id: "db", label: "MongoDB", type: "storage" },
        ],
        connections: [
          { from: "ui", to: "api", label: "Create Ticket" },
          { from: "api", to: "db", label: "Categorize & Persist" },
        ],
      },
      poster: "/images/projects/customer-support.webp",
      scalabilityInsights: [
        "Static rule evaluation filters and routes support tickets with low API overhead",
        "Paginated API endpoints keep dashboard load speeds fast and responsive",
      ],
      highlights: [
        "Practical MERN stack ticketing app",
        "Rule-based automated ticket categorization",
      ],
      challenges: [
        "Synchronizing live update statuses between support agent views",
      ],
    },
  ],
  experience: [
    {
      company: "Infosys Springboard",
      role: "AIML Intern",
      period: "Dec 2025 – Feb 2026",
      description: "Built and optimized machine learning preprocessing pipelines.",
      achievements: [
        "Developed and optimized text preprocessing pipelines using Python for NLP tasks covering dataset inputs.",
        "Refined ML evaluation setups, improving prediction latency by isolating preprocessing tasks.",
        "Created scalable data conversion scripts to transition raw logs into structured analytics tables.",
      ],
    },
    {
      company: "Rocket.Chat",
      role: "Open Source Contributor",
      period: "May 2025 - Aug 2025",
      description: "Contributed to one of the world's leading open-source communication platforms.",
      achievements: [
        "Identified and fixed minor bugs in WebSocket messaging events and core state updates.",
        "Collaborated with community maintainers inside a complex, production-grade TypeScript codebase.",
        "Gained hands-on experience working with real-time systems and event propagation patterns.",
      ],
    },
  ],
};

