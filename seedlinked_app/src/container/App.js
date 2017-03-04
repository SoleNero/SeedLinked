import React, { Component } from 'react';
import Navbar from '../component/Navbar.js'

class App extends Component {
  constructor(props){
    super(props);
     
     this.state = { 
       term: '' 
      };
   
  }
  render() {
    return(
    <div>
      <Navbar />
      {this.props.children}
  </div>
  )
 } 
}

export default App;