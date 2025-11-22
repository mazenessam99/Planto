IM
const DeliveryCard = () => {
  return (
    <section>
        {DELIVERY_CARDS.map((card)=>(
          <div key={card.id}></div>
        ))}

    </section>
  )
}

export default DeliveryCard