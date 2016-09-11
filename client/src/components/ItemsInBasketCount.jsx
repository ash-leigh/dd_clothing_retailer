var React = require('react');
var StockItem = require('../models/StockItem');

var ItemsInBasketCount = function(props){
  var stockItem = new StockItem({
    id: props.id, 
    description: props.description,
    colour: props.colour,
    department: props.department,
    category: props.category,
    retailPrice: props.retailPrice,
    salePrice: props.salePrice,
    stockQuantity: props.stockQuantity
  })
  return(
    <div>{props.getNumberOfItemInBasket(stockItem)}</div>
  )
}

module.exports = ItemsInBasketCount;