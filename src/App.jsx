import {Routes,Route} from 'react-router-dom';
import './App.css'


import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import Home from './pages/Home'
import PropertyDetails from './pages/PropertyDetails'


function App() {
  return (
    <div className='max-w-[1440px] mx-auto bg-white'>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/property/:id' element={<PropertyDetails/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
