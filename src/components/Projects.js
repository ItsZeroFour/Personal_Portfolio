import React from "react";
import Slider from "./Slider";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <div className="text">
        <h1>My Projects</h1>
        <p>Here are some of my projects</p>
      </div>
      <div className="block">
        <h1 className="block__title">Scroll It!</h1>
        <Slider />
      </div>
    </div>
  );
};

export default Projects;
