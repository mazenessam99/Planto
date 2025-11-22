
import DeliveryCard from '../components/layout/DeliveryCard'
import Hero from '../components/layout/Hero'
import Navbar from '../components/layout/Navbar'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <DeliveryCard/>
        <BestSeller/>
    </div>
  )
}

export default Home