var React = require('react');
var ShopHeader = require('./ShopHeader');
var ShoppingBasketHeader = require('./ShoppingBasketHeader');
var ShoppingBasketExpandButton = require('./ShoppingBasketExpandButton');
var ShoppingBasketDetails = require('./ShoppingBasketDetails');
var StockItemsList = require('./StockItemsList');

var ShoppingCart = require('../models/ShoppingCart')

var ShopBox = React.createClass({

  getInitialState: function() {
    var shoppingCart = new ShoppingCart;
    return {stockData: [], shoppingCart: shoppingCart};
  },

  getNumberOfItemsInBasket: function(){

  },

  getBasketTotal: function(){

  },

  loadStockFromServer: function(){
    var request = new XMLHttpRequest();
    request.open('GET', this.props.url);
    request.onload = function(){
      if(request.status === 200){
        var stock = JSON.parse(request.responseText)
        this.setState({data: stock})
      }
    }.bind(this)
    request.send(null);
  },

  componentDidMount: function(){
    this.loadStockFromServer();
  },

  render: function(){
    return(
      <div className='row col-12'>
        <div className='col-1'></div>
        <div className='col-10'>
          <ShopHeader />
          <ShoppingBasketHeader numberOfItemsInBasket= {this.getNumberOfItemsInBasket} basketTotal={getBasketTotal}/>
          <ShoppingBasketExpandButton />
          <ShoppingBasketDetails />
          <StockItemsList stock={this.state.stockData}/>
        </div>
        <div className='col-1'></div>
      </div>
    )
  }

})

module.exports= ShopBox;

