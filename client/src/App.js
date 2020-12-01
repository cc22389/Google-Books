import React, { Component } from "react";
import "./App.css";
import Books from "./pages/books" 
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Search from "./pages/searched";
import Saved from "./pages/saved";
import Nav from "./Components/Nav/Nav";
import Header from "./Components/Header/Header";


class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Nav />
        <Header />
        <Books />
        <Switch>
          {/* <Route exact path="/" component={Search} />
          <Route exact path="/searched" component={Search} /> */}
          <Route exaxt path="/saved" component={Saved} />
        </Switch>
      </div>
      </Router>
      
        
        
    );
  }
}

export default App;
