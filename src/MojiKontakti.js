import React, { useContext, useState, useEffect } from "react";
import KontaktContext from "./context/KontaktContext";
import "./MojiKontakti.scss";
import { Icon } from "semantic-ui-react";
import { v4 as uuid } from "uuid";

const MojiKontakti = (props) => {
  const { kontakti, addKontakt } = useContext(KontaktContext);

  // const [listaKontakata, setListaKontakata] = useState([]);

  const [isClicked, setIsClicked] = useState(false);

  /*  useEffect(() => {
    setListaKontakata([...listaKontakata, { kontakti }]);
  }, [kontakti]); */

  const omiljeni = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div>
      {console.log("MojiKontakti")}
      {console.log(kontakti)}

      {/* <h1 className="tekst">Moji kontakti</h1> */}
      {kontakti.map((kontakt) => {
        return (
          <div className="kartica" key={kontakt.id}>
            <Icon
              name="star outline"
              color={isClicked ? "orange" : "black"}
              onClick={omiljeni}
            />

            <div>
              {kontakt.ime} {kontakt.prezime}, {kontakt.datumrodenja},{" "}
              {kontakt.kontakt}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MojiKontakti;
