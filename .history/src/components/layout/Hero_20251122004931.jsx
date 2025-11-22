import { motion } from "framer-motion";
import HeroImg from "../../assets/images/Hero.png";
import Button from "../ui/Button";

const Hero = () => {
  return (
    <section
      className="relative h-128 overflow-hidden"
    >
      {/* الصورة مع حركة scale */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${HeroImg})` }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 rounded-xl"></div>

      {/* المحتوى */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 md:px-0 space-y-4 text-center">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-white text-2xl md:text-4xl lg:text-5xl font-serif"
        >
          Bring Nature Indoors
        </motion.h1>

        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-white/90 text-sm md:text-base lg:text-lg max-w-2xl font-normal"
        >
          Discover our collection of beautiful, high-quality plants to liven up your space and purify your air.
        </motion.h2>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button className="btn-green font-bold mt-4">Shop All Plants</Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
