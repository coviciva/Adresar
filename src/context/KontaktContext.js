import React, { createContext, useState } from "react";

const KontaktContext = createContext();

function KontaktContextProvider(props) {
  const [kontakti, setKontakti] = useState([]);

  const [detaljiK, setDetalji] = useState({
    ime: "",
    prezime: "",
    datumrodenja: "",
    kontakt: "",
    id: "",
    clicked: false,
  });

  const addKontakt = (data) => {
    setKontakti([...kontakti, data]);
  };

  const omiljeni = (id) => {
    const noviKontakti = kontakti.map((kontakt) =>
      kontakt.id === id
        ? {
            ime: kontakt.ime,
            prezime: kontakt.prezime,
            datumrodenja: kontakt.datumrodenja,
            kontakt: kontakt.kontakt,
            id: kontakt.id,
            clicked: !kontakt.clicked,
          }
        : kontakt
    );
    setKontakti(noviKontakti);
  };

  const detalji = (id) => {
    const detaljnikontakt = kontakti.find((kontakt) => kontakt.id === id);
    console.log(detaljnikontakt);

    setDetalji(detaljnikontakt);
  };

  return (
    <KontaktContext.Provider
      value={{ kontakti, addKontakt, omiljeni, detaljiK, detalji }}
    >
      {props.children}
    </KontaktContext.Provider>
  );
}
export default KontaktContext;
export { KontaktContextProvider };
