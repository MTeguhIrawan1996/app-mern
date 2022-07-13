const initialState = {
  name: "Teguh",
};

const globalReducer = (state = initialState, action) => {
  if (action.type === "UPDATE_NAME") {
    return {
      ...state,
      name: "Irawan",
    };
  }
  return state;
};

export default globalReducer;
