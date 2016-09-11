var React = require('react');
var ShoppingBasketItemsList = require('./ShoppingBasketItemsList');
var VoucherForm = require('./VoucherForm');

var ShoppingBasketDetails = function(props){
  return(
    <div className= {props.class}>
      ShoppingBasketDetails:
      <div className='row'>
        <ShoppingBasketItemsList shoppingCart={props.shoppingCart}/>
      </div>
      <div className='row'>
        <VoucherForm handleVoucherClick={props.handleVoucherClick} errorMessage={props.errorMessage}/>
      </div>
    </div>
  )
}

module.exports = ShoppingBasketDetails;