import About from '@/components/about/About';
import ContactCon from '@/components/contact/ContactCon';
import Intro from '@/components/home/Intro';
import ProjectCon from '@/components/projects/ProjectCon';
import SkillsCom from '@/components/skill/SkillsCom';
import React from 'react';

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
