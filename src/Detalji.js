import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Detalji.scss";
import KontaktContext from "./context/KontaktContext";
import { Icon } from "semantic-ui-react";

const Detalji = () => {
  const { detaljiK, izbrisi, findItem } = useContext(KontaktContext);

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
      <div className="icons">
        <Icon
          className="edit"
          size="large"
          onClick={() => findItem(detaljiK.id)}
        />
        <Icon
          className="trash"
          size="large"
          onClick={() => izbrisi(detaljiK.id)}
        />
      </div>
    </div>
  );
};

export default Detalji;
