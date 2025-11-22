import { FaTruck, FaLeaf } from "react-icons/fa6";
import { MdSupportAgent } from "react-icons/md";

export const NAVBAR_LINKS = [
    { id: 1, label: 'Home', path: '/' },
    { id: 2, label: 'Shop', path: '/shop' },
    { id: 3, label: 'About', path: '/about' },
    { id: 4, label: 'Blog', path: '/blog' },
    { id: 5, label: 'Contact', path: '/contact' },
];

export const DELIVERY_CARDS = [
    { id: 1, icon: <FaTruck />, title: "Free Shipping", desc: "On all orders over $50." },
    { id: 2, icon: <MdSupportAgent />, title: "Expert Support", desc: "Here to help you succeed." },
    { id: 3, icon: <FaLeaf />, title: "Eco Friendly", desc: "Healthy for you and the planet." },
];
