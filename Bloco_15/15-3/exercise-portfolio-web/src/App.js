import React from 'react';
import './App.css';
import {
  Route, Switch, Link,
} from 'react-router-dom';

import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <div>
      <div className="content">
        <p>
          <Link to="/">Inicio</Link>
          <Link to="/page/projects">Projetos</Link>
          <Link to="/page/about">Sobre mim</Link>
          <Link to="/page/contact"> Contato</Link>
        </p>
      </div>
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
