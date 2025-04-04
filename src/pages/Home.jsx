import { useLocation } from 'react-router-dom'
import Banner from '../components/Banner/Banner'
import Blog from '../components/Blog/Blog'
{/*import Header from '../components/Header/Header'*/}
import Services from '../components/Services/Services'
import Testimony from '../components/Testimony/Testimony'
import { useEffect } from 'react'


const Home = () => {
  const location=useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);


  return (
    <div>
      {/*<Header/>*/}
      <Banner/>
      <Services/>
      <Blog/>
      <Testimony/>
    </div>
  )
}

export default Home