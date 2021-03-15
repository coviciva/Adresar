import React from "react";
import "./FormSuccess.scss";
import { Link } from "react-router-dom";
import MojiKontakti from "./MojiKontakti";
//import KontaktContext from "./context/KontaktContext";

const FormSuccess = () => {
  //const { kontakti, setKontakti } = useContext(KontaktContext);

  return (
    <div className="adresar">
      <h1>Moj adresar</h1>
      <Link to="/kontakt">
        <button className="ui button">Novi kontakt</button>
      </Link>
      <MojiKontakti />
    </div>
  );
};

export default FormSuccess;
