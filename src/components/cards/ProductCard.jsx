
import React from "react";

const ProductCard = ({ product }) => {
  const { title, image, price, discount, ratings } = product;

  const finalPrice = price - (price * discount) / 100;

  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl transition">
      
      <figure className="relative h-[220px]">
        <img src={image} alt="" />
      </figure>

      <div className="card-body space-y-2">
        <h2 className="card-title text-base line-clamp-2">
          {title}
        </h2>

        <div className="flex items-center gap-2 text-sm">
          ⭐ <span className="font-medium">{ratings}</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-lg font-bold text-primary">
            ৳ {finalPrice}
          </span>

          <span className="line-through text-gray-400 text-sm">
            ৳ {price}
          </span>
        </div>

        <div className="card-actions">
          <button className="btn btn-primary btn-outline btn-sm w-full">
            Add to Cart
          </button>
          <button className="btn btn-primary btn-sm w-full mt-2">
            View Details
          </button>
        </div>
      </div>

    </div>
  );
};

export default ProductCard;
