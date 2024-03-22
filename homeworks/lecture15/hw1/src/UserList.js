import UserItem from "./UserItem";

function UserList({users, handleClick}) {
    return (
        <ul className="user-list-container">
            <div className="column-name">
                <div className='user-id'>ID</div>
                <div className='user-username'>Username</div>
                <div className='user-username'>Image</div>
            </div>
          {users.map((user) => (
            <UserItem
              id={user.id}
              key={user.id}
              username={user.login}
              avatar_url={user.avatar_url}
              handleClick={handleClick}
            />
          ))}
        </ul>
      );
}
export default UserList;