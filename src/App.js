import React, { Component } from 'react'

export class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      todos: [
        'Learn React',
        'Do Laundry',
        'new Task',
        'New task from HP'
      ],
      todoToAdd: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleChange(event) {
    const nextTodoToAdd = event.target.value;

    this.setState({
      todoToAdd: nextTodoToAdd
    });
  }
  handleClick(event) {
    const nextTodos = this.state.todos.concat(this.state.todoToAdd);
    const nextTodoToAdd = '';

    this.setState({
      todos: nextTodos,
      todoToAdd: nextTodoToAdd
    });
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.todos.map((todo, index) => <li key={index}>{todo}</li>)}
        </ul>
        <input type="text" placeholder="New TODO" 
        value={this.state.todoToAdd}
        onChange={this.handleChange}/>
        <button onClick={this.handleClick}>Add TODO</button>
      </div>
    )
  }
}

export default App


