import React, { useEffect } from "react";

export default function Profile() {
  useEffect(() => {
    // fetch profile from json-server
    // use id from props??
  });

  return (
    <section className="profileContainer">
      <h2>Profile</h2>
      <img src={"avatar-link-goes-here"} alt={"avatar"} />
      <div className="info">
        <div>Name: {"name-goes-here"}</div>
        <div>About: {"about-goes-here"}</div>
      </div>
    </section>
  );
}
