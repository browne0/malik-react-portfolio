import React, { Component } from "react";
import Button from "../../components/ThemedButton";
import { Link } from "react-router-dom";

class NotFound extends Component {
  render() {
    let style = {
      button: {
        display: "inline-block",
        padding: "10px 10px 10px 0px"
      }
    };
    return (
      <div className="NotFound">
        <div className="cover">
          <h1>
            Page not found <small>Error 404</small>
          </h1>
          <p className="lead">
            Oops! I couldn't find the page you were looking for.
          </p>
          <img
            src="https://media.giphy.com/media/l41lFw057lAJQMwg0/giphy.gif"
            alt="Not found"
          />

          <div style={style.button}>
            <Button containerElement={<Link to="/" />} label="Back to Home" />
          </div>
        </div>
      </div>
    );
  }
}

export default NotFound;
