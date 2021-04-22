import React, {Fragment} from 'react';
import Header from '../components/header/Header';

class Layout extends React.Component{

    constructor(props){
        super(props)
      }

    render(){
        return(
            <Fragment>
                <Header/>
                <main>{this.props.children}</main>
            </Fragment>
        );
    }
}

export default Layout;