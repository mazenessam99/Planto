const DeliveryCard = () => {
  return (
    <section>
        {DELIVERY_CARDS.map((card)=>(
          <div key={card.i}></div>
        ))}

    </section>
  )
}

export default DeliveryCard