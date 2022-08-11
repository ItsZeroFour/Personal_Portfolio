import React, { useEffect, useState } from "react";
import logo from "../assets/img/Logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faDiagramProject,
  faBoltLightning,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import BurgerMenu from "./BurgerMenu";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div>
      <BurgerMenu />
      <header className={scrolled ? "header active" : "header"}>
        <div className="header__inner">
          <div className="logo">
            <a href="#home">
              <img src={logo} alt="Logo" />
            </a>
          </div>
          <div className="container">
            <div className="header__nav">
              <nav className="nav">
                <ul>
                  <li>
                    <FontAwesomeIcon className="nav__icon" icon={faHome} />
                    <a href="#home">Home</a>
                  </li>

                  <li>
                    <FontAwesomeIcon
                      className="nav__icon"
                      icon={faDiagramProject}
                    />
                    <a href="#projects">Projects</a>
                  </li>

                  <li>
                    <FontAwesomeIcon
                      className="nav__icon"
                      icon={faBoltLightning}
                    />
                    <a href="#skills">Skills</a>
                  </li>

                  <li>
                    <FontAwesomeIcon
                      className="nav__icon"
                      icon={faInfoCircle}
                    />
                    <a href="#about">About</a>
                  </li>
                </ul>
              </nav>
              <a className="header__btn" href="#contact">
                <span>Let’s Connect</span>
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
