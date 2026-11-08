export const personalInfo = {
  name: "Tadiwos Anegagregn",
  title: "Full-Stack & ML Systems Developer",
  subtitles: [
    "Full-Stack & ML Systems Developer",
    "Go & Next.js Backend Engineer",
    "PyTorch & ATen C++ Systems Specialist",
    "Super App & SaaS Architect",
  ],
  bio: "Full-stack developer and ML systems engineer based in Addis Ababa, Ethiopia. I specialize in high-performance backends in Go and Node.js, low-level PyTorch C++ extensions and distributed training, and scalable production web/mobile platforms. Winner of the 2024 Startup Ethiopia Grand Hackathon and author of the official Arifpay NPM library.",
  location: "Addis Ababa, Ethiopia",
  email: "tadiwosanegagregn@gmail.com",
  phone: "+251936234742",
  phoneDisplay: "+251-936-234-742",
  github: "https://github.com/Tadi-san",
  linkedin: "https://www.linkedin.com/in/tadiwos-anegagergn-951b25256",
  resumePath: "/TadiwosAnegagregn.pdf",
  avatar: "/hero1.png",
  hackathonImage: "/togetha.jpg",
  status: "Open to High-Impact Full-Stack & ML Systems Roles",
};

export const stats = [
  { value: "4+", label: "Years Experience", description: "Building web, mobile & distributed systems" },
  { value: "15+", label: "Shipped Products", description: "From enterprise SaaS to ML workflows" },
  { value: "1st", label: "Place Winner", description: "Startup Ethiopia Grand Hackathon 2024" },
  { value: "78+", label: "Active SaaS Users", description: "Live on Solstice Gym Management SaaS" },
];

export const experiences = [
  {
    company: "Jadex Consulting",
    role: "Full-Stack Developer",
    location: "London (Remote)",
    period: "09/2025 – 07/2026",
    badge: "Recent",
    bullets: [
      "Built responsive, interactive full-stack applications using Go, Next.js, and React for high-traffic platforms.",
      "Collaborated on PyTorch distributed training systems, implementing and debugging custom gradient-reduction steps and communication protocols.",
      "Optimized low-level algorithms at the ATen/tensor level, translating raw computational updates into robust, deployable backend services.",
    ],
    skills: ["Go", "Next.js", "React", "PyTorch", "ATen API", "Distributed Training", "Docker"],
  },
  {
    company: "Eagle Point AI",
    role: "AI Data & Prompt Engineer",
    location: "Addis Ababa, Ethiopia",
    period: "02/2026 – 04/2026",
    badge: "AI & Alignment",
    bullets: [
      "Designed, evaluated, and refined complex domain-specific prompts to generate high-quality synthetic datasets and conversation pairs for Supervised Fine-Tuning (SFT).",
      "Implemented multi-turn prompt workflows using frontier LLMs to produce structured outputs, reasoning paths, and multi-step agent completions.",
      "Curated, filtered, and formatted conversational chat history datasets into standard training schemas to optimize model alignment and instruction-following quality.",
      "Evaluated AI response accuracy, reasoning consistency, and instruction adherence across diverse prompt engineering benchmarks.",
    ],
    skills: ["Frontier LLMs", "SFT", "Prompt Engineering", "Synthetic Data", "Evaluation", "Model Alignment"],
  },
  {
    company: "Freelance / Upwork",
    role: "Full-Stack & ML Systems Developer",
    location: "Remote / International",
    period: "2024 – 01/2026",
    badge: "Contract",
    bullets: [
      "Delivered scalable full-stack web and mobile applications for international clients, driving projects from architecture to deployment.",
      "Implemented custom autograd functions and PyTorch C++ extensions using the ATen library to optimize core numerical calculations.",
      "Configured cloud-based GPU environments to test, profile, and run long-running distributed processes and model evaluation pipelines.",
    ],
    skills: ["PyTorch C++ Extensions", "ATen", "CUDA", "Cloud GPUs", "Node.js", "React", "TypeScript"],
  },
  {
    company: "Melly's Fashion",
    role: "Full Stack Developer",
    location: "Addis Ababa, Ethiopia",
    period: "04/2024 – 06/2025",
    badge: "Super App",
    bullets: [
      "Developed Sheba Super App – a React Native super app housing multiple mini-apps including Merkato Beslke (marketplace for mass buyers & vendors), Melly's Fashion (e-commerce platform), and Arada (service appointment platform for spas, salons, and beauty services).",
      "Built mini-apps using Next.js and Node.js (TypeScript), with the primary host shell engineered in React Native.",
      "Integrated Telebirr payment gateway for seamless zero-friction checkout across all mini-apps.",
      "Featured officially in Telebirr Super App's mini-apps ecosystem, managing the entire lifecycle from design to production rollout.",
    ],
    skills: ["React Native", "Next.js", "Node.js (TypeScript)", "Telebirr API", "Payment Gateways", "Microfrontends"],
  },
  {
    company: "Backos Technologies",
    role: "Backend & Mobile Developer",
    location: "Adama, Ethiopia",
    period: "06/2023 – 02/2024",
    badge: "SaaS & Core SDK",
    bullets: [
      "Developed and maintained highly secure SaaS school management and fee payment systems using Flutter and Node.js.",
      "Authored the official Arifpay npm library to streamline payment gateway integration for Node.js backend developers across Ethiopia.",
      "Engineered custom Python bindings to integrate high-performance numerical algorithms directly into transaction-heavy backends.",
    ],
    skills: ["Flutter", "Node.js", "Arifpay SDK", "Python C-Bindings", "Express", "PostgreSQL"],
  },
];

