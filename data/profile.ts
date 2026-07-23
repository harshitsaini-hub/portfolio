export interface Profile {
  name: string;
  lastName: string;
  role: string;
  tagline: string;
  positioningStatement: string;
  bio: string;
  location: string;
  email: string;
  status: string;
  github: string;
  linkedin: string;
  education: {
    degree: string;
    field: string;
    institution: string;
    expectedGraduation: string;
  };
  languages: {
    language: string;
    proficiency: string;
    percentage: number;
  }[];
}

export const profileData: Profile = {
  name: "Harshit",
  lastName: "Saini",
  role: "Applied AI Engineer",
  tagline: "Engineering intelligent systems that survive real-world constraints.",
  positioningStatement:
    "I build AI applications with resilient backends, production-grade integrations, and measurable outcomes—from LLM-powered freight optimization to adversarial machine learning.",
  bio: "Computer Science Engineering student specializing in Applied AI. Focused on bridging the gap between cutting-edge AI models and robust backend architecture.",
  location: "Bhopal, Madhya Pradesh",
  email: "harshitsainidkr@gmail.com",
  status: "Open to Work",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  education: {
    degree: "Bachelor of Technology",
    field: "Computer Science Engineering",
    institution: "Sagar Institute of Research and Technology (SIRT)",
    expectedGraduation: "May 2027",
  },
  languages: [
    { language: "English", proficiency: "C2 / Professional", percentage: 95 },
    { language: "Hindi", proficiency: "Native / Bilingual", percentage: 100 },
    { language: "Japanese", proficiency: "JLPT N5 / Elementary", percentage: 25 },
  ],
};
