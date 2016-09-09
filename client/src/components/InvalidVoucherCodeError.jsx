var React = require('react');

var InvalidVoucherCodeError = function(props){
  return(
    <div className= 'voucher-error-code'>
      {props.voucherError}
    </div>
  )
}

module.exports = InvalidVoucherCodeError;