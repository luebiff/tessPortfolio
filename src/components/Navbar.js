import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../scss/navbar/navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faGraduationCap,
  faSmile,
  faEnvelope,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
export class Navbar extends Component {
  handleNavClick = () => {
    let nav = document.querySelector('.navbar')
    let navBtn = document.querySelector('.hamNav')
    console.log(navBtn)
    // let open =  nav.classList.contains("open")
    let close =  nav.classList.contains("close")
    if (close) {
      nav.classList.add('open');
      nav.classList.remove('close');
      navBtn.classList.add('hamX');
      
    } else {
      nav.classList.add('close');
      nav.classList.remove('open');
      navBtn.classList.remove('hamX');
    }
     
  }
  render() {
    return (
    <div className="navContaioner">
      <div onClick={this.handleNavClick} className="hamNav">
        <span></span>
        <span></span>
      </div>
      <div className="navbar close">
        
        <NavLink onClick={this.handleNavClick} exact activeClassName="activeLink" className="link" to="/">
          <FontAwesomeIcon icon={faHome} />
          <p className="navTxt">Home</p>
        </NavLink>
        <NavLink onClick={this.handleNavClick} activeClassName="activeLink" className="link" to="/about">
          <FontAwesomeIcon icon={faSmile} />
          <p className="navTxt">Om mig</p>
        </NavLink>
        <NavLink onClick={this.handleNavClick} activeClassName="activeLink" className="link" to="/work">
          <FontAwesomeIcon icon={faBriefcase} />
          <p className="navTxt">Work</p>
        </NavLink>
        <NavLink onClick={this.handleNavClick} activeClassName="activeLink" className="link" to="/education">
          <FontAwesomeIcon icon={faGraduationCap} />
          <p className="navTxt">Education</p>
        </NavLink>
        <NavLink onClick={this.handleNavClick} activeClassName="activeLink" className="link" to="/contact">
          <FontAwesomeIcon icon={faEnvelope} />
          <p className="navTxt">Contact</p>
        </NavLink>
        </div>
      </div>  
    );
  }
}

export default Navbar;
