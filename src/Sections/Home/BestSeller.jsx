import React from "react";
import { BESTSELLER_CARDS } from "../../utils/constants";
import ProductCard from "../../components/ProductCard";

const BestSeller = () => {
    return (
        <section className="container py-4">
            <h2 className="text-4xl text-center font-bold mb-6">Best Seller</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {BESTSELLER_CARDS.map((card) => (
                    <ProductCard
                        key={card.id}
                        src={card.src}
                        title={card.title}
                        price={card.price}
                        discount={card.discount || 0} />
                ))}
            </div>
        </section>
    );
};

export default BestSeller;
