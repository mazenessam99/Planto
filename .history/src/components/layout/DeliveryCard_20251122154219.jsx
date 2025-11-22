const DeliveryCard = () => {
  return (
    <section>
        {DELIVERY_CARD.map((card)=>(
          <div key={card.id}></div>
        ))}

    </section>
  )
}

export default DeliveryCard