import React from "react";
import s from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts() {
    return (
      <div>
        <h3>My Posts</h3>
        <textarea></textarea>
        <button>Add post</button>
        <Post massage = 'Hello! This is Anna.' />
        <Post massage = 'I am an artist.' />
      </div>
      
    );
}

export default MyPosts;
