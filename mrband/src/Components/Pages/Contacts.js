import React from "react";
import "../../App.css";
import "./Contacts.css";

export default function Contacts() {
  return (
    <div className="contacts">
      <div className="contacts-img">
        <img src={require("../../Images/logo.png")} alt="Mario Rossi Band" />
      </div>
      <div className="booking">
        Bookings, Business enquiries and
        <br /> general information, please contact:
        <br /> <div className="booking-e-mail">mariorossiband@gmail.com</div>
      </div>
      <div className="minus"></div>
      <div className="pressoffice">
        <div className="office-title">
          Press office Mixtape Assessoria de Comunicação
        </div>
        E-mail: mixtapeassessoria@gmail.com
        <br /> Whatsapp: +55 (19) 9.9609-1978
        <br /> Facebook.com/MixtapeAssessoria
      </div>
      <div className="minus"></div>
      <div className="webmaster">
        Webmaster: Ivan Lopes
        <div className="webmaster-contact">
          <br /> Whatsapp: +55 (19) 9.9191-8921
          <br /> E-mail: calintz1@hotmail.com
        </div>
      </div>
    </div>
  );
}
