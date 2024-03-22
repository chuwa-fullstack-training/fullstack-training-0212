import React from 'react';
import { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function UserDetails() {
    const[userDetail, setUserDetail] = useState(null);
    const[userRepos, setUserRepos] = useState(null);
    const {login} = useParams();
    const navigate = useNavigate();

    const user = useMemo(() => localStorage.getItem('user'), []);

    if(!user) {
        navigate('/login');
    }

    useEffect(() => {
        const fetchUsers = async() => {
          try {
            const userResponse = await axios.get(`https://api.github.com/users/${login}`);
            const repoResponse = await axios.get(`https://api.github.com/users/${login}/repos`)
            console.log(userResponse);
            console.log(repoResponse);
            setUserDetail(userResponse.data);
            setUserRepos(repoResponse.data);
          } catch(err) {
            console.error('Error fetching users: ', err);
          }
        }
        fetchUsers();
      }, []);
    if (!userDetail || !userRepos) {
        return <div>Loading...</div>;
    }
    return (
        <div className="user-profile-container card row no-gutters" style={{maxHeight: '300px'}}>
            <div className='col-md-4'>
                <img
                    src={userDetail.avatar_url}
                    alt='avatar'
                    className='profile-img'
                />
            </div>
            <div className="col-md-8">
                <div className='card-body'>
                    <label className="card-title user-name">{userDetail.name}</label>
                    <div className='detail-container'>
                        <p className='card-text'>Location: {userDetail.location}</p>
                        <ul>
                            {userRepos.slice(0, 3).map((repo) => {
                                return (
                                    <li key={repo.id}>
                                        <a href={repo.html_url}>{repo.name}</a>
                                        <p>{repo.description}</p>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default UserDetails;