export const projects = [
  {
    id: "drophero",
    title: "DropHero AI",
    subtitle: "Automated Ad Reference to Meta Ad Draft & Shopify Content Platform",
    category: "AI & ML Systems",
    featured: true,
    description: "Turn any winning ad reference into conversion-focused Shopify product content and Meta ad drafts in minutes. Automated AI pipeline combining fine-tuned diffusion models and marketing workflow automations to eliminate manual copywriting and asset staging.",
    tags: ["React", "Node.js", "Shopify API", "Meta Marketing API", "PyTorch", "Diffusers", "n8n Automation"],
    metrics: "1,200+ Active Dropshippers • Shopify & Meta Integrated • Zero Manual Copy",
    links: [
      { label: "Live Platform", url: "https://drophero.app/" },
      { label: "Book a Demo", url: "https://drophero.app/" },
    ],
    image: "/drophero-hero.png",
    screenshots: [
      {
        url: "/drophero-hero.png",
        title: "Landing Page & Value Proposition",
        caption: "DropHero landing showcase — Create Product Content & Meta Ad Drafts from Any Ad Reference with one-click workflows."
      },
      {
        url: "/drophero-dashboard.png",
        title: "Recently Imported Ads & Generation Hub",
        caption: "Production dashboard displaying imported competitor ads, generated product variations, status trackers, and one-click publishing actions."
      }
    ],
    overview: "DropHero is a purpose-built AI platform for e-commerce entrepreneurs and dropshippers. Scaling an online store requires rapid testing of winning creative angles and high-converting product pages. Traditionally, merchants lose 2 to 3 hours per product copying competitor links, writing headlines, structuring Shopify descriptions, and configuring Meta Ads Manager. DropHero connects the entire chain into a single workspace: drop in any ad reference, and DropHero instantly generates complete Shopify product listings alongside synchronized Meta ad draft sets ready for review and publishing.",
    challenge: "High-velocity dropshipping demands launching 5-10 product campaigns weekly. Merchants suffer severe tool fragmentation: jumping across ad spy libraries, LLM chat interfaces, photo editors, Shopify dashboards, and Meta Ads Manager. Existing AI tools produce generic descriptions that don't match Meta's strict advertising guidelines or convert mobile shoppers.",
    solution: "We engineered an automated end-to-end ingest-to-publish pipeline. When an ad reference is supplied, DropHero extracts structural hooks, generates high-intent ad copy variants, provisions matching Shopify catalog entities (titles, bullets, specifications, variant pricing), and creates pre-configured Meta ad drafts. Dropshippers review and fine-tune inside a clean visual dashboard before deploying live with a single click.",
    keyFeatures: [
      {
        title: "Ad Reference to Meta Ad Draft in Minutes",
        description: "Ingests reference URLs and visual assets to synthesize structured Meta ad drafts including primary text, high-CTR headlines, descriptions, and CTA configurations directly synced with Meta Ads Manager."
      },
      {
        title: "Shopify + Meta in One Unified Workspace",
        description: "Eliminates duplicate work by harmonizing e-commerce catalog creation with paid acquisition assets in one coherent flow."
      },
      {
        title: "Review & Refine Before Publishing",
        description: "A human-in-the-loop dashboard allowing merchants to inspect imported ads, tweak copy variants, preview creative formats, and approve with confidence."
      },
      {
        title: "AI Creative & Diffusion Pipeline",
        description: "Leverages fine-tuned diffusion models and custom autograd loss functions for background generation, product enhancements, and multi-format ad aspect ratios."
      },
      {
        title: "Reliable Asynchronous Ingestion",
        description: "Orchestrated with Node.js microservices and n8n background workers to manage concurrent queue processing and resilient third-party API rate limiting."
      }
    ],
    architecture: [
      {
        layer: "Frontend Interface",
        details: "Built with React, Vite, and Tailwind CSS. Features clean glassmorphism accents, instant search, responsive grid views for imported ads, and live copy editing."
      },
      {
        layer: "Backend Orchestration",
        details: "Node.js and Express backend handling secure session management, webhooks, and worker job queues integrated with n8n workflow automations."
      },
      {
        layer: "E-Commerce & Ad APIs",
        details: "Direct bi-directional integrations via the Shopify Admin GraphQL API and the Meta Marketing Graph API for synchronized draft deployment."
      },
      {
        layer: "AI & Image Synthesis",
        details: "PyTorch diffusers pipeline fine-tuned on top-performing e-commerce creatives, employing custom autograd constraints for aspect ratio preservation and text clearance."
      }
    ],
    techStack: {
      frontend: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Lucide Icons"],
      backend: ["Node.js", "Express", "n8n Automation", "REST & GraphQL APIs"],
      ai: ["PyTorch", "Diffusers", "Custom Autograd", "LLM Prompt Engineering"],
      integrations: ["Shopify Admin API", "Meta Marketing API", "Webhooks"]
    },
    stats: [
      { label: "Active Community", value: "1,200+", desc: "Dropshippers automating ads & products" },
      { label: "Turnaround Time", value: "< 3 min", desc: "From ad reference to Meta ad draft" },
      { label: "Copywriting Effort", value: "0 hrs", desc: "No manual copywriting required" },
      { label: "Ecosystem", value: "Shopify + Meta", desc: "Dual platform unified synchronization" }
    ],
    role: "Full-Stack Engineer & AI Pipeline Architect",
    timeline: "2024 – Present",
  },
  {
    id: "solstice-gym",
    title: "Solstice Gym Management Platform",
    subtitle: "Multi-tenant Gym SaaS & Member Ecosystem",
    category: "Full-Stack SaaS",
    featured: true,
    description: "Multi-tenant gym SaaS ecosystem supporting administrative operations and member engagement, actively serving 1 onboarded gym enterprise and 78 registered active users. Built a dual-frontend architecture with dedicated Express and Better-Auth backend microservices containerized via Docker and Nginx reverse proxying on Linux.",
    tags: ["Vite", "React", "MongoDB", "Node.js", "TailwindCSS", "Express", "Better-Auth", "Docker", "Nginx", "Linux"],
    metrics: "1 Onboarded Gym • 78 Active Users • Dockerized Microservices",
    links: [
      { label: "Gym App", url: "https://gym.solsticesoft.online" },
      { label: "Passion Portal", url: "https://passion.solsticesoft.online" },
    ],
    image: "/realstate.png",
    screenshots: [
      {
        url: "/realstate.png",
        title: "Enterprise Gym Operations Dashboard",
        caption: "Solstice administrative dashboard featuring member management, subscription renewals, session tracking, and financial analytics."
      }
    ],
    overview: "Solstice is an enterprise-ready, multi-tenant gym SaaS ecosystem built to modernize fitness center administration, subscription tracking, and member engagement. Operating in production with an active enterprise gym client and 78 verified daily active members, the platform delivers high reliability, automated billing lifecycle management, and real-time attendance tracking.",
    challenge: "Gym operators frequently rely on scattered spreadsheets and paper logbooks, resulting in missed subscription renewals, unauthorized facility entries, and revenue leakage. The platform needed to isolate gym tenant data completely while maintaining zero-downtime updates and snappy response times on mobile networks.",
    solution: "Engineered a dual-frontend architecture separated into an administrative management portal and a mobile-optimized member experience. The backend utilizes Node.js and Express microservices with Better-Auth for robust multi-tenant authorization, MongoDB for document storage, and is containerized with Docker behind an Nginx reverse proxy on Linux VPS.",
    keyFeatures: [
      {
        title: "Multi-Tenant Enterprise Isolation",
        description: "Strict tenant isolation supporting customized membership tiers, billing plans, and role-based staff permissions."
      },
      {
        title: "Automated Subscription & Payment Tracking",
        description: "Real-time subscription status calculation with grace period alerts, renewal notifications, and invoice generation."
      },
      {
        title: "Member Check-in & Attendance Analytics",
        description: "Fast digital check-in workflow paired with peak hour utilization metrics and member retention trends."
      },
      {
        title: "Dual Portal Architecture",
        description: "Distinct, optimized portals for gym administration and member self-service (Passion Portal) deployed on dedicated subdomains."
      }
    ],
    architecture: [
      {
        layer: "Frontend Portals",
        details: "React single-page applications powered by Vite and Tailwind CSS for rapid loading speeds and fluid UI transitions."
      },
      {
        layer: "Backend Microservices",
        details: "Modular Express.js backend services implementing Better-Auth for stateless session tokens and tenant segregation."
      },
      {
        layer: "Database Layer",
        details: "MongoDB cluster configured with indexed schemas for rapid query lookups across members, subscriptions, and logs."
      },
      {
        layer: "DevOps & Infrastructure",
        details: "Multi-container Docker orchestration with automated health checks and Nginx reverse proxying with SSL termination on Linux."
      }
    ],
    techStack: {
      frontend: ["React", "Vite", "Tailwind CSS", "Lucide React"],
      backend: ["Node.js", "Express", "Better-Auth", "REST APIs"],
      database: ["MongoDB", "Mongoose"],
      infrastructure: ["Docker", "Docker Compose", "Nginx", "Linux Ubuntu VPS"]
    },
    stats: [
      { label: "Active Enterprises", value: "1 Gym", desc: "Live commercial production deployment" },
      { label: "Active Users", value: "78+", desc: "Daily registered members on platform" },
      { label: "Architecture", value: "Dual Portal", desc: "Admin + Member dedicated web applications" },
      { label: "Uptime", value: "99.9%", desc: "Containerized reliability with Nginx" }
    ],
    role: "Lead Full-Stack Architect & DevOps Engineer",
    timeline: "2024 – 2026",
  },
  {
    id: "alchemy",
    title: "Alchemy: Kids AI Chemistry Lab",
    subtitle: "Quantized Llama 3 & C++ Tensor Validation",
    category: "AI & ML Systems",
    featured: true,
    description: "Gamified AI-powered chemistry learning platform for kids, utilizing optimized KV-caching and quantized Llama 3 models integrated with custom C++ tensor validation utilities for lightning-fast educational reasoning.",
    tags: ["Next.js", "PyTorch", "Llama 3", "vLLM", "C++", "KV-Caching"],
    metrics: "Sub-second inference • Quantized Llama 3 • Custom C++ Tensor Kernels",
    links: [
      { label: "Codebase / Details", url: "https://github.com/Tadi-san" },
    ],
    image: "/smallUi.png",
    screenshots: [
      {
        url: "/smallUi.png",
        title: "Interactive Laboratory Canvas & AI Tutor",
        caption: "Interactive virtual beaker simulation with real-time chemical reaction predictions and child-friendly AI explanations."
      }
    ],
    overview: "Alchemy reimagines STEM education by pairing an interactive visual chemistry sandbox with a dedicated, low-latency AI companion. Children can safely mix elements and compounds in a virtual beaker while an AI tutor, powered by quantized Llama 3, explains chemical principles, validates safety bounds, and guides kids through gamified experiments in real time.",
    challenge: "Standard LLM inference is too slow and computationally expensive for instantaneous conversational tutoring on educational hardware. Furthermore, raw language models frequently hallucinate chemical reaction formulas and stoichiometry, requiring deterministic verification.",
    solution: "Developed custom C++ tensor validation kernels integrated into the PyTorch inference loop to enforce chemical balance and thermodynamics bounds. Deployed a 4-bit quantized Llama 3 model utilizing vLLM with optimized PagedAttention and KV-caching, cutting time-to-first-token down to sub-second speeds.",
    keyFeatures: [
      {
        title: "Sub-Second Quantized Inference",
        description: "Optimized 4-bit AWQ quantized Llama 3 serving through vLLM, delivering conversational feedback in under 400ms."
      },
      {
        title: "Custom C++ Chemical Verification",
        description: "Low-level ATen C++ extension that validates chemical formulas, electron transfers, and exothermic risk constraints."
      },
      {
        title: "Gamified Virtual Reaction Canvas",
        description: "Rich interactive canvas enabling drag-and-drop element combination with dynamic visual reaction animations."
      },
      {
        title: "Adaptive Age-Tailored Curriculum",
        description: "Context-aware prompt routing that dynamically adjusts linguistic complexity from primary school level to advanced concepts."
      }
    ],
    architecture: [
      {
        layer: "UI & Simulation Frontend",
        details: "Next.js App Router with canvas-based reaction simulations and responsive interactive components."
      },
      {
        layer: "Inference Engine",
        details: "vLLM inference server running quantized Llama 3 with customized KV-caching strategies."
      },
      {
        layer: "Deterministic Verification",
        details: "Custom PyTorch C++ extension compiled via setuptools/ninja, interfacing directly with ATen tensor structures."
      }
    ],
    techStack: {
      frontend: ["Next.js", "React", "Tailwind CSS", "HTML5 Canvas"],
      ai: ["Llama 3 (4-bit)", "PyTorch", "vLLM", "ATen API", "C++"],
      backend: ["Python FastAPI", "WebSockets"]
    },
    stats: [
      { label: "Inference Speed", value: "< 400ms", desc: "Sub-second time-to-first-token" },
      { label: "Model Footprint", value: "4-bit AWQ", desc: "Optimized GPU VRAM consumption" },
      { label: "Verification", value: "C++ Kernels", desc: "Deterministic chemical bounds check" },
      { label: "Target Audience", value: "K-12 STEM", desc: "Gamified conversational learning" }
    ],
    role: "AI Systems Engineer & Full-Stack Developer",
    timeline: "2024",
  },
  {
    id: "sheba-super-app",
    title: "Sheba Super App",
    subtitle: "React Native Super App with Telebirr Integration",
    category: "Mobile & Super Apps",
    featured: true,
    description: "Enterprise mobile super-app housing Merkato Beslke (wholesale marketplace), Melly's Fashion (e-commerce), and Arada (appointment booking for wellness services). Integrated unified Telebirr mobile wallet checkout and officially listed in Telebirr Super App mini-apps directory.",
    tags: ["React Native", "Next.js", "TypeScript", "Node.js", "Telebirr Gateway"],
    metrics: "3 Integrated Mini-Apps • Telebirr Super App Listed",
    links: [
      { label: "Architecture / Case Study", url: "https://github.com/Tadi-san" },
    ],
    image: "/gebeya.png",
    screenshots: [
      {
        url: "/gebeya.png",
        title: "Super App Host Shell & Multi-Vendor Ecosystem",
        caption: "Sheba Super App showing mini-app directory, vendor listings, in-app services, and native Telebirr payment integration."
      }
    ],
    overview: "Sheba Super App is a comprehensive digital commerce and lifestyle ecosystem engineered for the Ethiopian consumer economy. It unifies three major independent commercial applications into a cohesive mobile shell: Merkato Beslke (wholesale B2B marketplace), Melly's Fashion (high-fashion consumer retail), and Arada (appointment bookings for spas, salons, and beauty services).",
    challenge: "Managing multiple discrete digital businesses requires separate authentication, payments, and checkout flows, increasing user churn. Bridging web technologies (Next.js) inside a native React Native shell while complying with Telebirr's cryptographic payment specification presented significant integration challenges.",
    solution: "Engineered a microfrontend architecture where individual mini-apps are built as performant web views loaded seamlessly within a hardened React Native host shell. Created a standardized JavaScript bridge enabling mini-apps to invoke native device capabilities and execute secure, single-tap Telebirr wallet transactions.",
    keyFeatures: [
      {
        title: "3 Independent Mini-Apps in One Shell",
        description: "Seamlessly switches between Merkato Beslke wholesale, Melly's Fashion retail, and Arada appointment booking."
      },
      {
        title: "Telebirr Super App Official Listing",
        description: "Compliant with Ethio Telecom's Telebirr Super App mini-program standards, reaching millions of active wallet holders."
      },
      {
        title: "Bi-directional Native Bridge",
        description: "Custom React Native bridge passing session credentials, location coordinates, and payment cryptographic tokens securely."
      },
      {
        title: "Zero-Friction Checkout",
        description: "Unified Telebirr mobile wallet payment integration eliminating credit card requirements for Ethiopian consumers."
      }
    ],
    architecture: [
      {
        layer: "Host Mobile Shell",
        details: "React Native application managing navigation tabs, push notifications, offline caching, and device hardware access."
      },
      {
        layer: "Mini-Apps Microfrontends",
        details: "Next.js web applications written in TypeScript, optimized for fast hydration and minimal bundle size inside WebViews."
      },
      {
        layer: "Payment Gateway Integration",
        details: "Secure Node.js backend handling RSA key pair signing, payload encryption, and Telebirr webhook verification."
      }
    ],
    techStack: {
      mobile: ["React Native", "TypeScript", "Expo / Bare Workflow"],
      web: ["Next.js", "React", "Tailwind CSS"],
      backend: ["Node.js", "Express", "PostgreSQL"],
      payments: ["Telebirr Super App Gateway", "RSA Encryption"]
    },
    stats: [
      { label: "Mini-Apps", value: "3 Ecosystems", desc: "Wholesale, Fashion & Appointments" },
      { label: "Payment Rail", value: "Telebirr Native", desc: "Single-tap mobile wallet checkout" },
      { label: "Ecosystem Status", value: "Officially Listed", desc: "Telebirr Super App mini-apps directory" },
      { label: "Shell Architecture", value: "React Native", desc: "Hardened native container with secure bridge" }
    ],
    role: "Lead Mobile & Full-Stack Developer",
    timeline: "04/2024 – 06/2025",
  },
  {
    id: "arifpay-npm",
    title: "Official Arifpay Node.js SDK",
    subtitle: "Open Source Payment Gateway Library",
    category: "Backend & Core",
    featured: true,
    description: "Authored and published the official npm library for Arifpay to streamline payment gateway integration, webhook verification, and digital payment facilitation for Node.js developers across Ethiopia.",
    tags: ["Node.js", "TypeScript", "npm", "Fintech", "Payment Gateway"],
    metrics: "Official NPM Package • Production Payment Infrastructure",
    links: [
      { label: "NPM Package", url: "https://www.npmjs.com/package/arifpay" },
      { label: "GitHub", url: "https://github.com/Tadi-san" },
    ],
    image: "/esuk.png",
    screenshots: [
      {
        url: "/esuk.png",
        title: "Arifpay SDK Architecture & Developer Experience",
        caption: "Official Arifpay Node.js package on npm, enabling typed API interactions, automated retries, and webhook HMAC validation."
      }
    ],
    overview: "Arifpay is a premier financial technology payment gateway licensed by the National Bank of Ethiopia. To accelerate developer adoption and establish enterprise reliability, I authored the official 'arifpay' package on npm. The library abstracts low-level cryptographic signatures, HTTP retry strategies, checkout session generation, and webhook security into an ergonomic, fully typed TypeScript API.",
    challenge: "Integrating banking payment APIs in emerging markets is notorious for complex signature verification, inconsistent payload structures, and lack of typed documentation. Developers regularly faced critical security vulnerabilities during webhook handling.",
    solution: "Designed and published a zero-dependency (where possible), strictly typed TypeScript library with 100% test coverage. Included helper utilities for cryptographic HMAC signature verification, idempotency token injection, and automated retry handling for network drops.",
    keyFeatures: [
      {
        title: "Official NPM Distribution",
        description: "Published as 'arifpay' on npm, widely utilized by Ethiopian enterprise backends and e-commerce startups."
      },
      {
        title: "Complete TypeScript Declarations",
        description: "Full type definitions for checkout payloads, transaction statuses, refund records, and webhook payloads."
      },
      {
        title: "Bulletproof Cryptographic Verification",
        description: "Built-in cryptographic utilities for verifying webhook authenticity and preventing replay attacks."
      },
      {
        title: "Idempotent Transaction Handling",
        description: "Automatic generation and verification of idempotency keys to eliminate double-billing risks during network timeouts."
      }
    ],
    architecture: [
      {
        layer: "SDK Core",
        details: "Built with modern TypeScript, compiled to both CommonJS and ESM outputs for maximum compatibility across Node.js versions."
      },
      {
        layer: "Security & Encryption",
        details: "Utilizes native Node.js crypto module for SHA-256 and HMAC verification with constant-time equality checks."
      },
      {
        layer: "Testing & Documentation",
        details: "Automated Jest unit test suite covering sandbox transactions, mock webhooks, and boundary conditions."
      }
    ],
    techStack: {
      language: ["TypeScript", "Node.js", "JavaScript"],
      packaging: ["npm", "Rollup", "TypeScript Compiler (tsc)"],
      testing: ["Jest", "Supertest"],
      security: ["Node Crypto", "HMAC-SHA256"]
    },
    stats: [
      { label: "NPM Status", value: "Official SDK", desc: "Published and actively distributed on npm" },
      { label: "Type Safety", value: "100% Typed", desc: "Zero 'any' TypeScript declarations" },
      { label: "Security", value: "HMAC Signed", desc: "Guaranteed webhook signature verification" },
      { label: "Compatibility", value: "Node 16+", desc: "Dual CJS & ESM modern bundle" }
    ],
    role: "SDK Author & Core Maintainer",
    timeline: "2023 – Present",
  },
  {
    id: "betzone-itvwin",
    title: "Betzone & Itvwin High-Throughput Gaming",
    subtitle: "Ultra-Low Latency UI & Real-Time Streaming",
    category: "Backend & Core",
    featured: false,
    description: "Gaming platform websites with responsive, ultra-low-latency UI tables and real-time streaming features engineered with Go backend services and WebSockets for concurrent traffic.",
    tags: ["React", "Go", "WebSockets", "Real-Time", "High-Concurrency"],
    metrics: "Sub-50ms live updates • Go WebSockets • High Throughput",
    links: [
      { label: "GitHub Profile", url: "https://github.com/Tadi-san" },
    ],
    image: "/single.jpg",
    screenshots: [
      {
        url: "/single.jpg",
        title: "Live Game Streaming & Real-Time Table Feeds",
        caption: "High-concurrency betting dashboard with sub-50ms odds updates, low-overhead WebSocket transport, and reactive tables."
      }
    ],
    overview: "Betzone & Itvwin are high-traffic sports gaming and live betting platforms requiring real-time odds delivery and low-latency interaction. Designed to withstand sudden spikes during major live sporting matches, the system pairs high-performance Go microservices with reactive React frontend tables.",
    challenge: "Handling tens of thousands of simultaneous bettors during live game moments creates immense WebSocket connection churn and broadcast contention. Standard Node.js servers struggled with memory consumption and socket garbage collection pauses.",
    solution: "Architected a lightweight Go WebSocket gateway utilizing goroutines and epoll-based socket polling. On the frontend, implemented virtualized DOM tables and binary WebSocket compression, keeping UI rendering smooth at 60 FPS even during frantic odds updates.",
    keyFeatures: [
      {
        title: "Sub-50ms Odds Delivery",
        description: "High-performance Go pub/sub fan-out pushing live match statistics and odds with minimal network overhead."
      },
      {
        title: "Virtualized Real-Time Tables",
        description: "Zero-lag React table components capable of rendering hundreds of changing odds cells without layout thrashing."
      },
      {
        title: "Graceful Reconnection Protocols",
        description: "Client-side exponential backoff and message deduplication to maintain session integrity across flaky mobile connections."
      }
    ],
    architecture: [
      {
        layer: "Go Streaming Gateway",
        details: "Go microservice managing thousands of active concurrent WebSocket channels with minimal memory per socket."
      },
      {
        layer: "Frontend Rendering",
        details: "React single-page application utilizing lightweight reactive stores and virtualized table rows."
      }
    ],
    techStack: {
      backend: ["Go (Golang)", "WebSockets", "Goroutines", "Redis Pub/Sub"],
      frontend: ["React", "Tailwind CSS", "Vite"],
      infrastructure: ["Docker", "Linux VPS", "Nginx"]
    },
    stats: [
      { label: "Latency", value: "< 50ms", desc: "Live WebSocket odds updates" },
      { label: "Language", value: "Go (Golang)", desc: "High-concurrency backend services" },
      { label: "Frontend", value: "60 FPS", desc: "Virtualized real-time table rendering" },
      { label: "Resilience", value: "Zero Drops", desc: "Deduplicated reconnection protocol" }
    ],
    role: "Go Backend & Frontend Real-Time Engineer",
    timeline: "2024",
  },
  {
    id: "enpath-axees",
    title: "Enpath.ai & Axees.io",
    subtitle: "Creator & Marketer Matching Platform",
    category: "Full-Stack SaaS",
    featured: false,
    description: "Marketplace connecting marketers and content creators, featuring cross-platform frontend integrations with backend profile matching algorithms.",
    tags: ["React Native (Web & Mobile)", "Python", "Node.js", "Matching Algorithms"],
    metrics: "Cross-Platform Web & Mobile • Algorithmic Matching",
    links: [
      { label: "Case Study", url: "https://github.com/Tadi-san" },
    ],
    image: "/people.webp",
    screenshots: [
      {
        url: "/people.webp",
        title: "Creator Discovery & Campaign Collaboration Hub",
        caption: "Enpath & Axees collaboration workspace matching verified social media creators with brand marketing budgets."
      }
    ],
    overview: "Enpath.ai and Axees.io constitute a collaborative marketplace bridging performance marketers with verified micro and macro-influencers. The platform streamlines outreach, deliverables tracking, escrow payments, and performance attribution across TikTok, Instagram, and YouTube.",
    challenge: "Brands waste extensive time manually searching social media profiles that match their audience demographics, engagement ratios, and budget requirements, while creators lack centralized tools for contracting.",
    solution: "Developed an algorithmic matching engine combining Python vector embeddings with historical audience engagement scoring. Built a unified React Native for Web and mobile application sharing 85% of codebase logic across platforms.",
    keyFeatures: [
      {
        title: "Algorithmic Creator Matching",
        description: "Vector similarity matching pairing brand creative briefs with the most relevant creator niche profiles."
      },
      {
        title: "Unified Web & Mobile Codebase",
        description: "Shared React Native architecture delivering native iOS/Android apps and snappy web interfaces simultaneously."
      },
      {
        title: "Escrow & Campaign Milestones",
        description: "Structured campaign milestone releases ensuring creators are paid upon verified content delivery."
      }
    ],
    architecture: [
      {
        layer: "Cross-Platform UI",
        details: "React Native and React Native Web for universal component rendering across desktop and mobile devices."
      },
      {
        layer: "Matching & Scoring Engine",
        details: "Python FastAPI service computing demographic affinity scores and content relevance metrics."
      }
    ],
    techStack: {
      frontend: ["React Native Web", "React", "TypeScript", "Tailwind CSS"],
      backend: ["Node.js", "Python FastAPI", "PostgreSQL"],
      matching: ["Vector Embeddings", "Audience Scoring Algorithms"]
    },
    stats: [
      { label: "Code Sharing", value: "85%", desc: "Shared logic across web and mobile" },
      { label: "Platforms", value: "Universal", desc: "iOS, Android, and Web applications" },
      { label: "Matching", value: "Vector AI", desc: "Automated demographic affinity scoring" }
    ],
    role: "Full-Stack & Cross-Platform Developer",
    timeline: "2024",
  },
  {
    id: "ethio-smart-homes",
    title: "EthioSmartHomes IoT Platform",
    subtitle: "Smart Home Automation & Hardware Control",
    category: "Full-Stack SaaS",
    featured: false,
    description: "Smart home automation system for IoT device control bridging low-level C++ device firmware with PostgreSQL, Next.js web dashboards, and React Native mobile controllers.",
    tags: ["Next.js", "PostgreSQL", "React Native", "Node.js", "C++", "IoT"],
    metrics: "Hardware Integration • Real-Time Device States",
    links: [
      { label: "Project Specs", url: "https://github.com/Tadi-san" },
    ],
    image: "/selam.png",
    screenshots: [
      {
        url: "/selam.png",
        title: "IoT Control Hub & Hardware State Telemetry",
        caption: "Smart home management dashboard showing active lighting circuits, climate controls, and real-time sensor streams."
      }
    ],
    overview: "EthioSmartHomes connects physical residential hardware (smart switches, environmental sensors, door locks, and solar inverters) with a sleek digital control suite. Built to accommodate intermittent connectivity in emerging infrastructure, the system functions seamlessly both over local mesh networks and cloud remote sync.",
    challenge: "Smart home devices in developing regions face frequent power dips and internet disruptions. Hardware firmware written in C++ needs to synchronize device state instantly with mobile apps without battery depletion or state desynchronization.",
    solution: "Engineered low-level C++ firmware routines for ESP32 microcontrollers communicating via lightweight MQTT protocols with an edge Node.js broker. Provided an instant-response React Native mobile app and Next.js admin portal.",
    keyFeatures: [
      {
        title: "Low-Power C++ Device Firmware",
        description: "Optimized firmware for ESP32 and Arduino microcontrollers with hardware interrupt handling and watchdog timers."
      },
      {
        title: "Local & Cloud Hybrid Control",
        description: "Operates seamlessly over local Wi-Fi mesh during internet outages, syncing automatically once connectivity returns."
      },
      {
        title: "Real-Time Telemetry & Schedules",
        description: "Automated energy-saving routines, scheduled timer triggers, and instant push alerts for security sensor activations."
      }
    ],
    architecture: [
      {
        layer: "Embedded Firmware",
        details: "C++ embedded software implementing MQTT clients, cryptographic hardware authentication, and non-volatile flash storage."
      },
      {
        layer: "Cloud & Mobile Control",
        details: "React Native application connected to a Node.js MQTT broker and PostgreSQL database for historical logging."
      }
    ],
    techStack: {
      firmware: ["C++", "ESP-IDF / Arduino", "MQTT", "FreeRTOS"],
      mobile: ["React Native", "TypeScript"],
      web: ["Next.js", "PostgreSQL", "Node.js"]
    },
    stats: [
      { label: "Protocol", value: "MQTT", desc: "Ultra-low bandwidth hardware messaging" },
      { label: "Firmware", value: "C++ / FreeRTOS", desc: "Embedded microcontrollers" },
      { label: "Offline Mode", value: "Local Mesh", desc: "Guaranteed control without internet" }
    ],
    role: "IoT Systems & Firmware Engineer",
    timeline: "2023",
  },
  {
    id: "mereja-bet",
    title: "Mereja-bet Data Aggregator",
    subtitle: "Automated Telegram News & Job Aggregation",
    category: "Backend & Core",
    featured: false,
    description: "Data scraping and intelligence platform aggregating Telegram feeds into categorized, searchable job and news postings using Python scrapers, Firebase storage, and Node.js APIs.",
    tags: ["Python", "React", "Node.js", "Firebase", "Web Scraping"],
    metrics: "Automated Daily Feeds • Instant Categorization",
    links: [
      { label: "Live Demo", url: "https://mereja-virid.vercel.app/" },
    ],
    image: "/mereja.png",
    screenshots: [
      {
        url: "/mereja.png",
        title: "Mereja-bet Aggregated Feed & Job Portal",
        caption: "Automated portal aggregating thousands of job opportunities and headlines from across Ethiopian Telegram channels."
      }
    ],
    overview: "In Ethiopia, Telegram serves as the de facto internet where thousands of recruitment channels, freelance opportunities, and news bulletins are posted daily. Mereja-bet automates the harvesting, sanitizing, and categorizing of unstructured channel broadcasts into a searchable, clean web directory.",
    challenge: "Telegram channels post informal, messy text in both Amharic and English with inconsistent formatting, repeated spam, and unparsed contact phone numbers.",
    solution: "Built an automated Python scraping engine utilizing the Telethon library. Applied NLP regex filters and entity extraction to parse job titles, requirements, salary figures, and application dead-ends, presenting them in a fast React web interface.",
    keyFeatures: [
      {
        title: "Automated Telegram Harvester",
        description: "Continuous monitoring of dozens of high-traffic Ethiopian public channels via the Telethon MTProto library."
      },
      {
        title: "Amharic & English Entity Extraction",
        description: "Custom NLP parsers extracting phone numbers, email addresses, job categories, and application deadlines."
      },
      {
        title: "Clean Searchable Web Interface",
        description: "Lightning-fast search and categorization filters by city, industry, and contract type deployed on Vercel."
      }
    ],
    architecture: [
      {
        layer: "Scraping & NLP Worker",
        details: "Python daemon utilizing Telethon MTProto protocol with deduplication queues."
      },
      {
        layer: "Storage & API",
        details: "Firebase Firestore real-time database with Node.js indexing endpoints."
      },
      {
        layer: "Web UI",
        details: "React single-page application with responsive mobile layouts and instant keyword search."
      }
    ],
    techStack: {
      scraping: ["Python", "Telethon (MTProto)", "NLP Regex"],
      frontend: ["React", "Tailwind CSS", "Vercel"],
      backend: ["Node.js", "Firebase Firestore"]
    },
    stats: [
      { label: "Channel Feeds", value: "50+ Active", desc: "Automated daily Telegram ingestion" },
      { label: "Search Speed", value: "< 100ms", desc: "Instant indexed query response" },
      { label: "Bilingual", value: "Amharic + EN", desc: "Dual language parsing" }
    ],
    role: "Backend & Data Pipeline Developer",
    timeline: "2023",
  },
];

