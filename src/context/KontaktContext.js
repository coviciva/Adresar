import React, { createContext, useState } from "react";

const KontaktContext = createContext();

function KontaktContextProvider(props) {
  const [kontakti, setKontakti] = useState([]);

  const addKontakt = (data) => {
    setKontakti([...kontakti, data]);
  };

  return (
    <KontaktContext.Provider value={{ kontakti, addKontakt }}>
      {props.children}
    </KontaktContext.Provider>
  );
}
export default KontaktContext;
export { KontaktContextProvider };
