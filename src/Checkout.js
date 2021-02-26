import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useGlobalContext } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

const Checkout = () => {
  const { basket, user } = useGlobalContext();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <div className="image-container">
          <img
            className="checkout__ad"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/LA/Sravanthi_Summer/GW_Feb19_20/HERO-Summer-Event-2021---19th---22nd_1500x600_1_rev4._CB660363314_.jpg"
            alt="ad"
          />
        </div>
        <div>
          <h3>Hello, {!user ? "Guest" : user.email}</h3>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {basket.map((product) => {
            return (
              <CheckoutProduct
                id={product.id}
                price={product.price}
                image={product.image}
                title={product.title}
                rating={product.rating}
              />
            );
          })}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
