import "../App.css";
import React, { Component } from "react";
import { Header, Container, Divider, Segment, Image } from "semantic-ui-react";
import osu from "../assets/images/osu.jpg";

function IntroSegment() {
  return (
    <div>
      <Container className="welcome-container" textAlign="left">
        <Header inverted size="large" color="grey">
          Welcome!!
        </Header>
        <Divider />
        <Container class="intro-container">
          <Header inverted size="small" color="grey">
            My name is Christopher Egolf and I am an aspiring web developer who
            loves to work with React and AWS.
          </Header>
        </Container>
        <Container className="about-me-container">
          <Header size="medium" inverted color="grey">
            About me
          </Header>
          <Segment inverted className="about-me-segment">
            <Container className="about-me-text">
              I am a junior college student studying computer and information
              science at The Ohio State University. I am most interested in web
              developement and DevOps as well as cyprtography and information
              security.
            </Container>

            <Container className="osu-image-container">
              <Image src={osu} floated="right" size="medium" />
            </Container>
          </Segment>
        </Container>
      </Container>
    </div>
  );
}

export default IntroSegment;
