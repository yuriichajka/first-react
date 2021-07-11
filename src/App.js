import React from "react";
import "./App.css";
import MoviesList from "./components/Movies/MoviesList";
import {BrowserRouter as Router, Switch, Link, Route} from "react-router-dom";
import MoviesListCard from "./components/Movies/MoviesListCard";



export default function App() {
  return (
      <Router>
          <div>
              <MoviesList/>
              <Switch>
                  <Route path={'/movieslistcard/:id'} render={() => <MoviesListCard/>}/>
              </Switch>
          </div>
      </Router>
  )
};
