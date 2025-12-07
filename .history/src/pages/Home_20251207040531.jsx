import BestSeller from '../components/layout/BestSeller'
import DeliveryCard from '../components/layout/DeliveryCard'
import Hero from '../components/layout/Hero'
import Navbar from '../components/layout/Navbar'
import Subscribtion from '../components/layout/Subscribtion'
import Testimonials from '../components/layout/Testimonials'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <DeliveryCard/>
        <BestSeller/>
        <Testimonials/>
        <Subscribtion
        
    </div>
  )
}

export default Home