export const initialState = {
  optionA: 0,
  optionB: 0,
  optionC: 0,
};

export const voteReducer = (state, action) => {
  switch (action.type) {
    case "VOTE_A":
      return { ...state, optionA: state.optionA + 1 };
    case "VOTE_B":
      return { ...state, optionB: state.optionB + 1 };
    case "VOTE_C":
      return { ...state, optionC: state.optionC + 1 };
    default:
      return state;
  }
};
