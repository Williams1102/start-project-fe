import React, { Component } from "react";
import { connect } from "react-redux";

import Header from "../components/navbars/Header";
import { userActions } from "../actions/auth.action";
import Poster from "../components/layouts/cards/cardPoster";

const HomePage = (props) => {
  const clickLogout = (e) => {
    e.preventDefault();
    props.logout();
  };
  return (
    <div>
      <Header loggedIn={props.loggedIn} handleClick={clickLogout} />
      <Poster />
    </div>
  );
};

const mapState = (state) => ({ loggedIn: state.auth.loggedIn });
const mapDispatch = {
  login: userActions.login,
  logout: userActions.logout,
};

export default connect(mapState, mapDispatch)(HomePage);
