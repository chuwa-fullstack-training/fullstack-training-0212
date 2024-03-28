import React, { useState, useEffect } from 'react';
import axios from 'axios';
const MAX_REPOS = 5;

function Profile({ user }) {

  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    if (user) {
      axios.get(user.repos_url)
        .then(response => {
          setRepositories(response.data);
        })
        .catch(error => {
          console.error('Error fetching repositories:', error);
        });
    }
  }, [user]);

  return (
    <div className="user-profile">
      <h2>Profile</h2>
      {user && (
        <div>
          <img src={user.avatar_url} alt={user.login} />
          <p><strong>Username:</strong> {user.login}</p>
          <p><strong>Name:</strong> {user.name}</p>
          <h3>Repositories:</h3>
          <ul>
            {repositories.map((repo,index) => index<MAX_REPOS&&(
              <li key={repo.id}>
                <strong>Name:</strong> {repo.name}<br />
                <strong>Description:</strong> {repo.description}<br />
                <strong>URL:</strong> <a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.html_url}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Profile;
