var React = require('react');

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
    this.props.checkVoucherCode(this.state.voucherCode);
  },

  render: function(){
    return(
      <div>
        VoucherForm:
        <input type='text' onChange={this.setVoucherCodeOnChange}></input>
        <button onClick={this.handleVoucherClick}>apply voucher</button>
      </div>
    )
  }

})


module.exports = VoucherForm;