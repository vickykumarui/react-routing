import React, { Component } from 'react';
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect
} from "react-router-dom";
import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';
import NotFound from './components/notFound/notFound';
// import Course from './containers/Course/Course';

class App extends Component {
  render () {
    return (
      <Router>
      <div className="App">
        <header>
          <nav className="Appnav">
            <ul>
              <li><NavLink to="/users">Users </NavLink></li>
              <li><NavLink to="/courses">Courses </NavLink></li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route exact path="/">
            <Users />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Redirect from="/allcourses" to = "/courses"  />
          <Route path="/courses" component = {Courses} />
          {/* <Route path="/courses/course/:id" component={Course} /> */}
          <Route component = {NotFound} />
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
