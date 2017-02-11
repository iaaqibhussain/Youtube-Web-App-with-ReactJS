import React, { Component } from 'react';



class SearchBar extends Component {

constructor(props){
super(props);

this.state = {term :''};


}

  render() {
    return (
      <div className="search-bar">
      <input onChange={ event => this.onInputChange(event.target.value) }/>

      </div>
    );
  }
  //User starts editing
  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
    console.log(event.target.value);

  }
}

export default SearchBar;
