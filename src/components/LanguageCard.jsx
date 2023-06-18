import React from "react";

import langcard from "../styles/langCard.module.css";

export default function LanguageCard({
  img,
  title,
  preference,
  core,
  projects,
}) {
  return (
    <div className={langcard.card}>
      <div className={langcard.top}>
        <div className={langcard.image}>
          <img src={img} alt={title} />
        </div>
        <h3 className="font-rancho text-3xl tracking-wide text-accent font-bold">
          {title}
        </h3>
        <div data-stars={core} className={langcard.stars}>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
        </div>
        <div className={langcard.line}></div>
      </div>
      <div className={langcard.bottom}>
        <div className={langcard.wrapper}>
          <label className="font-rancho font-medium tracking-wide text-xl text-secondary">
            Preference
          </label>
          <p className="font-rancho text-xl">{preference}</p>
        </div>
        <div className={langcard.wrapper}>
          <label className="font-rancho font-medium tracking-wide text-xl text-secondary">
            Core
          </label>
          <p className="font-rancho text-xl">{core}</p>
        </div>
        <div className={langcard.wrapper}>
          <label className="font-rancho font-medium tracking-wide text-xl text-secondary">
            projects
          </label>
          <p className="font-rancho text-xl">{projects}</p>
        </div>
      </div>
    </div>
  );
}
