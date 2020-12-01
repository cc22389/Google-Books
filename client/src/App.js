import React, { Component } from "react";
import "./App.css";
import Jumbotron from "./Components/Jumbotron/Jumbotron";
import Nav from "./Components/Nav/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/searched";
import Saved from "./pages/saved";


class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Nav />
        <Jumbotron />
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/searched" component={Search} />
          <Route exaxt path="/saved" component={Saved} />
        </Switch>
      </div>
      </Router>
      
        
        
    );
  }
}

export default App;
