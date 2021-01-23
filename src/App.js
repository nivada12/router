import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Description from "./Film/Description";
import Home from "./Film/Home";
// import Filter from './Film/Filter'
// import MovieList from "./Film/MovieList";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/movie/:id" component={Description}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
