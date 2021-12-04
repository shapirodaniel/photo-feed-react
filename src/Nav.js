import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

const navLinks = [
  { name: "Home", to: "/" },
  { name: "Feed", to: "/feed" },
];

export default function Nav() {
  return (
    <section className="navContainer">
      {navLinks.map(({ name, to }, idx) => (
        <NavLink key={idx} exact activeClassName="active" to={to}>
          <div
            style={{
              paddingRight: "1.5em",
            }}
          >
            {name}
          </div>
        </NavLink>
      ))}
    </section>
  );
}
