import React, { Component } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import './css/styles.js';

class App extends Component {
  render() {
    return (
        <div className="header-container">
			    <Header/>
					<div className="home-container">
            <Home/>
					</div>
			  </div>
    );
  }
}

export default App;
