import Button from "./Button";

const ProductCard = ({src,title,price,showButton=true,buttonText='Add To Cart'}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg flex flex-col  space-y-4">
      <div className="w-full h-48 ">
        <img src={src} className="w-full h-full"/>
      </div>
      <h3 className="mt-4 font-bold text-primary">{title}</h3>
      <p className="mt-3 text-secondary">{price}</p>
      {showButton&&(
        <Button className="mx w-full">
          {buttonText}
        </Button>
      )}

    </div>
  )
}

export default ProductCard;