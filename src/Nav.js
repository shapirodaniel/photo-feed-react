import React from "react";
import { Link } from "react-router-dom";

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
        <Link to={to}>
          <div
            key={id}
            style={{
              marginRight: "1em",
            }}
          >
            {name}
          </div>
        </Link>
      ))}
    </section>
  );
}
