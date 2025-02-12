import About from '@/components/about/About';
import ContactCon from '@/components/contact/ContactCon';
import Intro from '@/components/home/Intro';
import ProjectCon from '@/components/projects/ProjectCon';
import SkillsCom from '@/components/skill/SkillsCom';
import { Metadata } from 'next';
import React from 'react';
export const metadata: Metadata = {
  title: "Harsh Rastogi-Home",
  description: "A Portfolio With my better designing Skills",
};

const page:React.FC = () => {

  
  return (
    <>
      <Intro/>
      <About/>
      <SkillsCom/>
      <ProjectCon/>
      <ContactCon/>
    </>
  );
};

export default page;
