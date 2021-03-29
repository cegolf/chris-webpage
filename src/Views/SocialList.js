import "../App.css";
import React from "react";
import { List, Icon } from "semantic-ui-react";

function SocialList() {
  return (
    <List relaxed horizontal className="social-list">
      <List.Item>
        <a class="social-link" href="https://github.com/cegolf">
          <Icon circular size="large" link name="github" />
        </a>
      </List.Item>
      <List.Item>
        <a class="social-link" href="https://linkedin.com/in/christopher-egolf">
          <Icon circular size="large" name="linkedin"></Icon>
        </a>
      </List.Item>
    </List>
  );
}

export default SocialList;
