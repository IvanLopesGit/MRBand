import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Music from "./Components/Pages/Music";
import Contacts from "./Components/Pages/Contacts";
import Media from "./Components/Pages/Media";
import Gallery from "./Components/Pages/Gallery";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Music" component={Music} />
          <Route path="/Contacts" component={Contacts} />
          <Route path="/Media" component={Media} />
          <Route path="/Gallery" component={Gallery} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
