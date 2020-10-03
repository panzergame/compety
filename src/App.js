import React from 'react';

import NavWrapper from './components/NavWrapper.js';

import Test from './pages/Test.js';
import SearchPage from './pages/Search.js';
import CompetencyPage from './pages/Competency.js';
import LoginPage from './pages/Login.js';
import RegisterPage from './pages/Register.js';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

// TODO wrapper pour sidebnav et header bar
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact><NavWrapper><Test /></NavWrapper></Route>

        <Route path="/login" exact><LoginPage /></Route>
        <Route path="/register" exact><RegisterPage /></Route>

        <Route path="/competency/search/:query?"><NavWrapper><SearchPage /></NavWrapper></Route>
        <Route path="/competency/:competencyId"><NavWrapper><CompetencyPage /></NavWrapper></Route>          
        
        <Route path="/company/search/:query?"><NavWrapper><SearchPage /></NavWrapper></Route>
        <Route path="/company/:competencyId"><NavWrapper><CompetencyPage /></NavWrapper></Route>       
        
        <Route path="/profile/:profileId"><NavWrapper><Test /></NavWrapper></Route>
        <Route path="/profile/competency/search/:profileId:query?"><NavWrapper><Test /></NavWrapper></Route>
        <Route path="/profile/notifications/:profileId"><NavWrapper><Test /></NavWrapper></Route>
        <Route path="/profile/messages/:profileId"><NavWrapper><Test /></NavWrapper></Route>
      </Switch>
    </Router>
  );
}

export default App;
