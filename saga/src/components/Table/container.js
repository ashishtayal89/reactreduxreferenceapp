import React, { Component } from "react";
import { connect } from "react-redux";
import Table from "./index";

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    ...state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    increment: data => dispatch({ type: "INCREMENT", payload: data }),
    decrement: data => dispatch({ type: "DECREMENT", payload: data }),
    reset: data => dispatch({ type: "RESET_INIT", payload: data }),
    add: () => dispatch({ type: "ADD" }),
    remove: () => dispatch({ type: "REMOVE" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Table);
