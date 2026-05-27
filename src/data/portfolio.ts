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
      longDescription: "I engineered this link shortener platform to handle redirection traffic by implementing a cache-first routing layer in Redis. To avoid core API blocks during tracking analytics, telemetry metrics are sent asynchronously to a BullMQ queue processed by consumer workers. The system uses a Snowflake-inspired custom ID generation algorithm to yield unique, collision-free redirection keys in distributed worker environments.",
      github: "https://github.com/AnilMarneni/Distributed-URL-Shortener-Platform",
      tags: ["Node.js", "Redis", "BullMQ", "PostgreSQL", "Docker", "Nginx"],
      category: "distributed-systems",
      architecture: {
        description: "Cache-first redirection routing backed by asynchronous queue workers.",
        nodes: [
          { id: "nginx", label: "Nginx Ingress", type: "ingress" },
          { id: "api-server", label: "Shortener API", type: "service" },
          { id: "redis-cache", label: "Redis Cache", type: "cache" },
          { id: "bullmq", label: "BullMQ Queue", type: "queue" },
          { id: "worker-pool", label: "Analytics Workers", type: "compute" },
          { id: "postgres", label: "PostgreSQL DB", type: "storage" },
        ],
        connections: [
          { from: "nginx", to: "api-server", label: "Redirection Request" },
          { from: "api-server", to: "redis-cache", label: "Check Cache" },
          { from: "api-server", to: "bullmq", label: "Enqueue Telemetry" },
          { from: "bullmq", to: "worker-pool", label: "Process Analytics" },
          { from: "worker-pool", to: "postgres", label: "Persist Stats" },
        ],
      },
      poster: "/images/projects/url-shortener.webp",
      scalabilityInsights: [
        "Sub-15ms redirect latency achieved via cache-first lookup strategy in Redis",
        "Asynchronous event ingestion isolates core redirect paths from database write overhead",
        "Snowflake-inspired 64-bit keys eliminate collision overhead in multi-container setups",
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
      longDescription: "I built this fintech-inspired event monitoring system to simulate transaction auditing workflows. The backend captures financial transactions, feeds them to a FastAPI machine learning microservice for risk evaluation, and broadcasts risk status to an interactive analytics board using Socket.IO, maintaining low latency throughout the flow.",
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
        "Decoupled FastAPI inference microservice isolates heavy scientific models from HTTP logic",
        "WebSocket connection pooling streams high-frequency security metrics to dashboards without polling",
        "Non-blocking async worker workers stream logs for continuous operational auditing",
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
      longDescription: "I designed this benchmark infrastructure to assess large language models on Dravidian (South Indian) language comprehension. The platform orchestrates evaluation queues, leverages OCR preprocessing for text document ingestion, and displays structured metrics using a FastAPI and MERN hybrid framework.",
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
        "Decoupled OCR preprocessing allows batch parallelization of large text documents",
        "Evaluation queues prevent server timeout lockups during long-running model validations",
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
      longDescription: "I built this backend system to compile and execute user code within secure sandboxes. It implements process isolation via Docker containers with cgroup resource limitations, ensuring strict memory boundaries, execution timeouts, and protection from malicious system calls.",
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
        "Container pools terminate instantly after runs to prevent state corruption",
        "Resource parameters (memory, CPU, network) restricted dynamically to protect host infrastructure",
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
      longDescription: "This agricultural marketplace records batch tracking histories from production nodes. Using JWT authentication with role-based access controls (RBAC), it governs transactional state machines for batch order lifecycles and QR tracing.",
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
        "State machine constraints prevent invalid transitions in transaction lifecycles",
        "Indexed supply chain path keys provide lookup optimization during QR code queries",
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
      longDescription: "I developed this simple support system as a clean, practical MERN application. It categorizes user tickets, aggregates dashboard feedback metrics, and automates tagging via basic backend rules.",
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
        "Lightweight rule parsing filters support ticket streams at low computational costs",
        "Paginated requests keep client-side ticket visualization loading times fast",
      ],
      highlights: [
        "Ticketing platform and analytics dashboard",
        "Automated classification rule pipeline",
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

