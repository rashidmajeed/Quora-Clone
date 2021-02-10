import React from "react";
import { Avatar } from "@material-ui/core";
import './FeedBox.css';

function FeedBox() {
  return (
    <div className="feedBox">
      <div className="feedBox__info">
        <Avatar
          src="https://images-platform.99static.com//_QXV_u2KU7-ihGjWZVHQb5d-yVM=/238x1326:821x1909/fit-in/500x500/99designs-contests-attachments/119/119362/attachment_119362573"
          className="feedBox__infoAvatar"
        />
        <h5>Username</h5>
      </div>
      <div className="feedBox__quora">
        <p>What is your question or link?</p>
      </div>
    </div>
  );
}

export default FeedBox;
