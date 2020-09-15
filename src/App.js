import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Sonnet from './components/Sonnet';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div>
				Nom Profile
      </div>
      <div>
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
				<Tab eventKey="home" title="Home">
						<Sonnet />
				</Tab>
				<Tab eventKey="profile" title="Profile">
						<Sonnet />
				</Tab>
				<Tab eventKey="contact" title="Contact">
						<Sonnet />
				</Tab>
				</Tabs>
			</div>
      </header>
    </div>
  );
}

export default App;
