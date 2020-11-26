const ADD_TO_CARD = "ADD_TO_CARD";
const REMOVE_FROM_CARD = "REMOVE_FROM_CARD";
const INCRESS_ITEM = "INCRESS_ITEM";

export const addToCardAction = (payload) => ({ type: ADD_TO_CARD, payload });
export const incressItemAction = (payload) => ({ type: INCRESS_ITEM, payload });
export const removeFromCardAction = (payload) => ({
  type: REMOVE_FROM_CARD,
  payload,
});

const orderReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CARD:
      return [...state, { ...action.payload, count: 1 }];
    case INCRESS_ITEM:
      return state.map((el) =>
        el.name === action.payload ? { ...el, count: ++el.count } : el
      );
    case REMOVE_FROM_CARD:
      return state.filter((el) => el.id !== action.payload);
    default:
      return state;
  }
};

export default orderReducer;
