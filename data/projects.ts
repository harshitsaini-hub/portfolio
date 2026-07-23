export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  fullDescription: string;
  featured: boolean;
  tags: string[];
  metrics?: { label: string; value: string }[];
  keyFeatures: string[];
  architectureOverview?: string;
  githubUrl?: string;
  demoUrl?: string;
  bgGradient: string;
}

export const projectsData: Project[] = [
  {
    slug: "end-route-logistics",
    title: "End Route Logistics (ERL)",
    subtitle: "AI Freight Intelligence Engine",
    shortDescription:
      "Developed for Google Solution Challenge 2026. An AI-powered freight platform optimizing multi-modal transport via a weighted scoring engine and weather-aware routing.",
    fullDescription:
      "End Route Logistics (ERL) is a production-grade freight intelligence system engineered to eliminate shipping delays and reduce transport carbon footprint across global supply chains. ERL incorporates real-time weather analytics, dynamic route re-routing algorithms, and intelligent load optimization.",
    featured: true,
    tags: ["Java", "Spring Boot", "Gemini AI", "Google Cloud"],
    metrics: [
      { label: "Route Cost Reduction", value: "~18%" },
      { label: "Fallback Recovery Time", value: "< 200ms" },
    ],
    keyFeatures: [
      "AI-driven route optimization with Gemini context integration",
      "Graceful failover & automatic retry mechanisms for API outages",
      "Multi-modal freight calculation (Road, Rail, Sea)",
      "Real-time telemetry and weather-aware scoring engine",
    ],
    architectureOverview:
      "Built with a Spring Boot backend microservice architecture communicating via asynchronous queues with Google Gemini AI API endpoints. Features automated failover handling and persistent PostgreSQL logging.",
    githubUrl: "https://github.com",
    demoUrl: "https://demo.erl.ai",
    bgGradient: "from-blue-600/20 via-cyan-500/10 to-transparent",
  },
  {
    slug: "varman",
    title: "Varman",
    subtitle: "Adversarial Image Protection Platform",
    shortDescription:
      "Utilizing Vision-Language Models and PyTorch to protect image privacy against unauthorized AI training and deepfake synthesis.",
    fullDescription:
      "Varman is an advanced adversarial Machine Learning platform designed to shield personal and proprietary images from unauthorized scraping and synthetic generation model training. It applies imperceptible adversarial noise patterns using PyTorch and Vision-Language models.",
    featured: true,
    tags: ["PyTorch", "Python", "Vision-Language Models", "Docker"],
    metrics: [
      { label: "Structural Similarity (SSIM)", value: "> 0.97" },
      { label: "Adversarial Noise Perception", value: "< 3%" },
    ],
    keyFeatures: [
      "Targeted and non-targeted adversarial perturbation algorithms",
      "High SSIM score preserving visual quality for human viewers",
      "Containerized full-stack deployment with Docker",
      "Real-time protection pipeline for batch image processing",
    ],
    architectureOverview:
      "Engineered using PyTorch for tensor calculations, integrated into a FastAPI backend with GPU-accelerated processing pipelines, packaged as a Docker container.",
    githubUrl: "https://github.com",
    demoUrl: "https://varman.ai",
    bgGradient: "from-purple-600/20 via-pink-500/10 to-transparent",
  },
];
