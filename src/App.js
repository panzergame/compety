import React from 'react';

import NavWrapper from './components/NavWrapper.js';

import Home from './pages/Home.js';
import SearchCompetencyPage from './pages/SearchCompetency.js';
import CompetencyPage from './pages/Competency.js';
import SectionPage from './pages/Section.js';
import CompetencyValidationPage from './pages/CompetencyValidation.js';
import ValidateCompetencyPage from './pages/ValidateCompetency.js';
import VerifyCompetencyPage from './pages/VerifyCompetency.js';
import LoginPage from './pages/Login.js';
import RegisterPage from './pages/Register.js';
import GroupPage from './pages/Group.js';
import GroupCreatePage from './pages/GroupCreate.js';
import GroupVerifyCompetenciesPage from './pages/GroupVerifyCompetencies.js';
import ProfilePage from './pages/Profile.js';
import ProfileCompetenciesPage from './pages/ProfileCompetencies.js';
import ProfileNotificationsPage from './pages/ProfileNotifications.js';
import ProfileGroupsPage from './pages/ProfileGroups.js';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact><NavWrapper><Home /></NavWrapper></Route>

        <Route path="/login" exact><LoginPage /></Route>
        <Route path="/register" exact><RegisterPage /></Route>

        <Route path="/group/create/"><NavWrapper><GroupCreatePage /></NavWrapper></Route>
        <Route path="/group/verify/"><NavWrapper><GroupVerifyCompetenciesPage /></NavWrapper></Route>
        <Route path="/group/"><NavWrapper><GroupPage /></NavWrapper></Route>

        <Route path="/competency/search/"><NavWrapper><SearchCompetencyPage /></NavWrapper></Route>
        <Route path="/competency/validate"><NavWrapper><ValidateCompetencyPage /></NavWrapper></Route>
        <Route path="/competency/validation"><NavWrapper><CompetencyValidationPage /></NavWrapper></Route>
        <Route path="/competency/verify"><NavWrapper><VerifyCompetencyPage /></NavWrapper></Route>
        <Route path="/competency/"><NavWrapper><CompetencyPage /></NavWrapper></Route>

        <Route path="/section/"><NavWrapper><SectionPage /></NavWrapper></Route>
        
        <Route path="/company/search/:query?"><NavWrapper><SearchCompetencyPage /></NavWrapper></Route>
        <Route path="/company/:competencyId"><NavWrapper><CompetencyPage /></NavWrapper></Route>     
        
        <Route path="/profile/notifications"><NavWrapper><ProfileNotificationsPage /></NavWrapper></Route>
        <Route path="/profile/competencies"><NavWrapper><ProfileCompetenciesPage /></NavWrapper></Route>
        <Route path="/profile/groups"><NavWrapper><ProfileGroupsPage /></NavWrapper></Route>
        <Route path="/profile/messages"><NavWrapper><Home /></NavWrapper></Route>
        <Route path="/profile"><NavWrapper><ProfilePage /></NavWrapper></Route>
      </Switch>
    </Router>
  );
}

export default App;
