import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {  
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const login = { email: user, password: pass };

    axios.post('/auth/login', login)
    .then((res) => {
      const token = res.data.token;
      localStorage.setItem('token', token);
      navigate('/');
    })
    .catch((err) => {
      
    })
  }

  return (
    <div className='login'>
      <form className='flex__center'>
        <input
          type='text'
          name='user'
          required 
          onChange={(event) => setUser(event.target.value)}
          placeholder='E-mail...'
        />
        <input
          type='password'
          name='pass'
          required
          onChange={(event) => setPass(event.target.value)}
          placeholder='Password...'
        />
        <button onClick={handleSubmit} className='nav__buttons'>
          Login
        </button>
      </form>
    </div>
  )
}

export default Login;