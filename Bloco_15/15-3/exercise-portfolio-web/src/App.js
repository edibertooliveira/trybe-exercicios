import React from 'react';
import './App.css';
import {
  Route, Switch
} from 'react-router-dom';

import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import Header from './components/Header/Header';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route
          exact
          path="/"
          component={ Home }
        />
        <Route
          path="/page/projects"
          component={ Projects }
        />
        <Route
          path="/page/about"
          component={ About }
        />
        <Route
          path="/page/contact"
          component={ Contact }
        />
      </Switch>
    </div>
  );
}

export default App;
