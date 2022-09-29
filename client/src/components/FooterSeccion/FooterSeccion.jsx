import React from 'react';
import Navlist from "../navlist/Navlist.jsx";
import Style from "./FooterSeccion.module.scss";
import icon from "../../img/whiteDuck.png";
import { Link } from "react-router-dom";

const FooterSeccion = () => {
    return (
        <footer className={Style.footerContainer}>
            <div className={Style.logo}>
                <Link to="/countries">
                    <div className={Style.Branding}>
                        <img className={Style.icon} src={icon} alt="Icon" />
                        <h3 className={Style.NavTitulo}>Go Further </h3>
                    </div>
                </Link>
            </div>
            <div className={Style.navC}>
                <Navlist className={Style.pepe} />
            </div>
            <div className={Style.autorCont}>
                <h5 className={Style.Autor}>2022 Created by Rogerdanielzzz </h5>
            </div>
        </footer>
    )
}

export default FooterSeccion