var React = require('react');
var StockItem = require('../models/StockItem');

var EditBasketItem= React.createClass({

  handleItemClick: function(){
    var selectedItem = new StockItem({
      id: this.props.stockItem.id,
      description: this.props.stockItem.description,
      colour: this.props.stockItem.colour,
      department: this.props.stockItem.department,
      category: this.props.stockItem.category,
      retailPrice: this.props.stockItem.retailPrice,
      salePrice: this.props.stockItem.salePrice,
      stockQuantity: this.props.stockItem.stockQuantity
    })
    if(this.props.display === '+'){
      this.props.addItemToBasket(selectedItem);
    }else{
      this.props.removeItemFromBasket(selectedItem);
    }
  },

  render: function(){
    return(
      <button onClick={this.handleItemClick}>{this.props.display}</button>
    )
  }

})

module.exports = EditBasketItem;