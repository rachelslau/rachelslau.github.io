import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Current from './pages/current/Current.js';
import About from './pages/about/About.js';
import Projects from './pages/projects/Projects.js';
import Photos from './pages/photos/Photos.js';

import './Overall.css';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Current} />
        <Route path='/about' component={About} />
        <Route path='/projects' component={Projects} />
        <Route path='/photos' component={Photos} />
      </Switch>
    );
  }
}

export default App;
