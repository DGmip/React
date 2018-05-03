import React from 'react';

class Searchbar extends React.Component {
  constructor(props){
    super(props)
    this.checkboxOnChangeHandler = this.checkboxOnChangeHandler.bind(this);
    this.inputOnChangeHandler = this.inputOnChangeHandler.bind(this);
  }

  inputOnChangeHandler(e){
    this.props.state.updateSearchTerm(e.target.value)
    // e.preventDefault()
  }

  checkboxOnChangeHandler(e){
    this.props.state.updateShowState()
    // e.preventDefault()
  }

  render(){
      return (
        <div id="search-bar">
          <fieldset>
            <input type='text' placeholder='search...' value={this.props.state.searchTerm} onChange={this.inputOnChangeHandler}/>
            <input type='checkbox' placeholder='Search...' checked={this.props.state.showInStockChecked} onChange={this.checkboxOnChangeHandler}/>
            <span>Only show products in stock</span>
          </fieldset>
        </div>
      )
  }
}

export default Searchbar;
