import React from "react";
import Style from "./LoadingScreen.module.scss";

const LoadingScreen = () => {
    return (
        <div className={Style.center}>
            <div className={Style.wave}></div>
            <div className={Style.wave}></div>
            <div className={Style.wave}></div>
            <div className={Style.wave}></div>
            <div className={Style.wave}></div>
            <div className={Style.wave}></div>
            <div className={Style.wave}></div>
            <div className={Style.wave}></div>
            <div className={Style.wave}></div>
            <div className={Style.wave}></div>
        </div>
    );
};

export default LoadingScreen;
