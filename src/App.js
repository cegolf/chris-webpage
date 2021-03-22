import "./App.css";
import React, { Component } from "react";
import { Container, Grid, Checkbox } from "semantic-ui-react";
import Intro from "./Views/Intro";
import Skills from "./Views/Skills";

export default class App extends Component {
  render() {
    return (
      <div className="App-header">
        <Container className="main-container">
          <Grid centered stackable container className="main-grid-container">
            <Grid.Column className="main-grid-column" width={18}>
              <Container className="content-container">
                <Intro />
                <Container className="skill-header-container">
                  My Skills
                </Container>

                <Skills />
              </Container>
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    );
  }
}
