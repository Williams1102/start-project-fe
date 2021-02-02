import { Image, Dropdown, Button } from "react-bootstrap";
import React, { useState } from "react";
import "./Header.css";
import Avatar from "./Avatar";
import ContentHeader from "./ContentHeader";

const Header = (props) => {
  const { loggedIn } = props;
  return (
    <div className="headerContainer">
      <div className="d-flex p-2 header sticky-top">
        <div className="col-sm-1 d-flex justify-content-center align-content-center flex-wrap">
          <Image src="logoWills.png" width="40" height="40"></Image>
        </div>
        <div className="col-sm-9 p-2 d-flex  flex-wrap">{loggedIn ? <ContentHeader /> : null}</div>
        <div className="col-sm-2 d-flex justify-content-center align-content-center flex-wrap">
          {loggedIn ? (
            <div className="p-2 mr-20">
              <Avatar handleClick={props.handleClick} />
            </div>
          ) : (
            <Button variant="danger">Sign In</Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
