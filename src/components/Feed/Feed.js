import React from "react";
import FeedBox from './FeedBox';
import Post from './Post';
import './Feed.css';

function Feed() {
  return <div className="feed">
    <FeedBox />
    <Post />
    <Post />
    <Post />
    <Post />

  </div>;
}

export default Feed;
