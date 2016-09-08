var React = require('react');

var ShoppingBasketHeader = function(props){
  return(
    <div className= 'row'>
      Shopping Basket
      <div>{props.numberOfItemsInBasket}</div>
      <div>{props.basketTotal}</div>
    </div>
  )
}

module.exports = ShoppingBasketHeader;