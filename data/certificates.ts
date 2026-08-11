export interface Certificate {
  slug: string;
  title: string;
  issuer: 'Oracle' | 'Anthropic' | 'Google' | 'EF SET' | 'DeepLearning.AI' | 'Coursera' | 'Other';
  category: 'AI Agents' | 'Model Context Protocol' | 'Generative AI' | 'Solution Challenge' | 'Linguistics';
  issueDate: string;
  credentialId?: string;
  verifyUrl?: string;
  imageUrl: string;
  skillsLearned: string[];
  description: string;
  courseOutline: string[];
  featured: boolean;
}

export const certificatesData: Certificate[] = [
  {
    slug: "oracle-agentic-ai-foundations-associate",
    title: "Oracle Certified Foundations Associate: Agentic AI",
    issuer: "Oracle",
    category: "AI Agents",
    issueDate: "August 10, 2026",
    credentialId: "330481237AAI26OFA",
    imageUrl: "/certificates/oracle-agentic-ai-foundations-associate.png",
    skillsLearned: ["Agentic AI Architecture", "Oracle Autonomous AI Systems", "Multi-Agent Workflows", "LLM Tool Integration", "Enterprise AI Safety"],
    description: "Official Oracle University certification recognizing expertise as an Oracle Certified Foundations Associate in Agentic AI systems, autonomous agent workflows, and enterprise AI integration.",
    courseOutline: [
      "Foundations of Agentic AI Systems & Architecture",
      "Building & Deploying Agents on Oracle Infrastructure",
      "Tool Calling, Planning, and Context Management",
      "Enterprise AI Security & Governance Standards",
    ],
    featured: true,
  },
  {
    slug: "anthropic-model-context-protocol-advanced-topics",
    title: "Model Context Protocol: Advanced Topics",
    issuer: "Anthropic",
    category: "Model Context Protocol",
    issueDate: "2026",
    imageUrl: "/certificates/anthropic-model-context-protocol-advanced-topics.png",
    skillsLearned: ["MCP Server Security", "Stateful Context Pipelines", "Client-Server Handshakes", "Custom Tool Routing"],
    description: "Official Anthropic certification covering advanced Model Context Protocol (MCP) concepts, security boundaries, custom transport protocols, and enterprise agent integrations.",
    courseOutline: [
      "MCP Security Best Practices & Authentication",
      "Dynamic Resource & Prompt Management",
      "Stateful Multi-Turn Context Streaming",
      "Enterprise Scale MCP Infrastructure",
    ],
    featured: true,
  },
  {
    slug: "anthropic-introduction-to-model-context-protocol",
    title: "Introduction to Model Context Protocol",
    issuer: "Anthropic",
    category: "Model Context Protocol",
    issueDate: "2026",
    imageUrl: "/certificates/anthropic-introduction-to-model-context-protocol.png",
    skillsLearned: ["MCP Core Architecture", "Tool Definitions", "Resource Endpoints", "Context Management"],
    description: "Foundational Anthropic certification covering the open Model Context Protocol (MCP) standard for connecting LLMs to data sources and developer tools.",
    courseOutline: [
      "Overview of Model Context Protocol Architecture",
      "Building your first MCP Server",
      "Defining Tools, Prompts, and Resources",
      "Connecting Claude Desktop & Local Clients to MCP",
    ],
    featured: false,
  },
  {
    slug: "anthropic-introduction-to-agent-skills",
    title: "Introduction to Agent Skills",
    issuer: "Anthropic",
    category: "AI Agents",
    issueDate: "2026",
    imageUrl: "/certificates/anthropic-introduction-to-agent-skills.png",
    skillsLearned: ["Agentic Reasoning", "Tool Selection", "Loop Termination Control", "Autonomous Decision Making"],
    description: "Official Anthropic certification validating skill design and tool execution patterns for autonomous AI agents powered by Claude models.",
    courseOutline: [
      "Designing Modular Agent Skills",
      "Tool Calling & Schema Definition",
      "Error Handling & Loop Recovery in Agent Pipelines",
      "Benchmarking Agent Performance",
    ],
    featured: false,
  },
  {
    slug: "anthropic-claude-101",
    title: "Claude 101",
    issuer: "Anthropic",
    category: "Generative AI",
    issueDate: "2026",
    imageUrl: "/certificates/anthropic-claude-101.png",
    skillsLearned: ["Claude 3.5 Sonnet / Haiku", "System Prompt Engineering", "Structured Outputs", "Vision & Artifacts"],
    description: "Official Anthropic course completion certificate covering Claude model capabilities, context window optimization, and prompt engineering patterns.",
    courseOutline: [
      "Claude Model Architecture Overview",
      "System Instructions & Context Management",
      "JSON Output Formatting & Function Calling",
      "Leveraging Artifacts & Vision Capabilities",
    ],
    featured: false,
  },
  {
    slug: "google-solution-challenge-2026-build-with-ai",
    title: "Google Solution Challenge 2026: Build with AI",
    issuer: "Google",
    category: "Solution Challenge",
    issueDate: "July 22, 2026",
    credentialId: "2026H2S07SCBWAI-PSO6108",
    imageUrl: "/certificates/google-solution-challenge-2026-build-with-ai.png",
    skillsLearned: ["Google AI Technologies", "Multi-modal AI Freight Systems", "Google Cloud Integration", "UN Sustainable Goals"],
    description: "Official Certificate of Participation awarded by Google in recognition of successful prototype submission for Solution Challenge 2026: Build with AI.",
    courseOutline: [
      "Building Impactful Solutions with Google AI",
      "End Route Logistics (ERL) Prototype Submission",
      "Integration of Google Gemini & Weather APIs",
      "Problem-Solving for Global Sustainability",
    ],
    featured: false,
  },
  {
    slug: "ef-set-c2-proficient",
    title: "EF SET English Certificate (C2 Proficient)",
    issuer: "EF SET",
    category: "Linguistics",
    issueDate: "July 13, 2026",
    credentialId: "RFQYtL",
    verifyUrl: "https://cert.efset.org/RFQYtL",
    imageUrl: "/certificates/ef-set-c2-proficient.png",
    skillsLearned: ["C2 Proficient English", "Technical Documentation", "Global Team Collaboration", "Reading 99/100", "Writing 79/100", "Speaking 81/100"],
    description: "Earned C2 Proficient (79/100) level on the EF SET score scale, corresponding to the highest tier of the Common European Framework of Reference (CEFR).",
    courseOutline: [
      "Reading Skills: 99/100 (C2 Proficient)",
      "Listening Skills: 56/100 (B2 Upper Intermediate)",
      "Writing Skills: 79/100 (C2 Proficient)",
      "Speaking Skills: 81/100 (C2 Proficient)",
    ],
    featured: false,
  },
];
