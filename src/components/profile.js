import axios from "axios";
import { React, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Profile = () => {

  axios.defaults.baseURL = 'https://streaming-api-1.herokuapp.com';

  const navigate = useNavigate();

  if (localStorage.getItem('token') == null) {
    navigate('/login');
  }

  const [user, setUser] = useState('');
  const getUser = async () => {
    const user = await axios.get('/auth/profile', {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    setUser(user.data);
  };

  useEffect(() => {
    getUser().catch(() => {
      navigate("/login");
    });
  }, []);

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/');
  }

  return (
    <div className='flex__center'>
      <img src={user.imageUrl} alt=''/>
      <h2>{user.name}</h2>
      <h2>{user.email}</h2>
      <h2>{user.birthdate}</h2>
      <Link to={'/mylist'}>
        <button className='nav__buttons'>
          <h3>My Movies</h3>
        </button>
      </Link>
      <button onClick={logout} className='nav__buttons'>
          <h3>Logout</h3>
        </button>
    </div>
  )
}

export default Profile;