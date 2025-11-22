import Button from "./Button";

const ProductCard = ({src,title,price,showButton=true,buttonText='Add To Cart'}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg flex flex-col">
      <div className="w-full h-48 ">
        <img src={src} className="w-full h-full"/>
      </div>
      <h3 className="mt-4 ms-4 font-bold text-primary">{title}</h3>
      <p className="mt-2 ms-4 text-secondary">{price}</p>
      {showButton&&(
        <Button className="my-3 ">
          {buttonText}
        </Button>
      )}

    </div>
  )
}

export default ProductCard;