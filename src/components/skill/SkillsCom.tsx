import React from "react";
import SkillLeftCon from "./SkillLeftCon";
import SkillRightCon from "./SkillRightCon";

const SkillsCom: React.FC = () => {
  return (
    <section id="skills" className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5">
          <SkillLeftCon />
        </div>
        <div className="lg:col-span-7">
          <SkillRightCon />
        </div>
      </div>
    </section>
  );
};

export default SkillsCom;

