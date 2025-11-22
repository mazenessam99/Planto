import { motion } from "framer-motion";
import { DELIVERY_CARDS } from "../../utils/constants";
import { FaTruck, FaLeaf } from "react-icons/fa6";
import { MdSupportAgent } from "react-icons/md";

const icons = {
  truck: <FaTruck />,
  support: <MdSupportAgent />,
  leaf: <FaLeaf />,
};

const DeliveryCards = () => {
  return (
    <section className="container py-16">
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {DELIVERY_CARDS.map((card,index)=>(
        <div key={card.id} className="flex flex-col items-center justify-center text-center p-6 border rounded-lg shadow hover:shadow-lg transition">
          <div clas>
            {icons[card.icon]}
          </div>
          <h3>{card.title}</h3>
          <p>{card.desc}</p>
        </div>
      ))}

     </div>
    </section>
  );
};

export default DeliveryCards;
