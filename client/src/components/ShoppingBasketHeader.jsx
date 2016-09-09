var React = require('react');

var ShoppingBasketHeader = function(props){
  return(
    <div className= 'row'>
      Shopping Basket
      <div>{props.getShoppingCartTotal}</div>
      <div>{props.getTotalItemsInBasket}</div>
    </div>
  )
}

module.exports = ShoppingBasketHeader;