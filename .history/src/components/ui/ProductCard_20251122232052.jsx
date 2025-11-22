import Button from "./Button";

const ProductCard = ({src,title,price,showButton=true,buttonText='Add To Cart'}) => {
  return (
    <div className="bg-white rounded-xl p-4 shadow-md flex flex-col hover:shadow-xl transition-all">
      <div className="w-full h-48 overflow-hidden ">
        <img src={src} className="w-full h-full object-cover hover:scale-105 transition" alt={title}/>
      </div>
      زح-

    </div>
  )
}

export default ProductCard;