export default function ProductCard({
  image,
  title,
  price,
  button = false,
  buttonLabel = "Add to cart",
  onButtonClick,
}) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
      
      {/* الصورة - بدون padding - FULL WIDTH */}
      <div className="w-full h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-110 transition-all duration-500"
        />
      </div>

      {/* المحتوى فقط هو اللي واخد padding */}
      <div className="p-4 flex flex-col gap-3">

        {/* العنوان */}
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>

        {/* السعر */}
        <p className="text-primary font-bold text-xl">${price}</p>

        {/* زرار اختياري */}
        {button && (
          <button
            onClick={onButtonClick}
            className="mt-2 bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary/80 transition"
          >
            {buttonLabel}
          </button>
        )}
      </div>

    </div>
  );
}
