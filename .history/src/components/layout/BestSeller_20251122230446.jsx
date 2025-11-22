import React from 'react'
import { BESTSELLER_CARDS } from '../../utils/constants';
import ProductCard from '../ui/ProductCard';

const BestSeller = () => {
  return (
    <section>
        <h2 className="text-4xl text-center font-bold mb-4">Best Seller</h2>
        <div>
            {BESTSELLER_CARDS.map((card,index)=>(
                <ProductCard src={card.src} title={card.title} price={card.price}/>
        ))}
        </div>

    </section>
  )
}

export default BestSeller;