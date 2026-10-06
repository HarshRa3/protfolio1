import React from "react";
import AboutCom from "@/components/about/About";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Harsh Rastogi",
  description: "Learn more about Harsh Rastogi, experience, services, and background in full-stack development.",
};

const About: React.FC = () => {
  return <AboutCom />;
};

export default About;

