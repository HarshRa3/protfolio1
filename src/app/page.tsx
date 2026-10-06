import About from '@/components/about/About';
import ContactCon from '@/components/contact/ContactCon';
import Intro from '@/components/home/Intro';
import ProjectCon from '@/components/projects/ProjectCon';
import SkillsCom from '@/components/skill/SkillsCom';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: "Harsh Rastogi | Full Stack & Mobile Developer",
  description: "Personal Portfolio of Harsh Rastogi - Full Stack Web & Mobile App Developer showcasing projects, skills, and experience.",
};

const HomePage: React.FC = () => {
  return (
    <div className="space-y-12">
      <Intro />
      <About />
      <SkillsCom />
      <ProjectCon />
      <ContactCon />
    </div>
  );
};

export default HomePage;

