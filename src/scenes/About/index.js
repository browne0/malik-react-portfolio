import React, { Component } from "react";
import Section from "../../components/AboutSection";
import Footer from "../../components/AboutFooter";
import PortfolioDelegate from "../../utils/PortfolioDelegate";
import { Link } from "react-router-dom";

class About extends Component {
  constructor() {
    super();

    const delegate = new PortfolioDelegate();
    this.state = {
      blog: delegate.getLatestBlog()
    };
  }

  componentWillMount() {
    document.title = "About | Malik Browne";
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
        <Section title={`"Creativity is a breed of history and perspective."`}>
          <p>
            I've realized that anything innovative has stemmed from an original
            idea that someone else had. Taking something that is great, and
            remaking into something that is your own is an amazing feeling, and
            that's why I've fell in love with web development.
          </p>
        </Section>
        <Section title="A little about me">
          <p>
            If you didn't see it at the top, I'm currently a{" "}
            <b>Full Stack Engineer at AT&T</b>, where I work on a team that
            creates tools and services for developers to use across our
            organization internally.
          </p>
          <p>
            The story of how I came across web development is actually quite the
            interesting story. It began all the way back when I was fifteen,
            when I first learned about it at a computer camp in New York. If you
            want the full story, check out the video below.
          </p>

          <iframe
            title="How I became a web developer in 2017"
            src="https://www.youtube.com/embed/aIznyaLbtdQ"
            frameBorder="0"
            allowFullScreen
          />

          <p>
            Outside of that, I love to read, cook <b>(mainly barbeque)</b>, and
            play intramural sports. As of late, I am exploring the daunting
            world of writing.
          </p>
        </Section>
        <Section title="Spare Time">
          <p>
            I am also a mentor at{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://mood.gg/join"
            >
              TeamMood
            </a>, a small mentorship group that takes students from all over the
            world, and places them under the guidance of big tech companies such
            as Google, Twitch, AT&T, Apple and many more. If you're interested
            in hearing more about the program, or maybe you're interested in
            becoming a mentor yourself, feel free to{" "}
            <Link to="/contact">shoot me a message.</Link>
          </p>
        </Section>
        <Section title="Technologies and Mantra">
          <p>
            My expertise and interests lie mostly in front-end technolgies,
            including HTML5, CSS3, and JavaScript (as well as popular JavaScript
            libraries such as React and NodeJS, as well as frameworks like
            Angular and Ember).
          </p>

          <p>
            Most of my intial server side skills stemmed from PHP, but after
            using NodeJS for a bit, and after a ton of time growing as a
            developer I've started to appreciate{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://medium.com/@cscalfani/so-you-want-to-be-a-functional-programmer-part-1-1f15e387e536"
            >
              functional programming
            </a>{" "}
            even more which has led me to explore languages like Python and
            Elixir deeper.
          </p>

          <p>
            If you've seen my YouTube videos, my mantra is{" "}
            <b>K.I.S.S (Keep it Sleek, but Simple)</b> . Human nature leads us
            as consumers to take the path of least resistance. This is why
            finding motivation to go the gym, sticking to a diet, or learning a
            new technology can seem like such an <b>arduous task</b>.{" "}
          </p>

          <p>
            The key to creating awesome user experiences does not lie with{" "}
            <del>the flashiness or the "glam" a website provides</del>, but
            rather{" "}
            <b>
              the ease of access to your site for someone who's never visited
              before
            </b>.{" "}
          </p>

          <img
            className="gif"
            src="https://media.giphy.com/media/Oy9kJMlIHzOVi/giphy.gif"
            alt="It's law."
          />

          <p>
            Create designs that are simple and replicate the world you live in,
            and visitors will feel a sense of calamity, and maybe even amazement
            about why your website is so pleasing to use. Google talks about
            this extensively in their Material Design guidelinse,{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://material.io/guidelines/material-design/introduction.html"
            >
              I highly recommend you check it out.
            </a>
          </p>
        </Section>
        <Section className="about-section-last" title="Contact Me">
          <p>
            I'd like to think that I'm pretty easy to reach, I mean,{" "}
            <Link to="/contact">there is a contact page after all.</Link>
          </p>
          <p>
            If you want to see what I'm up to,{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/milkstarz"
            >
              follow me on Twitter
            </a>{" "}
            for updates on projects I'm working on and my opinions on things
            going on with web development, entrepeneurship, and sometimes even
            finance.
          </p>
        </Section>
        <Footer blog={this.state.blog} />
      </div>
    );
  }
}

export default About;
