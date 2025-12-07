import img1 from "../../src/assets/images/Featured_1.png";
import img2 from "../../src/assets/images/Featured_2.png";
import img3 from "../../src/assets/images/Featured_3.png";
import img4 from "../../src/assets/images/Featured_4.png";
import img5 from "../../src/assets/images/Testimonials_1.png";
import img6 from "../../src/assets/images/Testimonials_2.png";
import img7 from "../../src/assets/images/Testimonials_3.png";
// Navbar_Links
export const NAVBAR_LINKS = [
    { id: 1, label: 'Home', path: '/' },
    { id: 2, label: 'Shop', path: '/shop' },
    { id: 3, label: 'About', path: '/about' },
    { id: 4, label: 'Blog', path: '/blog' },
    { id: 5, label: 'Contact', path: '/contact' },
];

// Delivery_Cards
export const DELIVERY_CARDS = [
    { id: 1, icon: "truck", title: "Free Shipping", desc: "On all orders over $50." },
    { id: 2, icon: "support", title: "Expert Support", desc: "Here to help you succeed." },
    { id: 3, icon: "leaf", title: "Eco Friendly", desc: "Healthy for you and the planet." },
];

// BESTSELLER_CARDS
export const BESTSELLER_CARDS=[
    {id:1,src:img1,title:'Monstera Deliciosa',price:'$35.00',discount:20},
    {id:2,src:img2,title:'Snake Plant',price:'$25.00'},
    {id:3,src:img3,title:'Fiddle Leaf Fig',price:'$55.00',bestseller:true},
    {id:4,src:img4,title:'Pothos Plant',price:'$20.00',discount:15}
]

// BESTSELLER_CARDS
export const CUSTOMERS_CARDS=[
    {id:1,rating: 5,src:img5,name:'Sarah L.',desc:'My Monstera arrived in perfect condition and is thriving! The packaging was incredible and the customer service was so helpful.'},
    {id:2,rating: 4.5,src:img6,name:'Michael B.',desc:"I'm new to plants, and their beginner's guide was a lifesaver. My snake plant is beautiful and so easy to care for."},
    {id:3,rating: 4,src:img7,name:'Jessica T.',desc:"Such a fantastic selection of healthy plants. I will definitely be a repeat customer. The delivery was surprisingly fast!"},
]