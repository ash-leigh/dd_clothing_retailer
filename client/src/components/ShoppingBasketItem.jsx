var React = require('react');

var ShoppingBasketItem = function(props){
  return(
    <div>
      {props.description}, {props.retailPrice}, {props.salePrice}
    </div>
  )
}

module.exports = ShoppingBasketItem;