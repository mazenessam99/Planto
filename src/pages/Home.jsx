import BestSeller from '../Sections/Home/BestSeller'
import DeliveryCard from '../Sections/Home/DeliveryCard'
import Footer from '../components/layout/Footer'
import Hero from '../Sections/Home/Hero'
import Navbar from '../components/layout/Navbar'
import Subscribtion from '../Sections/Home/Subscribtion'
import Testimonials from '../Sections/Home/Testimonials'

const Home = () => {
  return (
    <main>
        
        <Hero/>
        <DeliveryCard/>
        <BestSeller/>
        <Testimonials/>
        <Subscribtion/>
        
    </main>
  )
}

export default Home