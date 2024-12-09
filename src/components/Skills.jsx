import React from "react";
import { skills } from "../data";
import SectionTitle from "./SectionTitle";
import SkillsCard from "./SkillsCard";

const Skills = () => {
  return (
    <section className="bg-base-200">
      <div className=" mx-auto max-w-7xl px-8 py-24 " id="skills">
        <SectionTitle title="habilidades" />
        <div className="py-16 grid gap-8 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
          {skills.map((skill, index) => {
            return <SkillsCard {...skill} index={index} key={skill.id} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
