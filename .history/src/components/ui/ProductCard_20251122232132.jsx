import Button from "./Button";

const ProductCard = ({src,title,price,showButton=true,buttonText='Add To Cart'}) => {
  return (
    <div className="bg-white rounded-xl p-4 shadow-md flex flex-col hover:shadow-xl transition-all">
      <div className="w-full h-48 overflow-hidden ">
        <img src={src} className="w-full h-full object-cover hover:scale-105 transition" alt={title}/>
      </div>
      <div className="p-4 flex flex-col ">
        <h3 className="text-lg font-semibold text-primary">{title}</h3>
      <p className="mtfont-bold text-xl text-secondary">{price}</p>
      {showButton&&(
        <Button className="my-2 ">
          {buttonText}
        </Button>
      )}
      </div>

    </div>
  )
}

export default ProductCard;