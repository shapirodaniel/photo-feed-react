import React, { useState, useEffect } from "react";
import "./Profile.css";
import { useParams } from "react-router-dom";

export default function Profile() {
  const [profile, setProfile] = useState();
  const { id } = useParams();

  useEffect(() => {
    const getProfile = async () => {
      try {
        const response = await fetch(`http://localhost:8080/profiles?id=${id}`);
        const [profile] = await response.json();

        setProfile(profile);
      } catch (ex) {
        console.error(ex);
      }
    };

    getProfile();
  }, [id]);

  const { avatar, name, about } = profile || {};

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
