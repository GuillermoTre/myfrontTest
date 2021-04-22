import React from 'react';
import classes from './Header.module.css';

const header = (props)=>{
    return(
        <header className={classes.Menu} style={{color:'White'}}>
            <button className={classes.AddButton} onClick={props.AddBlogger}>+ Blogger</button>
            <h2>My Fav. Bloggers</h2>
        </header>
    );
}

export default header;