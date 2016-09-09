var React = require('react');
var ShopHeader = require('./ShopHeader');
var ShoppingBasketHeader = require('./ShoppingBasketHeader');
var ShoppingBasketExpandButton = require('./ShoppingBasketExpandButton');
var ShoppingBasketDetails = require('./ShoppingBasketDetails');
var StockItemsList = require('./StockItemsList');

var ShoppingCart = require('../models/ShoppingCart');
var StockItem = require('../models/StockItem');

var ShopBox = React.createClass({

  getInitialState: function() {
    return {stockData: [], shoppingCart: []};
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
    var shoppingCart = populateShoppingCart();
    return this.shoppingCart.numberOfItemCount(item);
  },

  loadStockFromServer: function(){
    var request = new XMLHttpRequest();
    request.open('GET', this.props.url);
    request.onload = function(){
      if(request.status === 200){
        var stock = JSON.parse(request.responseText)
        this.setState({stockData: stock})
      }
    }.bind(this)
    request.send(null);
  },

  componentDidMount: function(){
    this.loadStockFromServer();
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
          <ShoppingBasketHeader />
          <ShoppingBasketExpandButton />
          <ShoppingBasketDetails />
          <StockItemsList addItemToBasket={this.addItemToBasket} removeItemFromBasket={this.removeItemFromBasket} stock={this.state.stockData} getNumberOfItemInBasket={this.getNumberOfItemInBasket}/>
        </div>
        <div className='col-1'></div>
      </div>
    )
  }

})

module.exports= ShopBox;

