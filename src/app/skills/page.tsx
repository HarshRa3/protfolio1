import SkillsCom from "@/components/skill/SkillsCom";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Harsh Rastogi-Slills",
  description: "A Portfolio Slills Page With better design",
};

const Skills: React.FC = () => {
  return <SkillsCom />;
};

export default Skills;
