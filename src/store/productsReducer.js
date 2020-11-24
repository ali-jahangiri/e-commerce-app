const FETCH_DATA = "FETCH_DATA";

const fetchDataPlaceholder = (payload) => ({ type: FETCH_DATA, payload });

export const fetchDataAction = () => (dispatch) => {
  fetch("https://api.mocki.io/v1/3c9cc39c")
    .then((res) => res.json())
    .then((data) => dispatch(fetchDataPlaceholder(data)));
};

const productsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_DATA:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export default productsReducer;
