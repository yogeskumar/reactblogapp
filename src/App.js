import React from "react";
// import { Switch } from "react-router";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Article from "./components/Article/Article";
import Home from "./components/Home/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/article" exact component={Article}/>
          <Route path="/" exact component={Home}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
