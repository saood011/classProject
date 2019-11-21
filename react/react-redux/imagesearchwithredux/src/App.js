import React from "react";
import { Provider } from "react-redux";

import "./App.css";
import Search from "./components/search";
import SearchList from "./components/searchList";
import store from "./store";
function App() {
  return (
    <div>
      <Provider store={store}>
        <Search />
        <SearchList />
      </Provider>
    </div>
  );
}

export default App;
