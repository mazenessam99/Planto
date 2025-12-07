import Button from "./Button";

const ProductCard = ({
  src,
  title,
  price,
  discount ,      
  showButton = true,
  buttonText = "Add To Cart",
}) => {
  const priceNumber = Number(price.replace("$", ""));
  const finalPrice = discount > 0
    ? priceNumber - (priceNumber * discount) / 100
    : priceNumber;

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col hover:shadow-xl transition-all">
      <div className="w-full overflow-hidden">
        <img
          src={src}
          className="w-full h-auto object-contain hover:scale-110 transition duration-500"
          alt={title}
        />
      </div>

      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-primary">{title}</h3>

        <div className="flex items-center gap-2">
          {discount > 0 && (
            <span className="text-sm text-gray-400 line-through">
              {price}
            </span>
          )}
          <span className="font-semibold text-lg text-secondary">
            ${finalPrice.toFixed(2)}
          </span>
          {discount > 0 && (
            <span className="ml-auto position-fixed bg-red-500 text-white text-xs px-2 py-1 rounded">
              -{discount}%
            </span>
          )}
        </div>

        {showButton && (
          <Button className="mt-3">{buttonText}</Button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
