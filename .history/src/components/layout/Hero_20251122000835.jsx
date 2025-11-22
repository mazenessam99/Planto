import HeroImg from "../../assets/images/Hero.png"
import Button from "../ui/Button"

const Hero = () => {
  return (
    <section
      className="container rounded-xl relative h-96 md:h-[500px] lg:h-[600px] bg-no-repeat"
      style={{
        backgroundImage: `url(${HeroImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 rounded-xl"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 md:px-0 space-y-4 text-center">
        <h1 className="text-2xl md:text-4xl lg:text-5xl text-white font-serif">
          Bring Nature Indoors
        </h1>
        <h2 className="text-sm md:text-base lg:text-lg text-white/90 font-normal max-w-2xl">
          Discover our collection of beautiful, high-quality plants to liven up your space and purify your air.
        </h2>
        <Button variant="green">Shop All Plants</Button>
      </div>
    </section>
  )
}

export default Hero
