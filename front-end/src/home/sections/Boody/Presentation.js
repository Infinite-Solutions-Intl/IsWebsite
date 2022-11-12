import React from "react";
import i from "../../../assets/img/i.png";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export default function Presentation() {
  return (
    <div className="container-presentation">
      <div className="presentation">
        <div className="text-presentation">
          <h1 data-aos="fade-right" data-aos-duration="1100">
            Qui Somme Nous
          </h1>
          <p data-aos="fade-up-right" data-aos-duration="1000">
            Entreprise de prestation de services, de conseil et formations en
            automatisme et intélligence artificielle etc. Nous avons une equipe
            de développeurs complémentaires pour vous servir, un menu
            d'expertise pour vos metiers d'entreprise et vos visions
            strategiques , nous sommes un ensemble de professionnels des
            systèmes d'informations.
          </p>

          <div data-aos="fade-up-right" data-aos-duration="1000">
            <Link to={"/contact"}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: " #379577",
                  "&:hover": {
                    backgroundColor: " #023324",
                  },
                }}
              >
                Nous contacter
              </Button>
            </Link>
          </div>
        </div>

        <div className="images-presentation">
          <div
            className="img-presentation1"
            data-aos="fade-right"
            data-aos-once="false"
            data-aos-duration="1000"
          >
            {" "}
          </div>
          <div
            className="img-presentation2"
            data-aos="fade-down-left"
            data-aos-once="false"
            data-aos-duration="1000"
          >
            {" "}
          </div>
          <div
            className="img-presentation3"
            data-aos="fade-up-left"
            data-aos-once="false"
            data-aos-duration="1000"
          >
            {" "}
          </div>
        </div>

        <img src={i} className="vector1"></img>
        <div className="substract">
          <svg
            width="438"
            height="524"
            viewBox="0 0 438 524"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_51_677)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M479 374.963C444.876 394.702 405.257 406 363 406C234.87 406 131 302.13 131 174C131 107.9 158.643 48.2571 202.999 6H119.262C86.3028 53.7274 67 111.609 67 174C67 337.476 199.524 470 363 470C404.171 470 443.378 461.595 479 446.406V374.963Z"
                fill="#1B3987"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_51_677"
                x="0"
                y="0"
                width="479"
                height="524"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="-37" dy="24" />
                <feGaussianBlur stdDeviation="15" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.105882 0 0 0 0 0.223529 0 0 0 0 0.529412 0 0 0 0.12 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_51_677"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_51_677"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}
