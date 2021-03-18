import "../App.css";
import React from "react";
import { List } from "semantic-ui-react";

function PersonalList() {
  return (
    <List relaxed>
      <List.Item>
        <List.Icon name="home" />
        <List.Content>Address: 6296 Corley Dr, Dublin OH</List.Content>
      </List.Item>
      <List.Item>
        <List.Icon name="phone" />
        <List.Content>Phone: 614-597-8358</List.Content>
      </List.Item>
      <List.Item>
        <List.Icon name="mail" />
        <List.Content>Email: cae5511@gmail.com</List.Content>
      </List.Item>
      <List.Item>
        <List.Icon name="mail" />
        <List.Content>Email: egolf.8@osu.edu</List.Content>
      </List.Item>
    </List>
  );
}

export default PersonalList;
