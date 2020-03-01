import React, { useState } from 'react';
import UserTable from './UserTable';
import EditUserForm from './EditUserForm';
import AddUserForm from './AddUserForm';

const CrudwithHooks = () => {
  const usersData = [
    { id: 1, name: 'Heena', username: 'HeenaAsad' },
    { id: 2, name: 'Asad', username: 'Asadullah' },
  ];

  const initialFormState = { id: null, name: '', username: '' };

  const [users, setUsers] = useState(usersData);
  const [currentUser, setCurrentUser] = useState(initialFormState);
  const [editing, setEditing] = useState(false);

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setEditing(false);

    setUsers(users.filter((user) => user.id !== id));
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);

    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  const editRow = (user) => {
    setEditing(true);

    setCurrentUser({ id: user.id, name: user.name, username: user.username });
  };

  return (
    <div className="hooks">
      <p>Crud with Hooks</p>
      {editing ? (
        <>
          <h3>Edit user</h3>
          <EditUserForm
            setEditing={setEditing}
            currentUser={currentUser}
            updateUser={updateUser}
          />
        </>
      ) : (
        <div>
          <h4>Add user</h4>
          <AddUserForm addUser={addUser} />
        </div>
      )}
      <h4>View users</h4>
      <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
    </div>
  );
};
export default CrudwithHooks;
