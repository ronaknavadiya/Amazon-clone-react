import React, { createContext, useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";

const StateContext = createContext();
const initialstate = {
  basket: [],
  total: 0,
  user: null,
};

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialstate);
  useEffect(() => {
    dispatch({ type: "GET_TOTAL" });
  }, [state.basket]);

  const addToBasket = (id, title, image, price, rating) => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  const removeFromBasket = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const updateUser = (authUser) => {
    dispatch({ type: "SET_USER", payload: authUser });
  };

  const emptyBasket = () => {
    dispatch({ type: "EMPTY_BASKET" });
  };
  return (
    <StateContext.Provider
      value={{ ...state, addToBasket, removeFromBasket, updateUser }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(StateContext);
};

export { StateContext, StateProvider };
