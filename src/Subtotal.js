import React, { useEffect } from "react";
import CurrencyFormat from "react-currency-format";
import "./Subtotal.css";
import { useGlobalContext } from "./StateProvider";
import { useHistory } from "react-router-dom";

const Subtotal = () => {
  const { basket, total } = useGlobalContext();
  const history = useHistory();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <React.Fragment>
            <p>
              Subtotal ({`${basket.length}`} items):
              <strong>${value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </React.Fragment>
        )}
        decimalScale={2}
        value={total}
        displayType={"text"}
        thousandSeparator={true}
        prefix="$"
      />
      <button
        onClick={(e) => {
          history.push("/payment");
        }}
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Subtotal;
