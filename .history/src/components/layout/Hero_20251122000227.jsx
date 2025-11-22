import Button from "../ui/Button"

const Hero = () => {
  return (
    <section className="relative text-center my-auto  bg-center bg-cover h-96" styles={{background:`url(${})`}}>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
            <h1 className=" text-white text-xl font-serif">Bring Nature Indoors</h1>
            <h2 className=" text-white/90 text-base md:text-lg font-normal">Discover our collection of beautiful, high-quality plants to liven up your space and purify your air.</h2>
            <Button variant="green">Shop All Plants</Button>
        </div>

    </section>
  )
}

export default Hero