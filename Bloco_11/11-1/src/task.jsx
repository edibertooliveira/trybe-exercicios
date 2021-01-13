import React, { Component } from "react";

class task extends Component {
  render() {
    const { value } = this.props;
    return <li>{value}</li>;
  }
}

export default task;
