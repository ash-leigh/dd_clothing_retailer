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
    return {stockData: [], shoppingCart: [], voucherData: [], total: 0, numberOfItemCount: 0};
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
    this.setState({shoppingCart: shoppingCart.items})
  },

  removeItemFromBasket: function(removedItem){
    var shoppingCart = this.populateShoppingCart();
    shoppingCart.removeItem(removedItem);
    this.setState({shoppingCart: shoppingCart.items})
  },

  getNumberOfItemInBasket: function(item){
    var shoppingCart = this.populateShoppingCart();
    return 
    this.setState({numberOfItemCount: shoppingCart.numberOfItemCount(item)}) 
  },

  getShoppingCartTotal: function(){
    var shoppingCart = this.populateShoppingCart();
    this.setState({total: shoppingCart.total});
  },

  getTotalItemsInBasket: function(){
    return this.state.shoppingCart.length;
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

  checkVoucherCode: function(code){
    var shoppingCart = new ShoppingCart();

    for(var item of this.state.shoppingCart){
      shoppingCart.addItem(new StockItem(item));
    }
    console.log(shoppingCart)
    for(var voucher of this.state.voucherData){
      var checkVoucher = new Voucher(voucher)
      if(checkVoucher.code === code){
        shoppingCart.applyVoucher(checkVoucher);
        console.log(shoppingCart.total)

        this.setState({shoppingCart: shoppingCart.items});
      }
    }

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
          <ShoppingBasketHeader getShoppingCartTotal={this.state.getShoppingCartTotal} getTotalItemsInBasket={this.state.numberOfItemCount}/>
          <ShoppingBasketExpandButton />
          <ShoppingBasketDetails checkVoucherCode={this.checkVoucherCode}/>
          <StockItemsList addItemToBasket={this.addItemToBasket} removeItemFromBasket={this.removeItemFromBasket} stock={this.state.stockData} getNumberOfItemInBasket={this.getNumberOfItemInBasket}/>
        </div>
        <div className='col-1'></div>
      </div>
    )
  }

})

module.exports= ShopBox;

