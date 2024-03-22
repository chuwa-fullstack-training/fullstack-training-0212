import './App.css';
import {BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login';
import Users from './Users';
import UserDetails from './UserDetails';

export default function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<Login />} />
      <Route path="/users" element={<Users />} />
      <Route path='/users/:login' element={<UserDetails />} />
    </Routes>
    </Router>
  );
}

        
function Home() {
  const user = localStorage.getItem('user');
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem('user');
    navigate('/');
  };
  return(
    <>
      <h1>Home</h1>
      <nav>
        {user ? (
          <>
            <h2>Welcome {JSON.parse(localStorage.getItem('user')).username}</h2>
            <button onClick={handleLogOut}>Log Out</button>
          </>
          ) : (
            <Link to="login">Log In</Link>
          )
        }
      </nav>
    </>
  );
}