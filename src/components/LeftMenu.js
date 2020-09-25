import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

export class LeftMenu extends Component {
  
  render() {
    return (
      <div className="leftMenu">
        <div className="profileImg"></div>
        <div className="name">
          <span>Therese </span>
          <span>Wiik Rydberg</span>
        </div>
        <div className="socialMediaBtn">
          <a target="blank" href="https://www.linkedin.com/in/therese-wiik-rydberg-15378579/"><FontAwesomeIcon className="icon"  icon={faLinkedinIn} /></a>
          <a target="blank" href="https://www.facebook.com/search/top?q=therese%20wiik-rydberg"><FontAwesomeIcon className="icon" icon={faFacebookF} /></a>
          
          {/* <FontAwesomeIcon className="icon" icon={faInstagram} /> */}
        </div>
        <Link to="/contact" className="makeContactBtn">Skapa kontakt</Link>
      </div>
    );
  }
}

export default LeftMenu;
