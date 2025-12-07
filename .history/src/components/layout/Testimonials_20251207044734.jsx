
import { CUSTOMERS_CARDS } from "../../utils/constants"
import Stars from "../ui/Stars"


const Testimonials = () => {
    return (
        <section className='container py-10 md:py-12'>
            <h2 className='text-center font-bold text-2xl md:text-3xl lg:text-4xl m-6'>What Our Customers Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3  gap-4 ">

                {CUSTOMERS_CARDS.map((item) => (
                    <div key={item.id} className="p-7 flex flex-col gap-4 bg-primary/20 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all cursor-pointer">
                        <div className="flex gap-1 text-forest">
                            <Stars rating={item.rating}/>
                        </div>
                        <blockquote className="text-lg italic">
                            {item.desc}
                        </blockquote>
                        <div className="flex items-center gap-3">
                            <img src={item.src} className="h-10 w-10 rounded-full" alt={item.name} />
                            <p className="font-bold">{item.name}</p>
                        </div>
                    </div>))}
            </div>



        </section>
    )
}

export default Testimonials