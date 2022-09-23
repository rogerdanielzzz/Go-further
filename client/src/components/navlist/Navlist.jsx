import React from "react";
import { NavLink } from "react-router-dom";
import Style from "../navlist/Navlist.module.scss"

const Navlist = () => {
  return (
    <ul className={Style.listContainer}>
      <li className={Style.listItem}>
        
        <NavLink exact to="/">
          Countries
        </NavLink>
        <NavLink to="/activities">Activities</NavLink>
        <NavLink to="/create">Create Activity</NavLink>
      </li>
    </ul>
  );
};

export default Navlist;
