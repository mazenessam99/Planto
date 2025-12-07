import { FaLinkedinIn } from "react-icons/fa"
import { FaFacebook, FaInstagram} from "react-icons/fa6"
import { FcGoogle } from "react-icons/fc"

const Footer = () => {
    return (
        <footer className=" bg-primary/20">
            <div className="container pt-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 ">
                    <div>
                        <a href="/" className="text-primary text-xl font-bold">Planto</a>
                        <p className="mt-4 sm:text-sm">Bringing green into your home, one plant at a time.</p>

                    </div>
                    <div>
                        <h3 className="font-bold">Shop</h3>
                        <ul className="mt-4 space-y-2 text-sm">
                            <li><a className="hover:text-forest" href="#">All Plants</a></li>
                            <li><a className="hover:text-forest" href="#">Pet-Friendly</a></li>
                            <li><a className="hover:text-forest" href="#">Low-Light</a></li>
                            <li><a className="hover:text-forest" href="#">Pots &amp; Accessories</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold">About</h3>
                        <ul className="mt-4 space-y-2 text-sm">
                            <li><a className="hover:text-forest" href="#">Our Story</a></li>
                            <li><a className="hover:text-forest" href="#">FAQ</a></li>
                            <li><a className="hover:text-forest" href="#">ContactUs</a></li>
                            <li><a className="hover:text-forest" href="#">Terms &amp; Conditions</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold">Follow Us</h3>
                        <ul className="flex gap-4 mt-4 space-y-2 text-sm">
                            <li><a className="hover:text-forest" href="#"><FcGoogle size={20}/></a></li>
                            <li><a className="hover:text-forest" href="#"><FaFacebook size={20}/></a></li>
                            <li><a className="hover:text-forest" href="#"><FaLinkedinIn size={20}/></a></li>
                            <li><a className="hover:text-forest" href="#"><FaInstagram size={20}/></a></li>
                        </ul>
                    </div>

                </div>
                <div className="mt-8 py-4 border-t border-primary/20 text-center font-semibold ">
                    <p className="">© {new Date().getFullYear()}  <span className="text-forest font-bold">Planto </span>. All rights reserved.</p>
                </div>

            </div>

        </footer>
    )
}

export default Footer