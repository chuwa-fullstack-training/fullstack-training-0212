import { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [profile, setProfile] = useState(null);
  useEffect(() => {
    fetch("https://api.github.com/users", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  const handleClick = (user) => {
    return async () => {
      const repos = await fetch(user.repos_url, { method: "GET" }).then((res) =>
        res.json(),
      );
      setProfile(
        <>
          <img
            src={user.avatar_url}
            alt={user.login}
            className="w-40 h-40 rounded-full"
          />
          <p className="text-2xl font-bold">{user.login}</p>
          <ul>
            {repos.slice(0, 4).map((repo) => (
              <li key={repo.id}>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500"
                >
                  {repo.name}
                </a>
              </li>
            ))}
          </ul>
        </>,
      );
    };
  };
  return (
    <div className="flex h-screen w-screen bg-gray-50">
      <ul className="w-1/4 p-4 overflow-y-scroll border border-r-gray-300">
        {users.map((user) => (
          <li
            key={user.id}
            className="flex mb-4 items-center"
            onClick={handleClick(user)}
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-20 h-20 rounded-full"
            />
            <p className="pl-2 text-lg font-bold">{user.login}</p>
          </li>
        ))}
      </ul>
      <div className="w-3/4 p-4">{profile}</div>
    </div>
  );
}

export default App;
