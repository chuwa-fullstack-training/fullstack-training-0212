import React from 'react';

function UserProfile({selectedDetail, selectedRepo}) {
    console.log(selectedDetail);
    // console.log(selectedRepo);
    return (
        <div className="user-profile-container card row no-gutters" style={{maxHeight: '300px'}}>
            <div className='col-md-4'>
                <img
                    src={selectedDetail.avatar_url}
                    alt='avatar'
                    className='profile-img'
                />
            </div>
            <div className="col-md-8">
                <div className='card-body'>
                    <label className="card-title user-name">{selectedDetail.name}</label>
                    <div className='detail-container'>
                        <p className='card-text'>Location: {selectedDetail.location}</p>
                        <ul>
                            {selectedRepo.slice(0, 3).map((repo) => {
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
export default UserProfile;