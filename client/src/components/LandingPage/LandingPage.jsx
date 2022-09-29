import React ,{useEffect}from 'react'
import Style from "./LandingPage.module.scss"
import icon from "../../img/whiteDuck.png";
import { Link } from "react-router-dom";




const LandingPage = () => {

    useEffect(() => {
        document.title = "Go Further";
       
      }, []);


    return (
        <section className={Style.LandingContainer}>
            <div className={Style.leftContainer}>
                <div className={Style.Branding}>
                    <img className={Style.icon} src={icon} alt="Icon" />
                    <h3 className={Style.NavTitulo}>Go Further </h3>
                </div>
            </div>
            <div className={Style.rightContainer}>

                <div className={Style.Branding}>
                    <div className={Style.welcomeText}>Welcome to Go Further, it's a little project for the Henry bootcamp, it's a page that shows you all the countries around the world and information about them, you will can create activities and asociate it to a specic country, so no more fancy words and  let's go further.
                    </div>
                    <Link to={`/countries`} className={Style.buttonContainer}>
                        <button
                            type="button"
                            className={Style.welcomeButton}

                        >
                            Let' Go
                        </button>
                    </Link>
                </div>


            </div>
        </section>

    )
}

export default LandingPage