import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

const navLinks = [
  { id: 1, name: "Home", to: "/" },
  { id: 1, name: "Feed", to: "/feed" },
];

export default function Nav() {
  return (
    <section className="navContainer">
      {navLinks.map(({ id, name, to }) => (
        <NavLink exact activeClassName="active" to={to}>
          <div
            key={id}
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
