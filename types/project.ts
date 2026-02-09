export type ProjectLink = {
  type: "github" | "figma";
  url: string;
};

export type Project = {
  id: string;
  title: string;
  desc: string;
  impact: string;
  tech: string[];
  link: ProjectLink;
};
