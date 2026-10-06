import SkillsCom from "@/components/skill/SkillsCom";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Skills | Harsh Rastogi",
  description: "Explore technical skills, languages, frameworks, and core capabilities of Harsh Rastogi.",
};

const Skills: React.FC = () => {
  return <SkillsCom />;
};

export default Skills;

