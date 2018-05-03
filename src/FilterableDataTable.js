import React from 'react';
import ProductTable from './ProductTable'
import Searchbar from './Searchbar'

class FilterableDataTable extends React.Component {
  constructor(props){
    super(props)
    console.log('constructing filtertable')
    fetch('http://rest.learncode.academy/api/learncode/friends/5ab288d22bfd57010088a9e6')
      .then((res) => {
        console.log(res)
      })
    this.state = {
      showInStockChecked: false,
      searchTerm: '',
      updateSearchTerm: (term) => {
        this.setState({
          searchTerm : term, // this can be done because 'state' is a special property on the react component class
        })
      },
      updateShowState: () => {
        this.setState({
          showInStockChecked : !this.state.showInStockChecked,
        })
      }
    }
  }

  render(){
    return (
      <div>
        <Searchbar
          state={this.state}
        />
        <ProductTable
          state={this.state}
          categories={this.props.categories}
        />
      </div>
    ) // can also pass {...this.props} to pass all of the props (called Spread attributes)
  }
}

export default FilterableDataTable;
