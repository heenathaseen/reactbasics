import React, { Component } from "react";
import shortid from "shortid";
import "./Todo.scss";

class TodoForm extends Component {
  state = {
    todoText: ""
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    this.props.add({
      id: shortid.generate(),
      text: this.state.todoText,
      completed: false
    });
    this.setState({ todoText: "" });
  };

  render() {
    const { todoText } = this.state;
    return (

      <form onSubmit={this.handleSubmit}>
        <input
          name="todoText"
          type="text"
          value={todoText}
          onChange={this.handleChange}
          placeholder="Enter Todo"
        />
        <button type="submit">Add Todo</button>
      </form>
    );
  }
}

class TodoText extends Component {
  render() {
    const { todo, completeFunc, deleteFunc } = this.props;
    return (
      <div className="todo-text">
        {todo.id && (
          <>
            <h3 style={{ textDecoration: todo.completed && "line-through" }}>
              {todo.text}
            </h3>
            <p style={{ cursor: "pointer" }}>
              {todo.completed ? (
                <span role="img" onClick={() => completeFunc(todo.id)}>
                  &#11088;
                </span>
              ) : (
                <span role="img" onClick={() => completeFunc(todo.id)}>
                  &#9989;
                </span>
              )}
            </p>
            <p style={{ cursor: "pointer" }}>
              <span role="img" onClick={() => deleteFunc(todo.id)}>
                &#10062;
              </span>
            </p>
          </>
        )}
      </div>
    );
  }
}

class Todo extends Component {
  state = {
    todos: []
  
  };

  addTodo = todo => {
    this.setState(({ todos }) => ({ todos: [todo, ...todos] }));
  };

  completeTodo = id => {
    this.setState(({ todos }) => ({
      todos: todos.map(t => {
        if (t.id === id) {
          return { ...t, completed: !t.completed };//... is spread used for addition
        } else {
          return t;
        }
      })
    }));
  };

  deleteTodo = id => {
    this.setState(({ todos }) => ({
      todos: todos.filter(t => t.id !== id)
    }));
  };

  render() {
    const { todos } = this.state;
    return (
      <>
        <TodoForm add={this.addTodo} />
        {todos.map(s => (
          <TodoText
            key={s.id}
            todo={s}
            completeFunc={this.completeTodo}
            deleteFunc={this.deleteTodo}
          />
        ))}
      </>
    );
  }
}

export default Todo;
