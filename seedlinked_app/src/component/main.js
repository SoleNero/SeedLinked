import React, { Component } from 'react';



class Main extends Component {
  constructor(props){
    super(props);
    this.state = {term: ''};
  }
  render(){
    return (
      <div>
      <input
        value={this.state.term}
        onChange={event => this.onInputChange({ term: event.target.value })}
      />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default Main;