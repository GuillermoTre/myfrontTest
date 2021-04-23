import React from 'react';
import classes from './BloggersList.module.css';
import Blogger from './Blogger/Blogger';
import Card from '../../UI/Card';

const BloggersList = (props)=>{

    const list = props.bloggers.map((blogger)=>{
        return (
            <li key={blogger.id}>
                <Card>
                    <Blogger showDetail={props.onShow}
                      name={blogger.name}
                      website={blogger.website} 
                      image={blogger.picture_url} 
                      id={blogger.id} 
                      selectId={props.onSelectBlogger} />
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