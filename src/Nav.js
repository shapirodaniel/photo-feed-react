import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

const navLinks = [
  { id: 1, name: "Home", to: "/" },
  { id: 1, name: "Feed", to: "/feed" },
];

export default function Nav() {
  return (
    <section
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: "1em 0",
      }}
    >
      {navLinks.map(({ id, name, to }) => (
        <NavLink exact activeClassName="active" to={to}>
          <div
            key={id}
            style={{
              margin: "1em",
            }}
          >
            {name}
          </div>
        </NavLink>
      ))}
    </section>
  );
}
