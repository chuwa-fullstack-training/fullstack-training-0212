import { Navigate, useNavigate } from 'react-router-dom';
import React, { useMemo, useState, useEffect } from "react";
import UserList from './UserList';
import axios from 'axios';

export default function ProtectedRoute() {    
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUsers = async() => {
          try {
            const response = await axios.get('https://api.github.com/users');
            setUsers(response.data);
          } catch(err) {
            console.error('Error fetching users: ', err);
          }
        }
        fetchUsers();
    }, []);

    const user = useMemo(() => localStorage.getItem('user'), []);

    if(!user) {
        return <Navigate to="/login" />;
    }    
    const handleClick = async(id) => {
      const user = users.find((u) => u.id === id);
      if(user) {
        try {
          const userResponse = await axios.get(user.url);
          const repoResponse = await axios.get(user.repos_url);
          
          const data = {selectedDetail: userResponse.data, selectedRepo: repoResponse.data};
          console.log(data);
          navigate(`/users/${user.login}`);
        } catch(err) {
          console.error('Error fetching user detail or repo detail: ', err);
        }
      }
    }
  
    return (
      <div>
        <UserList
          users={users}
          handleClick={handleClick}
        />
      </div>
    );
}