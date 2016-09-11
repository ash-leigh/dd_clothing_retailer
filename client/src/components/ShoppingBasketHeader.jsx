var React = require('react');

var ShoppingBasketHeader = function(props){
  return(
    <div className='row shopping-cart-header'>
    <div className= 'col-6'>Basket</div>
      <div className= 'col-6 shopping-cart-total'>
      <div>Items: {props.items}</div>
      <div>Total: £ {props.total}</div>
      </div>
    </div>
  )
}

module.exports = ShoppingBasketHeader;