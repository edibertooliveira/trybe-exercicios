import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textTodo: '',
    };

    this.changeTextTodo = this.changeTextTodo.bind(this);
  }

  changeTextTodo(value) {
    this.setState({ textTodo: value });
  }

  addItem(value, callback) {
    this.setState({ textTodo: '' });
    callback(value);
  }

  render() {
    const {
      props: { addTodo },
      state: { textTodo },
    } = this;
    return (
      <div className="InputTodo">
        <label htmlFor="inputTodo">
          Tarefa:
          <input
            data-testid="inputTodo"
            id="inputTodo"
            type="text"
            value={textTodo}
            onChange={(e) => this.changeTextTodo(e.target.value)}
          />
        </label>
        <input
        data-testid="btnAdd"
          id="btnAdd"
          type="button"
          value="Adicionar"
          onClick={() => this.addItem(textTodo, addTodo)}
        />
      </div>
    );
  }
}
export default InputTodo;

InputTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
};
