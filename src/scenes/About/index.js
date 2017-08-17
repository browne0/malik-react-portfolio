import React, { Component } from "react";

class About extends Component {
  componentDidMount() {
    let hero = this.blurredEl;
    console.log(hero);

    let fullResImg = "http://malikbrowne.com/assets/selfie/about_bg3.jpg";

    let img = new Image();

    img.src = fullResImg;
    img.onload = () => {
      hero.style.backgroundImage = `url(${fullResImg})`;
      hero.style.filter = "none";
    };
  }

  render() {
    return (
      <div className="About">
        <div className="hero" ref={elem => (this.blurredEl = elem)}>
          <div className="hero-text">
            <h1>
              Hi, I'm <span>Malik.</span>
            </h1>
            <h2>Currently a full stack engineer at AT&T.</h2>
            <h2>Avid photographer, and YouTuber.</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
