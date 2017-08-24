import React, { Component } from "react";
import { TextField, RaisedButton } from "material-ui";

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      comment: ""
    };

    this.onChange = this.onChange.bind(this);
  }
  componentDidMount() {}

  onChange(e) {
    let name = e.target.value;
    this.setState({ name });
  }

  render() {
    let style = {
      contactFilter: {
        margin: "auto",
        color: {
          color: "rgb(194, 77, 1)"
        },
        bgcolor: {
          borderColor: "rgb(194, 77, 1)"
        }
      },
      sendButton: {
        color: "rgb(194, 77, 1)"
      }
    };
    return (
      <div className="contact">
        <div className="hero">
          <h2>Want to get in contact?</h2>
          <h3>Here are a few ways to get a hold of me.</h3>
        </div>

        <div className="wrapper">
          <div className="contact-form">
            <div className="form-wrapper">
              <div className="form-hero">
                <h4>Feeling formal?</h4>
                <p>(Fill this out, and I'll get back to you.)</p>
              </div>
              <TextField
                floatingLabelFixed
                hintText="Enter your name"
                floatingLabelText="Name"
                className="contact-input"
                style={style.contactFilter}
                floatingLabelFocusStyle={style.contactFilter.color}
                underlineFocusStyle={style.contactFilter.bgcolor}
                onChange={this.onChange}
                value={this.state.name}
                name="name"
              />
              <TextField
                floatingLabelFixed
                hintText="Enter your email"
                floatingLabelText="Email"
                className="contact-input"
                style={style.contactFilter}
                floatingLabelFocusStyle={style.contactFilter.color}
                underlineFocusStyle={style.contactFilter.bgcolor}
                onChange={this.onChange}
                value={this.state.name}
                name="email"
              />
              <TextField
                floatingLabelFixed
                hintText="Enter your message"
                floatingLabelText="Message"
                className="contact-input"
                style={style.contactFilter}
                floatingLabelFocusStyle={style.contactFilter.color}
                underlineFocusStyle={style.contactFilter.bgcolor}
                onChange={this.onChange}
                value={this.state.name}
                name="comment"
              />
              <RaisedButton
                label="Send"
                backgroundColor="rgb(194, 77, 1)"
                labelColor="#fff"
                className="contact-button"
              />
            </div>
          </div>
          <div className="other-contact">
            <div className="form-wrapper">
              <div className="other-hero">
                <h4>Prefer more modern methods?</h4>
                <p>(I have those too.)</p>
              </div>
              <div className="other-content">
                <p>Email</p>
                <h5>
                  <a href="mailto:malik@malikbrowne.com">
                    malik@malikbrowne.com
                  </a>
                </h5>
                <p>Social</p>
                <div className="social" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
