export interface SkillCategory {
  title: string;
  iconName: string; // Icon identifier for Lucide react
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    title: "AI & ML Frameworks",
    iconName: "Cpu",
    skills: ["PyTorch", "OpenCLIP", "Google Gemini AI", "OpenAI API", "Azure AI Services"],
  },
  {
    title: "Backend Infrastructure",
    iconName: "Database",
    skills: ["Spring Boot", "FastAPI", "Java", "Python", "RESTful APIs", "System Design"],
  },
  {
    title: "Developer SDKs & Protocols",
    iconName: "Terminal",
    skills: ["Foundry MCP", "Google AI Studio", "Google Antigravity SDK", "HuggingFace"],
  },
  {
    title: "DevOps & Cloud",
    iconName: "Globe",
    skills: ["Docker", "Git / GitHub", "Azure PostgreSQL", "Postman", "CI/CD"],
  },
  {
    title: "Core Competencies",
    iconName: "ShieldCheck",
    skills: ["Applied AI Eng", "LLM Context Management", "Adversarial ML", "Data Structures & Algorithms"],
  },
];
