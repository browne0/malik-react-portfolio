import React from "react";
import { RaisedButton } from "material-ui";
import PropTypes from "prop-types";

const ThemedButton = props => {
  let styles = {
    button: {
      margin: "14px auto 0px auto"
    }
  };
  return (
    <RaisedButton
      label={props.label}
      style={styles.button}
      backgroundColor="rgb(194, 77, 1)"
      labelColor="#fff"
      onClick={props.onClick}
    />
  );
};

ThemedButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

ThemedButton.defaultProps = {
  label: ""
};

export default ThemedButton;
