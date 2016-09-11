var React = require('react');
var StockItem = require('../models/StockItem');

var EditBasketItem= React.createClass({
  
  handleItemClick: function(){
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