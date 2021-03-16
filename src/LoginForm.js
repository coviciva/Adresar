import React from "react";
import { Button, Form } from "semantic-ui-react";
import useForm from "./useForm";
import validateInfo from "./validateInfo";
import "./LoginForm.scss";

const FormExampleForm = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    validateInfo
  );

  return (
    <div className="container">
      <div className="forma">
        <h1>Prijava</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Field>
            <label>Email</label>
            <input
              placeholder="Email"
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </Form.Field>
          <Form.Field>
            <label>Lozinka</label>
            <input
              placeholder="Lozinka"
              name="password"
              type="password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </Form.Field>

          <Button type="submit">Prijava</Button>
        </Form>
      </div>
    </div>
  );
};

export default FormExampleForm;
