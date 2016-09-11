var React = require('react');
var ShoppingBasketDetails = require('./ShoppingBasketDetails');

var ShoppingBasketExpandButton = React.createClass({
  getInitialState: function(){
    return {clicked: true, className: 'shopping-cart-not-clicked'}
  },

  handleClick: function(){
    this.setState({clicked: !this.state.clicked});
    if(this.state.clicked){
      this.setState({className: 'shopping-cart-clicked'})
    }else{
      this.setState({className: 'shopping-cart-not-clicked'})
    }
  },

  render: function(){
    return(
      <div>
      <div className= 'row expand-button' onClick={this.handleClick}>show details</div>
        <ShoppingBasketDetails class={this.state.className} handleVoucherClick={this.props.handleVoucherClick} errorMessage={this.props.errorMessage} shoppingCart = {this.props.shoppingCart} removeItemFromBasket={this.props.removeItemFromBasket}/>
      </div>
    )
  }

})


module.exports = ShoppingBasketExpandButton;