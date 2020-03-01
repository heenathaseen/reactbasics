import React, { Component } from 'react';

const initialFormState = { id: null, name: "", username: "" };

class AddUserForm extends Component {
  state = initialFormState;

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (!this.state.name || !this.state.username) return;

    this.props.userAdd({
      id: null,
      name: this.state.name,
      username: this.state.username
    });

    this.setState(initialFormState);
  };


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleInputChange}
        />
        <label>Username</label>
        <input
          type="text"
          name="name"
          value={this.state.username}
          onChange={this.handleInputChange}/>
        <button type="submit">Add new user</button>
      </form>
    );
  }
}

export default AddUserForm;
