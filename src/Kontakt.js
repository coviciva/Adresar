//import React, { useContext } from "react";
import React, { useState, useContext } from "react";
import { Button, Form } from "semantic-ui-react";
import "./Kontakt.scss";
//import useFormKontakt from "./useFormKontakt";
//import validateInfoKontakt from "./validateInfoKontakt";
import { Link } from "react-router-dom";
import KontaktContext from "./context/KontaktContext";
import { v4 as uuid } from "uuid";

/*const { handleChange, values, handleSubmit, errors } = useFormKontakt(
  validateInfoKontakt
);*/

const options = [
  { key: "m", text: "Mobitel", value: "mobitel" },
  { key: "f", text: "Fiksni telefon", value: "fiksnitel" },
  { key: "e", text: "Email", value: "email" },
  { key: "p", text: "Pager", value: "pager" },
];

const Kontakt = () => {
  /*   const [ime, setIme] = useState("");
  const [prezime, setPrezime] = useState("");
  const [datumrodenja, setDatumRodenja] = useState("");
  const [kontakt, setKontakt] = useState(""); */

  const { kontakti, addKontakt } = useContext(KontaktContext);

  //console.log(kontakti);

  const [data, setData] = useState({
    ime: "",
    prezime: "",
    datumrodenja: "",
    kontakt: "",
    id: uuid(),
  });

  /*constructor(props) {
    super(props);
    this.state = {
      ime: "",
      prezime: "",
      datumrodenja: "",
      kontakt: "",
    };
  }*/

  /*handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
    //console.log(target.value);
  };*/

  /*handleSubmit = (event) => {
    event.preventDefault();
    const data = this.state;
    console.log(data);
  };*/

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //setKontakti(data);
    //console.log(data);
    console.log(kontakti);
    addKontakt(data);
    //let listaKontakata = [];
    //listaKontakata.push(Object.values(kontakti));
    //console.log(listaKontakata);
  };

  // const handleClick = () => {
  //   setKontakti((...kontakti) => ({ ...data }));
  // };

  /*useEffect(() => {
    setKontakti(data);
  }, [data]);*/

  return (
    <div className="kontakt">
      <h1>Stvorite novi kontakt</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>Ime</label>
          <input
            placeholder="Ime"
            name="ime"
            /*value={values.ime}/
            /onChange={handleChange}*/
            value={data.ime}
            onChange={handleChange}
            //ref={(input) => (this.ime = input)}
          />
          {/* {errors.ime && <p className="error">{errors.ime}</p>} */}
        </Form.Field>
        <Form.Field>
          <label>Prezime</label>
          <input
            placeholder="Prezime"
            name="prezime"
            /*value={values.prezime}
              onChange={handleChange}*/
            value={data.prezime}
            onChange={handleChange}
            //ref={(input) => (this.prezime = input)}
          />
          {/* {errors.prezime && <p className="error">{errors.prezime}</p>} */}
        </Form.Field>

        <Form.Field>
          <label>Datum rođenja</label>
          <input
            placeholder="Datum rođenja"
            name="datumrodenja"
            value={data.datumrodenja}
            onChange={handleChange}
            //ref={(input) => (this.datumrodenja = input)}
          />
        </Form.Field>

        <Form.Select
          fluid
          label="Vrsta kontakta"
          options={options}
          placeholder="Vrsta kontakta"
          name="vrstakontakta"
        />

        <Form.Field>
          <label>Kontakt</label>
          <input
            placeholder="Kontakt"
            name="kontakt"
            /*value={values.kontakt}
              onChange={handleChange}*/
            value={data.kontakt}
            onChange={handleChange}
            //ref={(input) => (this.kontakt = input)}
          />
          {/* {errors.kontakt && <p className="error">{errors.kontakt}</p>} */}
        </Form.Field>
        {/* <Link to="/adresar"> */}
        <Button
          type="submit"
          //onClick={() => setKontakti((kontakti) => ({ ...data }))}
          //onClick={handleClick}
        >
          Spremi
        </Button>
        {/* </Link> */}

        <Link to="/adresar">
          <Button type="submit">Moj adresar</Button>
        </Link>
      </Form>

      <h3>Ime: {data.ime}</h3>
      <h3>Prezime: {data.prezime}</h3>
      <h3>Datum rođenja: {data.datumrodenja}</h3>
      <h3>Kontakt: {data.kontakt}</h3>
    </div>
  );
};
//}

export default Kontakt;
