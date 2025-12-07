import Button from "../ui/Button"

const Subscribtion = () => {
    return (
        <section className="container py-10 rounded-xl flex flex-col items-center justify-between gap-4 bg-primary/20">
            <h2 className="sm:text-2xl md:text-3xl mb-4 font-bold"> Join Our Plant Family</h2>
            <p className="text-gray text-center text-xl max-w-md">Get 10% off your first order and receive weekly plant care tips straight to your inbox.</p>
            <form className="flex flex-col md:flex-row gap-3 ">
                <input placeholder="your-email@example.com" type="email" className="py-2 rounded-xl w-[70%]"/>
                <Button className="rounded-xl" variant="">
                    Subscribe
                </Button>
            </form>
            
        </section>
    )
}

export default Subscribtion