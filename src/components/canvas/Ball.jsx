import React from "react";

const BallCanvas = ({ icon }) => {
  return (
    <div className="flex flex-wrap">
      {technologies.map((tech, index) => (
        <TechnologyCard key={index} name={tech.name} icon={tech.icon} />
      ))}
    </div>
  );
};

export default BallCanvas;
