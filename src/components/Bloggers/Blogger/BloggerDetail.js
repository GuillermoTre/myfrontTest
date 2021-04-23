import React from "react";
import classes from "./BloggerDetail.module.css";
import Modal from "../../../UI/Modal/Modal";
import Select from 'react-select'

const bloggerDetail = (props) => {
  let content = null;

  if (props.id !== 0) {
    const blogger = props.bloggers.find((obj) => {
      return obj.id === props.id;
    });

    const filtered = props.bloggers.filter((item) =>
      blogger.friends.includes(item.id)
    );

    const listFriends = filtered.map((friend) => {
      return <li key={friend.id}>{friend.name}</li>;
    });

    const bloggersArray = props.bloggers.filter(
      (item) => !blogger.id.includes(item.id)
    );
    const noFriendsList = bloggersArray.filter(
      (item) => !blogger.friends.includes(item.id)
    );

    const options = noFriendsList.map((item)=>{
        return {value: item.id, label: item.name}
    });

    const onClick = (id)=>{
        props.onAddFriend(blogger.id,id.value)
    }

    content = (
      <div className={classes.blogger}>
        <img src={blogger.picture_url}></img>
        <br />
        <label>'Name'</label>
        <hr />
        <p>{blogger.name}</p>
        <label>'Website'</label>
        <hr />
        <p>{blogger.website}</p>
        <label>'Email'</label>
        <hr />
        <p>{blogger.email}</p>
        <label>'Friends:'</label>
        <hr />
        <ul>{listFriends}</ul>
        <hr />
        <label>Agregar amigos</label>
        <Select onChange={onClick} options={options} />
      </div>
    );
  }

  return <Modal onClose={props.onHide}>{content}</Modal>;
};

export default bloggerDetail;
