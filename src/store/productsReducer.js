const SET_DATA = "SET_DATA";
const SET_ERROR = "SET_ERROR";
const SET_LOADING = "SET_LOADING";

const setDataPlaceholder = (payload) => ({ type: SET_DATA, payload });
const setErrorPlaceholer = (payload) => ({ type: SET_ERROR, payload });
const setLoadingPlaceholder = () => ({ type: SET_LOADING });

export const fetchDataAction = () => (dispatch) => {
  fetch("https://api.mocki.io/v1/3c9cc39c")
    .then((res) => res.json())
    .then((data) => {
      dispatch(setLoadingPlaceholder());
      dispatch(setDataPlaceholder(data));
    })
    .catch((err) => {
      setLoadingPlaceholder();
      setErrorPlaceholer(err);
    });
};

const INIT = {
  response: [],
  error: null,
  loading: true,
};

const productsReducer = (state = INIT, action) => {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        response: action.payload,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: !state.loading,
      };
    default:
      return state;
  }
};

export default productsReducer;
