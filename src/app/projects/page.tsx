import ProjectCon from "@/components/projects/ProjectCon";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Harsh Rastogi-Projects",
  description: "A Portfolio Projects Page With better design",
};

const Projects: React.FC = () => {
  return <ProjectCon />;
};

export default Projects;
