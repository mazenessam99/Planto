import Button from "../ui/Button"

const Subscribtion = () => {
    return (
        <section className="container py-10 rounded-xl flex flex-col items-center justify-between gap-4 bg-primary/20">
            <h2 className="sm:text-2xl md:text-3xl font-bold"> Join Our Plant Family</h2>
            <p className="text-gray text-center max-w-md">Get 10% off your first order and receive weekly plant care tips straight to your inbox.</p>
            <form className="flex flex-col sm:flex-row w-full max-w-md gap-2 mt-4 ">
                <input placeholder="your-email@example.com" type="email" className="bg-wh  px-4 py-3 rounded-xl shadow-2xl border border-primary/30 w-80 outline-0"/>
                <Button className="rounded-xl" variant="green">
                    Subscribe
                </Button>
            </form>
            
        </section>
    )
}

export default Subscribtion