import React from "react";
import img1 from "../assets/img/90-procent.svg";
import img2 from "../assets/img/84-procent.svg";
import img3 from "../assets/img/67-procent.svg";

const Skills = () => {
  const skillsList = [
    {
      img: img1,
      title: "Web development",
    },

    {
      img: img2,
      title: "Photo/video editing",
    },

    {
      img: img3,
      title: "UI/UX Design",
    },
  ];

  return (
    <div className="skills" id="skills">
      <div className="skills__title">
        <h1>My Skills</h1>
        <p>Here are my main skills</p>
      </div>
      <div className="skills__block">
        {skillsList.map(({ img, title }) => (
          <div className="skills__block-list" key={title}>
            <img src={img} alt={title} />
            <h2>{title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