export const skillCategories = [
  {
    name: "ML & AI Systems",
    icon: "BrainCircuit",
    color: "from-purple-500 to-indigo-500",
    skills: [
      { name: "PyTorch", level: "Advanced" },
      { name: "Custom Autograd", level: "Specialist" },
      { name: "ATen API & Tensors", level: "Specialist" },
      { name: "PyTorch C++ Extensions", level: "Specialist" },
      { name: "Distributed Training (torch.distributed)", level: "Proficient" },
      { name: "CUDA & GPU Profiling", level: "Proficient" },
      { name: "vLLM & KV-Caching", level: "Advanced" },
      { name: "Llama 3 & Model Quantization", level: "Advanced" },
      { name: "Diffusion Models (Diffusers)", level: "Proficient" },
      { name: "Supervised Fine-Tuning (SFT)", level: "Advanced" },
    ],
  },
  {
    name: "Languages",
    icon: "Code2",
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "Python", level: "Expert" },
      { name: "Go (Golang)", level: "Advanced" },
      { name: "TypeScript", level: "Expert" },
      { name: "JavaScript", level: "Expert" },
      { name: "C++", level: "Advanced" },
      { name: "C", level: "Proficient" },
      { name: "SQL", level: "Advanced" },
      { name: "Dart", level: "Proficient" },
      { name: "PHP", level: "Proficient" },
      { name: "Bash / Shell", level: "Advanced" },
    ],
  },
  {
    name: "Backend & Distributed Systems",
    icon: "Server",
    color: "from-emerald-500 to-teal-500",
    skills: [
      { name: "Node.js", level: "Expert" },
      { name: "Express.js", level: "Expert" },
      { name: "Next.js API & Server Actions", level: "Expert" },
      { name: "Better-Auth Microservices", level: "Advanced" },
      { name: "WebSockets & Streaming", level: "Advanced" },
      { name: "REST & GraphQL Architecture", level: "Expert" },
      { name: "Python C-Bindings", level: "Advanced" },
      { name: "n8n Workflow Automation", level: "Advanced" },
    ],
  },
  {
    name: "Frontend & Mobile",
    icon: "Smartphone",
    color: "from-pink-500 to-rose-500",
    skills: [
      { name: "React", level: "Expert" },
      { name: "Next.js (App Router)", level: "Expert" },
      { name: "React Native", level: "Advanced" },
      { name: "Flutter", level: "Proficient" },
      { name: "Tailwind CSS", level: "Expert" },
      { name: "Vite & Modern Bundlers", level: "Expert" },
      { name: "Framer Motion", level: "Advanced" },
      { name: "Responsive UI/UX", level: "Expert" },
    ],
  },
  {
    name: "Cloud, DevOps & Databases",
    icon: "Database",
    color: "from-amber-500 to-orange-500",
    skills: [
      { name: "Docker & Containerization", level: "Advanced" },
      { name: "Linux Server Administration", level: "Advanced" },
      { name: "Nginx Reverse Proxy", level: "Advanced" },
      { name: "AWS (EC2, S3, GPU)", level: "Proficient" },
      { name: "PostgreSQL", level: "Advanced" },
      { name: "MongoDB", level: "Advanced" },
      { name: "MySQL", level: "Proficient" },
      { name: "Git & CI/CD", level: "Expert" },
    ],
  },
  {
    name: "Fintech & Payments",
    icon: "Layers",
    color: "from-cyan-500 to-blue-600",
    skills: [
      { name: "Telebirr Gateway (Mini-Apps)", level: "Expert" },
      { name: "Arifpay (Official NPM Author)", level: "Expert" },
      { name: "Amole Integration", level: "Proficient" },
      { name: "Stripe", level: "Advanced" },
      { name: "MoonPay Crypto Rail", level: "Proficient" },
      { name: "Payment Webhooks & Security", level: "Advanced" },
    ],
  },
];

