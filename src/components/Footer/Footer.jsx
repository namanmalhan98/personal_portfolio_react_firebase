import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import Dog from "../../img/Dog.png";


const Footer = () => {
  return (
    <div className="footer">

      <img src={Wave} alt="" style={{ width: "100%",height:"35vh"}} />
      
      <div className="f-content">
        <span style={{marginTop:'100px'}}>namanmalhan18@gmail.com</span>
      <img src={Dog} alt="" style={{height:"35vh"}}></img>
        <div className="f-icons" style={{marginTop:'150px'}}>
          <Insta color="white" size={"3rem"} onClick={()=> window.open("https://www.instagram.com/naman_malhan/", "_blank")}/>
          <Facebook color="white" size={"3rem"} onClick={()=> window.open("https://www.facebook.com/Naman.malhan.1871998/", "_blank")}/>
          <Gitub color="white" size={"3rem"} onClick={()=> window.open("https://github.com/namanmalhan98", "_blank")} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
