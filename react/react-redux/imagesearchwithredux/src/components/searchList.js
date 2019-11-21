import React from "react";

export default function SearchList(props) {
  return (
    <div>
      <div className="d-flex flex-wrap">
        {console.log(props.store)}
        {/*  {props.store.data.results.map(pic => (
          <div key={pic.id} className="">
            <img
              src={pic.cover_photo.urls.thumb}
              alt={pic.cover_photo.alt_description}
              className="img-thumbnail rounded img-fluid"
            />
          </div>
        ))} */}
      </div>
    </div>
  );
}
