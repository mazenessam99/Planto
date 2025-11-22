
const ProductCard = ({src,title,price,showButton=false,buttonText='Add To Cart'}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg flex flex-col items-center justify-center space-y-4">
      <div>
        <img src={src} className="w-full h-fill"/>
      </div>
    </div>
  )
}

export default ProductCard;