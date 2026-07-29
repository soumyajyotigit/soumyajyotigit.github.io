export interface SkillGroup {
  label: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    skills: ["TypeScript", "JavaScript (ES6)", "Python", "Java", "C++", "C", "SQL"],
  },
  {
    label: "Frontend",
    skills: ["React.js", "Next.js", "HTML5", "CSS3"],
  },
  {
    label: "Backend & APIs",
    skills: ["Node.js", "Express.js", "REST APIs", "Microservices"],
  },
  {
    label: "Databases",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
  },
  {
    label: "Cloud & DevOps",
    skills: [
      "AWS (EC2, S3, Lambda, RDS, CloudWatch)",
      "Docker",
      "Kubernetes",
      "Git",
      "GitHub Actions",
      "Linux",
      "CI/CD",
    ],
  },
  {
    label: "AI & Machine Learning",
    skills: ["OpenAI API", "scikit-learn", "OpenCV", "Pandas", "NumPy", "Gradient Boosting"],
  },
  {
    label: "System Architecture",
    skills: [
      "Microservices",
      "Distributed Systems",
      "Event-Driven Architecture",
      "REST",
      "API Gateway",
      "Load Balancing",
    ],
  },
  {
    label: "Core Concepts",
    skills: ["Data Structures", "Algorithms", "System Design", "Object-Oriented Programming", "Agile", "Scrum"],
  },
];
