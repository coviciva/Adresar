import React, { useContext, useState } from "react";
import KontaktContext from "./context/KontaktContext";
import "./MojiKontakti.scss";
import { Icon, Search } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";

const MojiKontakti = (props) => {
  const { kontakti, omiljeni, detalji } = useContext(KontaktContext);

  const [search, setSearch] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [contactsPerPage] = useState(2);

  const indexOfLastContact = currentPage * contactsPerPage;
  const indexOfFirstContact = indexOfLastContact - contactsPerPage;
  const currentContacts = kontakti.slice(
    indexOfFirstContact,
    indexOfLastContact
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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

        {currentContacts
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

      <Pagination
        contactsPerPage={contactsPerPage}
        totalContacts={kontakti.length}
        paginate={paginate}
      />
    </div>
  );
};

export default MojiKontakti;
