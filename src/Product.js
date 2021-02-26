import React from "react";
import "./Product.css";
import { useGlobalContext } from "./StateProvider";

const Product = ({ id, title, image, price, rating }) => {
  const { addToBasket } = useGlobalContext();

  return (
    <div className="product">
      <div className="product__info">
        <p className="product__title">{title}</p>
        <p className="product__price">
          <strong>${price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={() => addToBasket(id, title, image, price, rating)}>
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
