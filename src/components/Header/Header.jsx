import {Link} from 'react-router-dom'
import Logo from '/src/assets/logo.png'


const Header = () => {
  return (
    <header className='p-2 border-b'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link to='/'>
          <img src={Logo} className='w-50 h-25'/>
        </Link>
        <div className='md:flex gap-10'>
          <Link className='transition text-2xl hover:bg-violet-900 hover:text-white hover:p-2 hover:rounded-lg' to='/'>Home</Link>
          <Link className='transition text-2xl hover:bg-violet-900 hover:text-white hover:p-2 hover:rounded-lg' to='/House'>House</Link>
          <Link className='transition text-2xl hover:bg-violet-900 hover:text-white hover:p-2 hover:rounded-lg' to='/Agents'>Agents</Link>
        </div> 
        <div className='flex justify-end items-center text-2xl w-auto gap-6'>
          <Link className='hover:text-violet-900 transition' to='/LogIn'>Log in</Link>
          <Link className='bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition' to='/SignUp'>Sign up</Link>
        </div>
      </div>
    </header>   
  )
}

export default Header