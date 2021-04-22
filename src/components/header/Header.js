import React from 'react';
import classes from './Header.module.css';

const header = (props)=>{
    return(
        <header className={classes.header} style={{color:'White'}}>
            <button className={classes.AddButton} onClick={props.AddBlogger}>Boton agregar Blogger</button>
            <div><h2>My Fav. Bloggers</h2></div>
        </header>
    );
}

export default header;