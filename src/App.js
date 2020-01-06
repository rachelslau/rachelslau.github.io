import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Current from './pages/current/Current.js';
import About from './pages/about/About.js';
import Experience from './pages/about/Experience.js';
import Hobbies from './pages/about/Hobbies.js';
import Projects from './pages/projects/Projects.js';
import Film from './pages/photos/Film.js';
import iPhone from './pages/photos/iPhone.js';
import './Overall.css';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Current} />
        <Route path='/about' component={About} />
        <Route path='/about-experience' component={Experience} />
        <Route path='/about-hobbies' component={Hobbies} />
        <Route path='/projects' component={Projects} />
        <Route path='/photos-film' component={Film} />
        <Route path='/photos-iphone' component={iPhone} />
      </Switch>
    );
  }
}

export default App;
