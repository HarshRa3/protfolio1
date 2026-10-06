import ProjectCon from "@/components/projects/ProjectCon";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Projects | Harsh Rastogi",
  description: "Explore web development and mobile projects built by Harsh Rastogi including Star Enabler, BSquare, IDM, and DocGenesys.",
};

const Projects: React.FC = () => {
  return <ProjectCon />;
};

export default Projects;

