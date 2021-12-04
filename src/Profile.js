import React, { useState, useEffect } from "react";
import "./Profile.css";
import { useParams } from "react-router-dom";

export default function Profile() {
  const [profile, setProfile] = useState();
  const { id } = useParams("id");

  useEffect(() => {
    const getProfile = async () => {
      try {
        const response = await fetch(`http://localhost:8080/profiles?id=${id}`);
        const [profile] = await response.json();

        setProfile(profile);
      } catch (err) {
        console.error(err);
      }
    };

    getProfile();
  }, [id]);

  const { avatar, name, about } = profile || {};

  return (
    <section className="profileContainer">
      <h2>Profile</h2>
      <img src={`/assets/${avatar}`} alt={"avatar"} />
      <div className="info">
        <div>Name: {name}</div>
        <div>About: {about}</div>
      </div>
    </section>
  );
}
