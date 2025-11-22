
const ProductCard = ({src,title,price,showButton=false,buttonText='Add To Cart'}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg flex flex-col items-center justify-center space-y-4">
      <div className="w-full h-44 ">
        <img src={src} className="w-full h-full"/>
      </div>
      <h3 className="mt-">{title}</h3>

    </div>
  )
}

export default ProductCard;