import {
  BrowserRouter as Router,
  Outlet,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoutes";
import Profile from "./Profile";
import UserList from "./UserList";
import Login from "./Login";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/users"
          element={
            <ProtectedRoute>
              <UserList />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

function Home() {
  const user = localStorage.getItem("user");
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("user");
    navigate("/");
  };
  return (
    <>
      <h1>Home</h1>
      <nav
        style={{ display: "flex", justifyContent: "space-around", width: 300 }}
      >
        <Link to="users">UserList</Link>
        <Link to="profile">Profile</Link>
        <Link to="signup">Sign up</Link>
        {user ? (
          <button onClick={handleLogOut}>Log out</button>
        ) : (
          <Link to="login">Log in</Link>
        )}
      </nav>
      <Outlet />
    </>
  );
}

function SignUp() {
  return <div>Sign Up Form</div>;
}
