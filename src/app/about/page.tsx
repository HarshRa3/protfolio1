import React from "react";
import AboutCom from "@/components/about/About";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Harsh Rastogi-About",
  description: "A Portfolio About Page With better design",
};
const About: React.FC = () => {
  return (
    <>
      <AboutCom />
    </>
  );
};

export default About;
