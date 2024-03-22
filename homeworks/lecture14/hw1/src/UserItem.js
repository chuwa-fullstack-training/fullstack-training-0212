import React from 'react';

function UserItem({id, username, avatar_url, handleClick}) {
    // id username image
    const handleClickUser = () => {
        handleClick(id);
    }
    return(
        <li
            className='user-item'
            onClick={handleClickUser}
            key={id}
        >
            <div className='user-id'>{id}</div>
            <div className='user-name'>{username}</div>
            <img className='user-avatar' src={avatar_url} alt="avatar"></img>
        </li>
    );
}

export default UserItem;