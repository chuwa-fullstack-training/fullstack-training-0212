import React, {useState, useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserList from './UserList';
import axios from 'axios';
import UserProfile from './UserProfile';


function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const[selectedDetail, setSelectedDetail] = useState(null);
  const[selectedRepo, setSelectedRepo] = useState(null);
  
  const handleClick = async(id) => {
    const user = users.find((u) => u.id === id);
    if(user) {
      try {
        const userResponse = await axios.get(user.url);
        const repoResponse = await axios.get(user.repos_url);
        
        setSelectedDetail(userResponse.data);
        setSelectedRepo(repoResponse.data);
        setSelectedUser(user);
      } catch(err) {
        console.error('Error fetching user detail or repo detail: ', err);
      }
    }
  }

  useEffect(() => {
    console.log('selectedDetail:', selectedDetail);
    console.log('selectedRepo:', selectedRepo);
  }, [selectedDetail, selectedRepo]);

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

  return (
    <div className="container">
      <UserList
        users={users}
        handleClick={handleClick}
      />
      {selectedUser ? 
        <UserProfile
          selectedDetail={selectedDetail}
          selectedRepo={selectedRepo}
        /> : <p className='user-profile-container'>Select a user to view their profile</p>}
    </div>
  );
}

export default App;
