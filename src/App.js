import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./Routes/Home";
import CoinPage from "./Routes/CoinPage";


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/CoinPage/:id" exact render={(props) => <CoinPage />} />
      </Switch>
    </div>
  );
}

export default App;
