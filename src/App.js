import React from "react";
import "./App.css";
import {BrowserRouter as Router, Switch, Link, Route} from "react-router-dom";
import FilmPage from "./components/Movies/FilmPage";
import MoviesPage from "./components/Movies/MoviesPage";
import Header from "./components/Header/Header";
import DarkMode from "./components/DarkMode/DarkMode";



export default function App() {
  return (
      <Router>
          <div>
              <Header/>
              <DarkMode/>
              <Switch>
                  <Route exact path={"/"} component={MoviesPage}/>
                  <Route path="/movie/:id" component = {FilmPage}/>
              </Switch>
          </div>
      </Router>
  )
};
