import React from 'react';

import NavWrapper from './components/NavWrapper.js';

import Test from './pages/Test.js';
import SearchCompetencyPage from './pages/SearchCompetency.js';
import CompetencyPage from './pages/Competency.js';
import LoginPage from './pages/Login.js';
import RegisterPage from './pages/Register.js';
import ProfilePage from './pages/Profile.js';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact><NavWrapper><Test /></NavWrapper></Route>

        <Route path="/login" exact><LoginPage /></Route>
        <Route path="/register" exact><RegisterPage /></Route>

        <Route path="/competency/search/"><NavWrapper><SearchCompetencyPage /></NavWrapper></Route>
        <Route path="/competency/"><NavWrapper><CompetencyPage /></NavWrapper></Route>
        
//         <Route path="/company/search/:query?"><NavWrapper><SearchCompetencyPage /></NavWrapper></Route>
//         <Route path="/company/:competencyId"><NavWrapper><CompetencyPage /></NavWrapper></Route>     
        
        <Route path="/profile"><NavWrapper><ProfilePage /></NavWrapper></Route>
        <Route path="/profile/notifications"><NavWrapper><Test /></NavWrapper></Route>
        <Route path="/profile/messages"><NavWrapper><Test /></NavWrapper></Route>
      </Switch>
    </Router>
  );
}

export default App;
