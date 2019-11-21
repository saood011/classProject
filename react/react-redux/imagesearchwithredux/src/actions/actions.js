const actions = {
  isLoading: "LOADING_DATA",
  isSuccess: "LOADING_SUCCESSFULL",
  isFailed: "LOADING_FAILED"
};

//create actions now

function action_loading() {
  return {
    type: actions.isLoading
  };
}

function action_success(api_result) {
  return {
    type: actions.isSuccess,
    payload: api_result
  };
}

function action_error(api_error) {
  return {
    type: actions.isFailed,
    payload: api_error
  };
}
export { action_error, action_loading, action_success };
