import React from 'react'
import { BESTSELLER_CARDS } from '../../utils/constants';
import ProductCard from '../ui/ProductCard';

const BestSeller = () => {
  return (
    <section className='container py-6'>
        <h2 className="text-4xl text-center font-bold mb-">Best Seller</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
            {BESTSELLER_CARDS.map((card,index)=>(
                <ProductCard src={card.src} title={card.title} price={card.price}/>
        ))}
        </div>

    </section>
  )
}

export default BestSeller;