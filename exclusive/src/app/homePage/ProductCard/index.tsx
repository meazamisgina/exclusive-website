import { Heart, Eye, Star, StarHalf } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  reviewCount: number;
  image: string;
  isNew?: boolean;
  colors?: string[];
}

export default function ProductCard({
  name,
  price,
  originalPrice,
  discount,
  rating,
  reviewCount,
  image,
  isNew,
  colors,
}: ProductCardProps) {
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />);
    }

    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="w-4 h-4 fill-yellow-400 text-yellow-400" />);
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />);
    }

    return stars;
  };

  return (
    <div className="group cursor-pointer w-full">
      <div className="relative bg-neutral-100 rounded overflow-hidden mb-4">
        <div className="absolute top-3 left-3 z-10">
          {discount && (
            <span className="bg-red-500 text-white text-xs px-3 py-1 rounded text-center font-medium">
              -{discount}%
            </span>
          )}
          {isNew && (
            <span className="bg-green-500 text-white text-xs px-3 py-1 rounded text-center font-medium">
              NEW
            </span>
          )}
        </div>


        <div className="absolute top-3 right-3 z-10 space-y-2">
          <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-red-500 hover:text-white transition-colors">
            <Heart className="w-4 h-4" />
          </button>
          <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-red-500 hover:text-white transition-colors">
            <Eye className="w-4 h-4" />
          </button>
        </div>

        <div className="aspect-square relative overflow-hidden bg-neutral-100">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-contain p-8 group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        <button className="absolute bottom-0 left-0 right-0 bg-black text-white py-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Add To Cart
        </button>
      </div>
      <div className="space-y-2">
        <h3 className="font-medium text-black leading-tight text-base">{name}</h3>

        <div className="flex items-center gap-3">
          <span className="text-red-500 font-medium text-base">${price}</span>
          {originalPrice && (
            <span className="text-gray-500 line-through font-medium text-base">${originalPrice}</span>
          )}
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            {renderStars(rating)}
          </div>
          <span className="text-gray-400 font-semibold text-sm">({reviewCount})</span>
        </div>

        {colors && colors.length > 0 && (
          <div className="flex items-center gap-2 pt-1">
            {colors.map((color, index) => (
              <div
                key={index}
                className="w-5 h-5 rounded-full border-2 border-gray-300"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
