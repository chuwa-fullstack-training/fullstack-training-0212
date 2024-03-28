import React, { useState } from 'react';
import UserList from './UserList';
import Profile from './Profile';
import "./App.css";

function GitHubList() {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserClick = (user) => {
    
    setSelectedUser(user);
  };

  return (
    <div className="github-list">
      <UserList onSelectUser={handleUserClick} />
      <Profile user={selectedUser} />
    </div>
  );
}

export default GitHubList;

