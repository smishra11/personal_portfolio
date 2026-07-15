export type WorkExperience = {
  company: string;
  role: string;
  employmentType: string;
  duration: string;
  location: string;
  technologies: string[];
};

export const workExperience: WorkExperience[] = [
  {
    company: "Recro",
    role: "Sr. Software Engineer",
    employmentType: "Full-time",
    duration: "Mar 2024 – Jan 2026",
    location: "Bengaluru, India",
    technologies: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Redux",
      "Tailwind CSS",
      "GraphQL",
      "REST API",
      "ShadCN UI",
    ],
  },
  {
    company: "TrustCheckr (A Truecaller Company)",
    role: "Frontend Developer",
    employmentType: "Full-time",
    duration: "Mar 2021 – Sep 2023",
    location: "Bengaluru, India",
    technologies: [
      "React.js",
      "JavaScript",
      "Material UI",
      "Redux",
      "REST API",
      "HTML5",
      "CSS3",
    ],
  },
];
