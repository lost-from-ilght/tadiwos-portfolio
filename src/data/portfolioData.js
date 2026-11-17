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
  resumePath: "/Tadiwos.pdf",
  avatar: "/single.png",
  logo: "/hero1.png",
  hackathonImage: "/togetha.jpg",
  status: "Open to High-Impact Full-Stack & ML Systems Roles",
};

// Dynamically compute years of experience from earliest professional role (06/2023 at Backos Technologies)
export const calculateYearsOfExperience = () => {
  const careerStart = new Date(2023, 5, 1); // June 1, 2023
  const now = new Date();
  const diffInYears = (now.getTime() - careerStart.getTime()) / (1000 * 60 * 60 * 24 * 365.25);
  const years = Math.max(1, Math.floor(diffInYears));
  return `${years}+`;
};

export const stats = [
  { value: calculateYearsOfExperience(), label: "Years Experience", description: "Building web, mobile & distributed systems" },
  { value: "15+", label: "Shipped Products", description: "From enterprise SaaS to ML workflows" },
  { value: "1st", label: "Place Winner", description: "Startup Ethiopia Grand Hackathon 2024" },
  { value: "78+", label: "Active Members", description: "Live on Solstice Gym SaaS (Passion Gym)" },
];

export const experiences = [
  {
    company: "Jadex Consulting",
    role: "Full-Stack & Systems Developer",
    location: "London (Remote)",
    period: "09/2025 – 07/2026",
    badge: "Recent",
    bullets: [
      "Engineered high-throughput Go backend microservices for crypto gaming platforms including Tucanbit (tucanbit.io), handling real-time transactions and live game feeds.",
      "Optimized back-office administration using Redis caching and PostgreSQL query tuning, reducing reporting bottlenecks and latency by over 70%.",
      "Developed a flexible marketing CMS enabling campaign coordinators to deploy promotional banners, rakeback rules, and VIP reward tiers in real time.",
      "Collaborated on PyTorch distributed training systems, implementing and debugging custom gradient-reduction steps and ATen tensor-level algorithms.",
    ],
    skills: ["Go (Golang)", "PostgreSQL", "Redis", "Next.js", "React", "PyTorch", "ATen API", "Docker"],
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
    subtitle: "Hybrid 3-Tier Architecture: Cloud Member & Trainer Portals + On-Premises Local Admin",
    category: "Full-Stack SaaS",
    featured: true,
    description: "Multi-tier gym management ecosystem deployed for Passion Gym (partnered work with Afro Gym in Lamberet, Addis Ababa, now rebranded to Passion Gym). Features a cloud-hosted Member Portal (gym.solsticesoft.online), a mobile-first Trainer Portal with real-time medical flags and floor tools, and a local on-premises Admin Portal running on their facility computer for offline resilience and front-desk operations.",
    tags: ["React", "Node.js", "Express", "Better-Auth", "MongoDB", "TailwindCSS", "Docker", "Nginx", "Hybrid Architecture", "Floor PWA"],
    metrics: "Passion Gym (Lamberet) • 78+ Active Members • 3-Tier (Member, Trainer & Local Admin)",
    links: [
      { label: "Live Member Portal", url: "https://gym.solsticesoft.online" },
      { label: "Passion Portal", url: "https://passion.solsticesoft.online" },
    ],
    image: "/solstice-trainer-clients.png",
    screenshots: [
      {
        url: "/solstice-trainer-clients.png",
        title: "Trainer Portal — Client Roster & Medical Alerts",
        caption: "Personal trainer client directory showing active status (Gym/Spa), fitness goals (Gain/Lose), attendance streaks, and real-time medical alert flags (e.g. High Blood Pressure)."
      },
      {
        url: "/solstice-trainer-profile.png",
        title: "Trainer Portal — Client Profile & Health Flags",
        caption: "Detailed member profile for trainers highlighting critical medical flags ('Under high BP medication'), biometric tabs, InBody body-composition logs, weight history, and cardio baselines."
      },
      {
        url: "/solstice-trainer-tools.png",
        title: "Trainer Portal — Floor Tools Suite",
        caption: "Floor tools suite designed for trainers during live gym floor sessions: Rest Timer between sets, 1RM Calculator for strength estimates, Plate Loader for barbell weight math, and Cardio Equipment Logger."
      },
      {
        url: "/solstice-trainer-timer.png",
        title: "Trainer Portal — Interactive Rest Timer",
        caption: "Active session rest timer with quick-select interval presets (30s, 45s, 60s, 90s, 2m, 3m) keeping floor workout sessions structured and on schedule."
      }
    ],
    overview: "Solstice Gym is a multi-tier SaaS and on-premises gym management platform engineered in close partnership with Afro Gym in Lamberet, Addis Ababa (recently rebranded as Passion Gym). The platform actively powers their daily facility operations and serves 78+ registered members. Designed to solve real-world infrastructure constraints in Addis Ababa, Solstice implements a hybrid three-tier architecture: a public cloud Member Portal for self-service workouts and subscriptions, a mobile-first Trainer Portal for gym floor guidance and health monitoring, and a secure local on-premises Admin Portal operating directly on the gym's front-desk desktop for uninterrupted registration and access control during internet outages.",
    challenge: "Operating a premier fitness center in Lamberet requires handling fluctuating internet connectivity without disrupting member check-ins, financial record-keeping, or floor training. A purely cloud-dependent admin system risks front-desk delays whenever ISP connections drop. Simultaneously, personal trainers on the gym floor needed instant mobile access to client medical conditions (such as high blood pressure) and session timers without carrying bulky paper clipboards.",
    solution: "Architected a robust three-tier hybrid deployment: 1) Cloud Member Portal (gym.solsticesoft.online) where members view workout plans and membership statuses; 2) Cloud Trainer Portal with high-contrast dark mode tailored for gym floor smartphones, featuring instant medical alerts, InBody logs, and workout helpers; and 3) On-Premises Local Admin Portal running directly on the facility computer at Lamberet, synchronizing with the central MongoDB database while maintaining 100% offline front-desk operational readiness.",
    keyFeatures: [
      {
        title: "3-Tier Hybrid Architecture (Member, Trainer, Local Admin)",
        description: "Clean separation of concerns with cloud portals for members and trainers paired with an isolated on-premises admin desktop application for front-desk reliability."
      },
      {
        title: "Trainer Floor Tools & Session Helpers",
        description: "Includes quick-access Rest Timer with interval presets (30s to 3m), 1RM strength calculator, Plate Loader barbell breakdown, and cardio baseline logger."
      },
      {
        title: "Real-Time Medical Flags & Health Safety",
        description: "Immediate visual warnings for trainers (e.g. high blood pressure medication flags) to ensure safe, customized workout regimens for every client."
      },
      {
        title: "Biometrics & InBody Composition Tracking",
        description: "Tracks weight history, InBody metrics, cardio baselines, and workout progression over time."
      },
      {
        title: "Offline-Resilient Front-Desk Operations",
        description: "Local facility desktop deployment guarantees zero downtime for client registrations, billing receipts, and attendance tracking regardless of local internet status."
      }
    ],
    architecture: [
      {
        layer: "Member Portal (Cloud Web App)",
        details: "React SPA hosted at gym.solsticesoft.online allowing members to view attendance streaks, trainer notes, and renewal dates."
      },
      {
        layer: "Trainer Portal (Mobile-First Web App)",
        details: "High-contrast floor tool providing trainers with client rosters, medical precautions, InBody tracking, and rest timers."
      },
      {
        layer: "Admin Portal (Local On-Premises Desktop)",
        details: "Running on the front-desk computer at Passion Gym (Lamberet) for member check-in, POS accounting, and offline stability."
      },
      {
        layer: "Backend & Synchronization",
        details: "Node.js & Express microservices with Better-Auth authentication, MongoDB data storage, and Nginx reverse proxying."
      }
    ],
    techStack: {
      frontend: ["React", "Vite", "Tailwind CSS", "Lucide React"],
      backend: ["Node.js", "Express", "Better-Auth", "REST APIs"],
      database: ["MongoDB", "Mongoose"],
      deployment: ["On-Premises Local Desktop", "Docker", "Nginx", "Linux Ubuntu VPS"]
    },
    stats: [
      { label: "Partner Gym", value: "Passion Gym", desc: "Formerly Afro Gym (Lamberet, Addis Ababa)" },
      { label: "Active Users", value: "78+ Members", desc: "Live daily members on platform" },
      { label: "Portals", value: "3 Dedicated", desc: "Member (Cloud), Trainer (Floor), Admin (Local)" },
      { label: "Reliability", value: "Hybrid Offline", desc: "Local front-desk resilience during outages" }
    ],
    role: "Lead Full-Stack Architect & Systems Developer",
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
    image: "/alchemy-canvas.png",
    screenshots: [
      {
        url: "/alchemy-canvas.png",
        title: "Alchemy: Kids AI Chemistry Lab — Interactive Elemental Canvas",
        caption: "Interactive elemental combination network (Water, Fire, Wind, Earth, Steam, Dust) with real-time reaction predictions, sound cues, discovery tracking, and child-friendly AI explanations."
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
    subtitle: "React Native Super App with Telebirr Integration & Micro-Mini-Apps",
    category: "Mobile & Super Apps",
    featured: true,
    description: "Enterprise mobile super-app engineered in React Native housing multiple integrated mini-apps: Merkato Beslke (wholesale B2B marketplace), Melly's Fashion (retail e-commerce), and Arada (appointment booking for wellness & spas). Integrated unified Telebirr mobile wallet checkout and officially featured in the Telebirr Super App mini-apps directory (formerly published on Google Play Store).",
    tags: ["React Native", "Next.js", "TypeScript", "Node.js", "Telebirr Gateway", "Microfrontends", "In-App Wallet", "WebViews"],
    metrics: "3 Integrated Mini-Apps • Telebirr Super App Listed • Play Store (Archived)",
    links: [],
    image: "/sheba-hub.png",
    screenshots: [
      {
        url: "/sheba-hub.png",
        title: "Sheba Super App — Mini-Apps & Digital Wallet Hub",
        caption: "Main super app dashboard displaying in-app digital wallet ($5,001.86), mini-app launcher (Zoom Fashion, Melly's Fashion, Merkato Beslke wholesale), and daily services (Health, Mobile Top-Up, Utilities)."
      },
      {
        url: "/sheba-splash.png",
        title: "Sheba Super App — Welcome & Brand Identity",
        caption: "Official Sheba crown splash screen ('Sheba everything you want!') welcoming users with single-sign-on onboarding."
      },
      {
        url: "/sheba-profile.png",
        title: "Sheba Super App — Member Profile & Connected Services",
        caption: "User profile dashboard managing connected mini-app services, favourites, order history, cards & offers, multilingual language switcher, and delivery locations."
      },
      {
        url: "/sheba-auth.png",
        title: "Sheba Super App — Authentication & Registration",
        caption: "Hardened user authentication flow with credential validation, session token encryption, and account recovery."
      },
      {
        url: "/sheba-services.png",
        title: "Sheba Super App — Financial & Daily Services Ecosystem",
        caption: "Super app services directory featuring digital wallet management, card repayments, micro-loans, insurance, and municipal utility payments."
      },
      {
        url: "/sheba-chat-tools.png",
        title: "Sheba Super App — In-App Chat & Media Tools",
        caption: "Integrated communication suite with in-chat camera access, file sharing, voice memos, location sharing, and peer-to-peer balance transfers."
      }
    ],
    overview: "Sheba Super App is a comprehensive digital commerce and lifestyle ecosystem engineered for the Ethiopian mobile consumer economy. Built as a high-performance React Native host container, it unifies three major independent commercial applications into a cohesive mobile experience: Merkato Beslke (wholesale B2B marketplace for mass merchants), Melly's Fashion (e-commerce apparel retail), and Arada (appointment booking for spas, salons, and wellness services). The platform was published on the Google Play Store and officially integrated into Ethio Telecom's Telebirr Super App mini-apps ecosystem.",
    challenge: "Ethiopian digital commerce previously suffered from fragmentation where users had to download multiple separate apps with disparate login systems and conflicting payment methods. Embedding full-scale Next.js web applications into a React Native container required building a custom bidirectional JavaScript bridge for device hardware access, state persistence, and cryptographic Telebirr payment tokenization.",
    solution: "Engineered a microfrontend architecture where individual mini-apps run as performant, responsive web modules rendered within a hardened React Native shell. Created a standardized native bridge enabling mini-apps to invoke native device capabilities (camera, geolocation, push notifications) and complete zero-friction Telebirr mobile wallet transactions with cryptographic RSA signature verification.",
    keyFeatures: [
      {
        title: "3 Independent Mini-Apps in One Shell",
        description: "Seamlessly switches between Merkato Beslke wholesale marketplace, Melly's Fashion consumer retail, and Arada wellness service bookings."
      },
      {
        title: "Telebirr Super App Official Listing",
        description: "Engineered to comply with Ethio Telecom's Telebirr Super App mini-program standards, reaching millions of active digital wallet holders."
      },
      {
        title: "Bi-directional Native Bridge",
        description: "Custom React Native bridge passing session credentials, location coordinates, camera access, and payment cryptographic tokens securely between webviews and native code."
      },
      {
        title: "Zero-Friction Mobile Wallet Checkout",
        description: "Unified Telebirr mobile wallet payment integration eliminating credit card requirements for Ethiopian consumers with instant transaction confirmation."
      },
      {
        title: "Integrated Social & Daily Services",
        description: "Built-in communication suite featuring in-app chat with rich media sharing, location sharing, voice memos, and daily utility services."
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
      },
      {
        layer: "Lifecycle & Archive Status",
        details: "Successfully shipped to production and Google Play Store; currently preserved as an architectural showcase and codebase reference."
      }
    ],
    techStack: {
      mobile: ["React Native", "TypeScript", "Expo / Bare Workflow", "WebViews Bridge"],
      web: ["Next.js", "React", "Tailwind CSS"],
      backend: ["Node.js", "Express", "PostgreSQL", "REST APIs"],
      payments: ["Telebirr Super App Gateway", "RSA-2048 Encryption", "Webhooks"]
    },
    stats: [
      { label: "Mini-Apps", value: "3 Ecosystems", desc: "Wholesale, Fashion & Wellness" },
      { label: "Payment Rail", value: "Telebirr Native", desc: "Single-tap mobile wallet checkout" },
      { label: "Ecosystem Status", value: "Telebirr Listed", desc: "Telebirr Super App mini-apps directory" },
      { label: "Store History", value: "Google Play", desc: "Production release (now archived)" }
    ],
    role: "Lead Mobile & Full-Stack Developer",
    timeline: "04/2024 – 06/2025",
  },
  {
    id: "arifpay-npm",
    title: "Official Arifpay Node.js SDK",
    subtitle: "Production Payment Gateway Library & Developer Documentation",
    category: "Backend & Core",
    featured: true,
    description: "Authored and published the official npm library for Arifpay, powering payment gateway integrations, checkout sessions, cryptographic webhook verification, and digital transactions across Ethiopian developer platforms.",
    tags: ["Node.js", "TypeScript", "npm", "Fintech", "Payment Gateway", "HMAC-SHA256", "Developer Docs", "REST APIs"],
    metrics: "Official NPM Package • Production Payment Infrastructure • Developer Docs Live",
    links: [
      { label: "Developer Docs", url: "https://developer.arifpay.net/docs" },
      { label: "NPM Package", url: "https://www.npmjs.com/package/arifpay" },
      { label: "GitHub", url: "https://github.com/Tadi-san" },
    ],
    image: "/arifpay-docs.png",
    screenshots: [
      {
        url: "/arifpay-docs.png",
        title: "ArifPay Official Developer Documentation",
        caption: "Production API reference, SDK guides, Postman collections, and sandbox environment at developer.arifpay.net/docs."
      }
    ],
    overview: "Arifpay is a licensed premier financial technology payment gateway authorized by the National Bank of Ethiopia to provide multi-channel checkout, bill payments, and merchant settlement. As author of the official 'arifpay' library on npm, I engineered the primary Node.js developer integration layer that connects enterprise platforms, e-commerce applications, and startups directly to the Arifpay gateway. The SDK provides full TypeScript types, automated retries, cryptographic HMAC webhook authentication, and seamless parity with the official Arifpay Developer Documentation (developer.arifpay.net/docs).",
    challenge: "Integrating enterprise payment gateways in emerging financial markets historically suffered from ambiguous payload contracts, inconsistent error codes, and vulnerability to replay attacks during webhook callbacks. Node.js backend engineers required an ergonomic, battle-tested library that eliminated boilerplate crypto math and abstracted HTTP authentication while providing full type safety and sandbox simulation.",
    solution: "Architected and released the official 'arifpay' SDK on npm with 100% TypeScript coverage, zero unnecessary runtime dependencies, and strict adherence to ArifPay's production API specification. Built automated HMAC-SHA256 signature verification utilities, idempotent checkout session builders, refund handlers, and comprehensive documentation aligning with the developer portal at developer.arifpay.net/docs.",
    keyFeatures: [
      {
        title: "Official Developer Documentation Parity",
        description: "Directly aligned with ArifPay production documentation at developer.arifpay.net/docs, supporting sandbox and live payment gateway environments."
      },
      {
        title: "Complete TypeScript Declarations",
        description: "Full type definitions for checkout payloads, transaction statuses, refund records, and webhook payloads with autocompletion."
      },
      {
        title: "Bulletproof Cryptographic Verification",
        description: "Built-in constant-time HMAC-SHA256 verification utilities for verifying webhook authenticity and preventing replay attacks."
      },
      {
        title: "Idempotent Transaction Handling",
        description: "Automatic generation and verification of idempotency keys to eliminate double-billing risks during network timeouts."
      },
      {
        title: "Multi-Channel Payment Integration",
        description: "Powers unified checkouts across Telebirr, CBE Birr, Awash Bank, mobile wallets, and domestic debit cards."
      }
    ],
    architecture: [
      {
        layer: "SDK Core & Type System",
        details: "Built with modern TypeScript, compiled to both CommonJS and ESM outputs for maximum compatibility across Node.js versions."
      },
      {
        layer: "Developer Docs & Sandbox Parity",
        details: "Direct alignment with developer.arifpay.net/docs, supporting sandbox mock keys, live production hosts, and Postman collections."
      },
      {
        layer: "Security & Encryption",
        details: "Utilizes native Node.js crypto module for SHA-256 and HMAC verification with constant-time equality checks."
      },
      {
        layer: "Testing & Enterprise Hardening",
        details: "Automated Jest unit test suite covering sandbox transactions, mock webhooks, and boundary conditions."
      }
    ],
    techStack: {
      language: ["TypeScript", "Node.js", "JavaScript (ESM & CJS)"],
      distribution: ["npm Registry", "Rollup", "TypeScript Compiler (tsc)"],
      testing: ["Jest", "Supertest"],
      security: ["Node Crypto", "HMAC-SHA256", "Idempotency"],
      documentation: ["ArifPay Docs (developer.arifpay.net/docs)", "Postman Collections"]
    },
    stats: [
      { label: "NPM Status", value: "Official SDK", desc: "Published and actively distributed on npm" },
      { label: "Developer Docs", value: "Live Portal", desc: "developer.arifpay.net/docs" },
      { label: "Type Safety", value: "100% Typed", desc: "Zero 'any' TypeScript declarations" },
      { label: "Security", value: "HMAC Signed", desc: "Guaranteed webhook signature verification" }
    ],
    role: "SDK Author & Core Maintainer",
    timeline: "2023 – Present",
  },
  {
    id: "betzone",
    title: "Betzone UK Sportsbook & Gaming",
    subtitle: "High-Concurrency Sports Betting, Odds Streaming & Promotional Rewards Engine",
    category: "Backend & Core",
    featured: false,
    description: "UK-regulated sports betting and iGaming platform engineered for extreme concurrency. Features sub-50ms live odds updates, virtual sports, wagering promotions, and real-time bonus progress tracking via Go microservices and WebSockets. Note: Requires UK VPN to access live site.",
    tags: ["React", "Go (Golang)", "WebSockets", "High-Concurrency", "UKGC Regulated", "Redis Pub/Sub", "Promo Engine"],
    metrics: "Sub-50ms Live Odds • Go WebSocket Engine • 🇬🇧 UK VPN Required",
    vpnRequired: true,
    vpnNotice: "UK VPN required to access live site due to UK Gambling Commission regional geofencing regulations.",
    links: [
      { label: "Live Platform (UK VPN)", url: "https://main.betzone.co.uk/" },
      { label: "GitHub Profile", url: "https://github.com/Tadi-san" },
    ],
    image: "/betzone-rewards.png",
    screenshots: [
      {
        url: "/betzone-rewards.png",
        title: "Betzone — Promotions & My Rewards Engine",
        caption: "Interactive wagering bonus tracker with dynamic progress bars (£43.00/£50.00), free bets, and daily spins."
      },
      {
        url: "/betzone-promotions.png",
        title: "Betzone — Qualifying Promotion Workflow",
        caption: "Bet £10 Get £10 promotion flow with eligibility checks, countdown timers, and sports betting sidebar navigation."
      },
      {
        url: "/betzone-boosts.png",
        title: "Betzone — Football Boosts & Live Offers",
        caption: "Football odds boost campaigns, daily tournament multipliers, and weekly prize wheel integrations."
      },
      {
        url: "/betzone-games.png",
        title: "Betzone — Eligible Games & Terms Matrix",
        caption: "Compliance and game directory highlighting eligible casino titles, free bet rules, and UKGC regulatory disclaimers."
      }
    ],
    overview: "Betzone is a premier UK-licensed online sportsbook and casino gaming operator. Built to handle sudden traffic surges during marquee English Premier League fixtures and major horse racing events, the platform delivers ultra-responsive odds feeds, interactive wagering promotions, and secure account settlements. Powered by Go backend services and reactive React components, it delivers seamless sub-50ms updates across thousands of concurrent punters.",
    challenge: "Live sports betting produces intense bursts of concurrent WebSocket traffic whenever game events happen (goals, red cards, odds shifts). Ensuring instantaneous odds synchronization without lag or layout thrashing while complying with strict UK Gambling Commission (UKGC) regulatory standards and verification rules required a zero-compromise architectural approach.",
    solution: "Engineered high-performance Go WebSocket microservices using epoll socket polling and goroutine fan-outs backed by Redis Pub/Sub. Built virtualized, low-latency UI tables in React that update thousands of cells smoothly at 60 FPS. Implemented a robust promotional rewards engine that tracks wagering requirements in real time.",
    keyFeatures: [
      {
        title: "Sub-50ms Odds Streaming",
        description: "High-concurrency Go pub/sub gateway pushing real-time match events and dynamic odds with minimal serialization overhead."
      },
      {
        title: "Real-Time Wagering & Rewards Engine",
        description: "Dynamic progress bars calculating qualifying bonus turnovers (£43/£50) with automated free bet vouchers and free spins."
      },
      {
        title: "UKGC Compliance & Responsible Gambling",
        description: "Built-in integrations with GamStop, BeGambleAware, deposit limits, and age/identity verification workflows."
      },
      {
        title: "Virtualized Odds Tables",
        description: "Zero-lag DOM virtualization handling rapid odds changes without browser frame drops."
      }
    ],
    architecture: [
      {
        layer: "Real-Time WebSocket Gateway",
        details: "Built in Go (Golang) handling tens of thousands of active socket connections with minimal memory per channel."
      },
      {
        layer: "Frontend Betting Interface",
        details: "React single-page application with lightweight state stores, virtualized odds feeds, and instant betslip recalculation."
      },
      {
        layer: "Promotions & Bonus Microservice",
        details: "Asynchronous transaction listener tracking turnover requirements and awarding instant rewards."
      },
      {
        layer: "Security & Regulatory Geofencing",
        details: "UKGC-mandated IP geolocation checking, KYC verification, and encrypted banking rails."
      }
    ],
    techStack: {
      backend: ["Go (Golang)", "WebSockets", "Goroutines", "Redis Pub/Sub"],
      frontend: ["React", "Tailwind CSS", "Vite", "Virtualized DOM"],
      infrastructure: ["Docker", "Linux VPS", "Nginx", "UKGC Compliance"]
    },
    stats: [
      { label: "Live Latency", value: "< 50ms", desc: "Real-time WebSocket odds updates" },
      { label: "Architecture", value: "Go (Golang)", desc: "High-concurrency streaming backend" },
      { label: "Compliance", value: "UKGC Licensed", desc: "Regulated by Gambling Commission" },
      { label: "Access Note", value: "UK VPN Req.", desc: "Regional IP geofencing enforced" }
    ],
    role: "Go Backend & Real-Time Frontend Engineer",
    timeline: "2024 – 2026",
  },
  {
    id: "itv-win",
    title: "ITV Win Gaming & Prize Platform",
    subtitle: "National Television Interactive Competitions, Bingo & Casino Suite",
    category: "Backend & Core",
    featured: false,
    description: "High-capacity interactive gaming and competition platform for ITV, the UK's largest commercial television broadcaster. Powers real-time live Bingo rooms, instant-win spins, multi-tiered jackpot draws, and television broadcast prize competitions with seamless payment rails. Note: Requires UK VPN to access live site.",
    tags: ["React", "Node.js", "WebSockets", "Microservices", "Television Scale", "UKGC Regulated", "Bingo Engine"],
    metrics: "UK National Broadcaster • High-Throughput Bingo • 🇬🇧 UK VPN Required",
    vpnRequired: true,
    vpnNotice: "UK VPN required to access live site due to UK broadcast and gaming geofencing regulations.",
    links: [
      { label: "Live Platform (UK VPN)", url: "https://www.itv.com/" },
      { label: "GitHub Profile", url: "https://github.com/Tadi-san" },
    ],
    image: "/itvwin-desktop.png",
    screenshots: [
      {
        url: "/itvwin-desktop.png",
        title: "ITV Win — Desktop Portal & Gaming Hub",
        caption: "Official ITV Win gaming portal featuring Prizes, Bingo, Spins, Slingo, Jackpots, and UKGC-licensed payment gateways (Visa, Mastercard)."
      },
      {
        url: "/itvwin-mobile-bingo.png",
        title: "ITV Win Mobile — Live Bingo Rooms",
        caption: "Interactive Bingo lobby showcasing room tiers (90, 80, 30 ball), 'Get an ITV 1, 2, 3! Bag £10 Bingo Play', and flagship ITV Room."
      },
      {
        url: "/itvwin-mobile-spins.png",
        title: "ITV Win Mobile — Love Island & Instant Win",
        caption: "Mobile gameplay promotion for ITV flagship shows ('Love Island Love in a Spin!') with wager bonus unlocks and instant-play slots."
      }
    ],
    overview: "ITV Win is the official gaming, lottery, and interactive competition platform of ITV, the UK's flagship commercial broadcaster. Complementing top television broadcasts including Love Island, This Morning, and Ant & Dec's Saturday Night Takeaway, ITV Win processes immense traffic spikes when on-air presenters prompt millions of national viewers to enter prize competitions and join synchronized live Bingo rooms.",
    challenge: "Live on-air TV call-outs generate sudden exponential traffic waves within seconds. The platform must absorb millions of simultaneous page loads, authenticate users securely, manage ticket purchases, and broadcast synchronized live Bingo ball draws with zero jitter.",
    solution: "Collaborated on scalable microservices with optimized WebSocket streaming for multiplayer Bingo rooms. Engineered responsive, mobile-first gaming components that maintain fluid 60 FPS animation during ball calls and bonus reveals. Implemented strict UK Gambling Commission controls and secure payment processing.",
    keyFeatures: [
      {
        title: "Broadcast-Scale Concurrency Handling",
        description: "Absorbs massive sudden traffic spikes driven by national television on-air promotion with zero degradation."
      },
      {
        title: "Multiplayer Real-Time Bingo Rooms",
        description: "Synchronized multi-tier Bingo engines (90-ball, 80-ball, 30-ball, and flagship ITV Room) with automated card marking."
      },
      {
        title: "Flagship TV Show Spin Promotions",
        description: "Branded interactive slot and instant-win gaming tie-ins like 'Love Island Love in a Spin' with real-time wagering multipliers."
      },
      {
        title: "UKGC Regulated Security & Payments",
        description: "Integrated with Visa, Mastercard, and UKGC self-exclusion standards (GamStop, BeGambleAware) for safe entertainment."
      }
    ],
    architecture: [
      {
        layer: "Real-Time Bingo Engine",
        details: "High-speed WebSocket server coordinating synchronized number draws and multi-user room states."
      },
      {
        layer: "Responsive Mobile & Desktop Web App",
        details: "React frontend built for fast rendering across smartphones and desktop browsers."
      },
      {
        layer: "Broadcast Ingestion & Queueing",
        details: "Distributed caching and message queues buffering on-air competition entry spikes."
      },
      {
        layer: "UK Geofencing & Payment Rails",
        details: "Strict geolocation checks enforcing UK-only traffic with PCI-DSS compliant checkout."
      }
    ],
    techStack: {
      backend: ["Node.js", "Express", "WebSockets", "Redis", "Distributed Queues"],
      frontend: ["React", "Tailwind CSS", "Vite", "Mobile-First PWA"],
      compliance: ["UKGC Licensed", "GamStop Integration", "PCI-DSS"]
    },
    stats: [
      { label: "Broadcaster", value: "ITV UK", desc: "UK's largest commercial network" },
      { label: "Live Rooms", value: "90/80/30 Ball", desc: "Synchronized multiplayer Bingo" },
      { label: "Traffic Profile", value: "On-Air Surges", desc: "Broadcast-driven traffic spikes" },
      { label: "Access Note", value: "UK VPN Req.", desc: "Regional IP geofencing enforced" }
    ],
    role: "Full-Stack Real-Time Engineer",
    timeline: "2025 – 2026",
  },
  {
    id: "tucanbit",
    title: "Tucanbit Crypto Casino & Sportsbook",
    subtitle: "High-Throughput Go Backends, Redis/Postgres Back-Office & Marketing CMS",
    category: "Backend & Core",
    featured: true,
    description: "Next-generation crypto casino and sportsbook platform built with high-performance Go backend microservices. Engineered high-throughput transaction pipelines, optimized back-office administration using Redis caching and PostgreSQL query tuning, and developed custom CMS modules for marketing campaign orchestration.",
    tags: ["Go (Golang)", "PostgreSQL", "Redis", "Next.js", "React", "CMS", "Web3 Gaming", "High-Concurrency"],
    metrics: "Live Global Platform • Go Backend Microservices • Redis & PostgreSQL Tuning",
    links: [
      { label: "Live Platform", url: "https://tucanbit.io/" },
      { label: "GitHub Profile", url: "https://github.com/Tadi-san" },
    ],
    image: "/tucanbit-platform.png",
    screenshots: [
      {
        url: "/tucanbit-platform.png",
        title: "Tucanbit — Casino & Sportsbook Gaming Hub",
        caption: "Live production lobby at tucanbit.io showing casino originals (Plinko, Mines, Aviator), sportsbook, real-time live wins feed, Web3 wallet connect, and VIP rakeback tier system."
      }
    ],
    overview: "Tucanbit is a global cryptocurrency-first online gaming and sports betting ecosystem. Engineered during my tenure at Jadex Consulting, I was responsible for architecting and optimizing the core Go backend microservices that handle live transaction processing, player state management, and real-time wager settlements. Additionally, I spearheaded the back-office database optimization across Redis and PostgreSQL to eliminate reporting bottlenecks and built a dedicated CMS empowering the marketing team to deploy dynamic promotional banners, rakeback campaigns, and VIP reward tiers without code deployments.",
    challenge: "Crypto iGaming platforms handle thousands of rapid micro-transactions per minute (bets, spins, instant withdrawals, and live multiplier calculations). The back-office administration previously suffered from slow analytical queries across millions of transactional records in PostgreSQL, causing latency spikes for administrative reporting. Furthermore, the marketing team needed rapid, autonomous control over seasonal promotional assets and bonus rules without engineering intervention.",
    solution: "Refactored transaction-heavy endpoints into optimized Go routines with non-blocking socket broadcasts. Implemented multi-tier caching with Redis cluster caching and indexed PostgreSQL partitioned schemas, slashing back-office query latencies by over 70%. Built an intuitive marketing CMS allowing instant publishing of promotional banners, rakeback rules, and VIP tier incentives directly to the production frontend.",
    keyFeatures: [
      {
        title: "High-Throughput Go Backend Microservices",
        description: "Concurrent Go services managing wallet operations, live win tickers, and low-latency casino gameplay mechanics."
      },
      {
        title: "Redis & PostgreSQL Back-Office Optimization",
        description: "High-efficiency query caching, read-replica routing, and connection pooling reducing administrative report wait times."
      },
      {
        title: "Marketing Team CMS & Content Engine",
        description: "Purpose-built CMS interface enabling marketing coordinators to schedule banners, update promotional copy, and configure VIP club reward tiers."
      },
      {
        title: "Live Wins & Real-Time Player Feeds",
        description: "Dynamic WebSocket event stream updating live player wins, top multipliers, and active bets with sub-second responsiveness."
      },
      {
        title: "Global Accessibility (No VPN Required)",
        description: "Worldwide low-latency infrastructure optimized for global crypto bettors without regional geofencing blocks."
      }
    ],
    architecture: [
      {
        layer: "Go Microservices Layer",
        details: "High-speed Golang services handling bet placement, wallet balances, and game engine communication."
      },
      {
        layer: "Data & Caching Infrastructure",
        details: "Multi-layer caching via Redis for real-time leaderboards and live wins, with PostgreSQL for ACID-compliant ledger storage."
      },
      {
        layer: "Marketing CMS & Back-Office",
        details: "Custom administrative portal providing the marketing team with live campaign deployment, asset management, and user auditing."
      },
      {
        layer: "Frontend Experience",
        details: "Modern Next.js and React client featuring Web3 wallet integrations (MetaMask, Phantom), dark mode aesthetics, and live streaming feeds."
      }
    ],
    techStack: {
      backend: ["Go (Golang)", "Microservices", "REST & WebSockets", "Concurrency Patterns"],
      database_and_caching: ["PostgreSQL", "Redis Caching", "Connection Pooling", "Query Optimization"],
      cms_and_frontend: ["Next.js", "React", "Tailwind CSS", "Marketing CMS Tools"],
      infrastructure: ["Docker", "Linux VPS", "Nginx", "Cloudflare CDN"]
    },
    stats: [
      { label: "Live Domain", value: "tucanbit.io", desc: "Production crypto casino & sportsbook" },
      { label: "Backend Core", value: "Go (Golang)", desc: "High-throughput concurrent services" },
      { label: "Database", value: "Postgres + Redis", desc: "Optimized back-office performance" },
      { label: "Access", value: "Global / No VPN", desc: "Direct worldwide accessibility" }
    ],
    role: "Go Backend Engineer & Systems Developer (Jadex Consulting)",
    timeline: "2025 – 2026",
  },
  {
    id: "enpath-ai",
    title: "enPath AI Career & Education Platform",
    subtitle: "Privacy-Preserving Multi-Agent Career Suite, Autonomous Resume Builder & Job Matching",
    category: "AI & ML Systems",
    featured: true,
    description: "AI career and education planning ecosystem for students and young professionals. Features privacy-first autonomous career agents (enPath Agent, Jobs Bot, Financial Bot, Education Bot) that synthesize tailored resumes, map 10-year career pathways, and match job openings while stripping personally identifiable information (PII) before LLM inference.",
    tags: ["React Native", "Next.js", "Python FastAPI", "LLM Agents", "Vector Embeddings", "Privacy-Preserving AI"],
    metrics: "Privacy-Preserving LLM • Multi-Agent Career Suite • 1,000+ Students & Professionals",
    links: [
      { label: "Live Platform", url: "https://www.enpath.ai/" },
      { label: "GitHub Profile", url: "https://github.com/Tadi-san" },
    ],
    image: "/enpath-landing.png",
    screenshots: [
      {
        url: "/enpath-landing.png",
        title: "enPath AI — Landing & Multi-Bot Ecosystem",
        caption: "Official enPath platform at enpath.ai ('The future belongs to those who plan.') showcasing specialized bots: Financial Bot, Community Bot, Jobs Bot, Education Bot, and enSignals."
      },
      {
        url: "/enpath-agent.png",
        title: "enPath Agent — Conversational Career & Resume Engine",
        caption: "Interactive agent interface demonstrating on-the-fly tailored resume generation ('Senior Project Manager'), job recommendations, and automatic PII data redaction."
      }
    ],
    overview: "enPath is an AI-powered career, financial, and educational planning ecosystem designed for students and emerging professionals. Navigating early career choices often feels fragmented between disparate job boards, generic resume templates, and financial uncertainty. enPath unifies specialized autonomous agents (enPath Agent, Jobs Bot, Financial Bot, Education Bot, Community Bot) into a cohesive web and mobile experience that drafts tailored resumes, calculates 10-year financial projections, and identifies high-intent job openings.",
    challenge: "Users are hesitant to share sensitive career histories, salaries, and contact details with commercial LLMs due to privacy risks. Additionally, generating context-aware resumes that adhere to applicant tracking system (ATS) benchmarks while matching real-time job openings requires multi-step agent reasoning, dynamic document generation, and low-latency token streaming.",
    solution: "Engineered a privacy-preserving pipeline that scrubs all personally identifiable information (PII: names, phone numbers, emails, addresses) prior to LLM processing. Implemented an autonomous multi-agent orchestration layer in Python FastAPI coupled with vector embeddings for semantic job retrieval. On the frontend, built a cross-platform React Native and Next.js client delivering responsive chat workflows and live resume generation.",
    keyFeatures: [
      {
        title: "Privacy-First PII Stripping Engine",
        description: "Automatically scrubs applicant names, emails, phone numbers, and location identifiers before sending prompts to frontier LLMs, ensuring zero personal identity leakage."
      },
      {
        title: "Conversational Autonomous Resume Builder",
        description: "Generates ATS-optimized, role-tailored resumes in seconds from conversational prompts, structured experience, and PMP/logistics credentials."
      },
      {
        title: "Multi-Agent Ecosystem (6 Dedicated Bots)",
        description: "Specialized autonomous agents for jobs, financial projections, community advice, education pathways, and career signals."
      },
      {
        title: "Semantic Vector Job Matching",
        description: "Matches user skill profiles against live postings using vector similarity embeddings rather than rigid keyword searches."
      }
    ],
    architecture: [
      {
        layer: "Privacy & Sanitization Gateway",
        details: "Intercepts user inputs to scrub PII tokens and anonymize career histories before forwarding to LLM endpoints."
      },
      {
        layer: "Agent Orchestration & Vector Retrieval",
        details: "Python FastAPI backend managing multi-agent state machines, conversation context, and vector similarity search."
      },
      {
        layer: "Document Synthesis Service",
        details: "Headless compilation engine converting generated resume JSON schemas into exportable documents."
      },
      {
        layer: "Cross-Platform Frontend",
        details: "Next.js web application and React Native mobile client sharing business logic and conversational UI components."
      }
    ],
    techStack: {
      frontend: ["React Native", "Next.js", "React", "Tailwind CSS", "TypeScript"],
      backend: ["Python FastAPI", "Node.js", "REST & WebSockets", "PostgreSQL"],
      ai_and_privacy: ["Frontier LLMs", "Vector Embeddings", "PII Redaction Regex/NLP", "Multi-Agent Workflows"]
    },
    stats: [
      { label: "Live Platform", value: "enpath.ai", desc: "Production career & education platform" },
      { label: "Privacy", value: "Zero PII", desc: "Identity stripped before AI processing" },
      { label: "Architecture", value: "6 AI Bots", desc: "Jobs, Financial, Education & Agent" },
      { label: "Target", value: "1,000+ Users", desc: "Students & young professionals" }
    ],
    role: "Full-Stack & AI Systems Developer",
    timeline: "2024 – 2025",
  },
  {
    id: "axees",
    title: "Axees.io Creator & Marketer Platform",
    subtitle: "Algorithmic Influencer Matching, Campaign Contracts & Performance Attribution",
    category: "Full-Stack SaaS",
    featured: false,
    description: "Collaborative marketplace bridging performance marketers with verified social media creators. Features algorithmic profile matching, automated campaign deliverables tracking, and escrow milestones for content partnerships across TikTok, Instagram, and YouTube.",
    tags: ["React Native (Web & Mobile)", "Python", "Node.js", "PostgreSQL", "Matching Algorithms"],
    metrics: "Cross-Platform Web & Mobile • Algorithmic Creator Matching • Escrow Milestones",
    links: [
      { label: "Live Platform", url: "https://axees.io/" },
      { label: "GitHub Profile", url: "https://github.com/Tadi-san" },
    ],
    image: "",
    screenshots: [],
    overview: "Axees.io is a performance-driven creator collaboration platform engineered to streamline influencer marketing at scale. By replacing scattered spreadsheets and manual Instagram DMs with structured briefs, verified audience metrics, and milestone-based escrow contracts, Axees enables digital brands and marketing agencies to discover, contract, and attribute campaigns with high-impact creators.",
    challenge: "Brands spend hours manually vetting creator audience demographics and engagement rates, often facing unreliable deliverable fulfillment and payment disputes. Creators face payment delays and lack standardized contractual frameworks.",
    solution: "Developed an algorithmic creator-marketer matching engine combining audience affinity scoring with creator niche categorizations. Built a cross-platform React Native Web and mobile frontend sharing 85% of logic across iOS, Android, and web dashboards, paired with an escrow contract release engine.",
    keyFeatures: [
      {
        title: "Algorithmic Creator Matching",
        description: "Demographic affinity scoring pairing brand creative briefs with verified creator audience niches."
      },
      {
        title: "Escrow Milestone Workflows",
        description: "Secure campaign milestone releases ensuring creators are paid upon verified content delivery."
      },
      {
        title: "Universal Web & Mobile Architecture",
        description: "Shared React Native Web codebase delivering responsive desktop dashboards and native mobile apps."
      }
    ],
    architecture: [
      {
        layer: "Universal Frontend",
        details: "React Native Web for unified component rendering across mobile and desktop browsers."
      },
      {
        layer: "Scoring & Matching Engine",
        details: "Python service computing demographic affinity and creator engagement metrics."
      },
      {
        layer: "Escrow & Campaign Services",
        details: "Node.js backend managing milestone agreements, payouts, and deliverable review."
      }
    ],
    techStack: {
      frontend: ["React Native Web", "React", "TypeScript", "Tailwind CSS"],
      backend: ["Node.js", "Python", "PostgreSQL", "REST APIs"],
      matching: ["Audience Scoring Algorithms", "Affinity Metrics"]
    },
    stats: [
      { label: "Domain", value: "axees.io", desc: "Creator & marketer matching platform" },
      { label: "Code Sharing", value: "85%", desc: "Shared logic across web and mobile" },
      { label: "Platform", value: "Universal", desc: "iOS, Android, and Web applications" },
      { label: "Workflow", value: "Escrow Rails", desc: "Milestone-verified payments" }
    ],
    role: "Full-Stack & Cross-Platform Developer",
    timeline: "2024",
  },
  {
    id: "ethio-smart-homes",
    title: "Ethio Smart Home IoT Platform",
    subtitle: "Mobile Home Automation, Energy Management & ESP32/C++ Firmware Control by EthioSmart Technology",
    category: "Full-Stack SaaS",
    featured: false,
    description: "Production smart automation platform developed by EthioSmart Technology (ethiosmart.tech) for Ethiopian homes, offices, shops, and farms. Bridges custom C++ microcontroller firmware on ESP32 boards with a high-performance React Native mobile app for sub-second lighting, appliance, climate, and security control.",
    tags: ["React Native (Android/iOS)", "C++ Firmware", "ESP32", "MQTT", "Node.js", "IoT Automation", "Hardware Telemetry"],
    metrics: "Sub-Second Hardware Switching • C++ ESP32 Firmware • Local & Cloud Mesh",
    links: [
      { label: "Official Website", url: "https://ethiosmart.tech" },
      { label: "GitHub Profile", url: "https://github.com/Tadi-san" },
    ],
    image: "/ethiosmart-rooms.png",
    screenshots: [
      {
        url: "/ethiosmart-rooms.png",
        title: "Ethio Smart Home — Room Navigation & Climate Dashboard",
        caption: "Central mobile overview ('Hi, Tad - Ready to control your home from your phone?') showing interactive cards for Living Room, Kitchen, Bed Room, and Bath Room with climate metrics and bottom navigation (Home, Security, Settings)."
      },
      {
        url: "/ethiosmart-room-controls.png",
        title: "Ethio Smart Home — Living Room Device & Appliance Controls",
        caption: "Granular room controller with sub-second device switching across lighting circuits (main light, side light, left/right headlights, gold/white lights), wall charger outlets, audio entertainment, and real-time temperature/humidity telemetry."
      },
      {
        url: "/ethiosmart-login.png",
        title: "Ethio Smart Home — Secure Authentication Gateway",
        caption: "Branded EthioSmart Technology authentication interface with biometric/password login, encrypted session key management, and hardware pairing validation."
      },
      {
        url: "/ethiosmart-settings.png",
        title: "Ethio Smart Home — System Settings & EthioSmart Ecosystem",
        caption: "System settings and company documentation at ethiosmart.tech detailing automation deployments across Ethiopian smart homes, commercial offices, shops, smart agriculture farms, and industrial automation."
      }
    ],
    overview: "Ethio Smart Home is a purpose-built Internet of Things (IoT) hardware automation and mobile control ecosystem developed by EthioSmart Technology (ethiosmart.tech). Tailored specifically for Ethiopian residential and commercial environments where electrical grid fluctuations and intermittent internet occur, the platform pairs custom low-power C++ firmware running on ESP32 microcontrollers with a responsive React Native mobile app. Users can seamlessly monitor temperature and humidity, toggle individual lighting circuits, activate smart charging receptacles, and manage whole-room power states both over local Wi-Fi mesh networks and secure cloud relays.",
    challenge: "Smart home solutions in emerging markets frequently fail due to power surges, frequent brownouts, and internet downtime. Standard commercial off-the-shelf smart switches rely entirely on constant foreign cloud connectivity; when internet is dropped, users lose access to physical switches. Additionally, low-cost microcontrollers can crash or lose state synchronization during sudden voltage drops.",
    solution: "Wrote robust C++ embedded firmware utilizing FreeRTOS tasks and non-volatile flash storage (EEPROM/NVS) on ESP32 microcontrollers to preserve relay states across power cuts. Implemented a dual-path communication protocol that defaults to ultra-fast local UDP/MQTT broadcasts over the local LAN while falling back to an encrypted cloud WebSocket broker when away from home. Designed a sleek, high-contrast dark mode React Native mobile interface with instant tactile state toggles.",
    keyFeatures: [
      {
        title: "Sub-Second Microcontroller Switching",
        description: "Instantaneous physical relay triggering under 50ms over local Wi-Fi mesh networks via lightweight binary MQTT payloads."
      },
      {
        title: "Resilient Offline Mesh Functionality",
        description: "Operates 100% reliably during local internet blackouts by discovering and controlling local ESP32 nodes directly without external WAN servers."
      },
      {
        title: "Granular Multi-Circuit Room Management",
        description: "Dedicated control arrays for Living Room, Kitchen, Bedroom, and Bathroom with individual control over accent lights, ceiling lights, outlets, and music."
      },
      {
        title: "Real-Time Environmental Telemetry",
        description: "Integrates DHT/BME sensors reporting live temperature and humidity metrics directly to the mobile UI."
      },
      {
        title: "Non-Volatile Hardware State Recovery",
        description: "ESP32 firmware commits circuit states to flash memory before power loss, automatically restoring exact lighting and security configurations upon power return."
      }
    ],
    architecture: [
      {
        layer: "Embedded C++ Firmware Layer",
        details: "ESP32 / ESP8266 microcontrollers running FreeRTOS with multi-threaded sensor reading, hardware interrupt pins, and watchdog timers."
      },
      {
        layer: "Local Mesh & MQTT Gateway",
        details: "Local network mDNS discovery and Mosquitto MQTT broker enabling direct offline socket control with sub-50ms latency."
      },
      {
        layer: "Cloud Synchronization API",
        details: "Node.js and WebSocket broker for remote out-of-home access, user authentication, and multi-device state synchronization."
      },
      {
        layer: "Mobile Control Application",
        details: "React Native mobile client with high-contrast dark theme, animated toggle switches, room categorization, and security views."
      }
    ],
    techStack: {
      mobile: ["React Native", "TypeScript", "Tailwind CSS / NativeWind", "Lucide Icons"],
      firmware: ["C++", "ESP-IDF / Arduino", "FreeRTOS", "MQTT", "ESP32 / ESP8266"],
      backend_and_broker: ["Node.js", "Express", "Mosquitto MQTT", "WebSockets", "PostgreSQL"],
      infrastructure: ["Local Wi-Fi Mesh", "mDNS Auto-Discovery", "Docker", "Linux Edge Gateway"]
    },
    stats: [
      { label: "Switch Speed", value: "< 50ms", desc: "Sub-second physical relay response" },
      { label: "Firmware Core", value: "C++ / ESP32", desc: "Non-volatile hardware recovery" },
      { label: "Connectivity", value: "Hybrid Mesh", desc: "100% offline local LAN resilient" },
      { label: "Company", value: "EthioSmart", desc: "ethiosmart.tech official platform" }
    ],
    role: "IoT Systems Architect & Embedded Full-Stack Developer",
    timeline: "2023 – 2024",
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
    program: "Software Engineering",
    period: "06/2020 – 05/2024",
    location: "Addis Ababa, Ethiopia",
    description: "Core computer science and engineering coursework covering algorithms, data structures, distributed systems, software architecture, and systems programming.",
  },
  {
    school: "Advanced Systems & ML Engineering",
    program: "Distributed Systems, C++ Kernels & Cloud Architecture",
    period: "2019 – Present",
    location: "Continuous Independent Mastery",
    description: "Deep technical mastery spanning low-level C++/PyTorch systems, Go distributed microservices, React Native super-apps, and production cloud architecture.",
  },
];

export const spokenLanguages = [
  { language: "Amharic", level: "Native" },
  { language: "English", level: "Professional Working Proficiency" },
];
