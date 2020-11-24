const ADD_TO_CARD = "ADD_TO_CARD";
const REMOVE_FROM_CARD = "REMOVE_FROM_CARD";

export const addToCardAction = (payload) => ({ type: ADD_TO_CARD, payload });
export const removeFromCardAction = (payload) => ({
  type: REMOVE_FROM_CARD,
  payload,
});

const orderReducer = (state = [], action) => {
  switch (action.payload) {
    case ADD_TO_CARD:
      return [...state, action.payload];
    case REMOVE_FROM_CARD:
      return state.filter((el) => el.id !== action.payload);
    default:
      return state;
  }
};

export default orderReducer;
