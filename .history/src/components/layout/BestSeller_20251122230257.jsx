import React from 'react'
import { BESTSELLER_CARDS } from '../../utils/constants';

const BestSeller = () => {
  return (
    <section>
        <h2 className="text-4xl text-center font-bold mb-4">Best Seller</h2>
        {BESTSELLER_CARDS.map(())}
    </section>
  )
}

export default BestSeller;