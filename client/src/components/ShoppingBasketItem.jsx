var React = require('react');
var StockItem = require('../models/StockItem');

var ShoppingBasketItem = React.createClass({
  handleClick: function(){
    var selectedItem = new StockItem({
      id: this.props.id,
      description: this.props.description,
      colour: this.props.colour,
      department: this.props.department,
      category: this.props.category,
      retailPrice: this.props.retailPrice,
      salePrice: this.props.salePrice,
      stockQuantity: this.props.stockQuantity
    })
    this.props.removeItemFromBasket(selectedItem);
  },

  render: function(){
    return(
      <div className='row'>
        {this.props.description} {this.props.retailPrice} {this.props.salePrice}
        <button onClick={this.handleClick}>X</button>
      </div>
    )
  }

})

module.exports = ShoppingBasketItem;