var React = require('react');
var ShoppingBasketItemsList = require('./ShoppingBasketItemsList');
var VoucherForm = require('./VoucherForm');

var ShoppingBasketDetails = function(){
  return(
    <div className= 'row'>
      ShoppingBasketDetails:
      <div className='row'>
        <ShoppingBasketItemsList />
      </div>
      <div className='row'>
        <VoucherForm />
      </div>
    </div>
  )
}

module.exports = ShoppingBasketDetails;