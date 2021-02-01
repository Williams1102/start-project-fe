import React from "react";
import { Image } from "react-bootstrap";
import SignInBtn from "../layouts/buttons/SignIn";
import "./Header.css";
const Header = () => {
  return (
    <div className="d-flex header p-2">
      <div className="col-sm-2 d-flex justify-content-center align-content-center flex-wrap">
        <Image src="logoWills.png" width="40" height="40"></Image>
      </div>
      <div className="col-sm-8 p-2 d-flex  flex-wrap">
        <div className=" p-2 active">Home</div>
        <div className=" p-2"> Movies</div>
        <div className=" p-2"> TV shows</div>
        <div className=" p-2 mr-auto"> My Lists</div>
        <div className=" p-2"> Search</div>
      </div>
      <div className="col-sm-2 d-flex justify-content-center align-content-center flex-wrap">
        <SignInBtn />
      </div>
    </div>
  );
};

export default Header;
