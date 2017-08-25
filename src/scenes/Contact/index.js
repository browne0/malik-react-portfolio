import React, { Component } from "react";
import { TextField, RaisedButton } from "material-ui";

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: "hey",
      email: "malik.browne3@gmail.com",
      message: "hey"
    };

    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }
  componentDidMount() {
    document.title = "Contact | Malik Browne"
  }

  submitForm() {
    if (this.state.name !== '' && this.state.email !== '' && this.state.message !== '') {
      fetch('http://malikbrowne.com/contact.php', {
        method: 'POST',
        body: JSON.stringify({
          name: this.state.name,
          email: this.state.email,
          message: this.state.message
        })
      })
      .then(response => {
        return response.json()
      })
      .then(result => {
        console.log(result)
      })
      .catch(err => {
        console.log(err);
      })
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
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
                value={this.state.email}
                name="email"
              />
              <TextField
                floatingLabelFixed
                multiLine
                rows={3}
                hintText="Enter your message"
                floatingLabelText="Message"
                className="contact-input"
                style={style.contactFilter}
                floatingLabelFocusStyle={style.contactFilter.color}
                underlineFocusStyle={style.contactFilter.bgcolor}
                onChange={this.onChange}
                value={this.state.message}
                name="message"
              />
              <RaisedButton
                label="Send"
                backgroundColor="rgb(194, 77, 1)"
                labelColor="#fff"
                className="contact-button"
                onClick={this.submitForm}
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
                <div className="social">
                  <a href="https://github.com/browne0"><i className="icon ion-social-github"/></a>
                  <a href="https://twitter.com/milkstarz"><i className="icon ion-social-twitter"/></a>
                  <a href="https://youtube.com/milkstarz"><i className="icon ion-social-youtube"/></a>
                  <a href="https://linkedin.com/in/malikbrowne"><i className="icon ion-social-linkedin"/></a>
                  <a href="https://instagram.com/milkstarz"><i className="icon ion-social-instagram"/></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
