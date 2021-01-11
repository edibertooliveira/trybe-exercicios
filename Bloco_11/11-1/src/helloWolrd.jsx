import React, { Component } from "react";

import Task from "./task";
import "./style.css";

class HelloWorld extends Component {
  render() {
    const data = ["React", "Vue", "Jest", "Angula", "Redux", "Next"];
    return (
      <div className="hello-World">
        <h1>Hello world!</h1>
        {data.map((value, index) => (
          <Task value={value} key={index} />
        ))}
      </div>
    );
  }
}

export default HelloWorld;
