import React from "react";
import "../../../css/formation.scss";
import formation from "../../../assets/img/formation.png";
import formation2 from "../../../assets/img/formation2.png";
import formation3 from "../../../assets/img/formation3.png";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

import ArrowBackSharpIcon from "@mui/icons-material/ArrowBackSharp";
import ArrowForwardSharpIcon from "@mui/icons-material/ArrowForwardSharp";

const slideWidth = 30;
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

const formations = [
  {
    formation: {
      title: "Laravel",
      desc: "juwefhwfhwfwih fewukfhwefh ewkfhwfhw",
      image: formation3,
    },
  },
  {
    formation: {
      title: "Laravel",
      desc: "juwefhwfhwfwih fewukfhwefh ewkfhwfhw",
      image: formation2,
    },
  },
  {
    formation: {
      title: "Laravel",
      desc: "juwefhwfhwfwih fewukfhwefh ewkfhwfhw",
      image: formation,
    },
  },
  {
    formation: {
      title: "Laravel",
      desc: "juwefhwfhwfwih fewukfhwefh ewkfhwfhw",
      image: formation,
    },
  },
  {
    formation: {
      title: "Laravel",
      desc: "juwefhwfhwfwih fewukfhwefh ewkfhwfhw",
      image: formation,
    },
  },
];

const length = formations.length;
formations.push(...formations);

const sleep = (ms = 0) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const createItem = (position, idx) => {
  const item = {
    styles: {
      transform: `translateX(${position * slideWidth}rem)`,
    },
    formation: formations[idx].formation,
  };

  switch (position) {
    case length - 1:
    case length + 1:
      item.styles = { ...item.styles, filter: "grayscale(1)" };
      break;
    case length:
      break;
    default:
      item.styles = { ...item.styles, opacity: 0 };
      break;
  }

  return item;
};

const CarouselSlideItem = ({ pos, idx, activeIdx }) => {
  const item = createItem(pos, idx, activeIdx);

  return (
    <li className="carousel__slide-item" style={item.styles}>
      <div className="carousel__slide-item-img-link">
        <img src={item.formation.image} alt={item.formation.title} />
      </div>
      <div className="carousel-slide-item__body">
        <h4>{item.formation.title}</h4>
        <p>{item.formation.desc}</p>
      </div>
    </li>
  );
};

const keys = Array.from(Array(formations.length).keys());

const Carousel = () => {
  const [items, setItems] = React.useState(keys);
  const [isTicking, setIsTicking] = React.useState(false);
  const [activeIdx, setActiveIdx] = React.useState(0);
  const bigLength = items.length;

  const prevClick = (jump = 1) => {
    if (!isTicking) {
      setIsTicking(true);
      setItems((prev) => {
        return prev.map((_, i) => prev[(i + jump) % bigLength]);
      });
    }
  };

  const nextClick = (jump = 1) => {
    if (!isTicking) {
      setIsTicking(true);
      setItems((prev) => {
        return prev.map((_, i) => prev[(i - jump + bigLength) % bigLength]);
      });
    }
  };

  const handleDotClick = (idx) => {
    if (idx < activeIdx) prevClick(activeIdx - idx);
    if (idx > activeIdx) nextClick(idx - activeIdx);
  };

  React.useEffect(() => {
    if (isTicking) sleep(300).then(() => setIsTicking(false));
  }, [isTicking]);

  React.useEffect(() => {
    setActiveIdx((length - (items[0] % length)) % length) // prettier-ignore
  }, [items]);

  return (
    <>
      <div className="navigation">
        <PrevtButton
          variant="contained"
          onClick={() => prevClick()}
          /* disabled={activeStep === 0} */
        >
          <ArrowBackSharpIcon />
        </PrevtButton>
        <NextButton
          variant="contained"
          size="small"
          onClick={() => nextClick()}
          /* disabled={activeStep === maxSteps - 1} */
        >
          <ArrowForwardSharpIcon />
        </NextButton>
      </div>
      <div className="carousel__wrap">
        <div className="carousel__inner">
          <div className="carousel__container">
            <ul className="carousel__slide-list">
              {items.map((pos, i) => (
                <CarouselSlideItem
                  key={i}
                  idx={i}
                  pos={pos}
                  activeIdx={activeIdx}
                />
              ))}
            </ul>
          </div>

          <div className="carousel__dots">
            {items.slice(0, length).map((pos, i) => (
              <button
                key={i}
                onClick={() => handleDotClick(i)}
                className={i === activeIdx ? "dot active" : "dot"}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default function SlideFormation() {
  return (
    <div className="formation-slide">
      <Carousel></Carousel>
    </div>
  );
}
