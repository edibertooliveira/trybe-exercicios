import React, { Component } from "react";
import pokemons from "./data";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      textoDoFiltro: "Digite o nome do pokemon",
    };
  }

  handleChange(event) {
    this.setState({ textoDoFiltro: event.target.value });
  }
  render() {
    const stateCurrent = this.state.textoDoFiltro;
    return (
      <form className="App">
        <div>
          <input
            type="text"
            placeholder={this.state.textoDoFiltro}
            onChange={this.handleChange}
          />
        </div>
        <ul>
          {stateCurrent === "" ? (
            <li>Digite o nome do pokemon</li>
          ) : (
            pokemons
              .filter(({ name }) =>
                name.english.toLowerCase().includes(stateCurrent)
              )
              .map(({ name }, index) => <li key={index}>{name.english}</li>)
          )}
        </ul>
      </form>
    );
  }
}

export default App;
