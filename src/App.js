import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Head from "./components/Head";

const App = () => {
  return (
    <div>
      <Head />
      <Navbar />
      <Home />
    </div>
  );
};

export default App;
