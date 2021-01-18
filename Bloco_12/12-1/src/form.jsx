import React, { Component } from "react";

class FormList extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      textoDoFiltro: undefined,
    };
  }

  handleChange(event) {
    this.setState({ textoDoFiltro: event.target.value });
    console.log(event.target.value);
  }
  render() {
    return (
      <form>
        <input type="text" onChange={this.handleChange} />
      </form>
    );
  }
}

export default FormList;
