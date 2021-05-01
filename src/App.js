import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Login from './Component/login/login';
import './App.css'
import Profile from './Component/profilePage/profile';
function App() {
  return (
    <div className="app container-fluid">
      <Router>
        <div className="header">
          <nav className="nav-bar">
            <NavLink to="/" exact={true}
              className="Nav_link"
              activeClassName="activeRoute "
              activeStyle={{ color: 'red'}}
            > Home  </NavLink>
            <NavLink to="/movie" exact={true}
              className="Nav_link"
              activeClassName="activeRoute"
              activeStyle={{ color: 'red' }}
            >  Movie Details</NavLink>
          </nav>
        </div>
        <div className="parent-wrapper">
          <Route path="/" exact component={Login} />
          <Route path="/profile" exact component={Profile} />
        </div>
      </Router>
    </div>
  );
}

export default App;