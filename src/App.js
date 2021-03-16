import "./App.scss";
import React from "react";
import Form from "./Form";
import { Route, Switch, Redirect } from "react-router-dom";
import Kontakt from "./Kontakt";
import FormSuccess from "./FormSuccess";
import { KontaktContextProvider } from "./context/KontaktContext";
import Omiljeni from "./Omiljeni";
import Detalji from "./Detalji";

function App() {
  return (
    <div>
      <KontaktContextProvider>
        <Switch>
          <Route path="/kontakt" exact component={Kontakt} />
          <Route path="/adresar" exact component={FormSuccess} />
          <Route path="/adresar/omiljeni" exact component={Omiljeni} />
          <Route path="/kontakt/detalji/:id" exact component={Detalji} />
          <Route path="/" exact component={Form} />
          <Redirect to="/" />
        </Switch>
      </KontaktContextProvider>
    </div>
  );
}

export default App;