export const honors = [
  {
    title: "1st Place Winner — Startup Ethiopia Grand Hackathon",
    issuer: "Ministry of Innovation & Technology / Startup Ethiopia",
    year: "2024",
    role: "Team Lead & Lead Architect",
    description: "Led team to first-place victory out of hundreds of participants nationwide, architecting and delivering an innovative high-impact technological solution.",
    image: "/togetha.jpg",
    link: "https://www.linkedin.com/posts/tadiwos-anegagergn-951b25256_alettechnologies-startupethiopiahackathon-activity-7194592861428797441-67KN",
    badge: "Champion 🥇",
  },
  {
    title: "National Finalist — Huawei ICT Competition",
    issuer: "Huawei Global ICT Academy",
    year: "2024",
    role: "Finalist Competitor",
    description: "Recognized as a national finalist among top technical universities across Ethiopia for computer networking, cloud computing, and systems acumen.",
    badge: "National Finalist 🏆",
  },
];

export const education = [
  {
    school: "Addis Ababa Science and Technology University (AASTU)",
    program: "Chemical Engineering",
    period: "06/2020 – 05/2024",
    location: "Addis Ababa, Ethiopia",
    description: "Rigorous analytical and computational coursework in thermodynamics, process modeling, differential equations, and numerical analysis.",
  },
  {
    school: "Self-Directed Software & ML Engineering",
    program: "Full-Stack Web, Mobile & Deep Learning Systems",
    period: "04/2019 – Present",
    location: "Global / Independent",
    description: "Deep technical mastery spanning low-level C++/PyTorch systems, Go distributed microservices, React Native super-apps, and production cloud SaaS architecture.",
  },
];

export const spokenLanguages = [
  { language: "Amharic", level: "Native" },
  { language: "English", level: "Professional Working Proficiency" },
];
