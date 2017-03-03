/* eslint-disable */
import React, { Component } from 'react';


class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      term: ''
    };
  }
  render(){
    return (
      <div className="main-container">
      <h1>Main Page</h1>
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }  
}



export default Main;