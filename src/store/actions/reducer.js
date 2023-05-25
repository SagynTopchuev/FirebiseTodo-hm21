const initialState = {
  items: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET":
      return {
        ...state,
        items: action.payload,
      };
    case "DELETE":
      return {
        ...state,
        items: state.items.filter((el) => el.id !== action.payload),
      };

    default:
      return state;
  }
};
