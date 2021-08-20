import React, {} from 'react'
import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage";
import Product from "./components/Product";

function App() {

  return (
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/products/:id">
            <Product />
          </Route>
        </Switch>


      </BrowserRouter>
  );
}

export default App;
