var React = require('react');

var InvalidBasketCodeError = function(){
  return(
    <div className= 'basket-error-code'>
      Sorry, this voucher is not valid for your basket
    </div>
  )
}

module.exports = InvalidBasketCodeError;