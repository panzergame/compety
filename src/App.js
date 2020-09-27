import React from 'react';
import logo from './logo.svg';
import HeaderBar from './components/HeaderBar.js';
import SideNav from './components/SideNav.js';
import Test from './pages/Test.js';
import SearchPage from './pages/Search.js';
import CompetencyPage from './pages/Competency.js';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  return (
    <>
      <SideNav>
        <header>
          <HeaderBar />
        </header>

        <Router>
          <Switch>
            <Route path="/" exact><Test /></Route>

            <Route path="/competency/search/:query?"><SearchPage /></Route>
            <Route path="/competency/:competencyId"><CompetencyPage /></Route>          
            
            <Route path="/company/search/:query?"><SearchPage /></Route>
            <Route path="/company/:competencyId"><CompetencyPage /></Route>       
            
            <Route path="/profile/:profileId"><Test /></Route>
            <Route path="/profile/competency/search/:profileId:query?"><Test /></Route>
            <Route path="/profile/notifications/:profileId"><Test /></Route>
            <Route path="/profile/messages/:profileId"><Test /></Route>
          </Switch>
        </Router>
      </SideNav>
    </>
  );
}

export default App;
