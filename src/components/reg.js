import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  axios.defaults.baseURL = 'https://streaming-api-1.herokuapp.com';

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { name, email, birthday, pass, passConfirm, image } = event.target;

    console.log(name.value)

    const regData = {
      name: name.value,
      email: email.value,
      birthdate: birthday.value,
      password: pass.value,
      passwordConfirmation: passConfirm.value,
      imageUrl: image.value
    };

    if (pass.value !== passConfirm.value) {
      alert("Passwords don't match")
    } else {
      await axios.post('/user/create', regData)
      .then(() => {
        navigate('/login');
      })
      // .catch the ball in next project!
    }
  }

  return (
    <div className='login'>
      <form action='' className='flex__center' onSubmit={handleSubmit}>
      <input
          type='text'
          name='name'
          required 
          placeholder='Name'
        />
        <input
          type='text'
          name='email'
          required
          placeholder='E-mail'
        />
        <input
          type='text'
          name='birthday'
          required
          placeholder='Birthday'
        />
        <input
          type='password'
          name='pass'
          required
          placeholder='Pass'
        />
        <input
          type='password'
          name='passConfirm'
          required
          placeholder='Confirm pass'
        />
        <input
          type='text'
          name='image'
          required
          placeholder='Image Url'
        />
        <button type='submit' className='nav__buttons'>
          Register
        </button>
      </form>
    </div>
  )
}

export default Register;