import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Saved from "./pages/saved";
import Nav from "./Components/Nav/Nav";
import Header from "./Components/Header/Header";
import Books from "./pages/books";


class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Nav />
        <Header />
        {/* <Books /> */}
        <Switch>
          <Route exact path="/" component={Books} />
          <Route exact path="/searched" component={Books} />
          <Route exaxt path="/saved" component={Saved} />
        </Switch>
      </div>
      </Router>
      
        
        
    );
  }
}

export default App;
