var React = require('react');
var ShoppingBasketItemsList = require('./ShoppingBasketItemsList');
var VoucherForm = require('./VoucherForm');

var ShoppingBasketDetails = function(props){
  return(
    <div className= {props.class}>
      <div className='row'>
        <ShoppingBasketItemsList shoppingCart={props.shoppingCart} removeItemFromBasket={props.removeItemFromBasket}/>
      </div>
      <div className='row'>
        <VoucherForm handleVoucherClick={props.handleVoucherClick} errorMessage={props.errorMessage}/>
      </div>
    </div>
  )
}

module.exports = ShoppingBasketDetails;