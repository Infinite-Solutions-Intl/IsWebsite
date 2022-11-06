import React, { useEffect, useState } from "react";
import formation from "../../../assets/img/formation.png";
import "../../../css/formation.scss";
import SlideFormation from "./SlideFormation";

const formations = [
  {
    image: formation,
    title: "jgljLaravel",
    description: "deviens expert lavarel ",
  },
  {
    image: formation,
    title: "jjLaravel",
    description: "deviens expert lavarel ",
  },
  {
    image: formation,
    title: "Lajhguyravel",
    description: "deviens expert lavarel ",
  },
  {
    image: formation,
    title: "guugLaravkkjkel",
    description: "deviens expert lavarel ",
  },
  {
    image: formation,
    title: "uiyoujLaravel",
    description: "deviens expert lavarel ",
  },
];

export function CardFormation({ name, title }) {
  return (
    <div className="card-formation">
      <div className={"img-formation " + name}></div>
      <span className="title-formation">{title}</span>
      <div className="btn-formation">
        <span>{name}</span>
      </div>
    </div>
  );
}

export default function Formations() {
  return (
    <div className="container-formation" id="formation">
      <div className="formation">
        <div className="formation-text">
          <h1>Nos formations</h1>

          <p>
            Nos clients sont satisfaits de la qualité de nos services.
            Ci-dessous les dernières prestations effectuées et livrées pour nos
            clients.
          </p>
        </div>
        {/*

        <div className="cards-formation">
          <CardFormation
            name={"oracle"}
            title={"Certification suivie au certificat"}
          ></CardFormation>

          <CardFormation
            name={"oracle"}
            title={"Certification suivie au certificat"}
          ></CardFormation>

          <CardFormation
            name={"oracle"}
            title={"Certification suivie au certificat"}
          ></CardFormation>
        </div>

        <div className="travaux-progress">
          <span className="progress-1"></span>
        </div> */}

        <SlideFormation></SlideFormation>
      </div>
    </div>
  );
}
