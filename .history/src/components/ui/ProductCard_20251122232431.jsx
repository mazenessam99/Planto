import Button from "./Button";

const ProductCard = ({src,title,price,showButton=true,buttonText='Add To Cart'}) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col hover:shadow-xl transition-all">
      <div className="w-full h-56  ">
        <img src={src} className="w-full h-full object-cover hover:scale-110 transition durat" alt={title}/>
      </div>
      <div className="p-4 flex flex-col gap-3">
        <h3 className="text-lg font-semibold text-primary">{title}</h3>
      <p className="font-bold text-xl text-secondary">{price}</p>
      {showButton&&(
        <Button className="my-2">
          {buttonText}
        </Button>
      )}
      </div>

    </div>
  )
}

export default ProductCard;