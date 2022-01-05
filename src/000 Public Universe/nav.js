import './nav.css';

const PublicNav = () => (
  <div className='nav'>
    <form className='nav_searchbox'>
        <input type='text' placeholder='Search Movies...' required />
        <input type='submit' value='search' />
    </form>
    <div>
      <button className='nav_buttons'>
        <h3>Login</h3>
      </button>
      <button className='nav_buttons'>
        <h3>Sign Up</h3>
      </button>
    </div>
  </div>
)

export default PublicNav;