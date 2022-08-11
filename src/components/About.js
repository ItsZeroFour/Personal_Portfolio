import React from "react";
import img from "../assets/img/about-img.svg";
import github from "../assets/img/github.svg";
import vk from "../assets/img/vk.svg";
import instagram from "../assets/img/instagram.svg";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about__title">
        <h1>About Me</h1>
        <p>Few words about myself</p>
      </div>
      <div className="about__block">
        <div className="about__block-content">
          <div className="about__block-img">
            <img src={img} alt="astronaut" />
          </div>
          <div>
            <h1>Hello!</h1>
            <p>
              I'm Daniil Andreev👨‍💻. I tried myself in different areas. From 3d
              Modeling👨‍🎨 and video blogging🤳 to programming and photo/video
              editing. I started🏃‍♀️ studying programming🧐 seriously in 2021. My
              first programming language was Python🐍 (~2019), but after a short
              break, when I started programming again🧑‍🎓, my eyes fell on the
              JavaScript language⭐. Now, this is my main programming language.
              I continue to develop in this area👩‍🔬 and I already know what I
              will do in life🥰!
            </p>
            <ul className="social">
              <li>
                <a href="https://github.com/ItsZeroFour" target="_black">
                  <img src={github} alt="github" />
                </a>
              </li>
              <li>
                <a href="https://vk.com/nullbebra" target="_black">
                  <img src={vk} alt="vk" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/" target="_black">
                  <img src={instagram} alt="instagram" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
