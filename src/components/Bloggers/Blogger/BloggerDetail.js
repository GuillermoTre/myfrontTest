import React from "react";
import classes from "./BloggerDetail.module.css";
import Modal from "../../../UI/Modal/Modal";

const bloggerDetail = (props) => {

    let content= null;

   if(props.id !== 0){

    const blogger = props.bloggers.find((obj) => {
        return obj.id == props.id;
      });
    
      const  filtered = props.bloggers.filter(item => blogger.friends.includes(item.id));
    
      const listFriends = filtered.map((friend)=>{
          return(<li key={friend.id}>
              {friend.name}
          </li>);
      })


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
      </div>
      );

   }


  return (
    <Modal onClose={props.onHide}>
        {content}
    </Modal>
  );
};

export default bloggerDetail;
