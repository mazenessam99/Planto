import Button from "./Button";

const ProductCard = ({src,title,price,showButton=true,buttonText='Add To Cart'}) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col hover:shadow-xl transition-all">
      <div className="w-full ">
        <img src={src} className="w-full h-auto object-contain hover:scale-110 transition duration-500" alt={title}/>
      </div>
      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-primary">{title}</h3>
      <p className="font-semibold text-lg text-secondary">{price}</p>
      {showButton&&(
        <Button className="mt-3">
          {buttonText}
        </Button>
      )}
      </div>

    </div>
  )
}

export default ProductCard;