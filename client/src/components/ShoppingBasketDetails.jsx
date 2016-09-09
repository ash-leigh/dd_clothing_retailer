var React = require('react');
var ShoppingBasketItemsList = require('./ShoppingBasketItemsList');
var VoucherForm = require('./VoucherForm');

var ShoppingBasketDetails = function(props){
  return(
    <div className= 'row'>
      ShoppingBasketDetails:
      <div className='row'>
        <ShoppingBasketItemsList />
      </div>
      <div className='row'>
        <VoucherForm handleVoucherClick={props.handleVoucherClick} voucherError={props.voucherError} basketError={props.basketError}/>
      </div>
    </div>
  )
}

module.exports = ShoppingBasketDetails;