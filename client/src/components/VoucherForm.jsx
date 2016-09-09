var React = require('react');
var InvalidVoucherCodeError = require('./InvalidVoucherCodeError');
var InvalidBasketCodeError = require('./InvalidBasketCodeError');

var VoucherForm = React.createClass({

  getInitialState: function(){
    return{voucherCode: 0}
  },

  setVoucherCodeOnChange: function(event){
    event.preventDefault();
    this.setState({voucherCode: event.target.value});
  },

  handleVoucherClick: function(){
    console.log('entered click')
    this.props.handleVoucherClick(this.state.voucherCode);
  },

  render: function(){
    return(
      <div>
        VoucherForm:
        <input type='text' onChange={this.setVoucherCodeOnChange}></input>
        <button onClick={this.handleVoucherClick}>apply voucher</button>
        <InvalidVoucherCodeError voucherError={this.props.voucherError} />
        <InvalidBasketCodeError basketError={this.props.basketError}/>
      </div>
    )
  }

})


module.exports = VoucherForm;