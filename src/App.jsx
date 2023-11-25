import React from "react";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

const App = () => {
  return (
    <div>
      <div>
        <Sidebar />
      </div>
      <div className="pl-64 mr-2">
        <Header />
        <Home />
      </div>
    </div>
  );
};

export default App;
