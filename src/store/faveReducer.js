const ADD_FAVE = "ADD_FAVE";
const REMOVE_FAVE = "REMOVE_FAVE";

export const addFaveAction = (payload) => ({ type: ADD_FAVE, payload });
export const removeFaveAction = (payload) => ({ type: REMOVE_FAVE, payload });

const faveReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_FAVE:
      return [...state, action.payload];
    case REMOVE_FAVE:
      return state.filter((el) => el.id !== action.payload);
    default:
      return state;
  }
};

export default faveReducer;
