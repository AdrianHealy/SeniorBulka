import React from "react";
import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import MainPage from "./pages/MainPage";

const Routes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" element={<MainPage />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
