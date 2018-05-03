import React from 'react';

class ProductRow extends React.Component {
  render(){
      return (
        <div className='row'>
          <div>
            {this.props.name}
          </div>
          <div>
            {this.props.stocked}
          </div>
          <div>
            {this.props.price}
          </div>
        </div>
      )
  }
}

export default ProductRow;
