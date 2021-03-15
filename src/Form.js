import React, { useState } from "react";
import LoginForm from "./LoginForm";
import FormSuccess from "./FormSuccess";
import { Route, Switch, Redirect } from "react-router-dom";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <div>
      {!isSubmitted ? (
        <LoginForm submitForm={submitForm} />
      ) : (
        <Switch>
          <Route path="/adresar" exact component={FormSuccess} />
          <Redirect to="/adresar" />
        </Switch>
      )}
    </div>
  );
};

export default Form;
