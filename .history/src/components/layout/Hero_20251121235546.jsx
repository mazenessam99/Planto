

const Hero = () => {
  return (
    <section className="relative text-center my-auto bg-[url('../../assets/images/Hero.png')] bg-center bg-cover h-96">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 flex flex-col items-center justify-">
            <h1 className=" text-white text-xl font-serif">Bring Nature Indoors</h1>
            <h2 className=" text-white/90 text-base md:text-lg font-normal">Discover our collection of beautiful, high-quality plants to liven up your space and purify your air.</h2>
        </div>

    </section>
  )
}

export default Hero