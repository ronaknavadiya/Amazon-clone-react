const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "GET_TOTAL":
      let total = state.basket.reduce((price, item) => item.price + price, 0);
      return {
        ...state,
        total,
      };
    case "REMOVE_ITEM":
      const index = state.basket.findIndex(
        (product) => product.id === action.payload
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove the product(id:${action.id}) as its not in basket!`
        );
      }
      return { ...state, basket: newBasket };

    case "EMPTY_BASKET":
      return { ...state, basket: [] };

    case "SET_USER":
      return { ...state, user: action.payload };

    default:
      return state;
  }
  return state;
};

// const reducer = (state, action) => {
//   console.log("action", action);
//   switch (action.type) {
//     case "ADD_TO_BASKET":
//       return {
//         ...state,
//         basket: [...state.basket, action.item],
//       };

//     default:
//       return state;
//   }
// };

export default reducer;
