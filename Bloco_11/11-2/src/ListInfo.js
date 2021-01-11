import React, { Component } from "react";
import "./App.css";
import PropTypes from "prop-types";

class ListInfo extends Component {
  render() {
    const { image, name, type, averageWeight } = this.props.data;
    return (
      <div>
        <img src={image} alt="" />
        <div>{name}</div>
        <div>{type}</div>
        <span>AverageWeight: {averageWeight.value}</span>
      </div>
    );
  }
}

ListInfo.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  averageWeight: PropTypes.number.isRequired,
};

export default ListInfo;
