import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavBar from './components/navbar.component';
import Landing from './components/landing.component';
import Login from './components/login.component';
import Register from './components/register.component';
import Profile from './components/profile.component';

import 'bootstrap/dist/css/bootstrap.min.css';							// Importa Hojas de estilo de Bootstrap
import './App.css';

import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route exact path="/" component={Landing} />
        <div className="container">
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/profile" component={Profile} />
        </div>
      </div>
    </Router>
  );
}

export default App;
