import React, { Component } from 'react';
import './App.css';
import MyComponent from './components/MyComponent'
import About from './components/About'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './containers/Home'

class App extends Component {
  render() {
    return (
      <Router>
      	<div>
      		<Route exact path="/home" component={MyComponent} />
      		<Route path="/" component={Home} />
      	</div>
      </Router>
    );
  }
}

export default App;
