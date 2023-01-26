import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Helmet from "./components/Helmet";

const App = () => {
  return (
    <div>
      <Helmet />
      <Home />
    </div>
  );
};

export default App;
