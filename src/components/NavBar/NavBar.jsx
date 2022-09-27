import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { useNavigate } from "react-router";
import "./NavBar.css";

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="flex justify-between items-center pt-8 pb-8 pl-24 pr-24">
      <div className="flex-1 flex justify-start items-center">
        <div className="navbar-links_container">
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#usecase">Use Case</a>
          </p>
          <p>
            <a href="#team">Team</a>
          </p>
          <p>
            <a href="#techstack">Tech Stack</a>
          </p>
        </div>
      </div>
      <div className="navbar-sign">
        <p>Sign up</p>
        <button type="button" onClick={() => navigate("/dashboard")}>
          Sign in
        </button>
      </div>
      <div className="navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="navbar-menu_container scale-up-center">
            <div className="navbar-menu_container-links">
              <p>
                <a href="#home">Home</a>
              </p>
              <p>
                <a href="#usecase">Use Case</a>
              </p>
              <p>
                <a href="#team">Team</a>
              </p>
              <p>
                <a href="#techstack">Tech Stack</a>
              </p>
            </div>
            <div className="navbar-menu_container-links-sign">
              <p>Sign in</p>
              <button type="button">Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
