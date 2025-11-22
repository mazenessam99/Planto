import { DELIVERY_CARDS } from "../../utils/constants";
const DeliveryCard = () => {
  return (
    <section>
        {DELIVERY_CARDS.map((card)=>(
          <div key={card.id}>
            <h3>{card.title}</h3>
            <h5>{card.d}</h5>
          </div>
        ))}

    </section>
  )
}

export default DeliveryCard