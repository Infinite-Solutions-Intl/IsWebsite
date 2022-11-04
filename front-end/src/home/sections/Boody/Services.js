import React from "react";

//material
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

//icones circulaires et images
import CircleIcon from "../../../component/circleIcon";
import prev from "../../../assets/img/prev.png";
import next from "../../../assets/img/next.png";
import ps from "../../../assets/img/ps.png";
import ai from "../../../assets/img/ai.png";
import id from "../../../assets/img/id.png";
import slide1 from "../../../assets/img/slide1.png";
import presentation1 from "../../../assets/img/presentation1.png";

//icons
import ArrowBackSharpIcon from "@mui/icons-material/ArrowBackSharp";
import ArrowForwardSharpIcon from "@mui/icons-material/ArrowForwardSharp";

//caroussel
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

// composant pour la tabulation

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" , height:"auto !important" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          centered
          variant="scrollable"
          scrollButtons="auto"

        >
          <Tab label="Design Graphique" {...a11yProps(0)}  />
          <Tab label="Formation" {...a11yProps(1)} />
          <Tab label="Developpement d’application" {...a11yProps(2)} />
          <Tab label="Intelligence artificielle" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <SlideService />
      </TabPanel>
      <TabPanel  value={value} index={1}>
      <SlideService />
      </TabPanel>
      <TabPanel  value={value} index={2}>
      <SlideService />
      </TabPanel>
      <TabPanel  value={value} index={3}>
      <SlideService />
      </TabPanel>
    </Box>
  );
}

//slides

const images = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath: presentation1,
  },
  {
    label: "Bird",
    imgPath: presentation1,
  },
  {
    label: "Bali, Indonesia",
    imgPath: presentation1,
  },
  {
    label: "Goč, Serbia",
    imgPath: presentation1,
  },
];

export function SlideService() {
  const NextButton = styled(Button)({
    boxShadow: "none",
    backgroundColor: "#667AAF",
    height: "30px",
    minWidth: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: 0,
    padding: 0,
    transition: "cubic-bezier(0.075, 0.82, 0.165, 1)",
    borderRadius: "0",
    "&:hover": {
      backgroundColor: "#1B3987",
      border: "none",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#1B3987",
      border: "none",
    },
  });

  const PrevtButton = styled(Button)({
    boxShadow: "none",
    backgroundColor: "#A3A3A3",
    height: "30px",
    minWidth: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: 0,
    padding: 0,
    transition: "cubic-bezier(0.075, 0.82, 0.165, 1)",
    borderRadius: "0",
    "&:hover": {
      backgroundColor: "#1B3987",
      border: "none",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#1B3987",
      border: "none",
    },
  });

  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

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
    <Box  >
      {/*     <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography>{images[activeStep].label}</Typography>
      </Paper> */}


      <div className="navigation">
        <PrevtButton 
        variant="contained"
        onClick={handleBack} 
        disabled={activeStep === 0}
        
        >
          <ArrowBackSharpIcon />
        </PrevtButton>
        <NextButton
          variant="contained"
          size="small"
          onClick={handleNext}
          disabled={activeStep === maxSteps - 1}
        >
          <ArrowForwardSharpIcon />
        </NextButton>
      </div>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        interval ={ 7000}
        
        sx={{flexShrink:1}}

        
      >
        {images.map((step, index) => (
          <div className="slide" key={step.label}  sx={{flexShrink:1}} >
            {Math.abs(activeStep - index) <= 2 ? (
              /*               <Box
             component="img"
                sx={{
                  height: 255,
                  display: 'block',
                  overflow: 'hidden',
               
                }}
                src={step.imgPath}
                alt={step.label} 
              /> */
              
                <div className="services-slide">
                  <div className="content">
                    <div className="slide-image">
                        <img src={slide1}></img>
                    </div>
                    <div className="slide-text">
                      <h2>Identité visuelle</h2>

                      <p>
                        Nous developpons des logiciels de bureau, des
                        applications web et mobiles adaptés aux mesures ...
                        <br></br>
                      </p>
                      <p>
                        Nous developpons des logiciels de bureau, des
                        applications web et mobiles adaptés aux mesures ...
                        <br></br>
                      </p>

                      <p>
                        Nous developpons des logiciels de bureau, des
                        applications web et mobiles adaptés aux mesures ...
                      </p>

                      <div className="service-icons">
                        <CircleIcon iconLink={ps}></CircleIcon>
                        <CircleIcon iconLink={id}></CircleIcon>
                        <CircleIcon iconLink={ai}></CircleIcon>
                      </div>
                    </div>
                  </div>
                </div>
              
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
    </Box>
  );
}

export default function Services() {
  return (
    <div className="container-services" id="services">
      <div className="services">
        <h1 className="service-title">Consulter la varieter de nos services</h1>

        <p className="service-description">
          Parce que l'atteinte de vos objectifs reste votre priorité, nous vous
          proposons des outils et solutions simples et efficaces pour vos
          problématiques régulières d'entreprises.
        </p>

        <div className="services-name">
          {/*  tabulation de MUI */}

          <BasicTabs></BasicTabs>

          {/*             <ul>
                <li>Design Graphique</li>
                <li>Formation</li>
                <li>Developpement d’application</li>
                <li>Intelligence artificielle</li>
            </ul> */}
        </div>

        {/*         <div className='service-progress'> 
            <span></span>
        </div> */}
      </div>

   
    </div>
  );
}
