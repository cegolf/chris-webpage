import "../App.css";
import React from "react";
import { Container, Grid, Progress, Header } from "semantic-ui-react";

function Skills() {
  return (
    <Container className="skills-container">
      <Grid centered>
        <Grid.Column width={8}>
          <Container className="programming-skills-containers">
            Programming Skills
          </Container>
          <Container className="program-skills-text">
            These are not all of the languages that I have experience in, just
            the ones that I feel most confortable using and rated out of 10 as
            how comfortable I am using each.
          </Container>
          <Container className="progress-container">
            <Header size="medium" color="grey" inverted>
              Java
            </Header>
            <Progress
              active
              color="yellow"
              value="8"
              total="10"
              progress="ratio"
            />
            <Header size="medium" color="grey" inverted>
              JavaScript
            </Header>
            <Progress
              active
              color="yellow"
              value="8"
              total="10"
              progress="ratio"
            />
            <Header size="medium" color="grey" inverted>
              Python
            </Header>
            <Progress
              active
              color="yellow"
              value="7"
              total="10"
              progress="ratio"
            />
            <Header size="medium" color="grey" inverted>
              HTML/CSS
            </Header>
            <Progress
              active
              color="yellow"
              value="8"
              total="10"
              progress="ratio"
            />
          </Container>
        </Grid.Column>
        <Grid.Column width={8}>
          <Container className="other-skills-container">Other Skills</Container>
          <Container className="program-skills-text">
            These are other skills that I have. These are more services and
            frameworks rather than programming languages.
          </Container>
          <Container className="other-skills-progress-container">
            <Header size="medium" color="grey" inverted>
              AWS
            </Header>
            <Progress
              active
              color="yellow"
              value="6"
              total="10"
              progress="ratio"
            />
            <Header size="medium" color="grey" inverted>
              React
            </Header>
            <Progress
              active
              color="yellow"
              value="7"
              total="10"
              progress="ratio"
            />
            <Header size="medium" color="grey" inverted>
              MySQL
            </Header>
            <Progress
              active
              color="yellow"
              value="6"
              total="10"
              progress="ratio"
            />
            <Header size="medium" color="grey" inverted>
              MongoDB
            </Header>
            <Progress
              active
              color="yellow"
              value="6"
              total="10"
              progress="ratio"
            />
          </Container>
        </Grid.Column>
      </Grid>
    </Container>
  );
}

export default Skills;
