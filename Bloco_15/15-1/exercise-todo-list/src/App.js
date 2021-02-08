import React, { Component } from 'react';
import InputTodo from './InputTodo';
import Item from './Item';
import './app.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      listTodo: [],
      hasDisabled: true
    };

    this.addTodo = this.addTodo.bind(this);
    this.activeRemove = this.activeRemove.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  addTodo(todo) {
    const data = new Date().toLocaleTimeString().replace(/[^\d]+/g, '');
    const todoItem = {
      id: data,
      item: todo,
      classItem: 'item'
    }
    this.setState((state) => ({ listTodo: [...state.listTodo, todoItem] }));
  }

  activeRemove({item, bool}) {
    const { listTodo } = this.state
    const newListTodo = []
    listTodo.forEach((key, index)=>{
      if(key.id === item) {
        if(key.classItem === 'selected') {
          key.classItem = 'item';
          item = ''
          bool = true
        } else {
          key.classItem = 'selected';
        }
      } else {
        key.classItem = 'item';
      } 
      newListTodo[index] = key
    })
    this.setState((state)=> ({
      ...state, listTodo: newListTodo,  selected: item, hasDisabled: bool
    }));
  }

  deleteTodo(){
    const { listTodo, selected } = this.state
    const newListTodo = listTodo.filter(({id})=> id !== selected)
    this.setState((state)=> ({
      ...state, hasDisabled: true, listTodo: newListTodo , selected: '' 
    }));
  }

  render() {
    const { listTodo, hasDisabled } = this.state;
    return (
      <div className="App">
        <InputTodo addTodo={(todo) => this.addTodo(todo)} />
        <input name="remove" 
        type="button"  
        value="Remover" 
        data-testid="id-remove" 
        disabled={hasDisabled || false} 
        onClick={this.deleteTodo}/>
        {listTodo &&
          <ul>
            {
              listTodo.map((todo, index) => (
                <li key={index + 1}>
                  <Item content={todo.item} classItem={todo.classItem} itemId={todo.id} active={ this.activeRemove } />
                </li>
              ))
            }
          </ul>
        }
        
      </div>
    );
  }
}
export default App;