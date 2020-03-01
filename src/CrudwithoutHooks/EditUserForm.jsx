import React, { Component } from "react";

class EditUserForm extends Component {
  // Lifecycle
  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.user !== nextProps.currentUser) {
      return {
        user: nextProps.currentUser
      };
    }
  }

  state = {
    // user: { id: null, name: "", username: "" }
    user: this.props.currentUser
  };

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({ user: { ...this.state.user, [name]: value } });
  };


  render() {
    const { user } = this.state;
    const { setEditing, userUpdate } = this.props;
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          userUpdate(user.id, user);
        }}
      >
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={this.handleInputChange}
        />
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={this.handleInputChange}
        />
        <button type="submit">Update user</button>
        <button type="button" onClick={() => setEditing(false)}>
          Cancel
        </button>
      </form>
    );
  }
}

export default EditUserForm;
