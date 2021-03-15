import "./App.css";
import React from "react";
import Form from "./Form";
import { Route, Switch, Redirect } from "react-router-dom";
import Kontakt from "./Kontakt";
import FormSuccess from "./FormSuccess";
import { KontaktContextProvider } from "./context/KontaktContext";

function App() {
  return (
    <div>
      <KontaktContextProvider>
        <Switch>
          <Route path="/kontakt" exact component={Kontakt} />
          <Route path="/adresar" exact component={FormSuccess} />
          <Route path="/" exact component={Form} />
          <Redirect to="/" />
        </Switch>
        {/* <Form /> */}
      </KontaktContextProvider>
    </div>
  );
}

export default App;
