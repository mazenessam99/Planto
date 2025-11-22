import HeroImg from '../../assets/images/Hero.jpg'; // تأكد من المسار الصحيح

const Hero = () => {
  return (
    <section
      className="h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${HeroImg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* المحتوى */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Planto</h1>
        <p className="text-lg md:text-2xl">Your plants, your happiness</p>
      </div>
    </section>
  );
};

export default Hero;
