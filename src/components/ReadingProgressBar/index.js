import React, { Component } from "react";
import PropTypes from "prop-types";
import throttle from "./throttle";

export default class ProgressBar extends Component {
  static propTypes = {
    targetEl: PropTypes.string
  };

  static defaultProps = {
    color: "rgb(194, 77, 1)",
    targetEl: "body"
  };

  constructor(props) {
    super(props);

    this.max = 0;

    this.state = {
      width: 0
    };
    this.update = this.update.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    this.timeout = setTimeout(() => {
      if (this.unmounted) return;
      this.measure();
      window.addEventListener("scroll", this.handleScroll);
      window.addEventListener("resize", this.handleResize);
    }, 150);
  }

  componentWillUnmount() {
    if (this.timeout) clearTimeout(this.timeout);
    this.unmounted = true;
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize() {
    throttle(this.measure(), 100);
  }

  handleScroll() {
    throttle(this.update(), 100);
  }

  measure() {
    this.max =
      document.scrollingElement.scrollHeight -
      document.scrollingElement.clientHeight;
    this.update();
  }

  update() {
    this.max = Math.max(this.max, document.scrollingElement.scrollTop);

    const value = document.scrollingElement.scrollTop / this.max * 100;

    this.setState({
      width: value
    });
  }

  render() {
    let style = {
      progressWrapper: {
        width: "100%",
        height: "0.4rem",
        position: "fixed",
        zIndex: '9999',
        backgroundColor: "transparent"
      },
      progressBar: {
        height: "0.4rem",
        width: `${this.state.width}%`,
        backgroundColor: this.props.color
      }
    };
    return (
      <div className="progress-wrapper" style={style.progressWrapper}>
        <div className="progress" style={style.progressBar} />
      </div>
    );
  }
}
