import React from "react";
import "./CheckoutProduct.css";
import { useGlobalContext } from "./StateProvider";

const CheckoutProduct = ({ id, price, image, title, rating }) => {
  const { removeFromBasket } = useGlobalContext();
  return (
    <div className="checkoutProduct">
      <img src={image} alt="" className="checkoutProduct__image" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <strong>${price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map(() => (
              <p>⭐</p>
            ))}
        </div>
        <button
          className="checkoutProduct__button"
          onClick={() => removeFromBasket(id)}
        >
          Remove From Cart
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
