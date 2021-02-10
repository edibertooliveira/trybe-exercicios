import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css'

class Header extends Component {

  renderRouteLink(...props) {
    return (
      <>
        <Link {...props} >Inicio</Link>
      </>
    )
  }
  render() {
    return (
      <header className="header-pages">
        <nav className="navbar-route">
          <Link to="/">Inicio</Link>
          <Link to="/page/projects">Projetos</Link>
          <Link to="/page/about">Sobre mim</Link>
          <Link to="/page/contact"> Contato</Link>
        </nav>
      </header>
    );
  }
}

export default Header;