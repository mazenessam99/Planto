const DeliveryCard = () => {
  return (
    <section>
        {DELIVERY_CARDs.map((card)=>(
          <div key={card.id}></div>
        ))}

    </section>
  )
}

export default DeliveryCard