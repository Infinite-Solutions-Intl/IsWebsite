import React from "react";
import play from "../../../assets/img/play.svg";
import presentation1 from "../../../assets/img/presentation1.png";
import presentation2 from "../../../assets/img/presentation2.png";
//material
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
//caroussel
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const travaux = [
  {
    name: "bloo",
    description: " bloo app is the most beatiful",
    image: presentation1,
  },
  {
    name: "witrix studio",
    description: " witrix stuudiio app is the most beatiful",
    image: presentation2,
  },

  {
    name: "infinite solution",
    description: " witrix stuudiio app is the most beatiful",
    image: presentation1,
  },
];

export function SlideTravaux() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = travaux.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  return (
    <Box>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        interval={7000}
        sx={{ flexShrink: 1 }}
      >
        {travaux.map((travail, index) => (
          <div
            className="card-travaux-mobile"
            key={travail.name}
            sx={{ flexShrink: 1 }}
          >
            {Math.abs(activeStep - index) <= 2 ? (
              <CardTravaux
                name={travail.name}
                description={travail.description}
                image={travail.image}
              ></CardTravaux>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>

      <MobileStepper
        variant="progress"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        sx={{ backgroundColor: "none" }}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft sx={[{ color: "#04573C !important" }]} />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
          </Button>
        }
      />
    </Box>
  );
}

export function CardTravaux({ name, image, description }) {
  return (
    <div
      className="card-travaux"
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
    >
      <img className="card-image" src={image}></img>
      <div className="card-footer">
        <div className="card-text">
          <span>{name}</span>
          <br></br>
          <span>{description}</span>
        </div>

        <div className="play-btn">
          <img src={play}></img>
        </div>
      </div>
    </div>
  );
}

export function TravauxText({ className }) {
  return (
    <div className={className} data-aos="fade-right" data-aos-duration="1500">
      <h1> Nos récents travaux</h1>
      <p>
        Nos clients sont satisfaits de la qualité de nos services. Ci-dessous
        les dernières prestations effectuées et livrées pour nos clients.
      </p>
    </div>
  );
}

export default function Travaux() {
  //slide pour les composants mobiles

  return (
    <div className="travaux-container" id="realisations">
      <div className="travaux-mobile">
        <TravauxText className={"travaux-text-mobile"}></TravauxText>
        <SlideTravaux> </SlideTravaux>
      </div>

      <div className="travaux">
        <TravauxText className={"travaux-text"}></TravauxText>
        {travaux.map((travail) => {
          return (
            <CardTravaux
              name={travail.name}
              description={travail.description}
              image={travail.image}
            ></CardTravaux>
          );
        })}
      </div>
    </div>
  );
}
