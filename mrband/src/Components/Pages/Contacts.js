import React from "react";
import "../../App.css";
import "./Contacts.css";
import Footer from "../Footer";

export default function Contacts() {
  return (
    <>
      <div className="contacts">
        <div className="contacts-img">
          <img src={require("../../Images/logo.png")} alt="Mario Rossi Band" />
        </div>
        <div className="booking">
          Bookings, Business enquiries and
          <br /> general information, please contact:
          <br />
          <div className="booking-e-mail">
            E-Mail:{" "}
            <a href="mailto:mariorossiband@gmail.com">
              mariorossiband@gmail.com
            </a>
          </div>
        </div>
        <div className="minus"></div>
        <div className="pressoffice">
          <div className="office-title">
            Press office Mixtape Assessoria de Comunicação
          </div>
          Whatsapp: +55 (19) 9.9609-1978
          <br /> Facebook.com/MixtapeAssessoria <br />
          E-mail:{" "}
          <a href="mailto:mixtapeassessoria@gmail.com">
            mixtapeassessoria@gmail.com
          </a>
        </div>
        <div className="minus"></div>
        <div className="webmaster">
          Webmaster: Zuper - Ivan Lopes
          <div className="webmaster-contact">
            <br /> Whatsapp: +55 (19) 9.9191-8921
            <br /> E-mail:{" "}
            <a href="mailto:falecomzuper@gmail.com">falecomzuper@gmail.com</a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
