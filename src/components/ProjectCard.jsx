import React from "react";
import projectcard from "../styles/projectCard.module.css";

export default function ProjectCard({ img, alt, title, description }) {
  return (
    <div className={` ${projectcard.card}`}>
      <div className={`mb-2 ${projectcard.image}`}>
        <img src={img} loading='lazy' alt={alt} />
      </div>
      <div>
        <h3 className="font-bold font-rancho text-secondary text-2xl tracking-wider">
          {title}
        </h3>
        <p className="font-default text-color">{description}</p>
      </div>
    </div>
  );
}
