import React, { Component } from "react";
import UserTable from "./UserTable";
import AddUserForm from "./AddUserForm";
import EditUserForm from "./EditUserForm";

const usersData = [
  { id: 1, name: "Heena", username: "HeenaAsad" },
  { id: 2, name: "Asad", username: "Asadullah" },
];

const initialFormState = { id: null, name: "", username: "" };

class CrudWoHooks extends Component {

  state = {
    users: usersData,
    editing: false,
    currentuser: initialFormState,
  }

  addUser = (user) => {
    user.id = this.state.users.length + 1;
    this.setState(({ users }) => ({ users: [user, ...users] }));
  };

  deleteUser = id => {
    this.setState({
      users: this.state.users.filter(user => user.id !== id)
    });
  };

  editUser = user => {
    this.setState({
      editing: true,
      currentuser: { id: user.id, name: user.name, username: user.username }
    });
  };

  setEditing = ed => {
    this.setState({
      editing: ed
    });
  };

  updateUser = (id, updatedUser) => {
    this.setState({
      editing: false,
      users: this.state.users.map(user => (user.id === id ? updatedUser : user))
    });
  };
 

  setEditing = ed => {
    this.setState({
      editing: ed
    });
  };

  render() {
    const { editing, users, currentuser } = this.state;
    return (
      <div>
        <p> CRUD App without Hooks </p>
        {editing ? (
          <>
            <h2>Edit user</h2>
            <EditUserForm 
            setEditing={this.setEditing}
            currentUser={currentuser}
            userUpdate={this.updateUser}
            />
          </>
        ) : (
          <>
            <h2>Add User</h2>
            <AddUserForm userAdd={this.addUser}/>
          </>
        )}
        <UserTable
          users={users} 
          userEdit={this.editUser} 
          userDelete={this.deleteUser}
        />
      </div>
    );
  }
}

export default CrudWoHooks;
