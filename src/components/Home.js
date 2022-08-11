import React, { useEffect, useState } from "react";
import img from "../assets/img/Planet.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faDownload } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const [text, setText] = useState("");
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const skills = ["Web Developer", "UI/UX Designer", "Video Editor"];
  const period = 2000;

  const tick = () => {
    let i = loopNum % skills.length;
    let fullText = skills[i];
    let updatedText = isDeleting
      ? fullText.substring(text.length)
      : fullText.substring(text.length);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(1000);
    }
  };

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  return (
    <div className="home" id="#home">
      <div className="container">
        <div className="home__box">
          <div className="home__content">
            <div className="home__text">
              <h1>{`Hello I'm D.Andreev `}</h1>
              <h1
                className={
                  isDeleting === true
                    ? "home__text-skill active"
                    : "home__text-skill"
                }
              >
                {text}⠀
              </h1>
              <div className="home__buttons">
                <a className="home__btn-white" href="#contact">
                  <span>Lets’s Connect</span>
                  <FontAwesomeIcon
                    className="home__btn-icon"
                    icon={faArrowRight}
                  />
                </a>
                <button className="home__btn-yellow">
                  <span>Download my CV</span>
                  <FontAwesomeIcon
                    className="home__btn-icon"
                    icon={faDownload}
                  />
                </button>
              </div>
            </div>
            <div className="home__img">
              <img src={img} alt="planet" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
