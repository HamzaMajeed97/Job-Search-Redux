const initialState = {
  list: [],
};

const favouriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVOURITE":
      return {
        ...state,

        list: [...state.favourite.list, action.payload],
      };
    case "REMOVE_FROM_FAVOURITE":
      return {
        ...state,

        list: state.favourite.list.filter((fav) => fav !== action.payload),
      };
    default:
      return state;
  }
};

export default favouriteReducer