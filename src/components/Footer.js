import React from "react";
import github from "../assets/img/github.svg";
import vk from "../assets/img/vk.svg";
import instagram from "../assets/img/instagram.svg";
import logo from "../assets/img/Logo.svg";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="footer__inner">
            <div className="footer__logo">
              <a href="#home">
                <img src={logo} alt="logo" />
              </a>
            </div>
            <div className="footer__social">
              <ul className="footer__social-list">
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
      </footer>
      <div className="footer__copyright">
        <p>@2022 All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
