import { useState, useEffect } from "react";
import {
  Outlet,
  Routes,
  Route,
  Link,
  useParams,
  useNavigate,
  useLocation,
} from "react-router-dom";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen w-screen bg-gray-100 items-center">
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="users" element={<Users />} />
          <Route path="users/:login" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
};

const Home = () => {
  const [loggedIn, setLoggedIn] = useState(localStorage.loggedIn === "true");
  return (
    <>
      <h1 className="text-3xl font-bold text-center">Home</h1>
      {loggedIn ? (
        <>
          <h2 className="text-2xl font-bold text-center">Welcome!</h2>
          <button
            className="block mx-auto mt-4 px-4 py-2 bg-blue-500 text-white rounded"
            onClick={() => {
              setLoggedIn(false);
              localStorage.setItem("loggedIn", false);
            }}
          >
            Logout
          </button>
        </>
      ) : (
        <Link to="/login" className="text-blue-500 text-center underline">
          Login
        </Link>
      )}
    </>
  );
};

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className="flex flex-col w-1/3">
      <h1 className="text-3xl font-bold text-center">Login</h1>
      <label htmlFor="username" className="block text-xl py-4">
        username
      </label>
      <input id="username" type="text" className="block mx-auto p-2 w-full" />
      <label htmlFor="password" className="block text-xl py-4">
        password
      </label>
      <input
        id="password"
        type="password"
        className="block mx-auto p-2 w-full"
      />
      <button
        className="block mx-auto mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => {
          localStorage.setItem("loggedIn", true);
          if (location.state?.from) {
            navigate(location.state.from);
          } else {
            navigate("/");
          }
        }}
      >
        login
      </button>
    </div>
  );
};

const Users = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    if (localStorage.loggedIn !== "true") {
      navigate("/login", { state: { from: "/users" } });
    }
    fetch("https://api.github.com/users", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [navigate]);
  return (
    <ul className="w-1/4 p-4 overflow-y-scroll border border-r-gray-300">
      {users.map((user) => (
        <li key={user.id} className="flex mb-4 items-center">
          <img
            src={user.avatar_url}
            alt={user.login}
            className="w-20 h-20 rounded-full"
          />
          <Link to={`/users/${user.login}`} className="pl-2 text-lg font-bold">
            {user.login}
          </Link>
        </li>
      ))}
    </ul>
  );
};

const Profile = () => {
  const { login } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    if (localStorage.loggedIn !== "true") {
      navigate("/login", { state: { from: `/users/${login}` } });
    }
    fetch(`https://api.github.com/users/${login}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
    fetch(`https://api.github.com/users/${login}/repos`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setRepos(data);
      });
  }, [login, navigate]);
  return (
    <>
      <img
        src={user.avatar_url}
        alt={login}
        className="w-40 h-40 rounded-full"
      />
      <p className="text-2xl font-bold">name:</p>
      <p className="text-xl">{user.login}</p>
      <p className="text-2xl font-bold">location:</p>
      <p className="text-xl">{user.location || "Empty"}</p>
      <p className="text-2xl font-bold">repos:</p>
      <ul>
        {repos.slice(0, 4).map((repo) => (
          <li key={repo.id}>
            <p className="text-xl">{repo.name}</p>
            <a
              className="text-xl text-blue-500 underline"
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
            >
              {repo.html_url}
            </a>
          </li>
        ))}
      </ul>
      <Link
        to="/users"
        className="text-lg mt-40 ml-10 text-blue-500 underline self-start"
      >
        back to users
      </Link>
    </>
  );
};

export default App;
