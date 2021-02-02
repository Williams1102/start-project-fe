import React, { useState } from "react";

function ContentHeader(props) {
  const [searchStatus, setSearchStatus] = useState(false);

  const enableSearch = (e) => {
    setSearchStatus(true);
  };

  const disableSearch = (e) => {
    setSearchStatus(false);
  };
  const focusInput = (e) => {
    if (e) {
      e.focus();
    }
  };

  const search = searchStatus ? (
    <input
      id="input-search"
      type="text"
      className="form-control"
      aria-label="small"
      placeholder="Title, people, genres,..."
      aria-describedby="inputGroup-sizing-sm"
      ref={focusInput}
      onBlur={disableSearch}
    />
  ) : null;
  return (
    <>
      <div className=" p-2 active">Home</div>
      <div className=" p-2"> Movies</div>
      <div className=" p-2"> TV shows</div>
      <div className=" p-2"> Trending</div>
      <div className=" p-2 mr-auto">My Lists</div>
      <div className="">
        <div className="input-group input-group" onFocus={enableSearch}>
          <div className="input-group-append">
            <button className="btn">
              <i className="fas fa-search"></i>
            </button>
          </div>
          {search}
        </div>
      </div>
    </>
  );
}

export default ContentHeader;
