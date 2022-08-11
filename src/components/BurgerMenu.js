import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faHome,
  faDiagramProject,
  faBoltLightning,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/img/Logo.svg";

const BurgerMenu = () => {
  const [active, setActive] = useState(false);

  return (
    <div className="burger-menu">
      <div className="burger-menu-main">
        <FontAwesomeIcon
          className="burger-menu-icon"
          icon={active ? faXmark : faBars}
          onClick={() => setActive(!active)}
        />
        
        <a>
          <img src={logo} alt="logo" />
        </a>
      </div>

      {active ? (
        <div className="active-menu">
          <div className="active-menu-links">
            <nav className="active-menu-nav">
              <ul>
                <li>
                  <FontAwesomeIcon
                    className="active-menu-icons"
                    icon={faHome}
                  />
                  <a href="#home">Home</a>
                </li>

                <li>
                  <FontAwesomeIcon
                    className="active-menu-icons"
                    icon={faDiagramProject}
                  />
                  <a href="#projects">Projects</a>
                </li>

                <li>
                  <FontAwesomeIcon
                    className="active-menu-icons"
                    icon={faBoltLightning}
                  />
                  <a href="#skills">Skills</a>
                </li>

                <li>
                  <FontAwesomeIcon
                    className="active-menu-icons"
                    icon={faInfoCircle}
                  />
                  <a href="#about">About</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default BurgerMenu;
