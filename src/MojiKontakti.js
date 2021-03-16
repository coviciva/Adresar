import React, { useContext, useState } from "react";
import KontaktContext from "./context/KontaktContext";
import "./MojiKontakti.scss";
import { Icon, Search } from "semantic-ui-react";
//import { v4 as uuid } from "uuid";
import { Link } from "react-router-dom";

const MojiKontakti = (props) => {
  const { kontakti, omiljeni, detalji } = useContext(KontaktContext);

  const [search, setSearch] = useState("");

  // const [listaKontakata, setListaKontakata] = useState([]);

  /*  useEffect(() => {
    setListaKontakata([...listaKontakata, { kontakti }]);
  }, [kontakti]); */

  return (
    <div>
      <Search
        placeholder="Pretraživanje"
        onSearchChange={(e) => {
          setSearch(e.target.value);
        }}
      />

      <div>
        {console.log("MojiKontakti")}
        {console.log(kontakti)}

        {/* <h1 className="tekst">Moji kontakti</h1> */}

        {kontakti
          .filter((kontakt) => {
            if (search === "") {
              return kontakt;
            } else if (
              kontakt.ime.toLowerCase().includes(search.toLowerCase())
            ) {
              return kontakt;
            } else if (
              kontakt.prezime.toLowerCase().includes(search.toLowerCase())
            ) {
              return kontakt;
            } else if (kontakt.kontakt.includes(search)) {
              return kontakt;
            }
          })
          .map((kontakt) => {
            return (
              <div className="kartica" key={kontakt.id}>
                <Icon
                  name="star outline"
                  color={kontakt.clicked ? "orange" : "black"}
                  onClick={() => omiljeni(kontakt.id)}
                />
                <Link to={{ pathname: `/kontakt/detalji/${kontakt.id}` }}>
                  <div className="data" onClick={() => detalji(kontakt.id)}>
                    <b>
                      {kontakt.ime} {kontakt.prezime},
                    </b>{" "}
                    {kontakt.datumrodenja}, {kontakt.kontakt}
                  </div>
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default MojiKontakti;
