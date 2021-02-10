import React from "react";
import ArrowUpwardOutlinedIcon from "@material-ui/icons/ArrowUpwardOutlined";
import ArrowDownwardOutlinedIcon from "@material-ui/icons/ArrowDownwardOutlined";
import RepeatOutlinedIcon from "@material-ui/icons/RepeatOutlined";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import { MoreHorizOutlined, ShareOutlined } from "@material-ui/icons";
import { Avatar } from "@material-ui/core";
import './Post.css';

function Post() {
  return (
    <div className="post">
      <div className="post__info">
        <Avatar src="https://images-platform.99static.com//_QXV_u2KU7-ihGjWZVHQb5d-yVM=/238x1326:821x1909/fit-in/500x500/99designs-contests-attachments/119/119362/attachment_119362573" 
        />
        <h5>Username</h5>
        <small>TimeStamp</small>
      </div>
      <div className="post__body">
        <div className="post_question">
    <p>Question</p>
    <button className="post_btnAnswer">
    Answer
    </button>
        </div>
        <div className="post__answer">
    <p></p>
        </div>
        <img src="https://qph.fs.quoracdn.net/main-qimg-e4a2d705df77a148a9681835df7fb013"
        alt="" />
      </div>
      <div className="post__footer">
        <div className="post__footerAction">
          <ArrowUpwardOutlinedIcon />
          <ArrowDownwardOutlinedIcon />
        </div>

        <RepeatOutlinedIcon />
        <ChatBubbleOutlineOutlinedIcon />
        <div className="post__footerLeft">
          <ShareOutlined />
          <MoreHorizOutlined />
        </div>
      </div>
    </div>
  );
}

export default Post;
