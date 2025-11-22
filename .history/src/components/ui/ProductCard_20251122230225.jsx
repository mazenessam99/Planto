import Button from "./Button";

const ProductCard = ({src,title,price,showButton=false,buttonText='Add To Cart'}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg flex flex-col items-center justify-center space-y-4">
      <div className="w-full h-44 ">
        <img src={src} className="w-full h-full"/>
      </div>
      <h3 className="mt-4 font-bold text-primary">{title}</h3>
      <p className="mt-3 text-secondary">{price}</p>
      {showButton&&(
        <Button className="my-"/>
      )}

    </div>
  )
}

export default ProductCard;