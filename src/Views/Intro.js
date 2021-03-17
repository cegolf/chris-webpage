import "../App.css";
import React, { Component } from "react";
import { Header, Container, Divider, Segment, Image } from "semantic-ui-react";
import osu from "../assets/images/osu.jpg";
import ohio from "../assets/images/OHIO-subtitle.png";
import profile from "../assets/images/profile1.JPG";

function IntroSegment() {
  return (
    <div>
      <Container className="welcome-container" textAlign="left">
        <Container className="welcome-header">
          <Header inverted color="grey">
            Welcome!!
          </Header>
        </Container>
        <Divider />
        <Container class="intro-container">
          <Header inverted color="grey">
            My name is Christopher Egolf and I am an aspiring web developer who
            loves to work with React and AWS.
          </Header>
          <Image
            className="profile-img"
            size="medium"
            src={profile}
            floated="right"
          />
        </Container>
        <Container className="about-me-container">
          <Header size="huge" inverted color="grey">
            About me
          </Header>
          <Image src={osu} floated="right" size="medium" />

          <Container className="about-me-text">
            I am a junior college student studying computer and information
            science at The Ohio State University. I am most interested in web
            developement and DevOps as well as cyprtography and information
            security.
          </Container>
          <Container className="activities-container">
            <Header size="huge" inverted color="grey">
              Activities
            </Header>
            <Container className="activities-text">
              I am a member of the OHI/O student organization at OSU. OHI/O is
              an organization that plans and puts on HackOHI/O, OSU's hackathon.
              We also put on other events such as MAKE OHI/O and High School
              I/O.
            </Container>
          </Container>
          <Image
            className="OHIO-img"
            size="medium"
            src={ohio}
            floated="right"
          />
          <Divider />
        </Container>
      </Container>
    </div>
  );
}

export default IntroSegment;
