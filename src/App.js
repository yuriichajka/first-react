import React from "react";
import "./App.css";
import {BrowserRouter as Router, Switch, Link, Route} from "react-router-dom";
import FilmPage from "./components/Movies/FilmPage";
import MoviesPage from "./components/Movies/MoviesPage";
import Header from "./components/Header/Header";



export default function App() {
  return (
      <Router>
          <div>
              <Header/>
              <Switch>
                  <Route exact path={"/movies"} component={MoviesPage}/>
                  <Route path="/movie/:id" component = {FilmPage}/>
              </Switch>
          </div>
      </Router>
  )
};
