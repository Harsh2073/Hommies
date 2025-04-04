import {Routes,Route} from 'react-router-dom';
import './App.css'

import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import PropertyDetails from './pages/PropertyDetails'
import LogIn from './components/Authentication/LogIn'
import SignUp from './components/Authentication/SignUp'
import Agents from './components/Agents/Agents';
import Header from './components/Header/Header';
import Property from './components/Property/Property';

function App() {
  return (
    <div className='max-w-[1920px] mx-auto bg-#F2EBF2'>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/property' element={<Property/>}/>
        <Route path='/Agents' element={<Agents/>}/>
        <Route path='/property/:id' element={<PropertyDetails/>}/>
        <Route path='/LogIn' element={<LogIn/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
    