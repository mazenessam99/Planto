import { BsFillStarFill, BsStarHalf,BsStar } from "react-icons/bs";

export default function Stars({ rating }) {
    return (
        <div className="flex gap-1 text-forest">
            {[1, 2, 3, 4, 5].map((star) => (
                <span
                    key={star}
                    className="transition-transform hover:scale-125"
                >
                    {rating >= star ? (
                        <BsFillStarFill />
                    ) : rating >= star - 0.5 ? (
                        <BsStarHalf />
                    ) : (
                        <BsStar/>
                    )}
                </span>
            ))}
        </div>
    );
}
