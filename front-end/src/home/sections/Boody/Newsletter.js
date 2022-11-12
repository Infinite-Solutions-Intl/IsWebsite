import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import { Button, Typography } from "@mui/material";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const submitForm = async () => {};

  const handleInput = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  return (
    <div className="container-newsletter" id="newsletter">
      <div className="newsletter">
        <div className="text">
          <h3 data-aos="zoom-in-right" data-aos-duration="1500">
            {" "}
            Join our Newsletter
          </h3>
          <p>
            Nous serons ravis de vous apportez notre exprérience pour
            l’accomplissement de votre projet.
          </p>
        </div>
        <div className="input-bloc">
          <form onSubmit={submitForm}>
            <input
              onChange={handleInput}
              type="text"
              value={email}
              placeholder="envoyer votre mail"
            ></input>
            <Button variant="contained">
              <Typography className={"send-text"}>Envoyer</Typography>
              <SendIcon className={"send-icon"}></SendIcon>
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
