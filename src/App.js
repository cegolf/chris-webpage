import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import { Grid, Image, Segment } from "semantic-ui-react";
import Intro from "./Views/Intro";
import ProfilePicture from "./assets/images/profile1.JPG";

function App() {
  return (
    <div className="App-header">
      <Intro />
    </div>
  );
}

export default App;
