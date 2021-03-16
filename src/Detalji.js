import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Detalji.scss";
import KontaktContext from "./context/KontaktContext";

const Detalji = () => {
  const { kontakti, detaljiK } = useContext(KontaktContext);

  /*   const detalji = kontakti.map((kontakt) =>
    kontakt.id ===  ? (
      <div className="favoriti">
        <p className="podaci">
          <b>
            {kontakt.ime} {kontakt.prezime},
          </b>{" "}
          {kontakt.datumrodenja}, {kontakt.kontakt}
        </p>
      </div>
    ) : null
  ); */

  return (
    <div className="detalji">
      <Link to="/adresar">
        <button className="ui button">Moji Kontakti</button>
      </Link>
      <div className="detaljiOKontaktu">
        <h1>
          Detalji o kontaktu: {detaljiK.ime} {detaljiK.prezime}
        </h1>
        <h3>Datum rođenja: {detaljiK.datumrodenja}</h3>
        <h3>Kontakt: {detaljiK.kontakt}</h3>
      </div>
    </div>
  );
};

export default Detalji;
