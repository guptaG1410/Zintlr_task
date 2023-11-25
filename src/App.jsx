import React from "react";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ManageCosumers from "./pages/ManageCosumers";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Sidebar />
      </div>
      <div className="pl-64 mr-2">
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/manage-consumers" element={<ManageCosumers/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
