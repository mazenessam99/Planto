import Button from "../ui/Button"

const Subscribtion = () => {
    return (
        <section className="container py-6 md ">
            <div className="p-8 md:p-12 rounded-xl flex flex-col items-center gap-4 bg-primary/20">
                <h2 className="sm:text-2xl md:text-3xl font-bold"> Join Our Plant Family</h2>
                <p className="text-gray text-center max-w-md">Get 10% off your first order and receive weekly plant care tips straight to your inbox.</p>
                <form className="flex flex-col sm:flex-row w-full max-w-md gap-2 mt-4 ">
                    <input placeholder="your-email@example.com" type="email" className="bg-white h-12  px-4 py-2 rounded-xl border border-primary/30 md:w-80 outline-0" />
                    <Button className="rounded-xl py-3" variant="green">
                        Subscribe
                    </Button>
                </form>
            </div>

        </section>
    )
}

export default Subscribtion