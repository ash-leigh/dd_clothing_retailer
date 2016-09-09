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
    console.log(selectedItem)
    this.props.addItem(selectedItem);
  },

  render: function(){
    return(
      <button onClick={this.handleAddItemClick}>{this.props.display}</button>
    )
  }

})

module.exports = EditBasketItem;