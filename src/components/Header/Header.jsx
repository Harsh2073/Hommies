import {Link} from 'react-router-dom'
import Logo from '/src/assets/logo.png'


const Header = () => {
  return (
    <header className='py-6 mb-12 border-b'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link to='/'>
          <img src={Logo}/>
        </Link> 
        <div className='flex items-center gap-6'>
          <Link className='hover:text-violet-900 transition' to='/LogIn'>Log in</Link>
          <Link className='bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition' to='/SignUp'>Sign up</Link>
        </div>
      </div>
    </header>   
  )
}

export default Header