import React from "react";
import Style from "./button.module.scss";

const Button = (props) => {
  //Componente boton usado para reciclarse
  return <button className={Style.button}>{props.text}</button>;
};

export default Button;
