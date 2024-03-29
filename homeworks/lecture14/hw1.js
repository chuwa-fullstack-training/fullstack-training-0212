import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GitHubUserList = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    axios.get('https://api.github.com/users').then((response) => {
      setUsers(response.data);
    });
  }, []);

  const handleUserClick = (username) => {
    axios.get(`https://api.github.com/users/${username}`).then((response) => {
      setSelectedUser(response.data);
    });
  };

  return (
    <div className="github-user-list">
      <div className="user-list">
        {users.map((user) => (
          <div key={user.id} onClick={() => handleUserClick(user.login)}>
            <img src={user.avatar_url} alt={user.login} />
            <p>{user.login}</p>
          </div>
        ))}
      </div>
      {selectedUser && (
        <div className="user-profile">
          <img src={selectedUser.avatar_url} alt={selectedUser.login} />
          <h3>{selectedUser.name || selectedUser.login}</h3>
        </div>
      )}
    </div>
  );
};

export default GitHubUserList;
