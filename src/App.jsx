import Landingpage from './components/Landingpage'
import Navbar from './components/Navbar'
import Marque from './components/Marque'
import About from './components/About'
import Eyes from './components/Eyes'
import Featured from './components/Featured'
import Cards from './components/Cards'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';
import Eyes2 from './components/Eyes2'


const App = () => {

const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full min-h-screen text-black bg-gray-200'>
      <Navbar />
      <Landingpage />
      <Marque />
      <About />
      <Eyes />
      <Featured />
      <Cards />
      <Eyes2 />
      <Footer />
    </div>
  )
}

export default App