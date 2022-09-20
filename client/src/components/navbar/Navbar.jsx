import React from "react";
import Style from "./Navbar.module.scss";
import icon from "../../img/whiteDuck.png";
import Navlist from "../navlist/Navlist";
import { Link } from "react-router-dom";

const navbar = () => {
  return (
    <div className={Style.NavContainer}>
      <Link to="/">
      <h3 className={Style.Branding}>
        <img className={Style.icon} src={icon} alt="Icon" />
        <p className={Style.NavTitulo}>Go Further </p>
      </h3>
      </Link>
      <Navlist />
    </div>
  );
};

export default navbar;
