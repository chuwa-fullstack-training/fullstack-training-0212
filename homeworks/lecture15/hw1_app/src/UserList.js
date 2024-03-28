import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserList({ onSelectUser }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://api.github.com/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="user-list">
      <table>
        <thead>
          <tr>
            <th style={{ fontSize: '36px' }}>ID</th>
            <th style={{ fontSize: '36px' }}>Name</th>
            <th style={{ fontSize: '36px' }}>Image</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id} onClick={() => onSelectUser(user)}>
              <td onClick={() => onSelectUser(user)} style={{ fontSize: '36px' }} >{user.id}</td>
              <td onClick={() => onSelectUser(user)} style={{ fontSize: '36px' }} >{user.login}</td>
              <td onClick={() => onSelectUser(user)} ><img src={user.avatar_url} alt={user.login} style={{ width: '200px', height: '200px' }} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
