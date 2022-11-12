import React, { useState } from "react";
import Typed from "react-typed";
import Footer from "./home/sections/footer/footer";
import Navbar from "./home/sections/header/Navbar";
import Aos from "aos";
import "./css/contact.css";
import tel from "./assets/img/i-phone.png";
import position from "./assets/img/i-position.png";
import email from "./assets/img/i-email.png";
import { Button } from "@mui/material";

export function InfoItems({ image, text }) {
  return (
    <div className="infoItem">
      <img src={image}></img>
      <span>{text}</span>
    </div>
  );
}

export default function Contact() {
  const [contactInput, setContactInput] = useState({
    name: "",
    phone: "",
    email: "",
    comment: "",
  });

  const handleInput = (e) => {
    e.preventDefault();

    setContactInput((contactInput) => {
      return { ...contactInput, [e.target.name]: e.target.value };
    });
  };

  return (
    <div className="container">
      <Navbar></Navbar>
      <div className="contact-container">
        <div className="contact">
          <div className="contact-text">
            <div className="green-square"></div>

            <h1 data-aos="fade-down-right">
              <Typed
                typeSpeed={50}
                strings={[" Prenez contact avec nous"]}
              ></Typed>
            </h1>
            <p>
              Nous serions ravis de discuter de la manière dont nous pouvons
              vous aider.
            </p>

            <div className="infos">
              <InfoItems image={tel} text={"(+237) 67454754"}></InfoItems>
              <InfoItems image={email} text={"gmail@gmail.com"}></InfoItems>
              <InfoItems
                image={position}
                text={"Douala , Bonaberie"}
              ></InfoItems>
            </div>
          </div>
          <div className="contact-form">
            <form>
              <input
                class="input-name"
                name="name"
                onChange={handleInput}
                type="text"
                placeholder="Nom"
                value={contactInput["name"]}
              ></input>
              <input
                class="input-email"
                name="email"
                onChange={handleInput}
                type="email"
                placeholder="Adress Mail"
                value={contactInput["email"]}
              ></input>
              <input
                class="input-phone"
                name="phone"
                onChange={handleInput}
                type="tel"
                placeholder="Telephone"
                value={contactInput["phone"]}
              ></input>
              <textarea
                rows="10"
                class="input-comment"
                name="comment"
                onChange={handleInput}
                placeholder="votre message"
                value={contactInput["comment"]}
              />
              <Button
                variant="contained"
                sx={{
                  backgroundColor: " #379577",
                  "&:hover": {
                    backgroundColor: " #023324",
                  },
                }}
              >
                Envoyer Votre commentaire
              </Button>
            </form>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}
