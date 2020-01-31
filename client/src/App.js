import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { PrivateRoute } from './components/PrivateRoute';
import BubblePage from './components/BubblePage';

import Login from "./components/Login";
import "./styles.scss";

function App() {

  // const handleLogout = () => {
  //   localStorage.removeItem('token');
  // };

  return (
    <Router>
      <div className="App">
      <nav className='nav'>
        <Link to='/'>Login</Link>
        <Link to='/protect'>Protected Page</Link>
      </nav>
      <Switch>
        <Route exact path="/" component={Login} />
        <PrivateRoute path='/protect' component={BubblePage} />
      </Switch>
      </div>
    </Router>
  );
}

export default App;
