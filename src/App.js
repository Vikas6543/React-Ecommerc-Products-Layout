import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Products from "./components/Products";
import ProductsDetail from "./components/ProductsDetail";
import { DataProvider } from "./components/DataContext";

const App = () => {
  return (
    <DataProvider>
      <BrowserRouter>
        <div>
          <Route exact path='/' component={Products} />
          <Route exact path='/products/:id' component={ProductsDetail} />
        </div>
      </BrowserRouter>
    </DataProvider>
  );
};

export default App;
