import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";

function Profile() {
  return (
    <div className={s.content}>
      <div className={s.back_pic}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/044_le_pic_du_ger.jpg/1200px-044_le_pic_du_ger.jpg"></img>
      </div>
      <div>ava + info</div>
      <MyPosts />
    </div>
  );
}

export default Profile;
