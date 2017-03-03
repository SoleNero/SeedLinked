import React, { Component } from 'react';
import Main from '../component/main.js'

class App extends Component {
  constructor(props){
    super(props);
     
     this.state = { locations: {} };

    
  }
  render() {
    return(
    <div>
      <Main />
      {this.props.children}
  </div>
  )
 } 
}

export default App;