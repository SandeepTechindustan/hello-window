import React, { Component } from 'react';
import './App.css';
import MyComponent from './components/MyComponent'
import About from './components/About'
import Contact from './components/Contact'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './containers/Home'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
      		<Route exact path="/" component={Home} />
      		<Route path="/home" component={MyComponent} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    );
  }
}

export default App;
