import React from 'react';

class ProductCategoryRow extends React.Component {
  render(){
      return (
        <div>
          <b>{this.props.name}</b>
        </div>
      )
  }
}

export default ProductCategoryRow;
