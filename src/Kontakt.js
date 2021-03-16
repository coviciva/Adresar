//import React, { useContext } from "react";
import React, { useState, useContext, useEffect } from "react";
import { Button, Form } from "semantic-ui-react";
import "./Kontakt.scss";
//import useFormKontakt from "./useFormKontakt";
//import validateInfoKontakt from "./validateInfoKontakt";
import KontaktContext from "./context/KontaktContext";
import { v4 as uuid } from "uuid";
import { useHistory } from "react-router-dom";
//import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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
  const { kontakti, addKontakt, editItem, uredi } = useContext(KontaktContext);

  let history = useHistory();

  const [data, setData] = useState({
    ime: "",
    prezime: "",
    datumrodenja: "",
    kontakt: "",
    id: uuid(),
    clicked: false,
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(kontakti);
    if (!editItem) {
      addKontakt(data);
    } else {
      setData(editItem);
      console.log("kontakt", data);
      uredi(
        data.ime,
        data.prezime,
        data.datumrodenja,
        data.kontakt,
        data.clicked,
        editItem.id
      );

      console.log("Uredujem");
    }
    history.push("/adresar");
  };

  useEffect(() => {
    if (editItem) {
      setData(editItem);
    } else {
      setData({
        ime: "",
        prezime: "",
        datumrodenja: "",
        kontakt: "",
        id: uuid(),
        clicked: false,
      });
    }
  }, [editItem]);

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
            required
            maxLength="100"
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
            required
            maxLength="300"
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
          />
        </Form.Field>

        {/*         <DatePicker
          selected={data.datumrodenja}
          onChange={handleChange}
          placeholderText="Datum rođenja"
          //value={data.datumrodenja}
        /> */}

        <Form.Select
          fluid
          label="Vrsta kontakta"
          options={options}
          placeholder="Vrsta kontakta"
          name="vrstakontakta"
          required
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
            required
          />
          {/* {errors.kontakt && <p className="error">{errors.kontakt}</p>} */}
        </Form.Field>

        <Button type="submit">Spremi</Button>

        {/*         <Link to="/adresar">
          <Button type="submit">Moj adresar</Button>
        </Link> */}
      </Form>

      <h3>Ime: {data.ime}</h3>
      <h3>Prezime: {data.prezime}</h3>
      <h3>Datum rođenja: {data.datumrodenja}</h3>
      <h3>Kontakt: {data.kontakt}</h3>
    </div>
  );
};

export default Kontakt;
