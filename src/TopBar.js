import React from "react";
import "./App.css";
// import logo from "feather.png";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class TopBar extends React.Component {
  render() {
    return (
      <Router>
        <div className="nav-bar">
          <nav>
            <ul>
              <img
                src="https://png2.cleanpng.com/sh/f35d1613e51453c485705aea255882cc/L0KzQYq3V8IzN6ZvfpH0aYP2gLBuTgdzcaVuhtk2dnXmhLF5TfdzaaFtgdV8LYPsgH7Akvl1bV5mjdlAc4SwfLF9hb1wNZ5qhuZ4cnGwfLb7kvF0NZ9yedZqcz24dIS8hclmPWk8SadqMz68RIS6UcgzPGI6TqUDMUS2R4S8VcM0NqFzf3==/kisspng-writing-vector-graphics-sip-write-august-love-o-mentora-letras-nmadas-5d35e9e58715a3.9433182415638143735533.png"
                alt=""
                width="100px"
                className="logo"
              />
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/write">Write notes</Link>
              </li>
              <li>
                <Link to="/organize">Organize</Link>
              </li>
              <li>
                <Link to="/calendar">Calendar</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/write">{/* <WriteNote /> */}</Route>
            <Route path="/organize">{/* <Organize /> */}</Route>
            <Route path="/calendar">{/* <Calendar /> */}</Route>
            <Route path="/">{/* <Home /> */}</Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default TopBar;
