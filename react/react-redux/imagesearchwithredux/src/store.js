import reducers from "./reducers/reducers";
import { composeWithDevTools } from "redux-devtools-extension";

import { createStore } from "redux";
import { applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import getUsers from "./getUser";
var ReduxThunk = require("redux-thunk").default;
const logger = createLogger();

var search = "office";

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(logger, ReduxThunk))
);
store.dispatch(getUsers(search));

export default store;
