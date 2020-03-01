import React, { Component } from 'react';

class UserTable extends Component {
  render() {
    const { users, userDelete, userEdit } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Username</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => {
                      userEdit(user);
                    }}
                  >
                    Edit
                  </button>
                  <button type="button" onClick={() => userDelete(user.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td>No users</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }
}

export default UserTable;
