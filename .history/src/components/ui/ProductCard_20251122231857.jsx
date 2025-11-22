import Button from "./Button";

const ProductCard = ({src,title,price,showButton=true,buttonText='Add To Cart'}) => {
  return (
    <div className="bg-white rounded-xl p-4 shadow-md flex flex-col hover:shadow-xl transition-all">
      <div className="w-full h-48 overflow-hidden ">
        <img src={src} className="w-full h-full object-cover hover:scale-105 transition" alt={title}/>
      </div>
      <h3 className="mt-4 ms-3 text-lg font-semibold text-primary">{title}</h3>
      <p className="mt-2 ms- font-bold text-xl text-secondary">{price}</p>
      {showButton&&(
        <Button className="my-3 ">
          {buttonText}
        </Button>
      )}

    </div>
  )
}

export default ProductCard;