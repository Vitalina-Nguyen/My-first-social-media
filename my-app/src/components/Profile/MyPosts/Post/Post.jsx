import React from "react";
import s from "./Post.module.css";

function Post(props) {
  return (
    <div className = {s.post}>
      <img src="https://i.scdn.co/image/ab6761610000e5ebdea04210d5875d455c8dedaf" />
      Post 1
      <div>
        {props.massage}
      </div>
    </div>
  );
}

export default Post;
