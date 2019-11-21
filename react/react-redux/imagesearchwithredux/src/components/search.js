import React from "react";
import { useState } from "react";
import getUsers from "../getUser";
import { connect } from "react-redux";

function Search(props) {
  const [search, setSearch] = useState("car");

  const changeHandler = e => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <p>{search}</p>
      <form>
        <input type="text" onChange={changeHandler} />
        <button type="submit" onClick={() => props.fetchPictures(search)}>
          Search
        </button>
      </form>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    picList: state.data
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchPictures: keyword => dispatch(getUsers(keyword))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Search);
