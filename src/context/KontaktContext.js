import React, { createContext, useState } from "react";

const KontaktContext = createContext();

function KontaktContextProvider(props) {
  const [kontakti, setKontakti] = useState({});

  return (
    <KontaktContext.Provider value={{ kontakti, setKontakti }}>
      {props.children}
    </KontaktContext.Provider>
  );
}
export default KontaktContext;
export { KontaktContextProvider };
