import React, { Component } from 'react';
import TodoList from './TodoList';
import UserForm from './UserForm';
import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        name: 'Get Money Get Paid',
        isStrikeThrough: false,
        shouldEdit: false
      },
      {
        name: 'Do it to \'em',
        isStrikeThrough: false,
        shouldEdit: false
      }
    ]
  };

  addNewTodo = (todoInfo) => {
    this.setState(prevState => ({
      todos: prevState.todos.concat(todoInfo)
    }));
  };

  markAsComplete = (todoInfo) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.name === todoInfo) {
          todo.isStrikeThrough = !todo.isStrikeThrough;
        }
        return todo;
      })
    })
  }

  toggleEdit = (todoInfo) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.name === todoInfo) {
          todo.shouldEdit = !todo.shouldEdit;
        }
        return todo;
      })
    });
  }

  setTodo = (newName, oldName) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.name === oldName) {
          todo.name = newName; 
        }
        return todo;
      })
    });
  }

  deleteTodo = (todoInfo) => {
    const filteredItems = this.state.todos.filter(todo => {
      return todo.name!== todoInfo;
    })
    this.setState({
      todos: filteredItems
    });
  }

  render() {
    return (
      <div className="App">
        <h2>Mazz's Super Sunday Slam Todo List, ya bish</h2>
        <UserForm onSubmit={this.addNewTodo}/>
        <TodoList todos={this.state.todos} 
                  markAsComplete={this.markAsComplete}
                  toggleEdit={this.toggleEdit}
                  deleteTodo={this.deleteTodo}
                  setTodo={this.setTodo}
                  />
      </div>
    );
  }
}

export default App;
