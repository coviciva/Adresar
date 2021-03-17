import React, { createContext, useState } from "react";
import { useHistory } from "react-router-dom";
import data from "../data/data";

const KontaktContext = createContext();

function KontaktContextProvider(props) {
  const [kontakti, setKontakti] = useState(
    data.sort((a, b) => (a.prezime > b.prezime ? 1 : -1))
  );

  const [editItem, setEditItem] = useState(null);

  let history = useHistory();

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

  const izbrisi = (id) => {
    setKontakti(kontakti.filter((kontakt) => kontakt.id !== id));
    history.push("/adresar");
  };

  const uredi = (i, p, dr, k, c, id) => {
    const noviKontakt = kontakti.map((kontakt) =>
      kontakt.id === id
        ? {
            ime: i,
            prezime: p,
            datumrodenja: dr,
            kontakt: k,
            clicked: c,
            id: id,
          }
        : kontakt
    );
    console.log("context", noviKontakt);

    setKontakti(noviKontakt);
    setEditItem(null);
  };

  const findItem = (id) => {
    const item = kontakti.find((kontakt) => kontakt.id === id);

    setEditItem(item);
    history.push("/kontakt");
    console.log(item);
  };

  return (
    <KontaktContext.Provider
      value={{
        kontakti,
        addKontakt,
        omiljeni,
        detaljiK,
        detalji,
        izbrisi,
        uredi,
        editItem,
        findItem,
      }}
    >
      {props.children}
    </KontaktContext.Provider>
  );
}
export default KontaktContext;
export { KontaktContextProvider };
