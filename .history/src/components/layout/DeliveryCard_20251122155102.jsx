import { motion } from "framer-motion";
import { DELIVERY_CARDS } from "../../utils/constants";

const DeliveryCards = () => {
  return (
    <section className="container py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {DELIVERY_CARDS.map((card, index) => (
          <motion.div
            key={card.id}
            className="bg-white shadow-md rounded-xl px-6 py-8 flex items-center gap-4 border hover:shadow-lg transition cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
          >
            <div className="text-secondary text-4xl">
              {card.icon}
            </div>

            <div>
              <h3 className="text-lg font-bold text-primary">{card.title}</h3>
              <p className="text-gray-600">{card.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default DeliveryCards;
