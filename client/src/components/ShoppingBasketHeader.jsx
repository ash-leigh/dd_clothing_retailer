var React = require('react');

var ShoppingBasketHeader = function(props){
  return(
    <div className= 'row'>
      Shopping Basket
      <div>{props.total}</div>
      <div>{props.items}</div>
    </div>
  )
}

module.exports = ShoppingBasketHeader;