import React from "react";
import { routes } from "./routes";
import { NavLink } from "react-router-dom";
export const Header = () => {
  return (
    <header>
      <ul>
        <li>
          <NavLink exact to={routes.HOME} activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={routes.SHOP} activeClassName="active">
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink to={routes.REVIEWS} activeClassName="active">
            Reviews
          </NavLink>
        </li>
      </ul>
    </header>
  );
};
