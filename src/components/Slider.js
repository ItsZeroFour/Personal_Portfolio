import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from "../assets/img/project-1.png";
import img2 from "../assets/img/project-2.png";
import imgClip from "../assets/img/clip.svg";
import imgCheck from "../assets/img/Check.svg";

const Slider = () => {
  const sliderItems = [
    {
      title: "Computer Assembly Site",
      description:
        "This is one of the first websites I made by myself. Using HTML5 and CSS3",
      gitHub:
        "https://github.com/ItsZeroFour/Website/tree/main/%D0%A1%D0%B1%D0%BE%D1%80%D0%BA%D0%B0%20%D0%BA%D0%BE%D0%BC%D0%BF%D1%8C%D1%8E%D1%82%D0%B5%D1%80%D0%B0",
      tool1: "HTML5",
      tool2: "CSS3",
      img: img1,
    },

    {
      title: "Dashboard",
      description: "This is my first Dashboard that I made.",
      gitHub: "https://github.com/ItsZeroFour/Website/tree/main/Touchblock",
      tool1: "HTML5",
      tool2: "CSS3",
      img: img2,
    },

    {
      title: "Computer Assembly Site",
      description:
        "This is one of the first websites I made by myself. Using HTML5 and CSS3",
      gitHub:
        "https://github.com/ItsZeroFour/Website/tree/main/%D0%A1%D0%B1%D0%BE%D1%80%D0%BA%D0%B0%20%D0%BA%D0%BE%D0%BC%D0%BF%D1%8C%D1%8E%D1%82%D0%B5%D1%80%D0%B0",
      tool1: "HTML5",
      tool2: "CSS3",
      img: img1,
    },

    {
      title: "Dashboard",
      description: "This is my first Dashboard that I made.",
      gitHub: "https://github.com/ItsZeroFour/Website/tree/main/Touchblock",
      tool1: "HTML5",
      tool2: "CSS3",
      img: img2,
    },
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you
      breakpoint: { max: 4000, min: 3000 },
      items: 2,
    },
    desctop: {
      breakpoint: { max: 3000, min: 2024 },
      items: 2,
    },

    tablet: {
      breakpoint: { max: 2024, min: 464 },
      items: 1,
    },

    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="slider">
      <Carousel
        responsive={responsive}
        infinite={true}
        className="project-slider"
      >
        {sliderItems.map(
          ({ img, title, description, gitHub, tool1, tool2 }) => (
            <div className="slider__item" key={title}>
              <div className="slider__item-info">
                <h1>{title}</h1>
                <p>{description}</p>
                <a href={gitHub} target="_black">
                  <img src={imgClip} alt="clip" />
                  Github Repo
                </a>
                <div className="slider__tools">
                  <div className="slider__tools-group">
                    <img src={imgCheck} alt="check" />
                    <h2>{tool1}</h2>
                  </div>

                  <div className="slider__tools-group">
                    <img src={imgCheck} alt="check" />
                    <h2>{tool2}</h2>
                  </div>
                </div>
              </div>

              <img className="slider__img" src={img} alt="slider img" />
            </div>
          )
        )}
      </Carousel>
    </div>
  );
};

export default Slider;
