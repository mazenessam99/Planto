const DeliveryCard = () => {
  return (
    <section>
        {DELIVERY_CARDS.map((card)=>(
          <div key={card}></div>
        ))}

    </section>
  )
}

export default DeliveryCard