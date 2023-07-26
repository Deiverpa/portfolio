import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const TechnologyCard = ({ name, icon }) => {
  return (
    <div className="w-48 rounded overflow-hidden shadow-lg m-4 transition transform duration-500 hover:scale-110">
      <img className="w-full h-55 object-cover" src={icon} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-lg mb-2">{name}</div>
      </div>
    </div>
  );
};

const Tech = () => {
  return (
    <div className="flex flex-wrap">
      {technologies.map((tech, index) => (
        <TechnologyCard key={index} name={tech.name} icon={tech.icon} />
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
