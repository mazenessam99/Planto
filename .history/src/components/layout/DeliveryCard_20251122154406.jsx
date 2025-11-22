import { DELIVERY_CARDS } from "../../utils/constants";
const DeliveryCard = () => {
  return (
    <section>
        {DELIVERY_CARDS.map((card)=>(
          <div key={card.id}>
            <h3>c</h3>
          </div>
        ))}

    </section>
  )
}

export default DeliveryCard