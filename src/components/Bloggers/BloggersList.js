import React from 'react';
import classes from './BloggersList.module.css';
import Blogger from './Blogger/Blogger';
import Card from '../../UI/Card';

const BloggersList = (props)=>{

    const list = props.bloggers.map((blogger)=>{
        console.log(props.picture_url)
        return (
            <li key={blogger.id}>
                <Card>
                    <Blogger  name={blogger.name} website={blogger.website} image={blogger.picture_url} />
                </Card>
            </li>

        );
    })

    return (
        <ul className={classes.list}>
            {list}
        </ul>
    );

}

export default BloggersList;