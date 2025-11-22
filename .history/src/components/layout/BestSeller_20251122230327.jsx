import React from 'react'
import { BESTSELLER_CARDS } from '../../utils/constants';
import ProductCard from '../ui/ProductCard';

const BestSeller = () => {
  return (
    <section>
        <h2 className="text-4xl text-center font-bold mb-4">Best Seller</h2>
        {BESTSELLER_CARDS.map((card,index)=>(
            <ProductCard src/>
        ))}
    </section>
  )
}

export default BestSeller;