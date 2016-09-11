var React = require('react');

var VoucherError = function(props){
  return(
    <div className= 'voucher-error-code'>
      {props.errorMessage}
    </div>
  )
}

module.exports = VoucherError;