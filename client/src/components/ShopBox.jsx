var React = require('react');
var ShopHeader = require('./ShopHeader');
var ShoppingBasketHeader = require('./ShoppingBasketHeader');
var ShoppingBasketExpandButton = require('./ShoppingBasketExpandButton');
var ShoppingBasketDetails = require('./ShoppingBasketDetails');
var StockItemsList = require('./StockItemsList');

var ShoppingCart = require('../models/ShoppingCart');
var StockItem = require('../models/StockItem');
var Voucher = require('../models/Voucher');

var ShopBox = React.createClass({

  getInitialState: function() {
    return {stockData: [], shoppingCart: [], voucherData: [], total: 0, numberOfItems: 0, errorMessage: ''};
  },

  populateShoppingCart: function(){
    var shoppingCart = new ShoppingCart();
    for(var item of this.state.shoppingCart){
      shoppingCart.addItem(new StockItem(item));
    }
    return shoppingCart;
  },

  addItemToBasket: function(selectedItem){
    var shoppingCart = this.populateShoppingCart();
    shoppingCart.addItem(selectedItem);
    this.setState({shoppingCart: shoppingCart.items, total: shoppingCart.total, numberOfItems: shoppingCart.items.length})
  },

  removeItemFromBasket: function(removedItem){
    var shoppingCart = this.populateShoppingCart();
    shoppingCart.removeItem(removedItem);
    this.setState({shoppingCart: shoppingCart.items, total: shoppingCart.total, numberOfItems: shoppingCart.items.length})
  },

  getNumberOfItemInBasket: function(item){
    var shoppingCart = this.populateShoppingCart();
    return shoppingCart.numberOfItemCount(item);
  },

  loadStockFromServer: function(){
    var request = new XMLHttpRequest();
    request.open('GET', this.props.stockUrl);
    request.onload = function(){
      if(request.status === 200){
        var stock = JSON.parse(request.responseText)
        this.setState({stockData: stock})
      }
    }.bind(this)
    request.send(null);
  },

  loadVouchersFromServer: function(){
    var request = new XMLHttpRequest();
    request.open('GET', this.props.voucherUrl);
    request.onload = function(){
      if(request.status === 200){
        var vouchers = JSON.parse(request.responseText)
        this.setState({voucherData: vouchers})
      }
    }.bind(this)
    request.send(null);
  },

  componentDidMount: function(){
    this.loadStockFromServer();
    this.loadVouchersFromServer();
  },

  handleVoucherClick: function(code){
    var shoppingCart = new ShoppingCart();
    for(var item of this.state.shoppingCart){
      shoppingCart.addItem(new StockItem(item));
    }

    if(shoppingCart.checkVoucherCode(code, this.state.voucherData)){
      shoppingCart.applyVoucher(code, this.state.voucherData)
    }else{
      this.setState({errorMessage: shoppingCart.voucherErrorMessage()})
    }

   this.setState({shoppingCart: shoppingCart.items, total: shoppingCart.total, numberOfItems: shoppingCart.items.length});

  },

  render: function(){
    var shoppingCart = new ShoppingCart();
    for(var item of this.state.shoppingCart){
      shoppingCart.addItem(item);
    }
    return(
      <div className='row col-12'>
        <div className='col-1'></div>
        <div className='col-10'>
          <ShopHeader />
          <ShoppingBasketHeader total={this.state.total} items={this.state.numberOfItems}/>
          <ShoppingBasketExpandButton />
          <ShoppingBasketDetails handleVoucherClick={this.handleVoucherClick} voucherError={this.state.errorMessage}/>
          <StockItemsList addItemToBasket={this.addItemToBasket} removeItemFromBasket={this.removeItemFromBasket} stock={this.state.stockData} getNumberOfItemInBasket={this.getNumberOfItemInBasket}/>
        </div>
        <div className='col-1'></div>
      </div>
    )
  }

})

module.exports= ShopBox;

