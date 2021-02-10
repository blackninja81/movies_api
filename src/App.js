import react, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Movie from "./pages/Movies";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/movies/:id" exact component={Movie}/>
      </Switch>
     
    </Router>
  );
}

export default App;
