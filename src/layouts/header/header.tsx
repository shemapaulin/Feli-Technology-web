import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/logo-remove.png';
import { NavMenu } from '../navMenu/navbarMenu';

import './header.scss';
import './hamburger.scss';

export const Header: React.FC = ( ) => {
  const [showNavBar, setShowNavBar] = useState<boolean>(false);
  const [burger_class, setBurgerClass] = useState<string>("unclicked");
  const onUpdateMenu = () => {
    if(!showNavBar) {
      setBurgerClass("clicked");
      console.log(showNavBar);
    }
    else {
      setBurgerClass("unclicked");
    }
    setShowNavBar(!showNavBar);
  }

  useEffect(() => {
    if (showNavBar) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [showNavBar]);

  return (
    <header className="header">
        {/* <h1>Rwanda <br />
          International <br />
          Technology Center Investment <br /> 
        </h1> */}
      <div className="header-container">
      <div className={`my_logo ${showNavBar && 'no-shown'}`}>
      <NavLink to='./' >
        <img src={logo} alt="website_logo" data-aos="fade-down-right"/>
      </NavLink>
      </div>
        <div className="grow lg:grow-0">
        </div>
        <NavMenu showNavMenu={showNavBar} onClick={onUpdateMenu}/>
        <div className="button_div">
          <button className={`burger-menu ${showNavBar && 'clicked'}`}
            type="button"
            aria-label="menu"
            onClick={onUpdateMenu}
          >
            <span className={`bar ${burger_class}`} ></span>
          </button>
          <div className={`background ${showNavBar && 'clicked'}`} >&nbsp;</div>
        </div> 
      </div>
    </header>
  );
};
