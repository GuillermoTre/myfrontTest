import React, {Fragment} from 'react';
import Header from '../components/header/Header';


class Layout extends React.Component{
    render(){
        return(
            <Fragment>
                <Header/>
                <div>MAIN</div>
            </Fragment>
        );
    }
}

export default Layout;