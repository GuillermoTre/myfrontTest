import React from 'react';
import classes from './Header.module.css';

const header = (props)=>{
    return(
        <header className={classes.Menu} style={{color:'White'}}>
            <h2>My Fav. Bloggers</h2>
        </header>
    );
}

export default header;