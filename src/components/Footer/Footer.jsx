import React from "react";
import "./Footer.css";
import GitHub from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import LinkedIn from "../../assets/linkedin.png";
import Logo from "../../assets/logo1.png";

const Footer = () => {
  return (
    <div className="footer">
        <hr />
        <div className="footer-images">
            <div className="footer-socials">
               <a href="http://github.com/anmolbisht2308" target="_blank" >
               <div className="footer-socials"><img  src={GitHub} alt=""  />
               </div></a>
                
                <img src={Instagram} alt=""  />
                <a href="http://www.linkedin.com/in/anmol-bisht-b031a7222/" target="_blank">
                <div className="footer-socials">
                <img src={LinkedIn} alt=""  />
                  </div>
                </a>
             
            </div>
            <div className="footer-logo">
                <img src={Logo} alt="" />
            </div>
        </div>
        <div className="blur footer-blur-left"></div>
        <div className="blur footer-blur-right"></div>
    </div>
  )
}

export default Footer;