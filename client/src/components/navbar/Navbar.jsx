import React from "react";
import Style from "./Navbar.module.scss";
import icon from "../../img/whiteDuck.png";
import Navlist from "../navlist/Navlist";
import { Link } from "react-router-dom";

const navbar = () => {
  return (
    <div className={Style.NavContainer}>
      <Link to="/">
      <div className={Style.Branding}>
        <img className={Style.icon} src={icon} alt="Icon" />
        <h3 className={Style.NavTitulo}>Go Further </h3>
      </div>
      </Link>
      <Navlist />
    </div>
  );
};

export default navbar;
