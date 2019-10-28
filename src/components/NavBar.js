import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { routers, reviewId } from "../routers/routers";

const style = {
  fontWeight: "bold",
  color: "red",
  background: "yellow",
  padding: "4px 15px"
};

const NavBar = () => {
  const location = useLocation();

  return (
    <nav>
      {Boolean(location.state && location.state.hideNav) ||
      location.pathname.startsWith(reviewId.replace(":reviewId", "")) ? null : (
        <ul>
          {Object.keys(routers).map((key, index) => (
            <li key={index}>
              {key === routers.home ? (
                <NavLink to={routers[key]} activeStyle={style}>
                  {key}
                </NavLink>
              ) : (
                <NavLink exact to={routers[key]} activeStyle={style}>
                  {key}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
