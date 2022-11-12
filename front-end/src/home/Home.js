import React from "react";
import Header from "./sections/header/header";

import "aos/dist/aos.css";
import "../css/index.css";
import "../css/navbar.css";
import "../css/heros.css";
import "../css/body.css";
import "../css/presentation.css";
import "../css/services.css";
import "../css/component.css";
import "../css/technologies.css";
import "../css/travaux.css";
import "../css/formation.css";
import "../css/newsletter.css";
import "../css/footer.css";
import { createTheme } from "@mui/material/styles";
import Body from "./sections/Boody/Body";
import Footer from "./sections/footer/footer";

export default function Home() {
  return (
    <div className="container">
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </div>
  );
}
