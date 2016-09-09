var React = require('react');

var ItemsInBasketCount = function(props){
  return(
    <div>{props.getNumberOfItemInBasket(props.stockItem)}</div>
  )
}

module.exports = ItemsInBasketCount;