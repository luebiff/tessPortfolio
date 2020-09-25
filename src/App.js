import React from "react";
import "./scss/main.scss";
import Navbar from "./components/Navbar";
import MainContainer from "./components/MainContainer";
import { BrowserRouter as Router} from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <div className="bgImg"></div>
        <Navbar />
        <MainContainer />
      </div>
    </Router>
  );
}

export default App;
