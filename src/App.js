import React from 'react';
import logo from './logo.svg';
import HeaderBar from './components/HeaderBar.js';
import SideNav from './components/SideNav.js';
import Test from './pages/Test.js';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { LoremIpsum } from 'react-lorem-ipsum';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  return (
    <>
      <SideNav>
        <header>
          <HeaderBar />
        </header>
        <body className>
          <a href="home">Home</a>
          <LoremIpsum p={20} />
          <Router>
            <Route path="/home" component={Test}/>
            <Route path="/notifications" component={Test}/>
            <Route path="/messages" component={Test}/>
          </Router>
        </body>
      </SideNav>
    </>
  );
}

export default App;
