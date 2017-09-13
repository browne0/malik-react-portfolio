import React, { Component } from "react";
import Section from '../../components/AboutSection';
import Footer from '../../components/AboutFooter';
import PortfolioDelegate from '../../utils/PortfolioDelegate';

class About extends Component {
  constructor() {
    super();

    const delegate = new PortfolioDelegate();
    this.state = {
      blog: delegate.getLatestBlog()
    }
  }
  componentDidMount() {
    let hero = this.blurredEl;

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
        <div className="hero-wrapper">
          <div className="hero" ref={elem => (this.blurredEl = elem)}>
            <div className="hero-text">
              <h1>
                Hi, I'm <span>Malik.</span>
              </h1>
              <h2>I'm a Full Stack Engineer at AT&T,</h2>
              <h2>and a UX/Mobile Development hobbyist.</h2>
            </div>
          </div>
        </div>
        <Section title={`"Creativity is a breed of combination and perspective."`}>
          <p>
            Awesome to see that you made it this far.
          </p>
        </Section>
        <Section className="about-section-last" title="Cheers to the freakin' weekend.">
          <p>
            End of the about page.
          </p>
        </Section>
        <Footer blog={this.state.blog} />
      </div>
    );
  }
}

export default About;
