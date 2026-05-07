export interface ServiceDetail {
  slug: string;
  name: string;
  category: string;
  heroDescription: string;
  fullDescription: string;
  clientGoals: string[];
  features: string[];
  process: { title: string; desc: string }[];
  tools: { name: string; icon: string }[];
  categorizedTools?: {
    category: string;
    items: { name: string; icon: string }[];
  }[];
}

export const allServices: Record<string, ServiceDetail> = {
  "website-design-development": {
    slug: "website-design-development",
    name: "Website Design & Development",
    category: "Web & Digital",
    heroDescription: "High-end digital products engineered for performance and impact.",
    fullDescription: "We build bespoke websites that combine architectural precision with high-performance engineering. Our websites are not just digital addresses; they are growth engines designed to convert and scale.",
    clientGoals: [
      "High-speed performance (99+ PageSpeed)",
      "Mobile-first, responsive design",
      "SEO-ready architecture",
      "Easy-to-manage CMS integration"
    ],
    features: ["Custom UI/UX Design", "Next.js Engineering", "Cloudflare Optimization", "Schema Markup", "Conversion Tracking"],
    process: [
      { title: "Strategy & Discovery", desc: "Deep dive into your brand goals and user demographics." },
      { title: "Architecture", desc: "Mapping the sitemap and technical requirements." },
      { title: "Visual Prototyping", desc: "Designing high-fidelity, pixel-perfect interfaces." },
      { title: "Core Engineering", desc: "Clean code development with high-performance frameworks." },
      { title: "Global Launch", desc: "Deployment to edge servers for worldwide speed." }
    ],
    tools: [
      { name: "Figma", icon: "figma" },
      { name: "Next.js", icon: "nextjs" },
      { name: "TypeScript", icon: "ts" },
      { name: "Framer", icon: "framer" },
      { name: "Docker", icon: "docker" },
      { name: "Vercel", icon: "vercel" },
      { name: "GitHub", icon: "github" },
      { name: "Notion", icon: "notion" }
    ],
    categorizedTools: [
      {
        category: "Design & UX",
        items: [
          { name: "Figma", icon: "figma" },
          { name: "Photoshop", icon: "ps" }
        ]
      },
      {
        category: "Frontend",
        items: [
          { name: "Next.js", icon: "nextjs" },
          { name: "React", icon: "react" },
          { name: "TypeScript", icon: "ts" },
          { name: "Tailwind", icon: "tailwind" },
          { name: "Framer", icon: "framer" }
        ]
      },
      {
        category: "Backend & Logic",
        items: [
          { name: "Node.js", icon: "node" },
          { name: "PostgreSQL", icon: "db" },
          { name: "Supabase", icon: "supabase" }
        ]
      },
      {
        category: "Deployment",
        items: [
          { name: "Vercel", icon: "vercel" },
          { name: "GitHub", icon: "github" }
        ]
      }
    ]
  },
  "landing-page-design": {
    slug: "landing-page-design",
    name: "Landing Page Design",
    category: "Web & Digital",
    heroDescription: "Strategic entry points designed to maximize conversion.",
    fullDescription: "Our landing pages are meticulously crafted to guide users toward a single objective. We use data-driven design and psychological triggers to turn visitors into loyal customers.",
    clientGoals: [
      "Maximum conversion rates",
      "Instant loading times",
      "Clear, persuasive messaging",
      "Seamless lead generation"
    ],
    features: ["A/B Testing Ready", "Copywriting Included", "Analytics Setup", "Mobile Optimization", "Retargeting Integration"],
    process: [
      { title: "Conversion Map", desc: "Defining the psychological flow of the page." },
      { title: "Direct Copy", desc: "Writing words that command attention and action." },
      { title: "Impact Design", desc: "Visuals that focus the user's eye on the goal." },
      { title: "Development", desc: "Optimizing for sub-second load times." }
    ],
    tools: [
      { name: "Figma", icon: "figma" },
      { name: "Photoshop", icon: "ps" },
      { name: "Next.js", icon: "nextjs" },
      { name: "React", icon: "react" },
      { name: "TypeScript", icon: "ts" },
      { name: "Tailwind", icon: "tailwind" },
      { name: "Framer", icon: "framer" },
      { name: "Node.js", icon: "node" },
      { name: "PostgreSQL", icon: "db" },
      { name: "Supabase", icon: "supabase" },
      { name: "Vercel", icon: "vercel" },
      { name: "GitHub", icon: "github" }
    ],
    categorizedTools: [
      {
        category: "Design & UX",
        items: [
          { name: "Figma", icon: "figma" },
          { name: "Photoshop", icon: "ps" }
        ]
      },
      {
        category: "Frontend",
        items: [
          { name: "Next.js", icon: "nextjs" },
          { name: "React", icon: "react" },
          { name: "TypeScript", icon: "ts" },
          { name: "Tailwind", icon: "tailwind" },
          { name: "Framer", icon: "framer" }
        ]
      },
      {
        category: "Backend & Logic",
        items: [
          { name: "Node.js", icon: "node" },
          { name: "PostgreSQL", icon: "db" },
          { name: "Supabase", icon: "supabase" }
        ]
      },
      {
        category: "Deployment",
        items: [
          { name: "Vercel", icon: "vercel" },
          { name: "GitHub", icon: "github" }
        ]
      }
    ]
  },
  "e-commerce-website": {
    slug: "e-commerce-website",
    name: "E-commerce Website",
    category: "Web & Digital",
    heroDescription: "Scalable online stores with seamless user experiences.",
    fullDescription: "We build robust e-commerce platforms that handle everything from inventory management to secure global payments. Our designs focus on product discovery and friction-less checkout.",
    clientGoals: [
      "Secure payment processing",
      "Automated inventory management",
      "High retention user accounts",
      "Abandoned cart recovery"
    ],
    features: ["Global Payments", "Mobile Shopping", "CRM Integration", "Custom Discount Logic", "Multi-currency Support"],
    process: [
      { title: "Catalog Audit", desc: "Organizing your product data for optimal UX." },
      { title: "Storefront Design", desc: "Designing for speed and ease of purchase." },
      { title: "Cart Logic", desc: "Engineering a friction-less checkout experience." },
      { title: "Automation", desc: "Setting up shipping and email workflows." }
    ],
    tools: [
      { name: "Shopify Plus", icon: "shopify" },
      { name: "Stripe", icon: "stripe" },
      { name: "Klaviyo", icon: "email" },
      { name: "Recharge", icon: "sub" },
      { name: "Zendesk", icon: "support" },
      { name: "ShipStation", icon: "shipping" }
    ],
    categorizedTools: [
      {
        category: "E-commerce Engine",
        items: [
          { name: "Shopify Plus", icon: "shopify" },
          { name: "Recharge", icon: "sub" }
        ]
      },
      {
        category: "Payment Systems",
        items: [
          { name: "Stripe", icon: "stripe" }
        ]
      },
      {
        category: "Marketing & Ops",
        items: [
          { name: "Klaviyo", icon: "email" },
          { name: "Zendesk", icon: "support" },
          { name: "ShipStation", icon: "shipping" }
        ]
      }
    ]
  },
  "app-development": {
    slug: "app-development",
    name: "App Development (iOS & Android)",
    category: "Development",
    heroDescription: "Native and cross-platform mobile experiences.",
    fullDescription: "We build powerful mobile applications that live in your users' pockets. From concept to App Store, we handle the entire engineering lifecycle with a focus on speed and reliability.",
    clientGoals: [
      "Seamless iOS & Android experience",
      "Offline capabilities & data sync",
      "Biometric security features",
      "In-app analytics & tracking"
    ],
    features: ["Native Performance", "Push Notifications", "Cloud Integration", "API Architecture", "Security Audits"],
    process: [
      { title: "User Mapping", desc: "Defining the mobile user journey and key touchpoints." },
      { title: "UI/UX Design", desc: "Mobile-first interfaces designed for touch." },
      { title: "App Engineering", desc: "Building with React Native or Native technologies." },
      { title: "Quality Assurance", desc: "Testing across 50+ device configurations." },
      { title: "Store Submission", desc: "Handling Apple App Store and Google Play launch." }
    ],
    tools: [
      { name: "React Native", icon: "react" },
      { name: "TypeScript", icon: "ts" },
      { name: "Firebase", icon: "firebase" },
      { name: "Fastlane", icon: "fastlane" },
      { name: "App Store Connect", icon: "apple" },
      { name: "Sentry", icon: "sentry" },
      { name: "Linear", icon: "linear" }
    ],
    categorizedTools: [
      {
        category: "Engineering",
        items: [
          { name: "React Native", icon: "react" },
          { name: "TypeScript", icon: "ts" }
        ]
      },
      {
        category: "Cloud & Monitoring",
        items: [
          { name: "Firebase", icon: "firebase" },
          { name: "Sentry", icon: "sentry" }
        ]
      },
      {
        category: "Operations & Launch",
        items: [
          { name: "Fastlane", icon: "fastlane" },
          { name: "Apple", icon: "apple" },
          { name: "Linear", icon: "linear" }
        ]
      }
    ]
  },
  "saas-product-development": {
    slug: "saas-product-development",
    name: "SaaS Product Development",
    category: "Development",
    heroDescription: "Engineering the next generation of software as a service.",
    fullDescription: "We help founders and enterprises build scalable SaaS products from zero to one. Our architecture is built for high concurrency and secure data management.",
    clientGoals: [
      "Scalable infrastructure",
      "Multi-tenant data security",
      "Subscription management",
      "Automated onboarding"
    ],
    features: ["Stripe Billing", "User Dashboards", "API Access", "Role-based Security", "Audit Logs"],
    process: [
      { title: "Feature Scoping", desc: "Defining the MVP for rapid market entry." },
      { title: "DB Architecture", desc: "Designing secure, scalable data schemas." },
      { title: "Product Build", desc: "Iterative development with real-world feedback." },
      { title: "Ops Setup", desc: "Configuring CI/CD and cloud monitoring." }
    ],
    tools: [
      { name: "AWS Cloud", icon: "aws" },
      { name: "Kubernetes", icon: "kubernetes" },
      { name: "PostgreSQL", icon: "db" },
      { name: "Redis", icon: "redis" },
      { name: "CircleCI", icon: "circleci" },
      { name: "Jira", icon: "jira" }
    ],
    categorizedTools: [
      {
        category: "Architecture & Cloud",
        items: [
          { name: "AWS Cloud", icon: "aws" },
          { name: "Kubernetes", icon: "kubernetes" },
          { name: "Node.js", icon: "node" }
        ]
      },
      {
        category: "Data & Caching",
        items: [
          { name: "PostgreSQL", icon: "db" },
          { name: "Redis", icon: "redis" }
        ]
      },
      {
        category: "Productivity & Ops",
        items: [
          { name: "CircleCI", icon: "circleci" },
          { name: "Jira", icon: "jira" },
          { name: "Linear", icon: "linear" }
        ]
      }
    ]
  },
  "web-app-development": {
    slug: "web-app-development",
    name: "Web App Development",
    category: "Development",
    heroDescription: "Complex web applications at scale.",
    fullDescription: "We build powerful web applications that bridge the gap between websites and software. Our focus is on state management, real-time data, and high-performance frontend engineering.",
    clientGoals: [
      "Real-time data synchronization",
      "Robust state management",
      "Cross-browser reliability",
      "Scalable frontend architecture"
    ],
    features: ["Next.js Architecture", "Real-time WebSockets", "Progressive Web App (PWA)", "Custom API Integration", "Global Edge Deployment"],
    process: [
      { title: "Logic Mapping", desc: "Defining user states and complex data flows." },
      { title: "Frontend Build", desc: "Developing the reactive interface with modern frameworks." },
      { title: "Integration", desc: "Connecting the frontend to robust backend APIs." },
      { title: "Load Testing", desc: "Ensuring the app performs under high concurrency." }
    ],
    tools: [
      { name: "Next.js", icon: "nextjs" },
      { name: "React", icon: "react" },
      { name: "TypeScript", icon: "ts" },
      { name: "Vercel", icon: "vercel" },
      { name: "GitHub", icon: "github" },
      { name: "Sentry", icon: "sentry" }
    ],
    categorizedTools: [
      {
        category: "Core Engineering",
        items: [
          { name: "Next.js", icon: "nextjs" },
          { name: "React", icon: "react" },
          { name: "TypeScript", icon: "ts" }
        ]
      },
      {
        category: "Logic & Performance",
        items: [
          { name: "Framer", icon: "framer" },
          { name: "Node.js", icon: "node" }
        ]
      },
      {
        category: "Deployment & Ops",
        items: [
          { name: "Vercel", icon: "vercel" },
          { name: "GitHub", icon: "github" },
          { name: "Sentry", icon: "sentry" }
        ]
      }
    ]
  },
  "api-backend-development": {
    slug: "api-backend-development",
    name: "API & Backend Development",
    category: "Development",
    heroDescription: "Robust server-side architectures.",
    fullDescription: "We engineer the engines that power digital experiences. Our backend solutions are built for security, scalability, and sub-second latency, ensuring your data is always available and protected.",
    clientGoals: [
      "Sub-second API response times",
      "Enterprise-grade security",
      "Seamless 3rd-party integrations",
      "Elastic scaling capabilities"
    ],
    features: ["RESTful & GraphQL APIs", "Microservices Architecture", "Database Modeling", "Auth & Identity Systems", "Serverless Functions"],
    process: [
      { title: "Schema Design", desc: "Architecting efficient and secure data models." },
      { title: "Core Engineering", desc: "Building the server-side logic and API layer." },
      { title: "Security Layer", desc: "Implementing OAuth, JWT, and data encryption." },
      { title: "Ops Launch", desc: "Deploying to scalable cloud environments with monitoring." }
    ],
    tools: [
      { name: "Node.js", icon: "node" },
      { name: "PostgreSQL", icon: "db" },
      { name: "Supabase", icon: "supabase" },
      { name: "Docker", icon: "docker" },
      { name: "Kubernetes", icon: "kubernetes" },
      { name: "AWS", icon: "aws" }
    ],
    categorizedTools: [
      {
        category: "Server Architecture",
        items: [
          { name: "Node.js", icon: "node" },
          { name: "PostgreSQL", icon: "db" },
          { name: "Supabase", icon: "supabase" }
        ]
      },
      {
        category: "Cloud & Infrastructure",
        items: [
          { name: "Docker", icon: "docker" },
          { name: "Kubernetes", icon: "kubernetes" },
          { name: "AWS Cloud", icon: "aws" }
        ]
      }
    ]
  },
  "ui-ux-design": {
    slug: "ui-ux-design",
    name: "UI/UX Design",
    category: "Design & Branding",
    heroDescription: "User-centric interfaces that define brand excellence.",
    fullDescription: "Design is not just what it looks like; it's how it works. We create intuitive interfaces that solve complex problems and delight users at every touchpoint.",
    clientGoals: [
      "Reduced user friction",
      "Modern, trend-aligned aesthetics",
      "Consistent design language",
      "Clear user pathways"
    ],
    features: ["User Research", "Interaction Design", "Design Systems", "Prototyping", "A/B Testing Support"],
    process: [
      { title: "Research", desc: "Analyzing competitor landscapes and user behavior." },
      { title: "Wireframing", desc: "Building the skeletal structure of the interface." },
      { title: "Visual Design", desc: "Applying brand DNA to every pixel." },
      { title: "Interaction", desc: "Defining animations and state transitions." },
      { title: "Handover", desc: "Complete design specs for development teams." }
    ],
    tools: [
      { name: "Figma Professional", icon: "figma" },
      { name: "Principle", icon: "anim" },
      { name: "Spline 3D", icon: "3d" },
      { name: "Maze", icon: "test" },
      { name: "LottieFiles", icon: "motion" },
      { name: "Slack", icon: "comms" }
    ]
  },
  "brand-identity-design": {
    slug: "brand-identity-design",
    name: "Graphic & Brand Identity Design",
    category: "Design & Branding",
    heroDescription: "High-performance visual systems engineered for global impact.",
    fullDescription: "We craft strategic visual identities that go beyond aesthetics. Our design systems are architected for 99+ performance, 100% responsiveness, and SEO optimization, ensuring your brand commands attention across every digital touchpoint.",
    clientGoals: [
      "99+ Performance-optimized assets",
      "100% Responsive design systems",
      "SEO-ready visual architecture",
      "Strategic market positioning",
      "Scalable brand DNA"
    ],
    features: ["Bespoke Logo Systems", "Advanced Typography", "Performance Asset Export", "Responsive Style Guides", "SEO-Aligned Visuals"],
    process: [
      { title: "Strategic Discovery", desc: "Analyzing brand DNA, performance requirements, and SEO goals." },
      { title: "Architectural Concepting", desc: "Exploring visual directions that scale seamlessly across platforms." },
      { title: "Precision Refinement", desc: "Optimizing every vector and pixel for speed and clarity." },
      { title: "System Delivery", desc: "Deploying a high-performance toolkit ready for global growth." }
    ],
    tools: [
      { name: "Adobe Illustrator", icon: "ai" },
      { name: "Adobe Photoshop", icon: "ps" },
      { name: "Figma Professional", icon: "figma" },
      { name: "Adobe After Effects", icon: "ae" },
      { name: "Brandfolder", icon: "dam" }
    ]
  },
  "social-media-management": {
    slug: "social-media-management",
    name: "Social Media Marketing & Management",
    category: "Marketing & Growth",
    heroDescription: "Growing your community with strategic content.",
    fullDescription: "We take the burden of social media off your shoulders. Our team manages your presence across all platforms, driving engagement and building real connections with your audience.",
    clientGoals: [
      "Consistent posting schedule",
      "High community engagement",
      "Viral-ready video content",
      "Data-driven growth"
    ],
    features: ["Content Production", "Community Engagement", "Hashtag Strategy", "Monthly Reports", "Crisis Management"],
    process: [
      { title: "Platform Audit", desc: "Reviewing your current social standings." },
      { title: "Strategy", desc: "Mapping content pillars to business goals." },
      { title: "Production", desc: "Creating high-end reels and graphics." },
      { title: "Growth", desc: "Daily management and proactive engagement." }
    ],
    tools: [
      { name: "Sprout Social", icon: "social" },
      { name: "Later", icon: "schedule" },
      { name: "CapCut Pro", icon: "video" },
      { name: "Canva Teams", icon: "design" },
      { name: "Meta Business Suite", icon: "meta" }
    ]
  },
  "seo-google-presence": {
    slug: "seo-google-presence",
    name: "SEO & Google Presence",
    category: "Marketing & Growth",
    heroDescription: "Ranking higher where your customers are looking.",
    fullDescription: "We optimize your digital footprint to ensure you're visible when it matters. Our SEO strategies focus on technical excellence and high-value content that ranks.",
    clientGoals: [
      "Page 1 Google rankings",
      "Increased organic traffic",
      "Local map dominance",
      "Authoritative backlink profile"
    ],
    features: ["Technical Audit", "Keyword Research", "On-Page SEO", "Link Building", "Local SEO Optimization"],
    process: [
      { title: "Technical Fix", desc: "Resolving all underlying site performance issues." },
      { title: "Keyword Plan", desc: "Identifying the high-intent search terms." },
      { title: "Content Engine", desc: "Producing ranking-optimized articles." },
      { title: "Authority", desc: "Acquiring premium backlinks to boost rank." }
    ],
    tools: [
      { name: "SEMRush Guru", icon: "seo" },
      { name: "Ahrefs Enterprise", icon: "seo" },
      { name: "Screaming Frog", icon: "audit" },
      { name: "Surfer SEO", icon: "content" },
      { name: "Google Search Console", icon: "google" }
    ]
  },
  "website-redesign": {
    slug: "website-redesign",
    name: "Website Redesign",
    category: "Web & Digital",
    heroDescription: "Strategic modernization for legacy digital platforms.",
    fullDescription: "We breathe new life into outdated websites. Our redesign process goes beyond aesthetics, focusing on performance optimization, user experience, and modern security standards to turn your legacy site into a growth engine.",
    clientGoals: [
      "Modernized visual identity",
      "Sub-second loading times",
      "Improved conversion funnels",
      "Mobile-first responsiveness"
    ],
    features: ["Audit & Strategy", "Asset Optimization", "UI/UX Refresh", "SEO Preservation", "Performance Tuning"],
    process: [
      { title: "Site Audit", desc: "Analyzing current performance and user friction points." },
      { title: "Modern Design", desc: "Drafting a high-end, contemporary visual language." },
      { title: "Re-Engineering", desc: "Migrating to modern frameworks without data loss." },
      { title: "Optimization", desc: "Fine-tuning for speed and conversion impact." }
    ],
    tools: [
      { name: "Figma", icon: "figma" },
      { name: "Next.js", icon: "nextjs" },
      { name: "TypeScript", icon: "ts" },
      { name: "Tailwind", icon: "tailwind" },
      { name: "Framer", icon: "framer" }
    ],
    categorizedTools: [
      {
        category: "Design & UX",
        items: [
          { name: "Figma", icon: "figma" },
          { name: "Photoshop", icon: "ps" }
        ]
      },
      {
        category: "Frontend",
        items: [
          { name: "Next.js", icon: "nextjs" },
          { name: "React", icon: "react" },
          { name: "TypeScript", icon: "ts" },
          { name: "Tailwind", icon: "tailwind" },
          { name: "Framer", icon: "framer" }
        ]
      },
      {
        category: "Backend & Logic",
        items: [
          { name: "Node.js", icon: "node" },
          { name: "PostgreSQL", icon: "db" },
          { name: "Supabase", icon: "supabase" }
        ]
      },
      {
        category: "Deployment",
        items: [
          { name: "Vercel", icon: "vercel" },
          { name: "GitHub", icon: "github" }
        ]
      }
    ]
  },
  "website-maintenance": {
    slug: "website-maintenance",
    name: "Website Maintenance & Support",
    category: "Web & Digital",
    heroDescription: "Ongoing performance tuning and security for mission-critical assets.",
    fullDescription: "We provide enterprise-grade maintenance to ensure your digital products stay fast, secure, and up-to-date. From daily security patches to sub-second performance tuning, we handle the technical debt so you can focus on growth.",
    clientGoals: [
      "Zero downtime reliability",
      "Proactive security patching",
      "Continuous speed optimization",
      "Priority technical support"
    ],
    features: ["Daily Security Audits", "Core Framework Updates", "Cloud Infrastructure Management", "Database Optimization", "24/7 Uptime Monitoring"],
    process: [
      { title: "Onboarding", desc: "Technical audit of your current site and security layer." },
      { title: "Infrastructure Setup", desc: "Configuring monitoring, backups, and security firewalls." },
      { title: "Proactive Cycle", desc: "Monthly performance tuning and system updates." },
      { title: "Support Pipeline", desc: "On-demand technical assistance and bug fixes." }
    ],
    tools: [
      { name: "Cloudflare", icon: "cloudflare" },
      { name: "Sentry", icon: "sentry" },
      { name: "Better Stack", icon: "monitor" },
      { name: "Docker", icon: "docker" }
    ],
    categorizedTools: [
      {
        category: "Security & Infrastructure",
        items: [
          { name: "Cloudflare", icon: "cloudflare" },
          { name: "Docker", icon: "docker" },
          { name: "Vercel", icon: "vercel" }
        ]
      },
      {
        category: "Monitoring & Performance",
        items: [
          { name: "Sentry", icon: "sentry" },
          { name: "Better Stack", icon: "monitor" },
          { name: "Google Search Console", icon: "google" }
        ]
      },
      {
        category: "Support & Ops",
        items: [
          { name: "Slack", icon: "comms" },
          { name: "Notion", icon: "notion" },
          { name: "GitHub", icon: "github" }
        ]
      }
    ]
  }
};

export const serviceNameToSlug: Record<string, string> = {
  "Website Design & Development": "website-design-development",
  "Landing Page Design": "landing-page-design",
  "E-commerce Website": "e-commerce-website",
  "Website Redesign": "website-redesign",
  "Website Maintenance": "website-maintenance",
  "App Development": "app-development",
  "App Development (iOS & Android)": "app-development",
  "SaaS Product Development": "saas-product-development",
  "Web App Development": "web-app-development",
  "API & Backend Development": "api-backend-development",
  "UI/UX Design": "ui-ux-design",
  "Graphic Design": "brand-identity-design",
  "Graphic & Brand Identity Design": "brand-identity-design",
  "Logo Design": "brand-identity-design",
  "Personal Branding": "brand-identity-design",
  "Packaging Design": "brand-identity-design",
  "Video Editing & Reels": "social-media-management",
  "Model Photography": "social-media-management",
  "Product Photography": "social-media-management",
  "Content Writing": "social-media-management",
  "Copywriting": "social-media-management",
  "Social Media Marketing & Management": "social-media-management",
  "SEO & Google Presence": "seo-google-presence",
  "Email Marketing": "seo-google-presence",
  "Paid Ads (Meta & Google)": "seo-google-presence"
};
