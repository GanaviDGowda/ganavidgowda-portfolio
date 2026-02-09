import { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: "clashpoint",
    title: "MCE Clashpoint – Event Management System",
    desc: "Full-stack event management platform with QR-based attendance, role-based dashboards, and secure authentication.",
    impact: "Simplified event handling and reduced manual attendance effort.",
    tech: ["MERN", "JWT", "QR Codes", "Cloudinary"],
    link: {
      type: "github",
      url: "https://github.com/GanaviDGowda/ClashPoint",
    },
  },
  {
    id: "silodispatch",
    title: "SiloDispatch – Intelligent Delivery Management System",
    desc: "Logistics platform with K-Means route optimization, OTP verification, and real-time tracking.",
    impact: "Achieved 40–60% reduction in delivery time.",
    tech: ["MERN", "K-Means", "JWT", "Razorpay", "Twilio"],
    link: {
      type: "github",
      url: "https://github.com/GanaviDGowda/SiloDispatch",
    },
  },
  {
    id: "irisbot",
    title: "IRIS-Bot – Research Paper Management System",
    desc: "Research paper tool with metadata extraction, duplicate detection, and semantic search.",
    impact: "Improved research organization and reduced duplication.",
    tech: ["Python", "NLP", "PostgreSQL", "pgvector"],
    link: {
      type: "github",
      url: "https://github.com/GanaviDGowda/IRIS-Bot",
    },
  },
  {
    id: "planet-uiux",
    title: "Planet Exploration UI/UX Design",
    desc: "Interactive UI/UX prototype designed in Figma with animations.",
    impact: "Enhanced user engagement through intuitive design.",
    tech: ["Figma", "UI/UX", "Prototyping"],
    link: {
      type: "figma",
      url: "https://www.figma.com/",
    },
  },
];
