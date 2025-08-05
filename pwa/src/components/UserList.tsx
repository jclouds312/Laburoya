import React, { useEffect, useState } from 'react';
import { getAllUsers } from '../api/api';

export const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers().then(response => setUsers(response.data));
  }, []);

  return (
    <div>
      <h2>Usuarios Registrados</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name} - {user.role}</li>
        ))}
      </ul>
    </div>
  );
};
