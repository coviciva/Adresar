import React, { useState, useContext, useEffect } from "react";
import { Button, Form } from "semantic-ui-react";
import "./Kontakt.scss";
import KontaktContext from "./context/KontaktContext";
import { v4 as uuid } from "uuid";
import { useHistory } from "react-router-dom";
//import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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
            value={data.ime}
            onChange={handleChange}
            required
            maxLength="100"
          />
        </Form.Field>
        <Form.Field>
          <label>Prezime</label>
          <input
            placeholder="Prezime"
            name="prezime"
            value={data.prezime}
            onChange={handleChange}
            required
            maxLength="300"
          />
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
          onChange={handleChangeDate}
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
            value={data.kontakt}
            onChange={handleChange}
            required
          />
        </Form.Field>

        <Button type="submit" color="green">
          Spremi
        </Button>
      </Form>
    </div>
  );
};

export default Kontakt;
