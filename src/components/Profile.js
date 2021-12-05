import React from "react";
import "../component-css/Profile.css";
import { useProfile } from "../custom-hooks/useProfile";

export default function Profile() {
  const { avatar, name, about } = useProfile();

  return (
    <section className="profileContainer">
      <h2>Profile</h2>
      <img src={`/assets/${avatar}`} alt={"avatar"} />
      <span>{name}</span>
      <span>
        <em>{about}</em>
      </span>
    </section>
  );
}
