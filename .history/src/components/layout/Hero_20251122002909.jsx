import HeroImg from "../../assets/images/Hero.png"
import Button from "../ui/Button"
const Hero = () => {
  return (
    <section className="container rounded-xl relative  h-96 bg-no-repeat mt-10" style={{ backgroundImage: `url(${HeroImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
>
        <div className="absolute inset-0 bg-black/40 rounded"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 md:px-0 space-y-4 text-center">
            <h1 className=" text-white text-2xl md:text-4xl lg:text-5xl font-serif">Bring Nature Indoors</h1>
            <h2 className=" text-white/90 text-sm md:text-base lg:text-lg max-w-2xl font-normal">Discover our collection of beautiful, high-quality plants to liven up your space and purify your air.</h2>
            <Button className="btn-green font-bold mt-4">Shop All Plants</Button>
        </div>

    </section>
  )
}

export default Hero