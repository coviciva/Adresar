import React, { useContext, useState } from "react";
import KontaktContext from "./context/KontaktContext";
import "./MojiKontakti.scss";
import { Icon } from "semantic-ui-react";

const MojiKontakti = (props) => {
  const { kontakti, setKontakti } = useContext(KontaktContext);

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
      {/* {console.log(listaKontakata)} */}
      {/* <h1 className="tekst">Moji kontakti</h1> */}

      <div className="kartica">
        {/*        <div
          className="omiljeni"
          onClick={omiljeni}
          style={{ backgroundColor: isClicked ? "yellow" : "transparent" }}
        > */}
        <Icon
          name="star outline"
          color={isClicked ? "orange" : "black"}
          onClick={omiljeni}
          // style={{ backgroundColor: isClicked ? "yellow" : "transparent" }}
        />
        {/* </div> */}
        {/*         <p>Ime: {kontakti.ime}</p>
        <p>Prezime: {kontakti.prezime}</p>
        <p>Datum rođenja: {kontakti.datumrodenja}</p>
        <p>Kontakt: {kontakti.kontakt}</p> */}
        <div>
          {kontakti.ime} {kontakti.prezime}, {kontakti.datumrodenja},{" "}
          {kontakti.kontakt}
        </div>
      </div>
    </div>
  );
};

export default MojiKontakti;
