import axios from "axios";
import {
  action_error,
  action_loading,
  action_success
} from "./actions/actions";
const getUsers = search => {
  return dispatch => {
    dispatch(action_loading());
    axios
      .get(
        `https://api.unsplash.com/search/collections?page=2&query=${search}&client_id=082136f9e5e99ecb9cd2578e0d9a0b7b548e18001db11fd752f7c9e5abba096f`
      )
      .then(response => {
        dispatch(action_success(response.data));
      })
      .catch(error => {
        dispatch(action_error(error.message));
      });
  };
};
export default getUsers;
