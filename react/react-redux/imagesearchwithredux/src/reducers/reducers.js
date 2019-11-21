const initialState = {
  loading: false,
  data: [],
  error: ""
};

function reducers(state = initialState, action) {
  switch (action.type) {
    case "LOADING_DATA":
      return (state = { loading: true });
    case "LOADING_SUCCESSFULL":
      return (state = { loading: false, data: action.payload });
    case "LOADING_FAILED":
      return (state = { loading: false, error: action.payload });
    default:
      return state;
  }
}
export default reducers;
