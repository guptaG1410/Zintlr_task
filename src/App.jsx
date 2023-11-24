import React from "react";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="flex">
      <div className="flex flex-row relative ">
        <div>
          <Sidebar />
        </div>
        <div className="pl-64 mr-4">
        <Header/>
          {/* <Home /> */}
        </div>
      </div>
    </div>
  );
};

export default App;
