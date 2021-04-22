import React, { Fragment } from "react";
import classes from "./Blogger.module.css";

const blogger = (props) => {
  console.log(props.image);
  return (
    <Fragment>
      <div className={classes.blogger}>
        <img src={props.image} alt='Blogger pic' ></img>
        <div>
          <p>Name</p>
          <hr></hr>
          <label>{props.name}</label>
        </div>
        <div>
          <p>Website</p>
          <hr></hr>
          <label>{props.website}</label>
        </div>

      </div>
    </Fragment>
  );
};

export default blogger;
