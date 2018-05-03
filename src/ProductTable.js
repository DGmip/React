import React from 'react';
import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'

class ProductTable extends React.Component {

  constructor(props){
    super(props)
    this.props = props;
    this.categories = this.props.categories.map((cat, index) => { // give them id's so that the list works in React
      this.props.categories[index].id = index
      return cat
    })
  }

  render(){

    let searchFilteredCategories = this.props.categories.filter((cat) => {
      return cat.name.indexOf(this.props.state.searchTerm) !== -1
    })

    let stockFilteredCategories = searchFilteredCategories.filter((cat) => {
      if(!this.props.state.showInStockChecked){
        return true
      }else{
        return cat.stocked
      }
    })

    console.log('cats now', stockFilteredCategories)

    return (
      <div>
        {stockFilteredCategories.map((cat, index, array) =>
          <div key={cat.id}>
            <ProductCategoryRow name={cat.category}/>
            <ProductRow
              stocked={cat.stocked}
              name={cat.name}
              price={cat.price}
            />
          </div>
        )}
      </div>
    )
  }

}

export default ProductTable;
