import React from "react";
import { RaisedButton } from "material-ui";
import PropTypes from "prop-types";

const ThemedButton = props => {
  let style = {
    button: {
      minWidth: '94px'
    },
    label: {
      fontSize: '1.1em'
    },
    buttonContainer: {
      padding: '5px 0px',
      height: 'auto'
    }
  }
  return (
    <RaisedButton
      style={style.button}
      buttonStyle={style.buttonContainer}
      containerElement="a"
      label={props.label}
      labelStyle={style.label}
      backgroundColor="rgb(194, 77, 1)"
      labelColor="#fff"
      href={props.url}
      target="_blank"
    />
  );
};

ThemedButton.propTypes = {
  label: PropTypes.string.isRequired,
  url: PropTypes.string
};

ThemedButton.defaultProps = {
  label: ""
};

export default ThemedButton;
