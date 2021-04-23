import React, { useState } from "react";
import classes from "./newBlogger.module.css";
import Modal from "../../../UI/Modal/Modal";

const NewBlogger = (props) => {
  const [picture, setPicture] = useState("");
  const [name, setName] = useState("");
  const [website, setWebsite] = useState("");
  const [email, setEmail] = useState("");

  const newBloggerHandler = () => {
    const blogger = {
      id: props.id.toString(),
      name: name,
      website: website,
      picture_url: picture,
      email: email,
      friends: [],
    };

    console.log(blogger);
    props.addBlogger(blogger);
    props.onHide();
  };

  return (
    <Modal onClose={props.onHide}>
      <div className={classes.blogger}>
        <img src={picture} alt="Select a photo from web"></img>
        <br />
        <label>Picture</label>
        <br />
        <input type="text" onChange={(e) => setPicture(e.target.value)}></input>
        <hr />
        <label>Name</label>
        <br />
        <input type="text" onChange={(e) => setName(e.target.value)}></input>
        <hr />
        <label>Website</label>
        <br />
        <input type="text" onChange={(e) => setWebsite(e.target.value)}></input>
        <hr />
        <label>Email</label>
        <br />
        <input type="text" onChange={(e) => setEmail(e.target.value)}></input>
        <hr />
        <button onClick={newBloggerHandler}>Agregar</button>
      </div>
    </Modal>
  );
};

export default NewBlogger;
