import Layout from './hoc/Layout';
import './App.css';
import React from 'react';
import Bloggers from './containers/mainPage/bloggers';

class App extends React.Component{
  render(){
    return(
      <Layout>
        <Bloggers/>
      </Layout>
    );
  }
}
export default App;
