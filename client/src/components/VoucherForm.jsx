var React = require('react');
var VoucherError = require('./VoucherError');

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
        <VoucherError errorMessage={this.props.errorMessage} />
      </div>
    )
  }

})


module.exports = VoucherForm;