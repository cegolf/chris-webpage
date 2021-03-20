import "../App.css";
import React from "react";
import {
  Container,
  Image,
  Grid,
  Button,
  Divider,
  Segment,
} from "semantic-ui-react";
import profile from "../assets/images/profile1.JPG";
import PersonalList from "../Views/PersonalList";
import SocailList from "../Views/SocialList";
import resume from "../assets/images/Christopher_Egolf_Resume.pdf";

function IntroSegment() {
  return (
    <Segment inverted>
      <Grid stackable centered>
        <Grid.Column width={7}>
          <Container className="left-intro-grid-container">
            <Image src={profile} size="large" className="profile-img" />
            <Divider />
            <Container className="resume-button-container">
              <a download href={resume}>
                <Button circular fluid color="yellow">
                  Download Resume
                </Button>
              </a>
            </Container>
          </Container>
        </Grid.Column>
        <Grid.Column width={8}>
          <Container className="intro-header">
            Welcome! My name is Christopher Egolf
          </Container>
          <Container className="intro-subheader">
            Web Developer and DevOps Engineer
          </Container>
          <Container className="text-container">
            I am a junior studying Computer and Information Science at The Ohio
            State University. I am interested in Web Developement and DevOps. At
            Ohio State I am on the registration committee in the OHI/O student
            ogranization. We maintain our registration platform using React,
            NodeJS, and AWS.
          </Container>
          <Container className="info-list-container">
            <PersonalList />
            <Container className="social-list-cotainer">
              <SocailList />
            </Container>
          </Container>
        </Grid.Column>
      </Grid>
    </Segment>
  );
}

export default IntroSegment;
