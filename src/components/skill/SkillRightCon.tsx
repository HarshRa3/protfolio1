import React from 'react';
import SkillCards from './SkillCards';
import { SkillStaticData } from '@/staticData/staticData';

const SkillRightCon: React.FC = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 px-8">
      {SkillStaticData.map((skill, i) => (
        <SkillCards key={i} icon={skill.icon} index={i} name={skill.name} />
      ))}
    </div>
  );
};

export default SkillRightCon;
