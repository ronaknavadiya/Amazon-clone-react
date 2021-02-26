import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";
import { useGlobalContext } from "./StateProvider";
import CurrencyFormat from "react-currency-format";
import axios from "./axios";
import { db } from "./firebase";

const Payment = () => {
  const { user, basket, total } = useGlobalContext();
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeded, setSucceded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [clientSecret, setClientSecret] = useState(true);
  const history = useHistory();

  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/payment/create?total=${total * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [basket]);

  console.log("secret is >>>", clientSecret);

  const handlepaymentSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then((data) => {
        // paymentIntent = payment confirmation
        console.log("db", db);
        console.log("paymentintent:", data);

        // db.collection("users")
        //   .doc(user?.uid)
        //   .collection("orders")
        //   .doc(paymentIntent.id)
        //   .set({
        //     basket: basket,
        //     amount: paymentIntent.amount,
        //     created: paymentIntent.created,
        //   });

        setSucceded(true);
        setError(null);
        setProcessing(false);

        history.replace("/orders");
      });
  };

  const handleChangePayment = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{!user ? "Guest" : user.email}</p>
            <p>13, Gokul park</p>
            <p>Katargam, Surat</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
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
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            <form onSubmit={handlepaymentSubmit}>
              <CardElement onChange={handleChangePayment} />
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <React.Fragment>
                      <h3>Order Total:{value}</h3>
                    </React.Fragment>
                  )}
                  decimalScale={2}
                  value={total}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix="$"
                />
                <button disabled={processing || disabled || succeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {/* Errors */}
              {error && <div>error</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
