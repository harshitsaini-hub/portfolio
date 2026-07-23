export interface Credential {
  slug: string;
  title: string;
  issuer: 'Microsoft';
  category: 'Applied Skills';
  issueDate: string;
  credentialId: string;
  verifyUrl: string;
  imageUrl: string;
  badgeColor: string;
  skillsAssessed: string[];
  description: string;
  evaluationSummary: string;
  featured: boolean;
}

export const credentialsData: Credential[] = [
  {
    slug: "integrate-mcp-tools-agents-microsoft-foundry",
    title: "Microsoft Applied Skills: Integrate Model Context Protocol Tools with Agents in Microsoft Foundry",
    issuer: "Microsoft",
    category: "Applied Skills",
    issueDate: "July 22, 2026",
    credentialId: "1D934FFD8CE23487",
    verifyUrl: "https://learn.microsoft.com/en-us/users/harshitsaini-9598/credentials/applied-skill/integrate-model-context-protocol-tools-with-agents-in-microsoft-foundry",
    imageUrl: "/credentials/integrate-mcp-tools-agents-microsoft-foundry.png",
    badgeColor: "bg-emerald-50 border-emerald-200 text-emerald-900",
    skillsAssessed: ["Model Context Protocol (MCP)", "Microsoft Foundry", "Agent Tooling", "Context Management"],
    description: "Hands-on assessment by Microsoft validating implementation of Model Context Protocol (MCP) tool integration, agent tool handshakes, and context streaming in Microsoft Foundry.",
    evaluationSummary: "Verified interactive Microsoft Learn lab completion with online credential verification.",
    featured: true,
  },
  {
    slug: "create-agentic-workflows-microsoft-foundry",
    title: "Microsoft Applied Skills: Create Agentic Workflows by using Microsoft Foundry",
    issuer: "Microsoft",
    category: "Applied Skills",
    issueDate: "July 16, 2026",
    credentialId: "4FDB5DCD7A9A19D9",
    verifyUrl: "https://learn.microsoft.com/en-us/users/harshitsaini-9598/credentials/applied-skill/create-agentic-workflows-by-using-microsoft-foundry",
    imageUrl: "/credentials/create-agentic-workflows-microsoft-foundry.png",
    badgeColor: "bg-blue-50 border-blue-200 text-blue-900",
    skillsAssessed: ["Agentic Workflows", "Microsoft Foundry", "Multi-Agent System Architecture", "Autonomous Execution"],
    description: "Hands-on assessment by Microsoft validating advanced ability to architect and deploy multi-agent autonomous workflows using Microsoft Foundry platform tools.",
    evaluationSummary: "Verified interactive Microsoft Learn lab completion with online credential verification.",
    featured: true,
  },
  {
    slug: "accelerate-ai-development-github-copilot",
    title: "Microsoft Applied Skills: Accelerate AI-Assisted Development by using GitHub Copilot",
    issuer: "Microsoft",
    category: "Applied Skills",
    issueDate: "July 15, 2026",
    credentialId: "562BA11D994A23AE",
    verifyUrl: "https://learn.microsoft.com/en-us/users/harshitsaini-9598/credentials/applied-skill/accelerate-app-development-by-using-github-copilot",
    imageUrl: "/credentials/accelerate-ai-development-github-copilot.png",
    badgeColor: "bg-purple-50 border-purple-200 text-purple-900",
    skillsAssessed: ["GitHub Copilot", "AI Pair Programming", "Test Suite Generation", "Code Refactoring"],
    description: "Verified capability to accelerate software engineering lifecycles using GitHub Copilot for code generation, test automation, and architectural refactoring.",
    evaluationSummary: "Verified interactive Microsoft Learn lab completion with online credential verification.",
    featured: true,
  },
  {
    slug: "get-started-developing-agents-microsoft-foundry",
    title: "Microsoft Applied Skills: Get Started Developing Agents in Microsoft Foundry",
    issuer: "Microsoft",
    category: "Applied Skills",
    issueDate: "July 1, 2026",
    credentialId: "2568C46359BFEAAD",
    verifyUrl: "https://learn.microsoft.com/en-us/users/harshitsaini-9598/credentials/applied-skill/get-started-developing-agents-in-microsoft-foundry",
    imageUrl: "/credentials/get-started-developing-agents-microsoft-foundry.png",
    badgeColor: "bg-amber-50 border-amber-200 text-amber-900",
    skillsAssessed: ["Microsoft Foundry", "Agent Tooling", "Context Streaming", "LLM Integration"],
    description: "Hands-on validation of foundational agent development patterns, tool binding, and model context management in Microsoft Foundry.",
    evaluationSummary: "Verified interactive Microsoft Learn lab completion with online credential verification.",
    featured: false,
  },
  {
    slug: "build-nlp-solution-azure-ai-language",
    title: "Microsoft Applied Skills: Build a Natural Language Processing Solution with Azure AI Language",
    issuer: "Microsoft",
    category: "Applied Skills",
    issueDate: "June 28, 2026",
    credentialId: "8135C5045EF64CA5",
    verifyUrl: "https://learn.microsoft.com/en-us/users/harshitsaini-9598/credentials/applied-skill/build-natural-language-solution-azure-ai",
    imageUrl: "/credentials/build-nlp-solution-azure-ai-language.png",
    badgeColor: "bg-cyan-50 border-cyan-200 text-cyan-900",
    skillsAssessed: ["Azure AI Language", "Named Entity Recognition", "Sentiment Analysis", "Conversational AI"],
    description: "Practical assessment demonstrating design and integration of custom NLP models, entity extraction, and sentiment analysis endpoints via Azure AI Language.",
    evaluationSummary: "Verified interactive Microsoft Learn lab completion with online credential verification.",
    featured: false,
  },
  {
    slug: "generate-reports-ai-research-agents",
    title: "Microsoft Applied Skills: Generate Reports with AI Research Agents",
    issuer: "Microsoft",
    category: "Applied Skills",
    issueDate: "June 26, 2026",
    credentialId: "C2F9718E8F6182E9",
    verifyUrl: "https://learn.microsoft.com/en-us/users/harshitsaini-9598/credentials/applied-skill/generate-reports-with-ai-research-agents",
    imageUrl: "/credentials/generate-reports-ai-research-agents.png",
    badgeColor: "bg-indigo-50 border-indigo-200 text-indigo-900",
    skillsAssessed: ["AI Research Agents", "Automated Report Generation", "Multi-Source Data Synthesis", "RAG Pipeline"],
    description: "Hands-on skill validation for deploying research agents capable of web querying, document synthesis, and automated structured report generation.",
    evaluationSummary: "Verified interactive Microsoft Learn lab completion with online credential verification.",
    featured: false,
  },
];
