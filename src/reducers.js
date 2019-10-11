const initialState = {
  pictures: [],
  status: "...",
  rendered: "false",
  amount: 50
};

// This is where we update our state
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_AMOUNT":
      console.log(`UPDATE_AMOUNT: ${action.amount}`);
      return {
        ...state,
        amount: action.amount
      };

    case "REQUEST_FOR_PICTURES":
      console.log(`  REQUEST_FOR_PICTURES`);
      return {
        ...state,
        status: "REQUEST_FOR_PICTURES",
        pictures: action.pictures
      };

    case "REQUEST_COMPLETE":
      console.log(`  REQUEST_COMPLETE`);
      return {
        ...state,
        status: "REQUEST_COMPLETE",
        rendered: "true"
      };
    default:
      return state;
  }
};

export default reducer;
