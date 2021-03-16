import React, { useContext } from "react";
import { Link } from "react-router-dom";
import KontaktContext from "./context/KontaktContext";
import "./Omiljeni.scss";

const Omiljeni = () => {
  const { kontakti } = useContext(KontaktContext);

  const noviKontakti = kontakti.map((kontakt) =>
    kontakt.clicked ? (
      <div className="favoriti" key={kontakt.id}>
        <p className="podaci">
          <b>
            {kontakt.ime} {kontakt.prezime},
          </b>{" "}
          {kontakt.datumrodenja}, {kontakt.kontakt}
        </p>
      </div>
    ) : null
  );

  return (
    <div className="omiljeni">
      <Link to="/adresar">
        <button className="ui button">Svi kontakti</button>
      </Link>
      {noviKontakti}
    </div>
  );
};

export default Omiljeni;
