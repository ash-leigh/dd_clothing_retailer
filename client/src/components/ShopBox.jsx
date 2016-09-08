var React = require('react');
var ShopHeader = require('./ShopHeader');
var ShoppingBasketHeader = require('./ShoppingBasketHeader');
var ShoppingBasketExpandButton = require('./ShoppingBasketExpandButton');
var ShoppingBasketDetails = require('./ShoppingBasketDetails');
var StockItemsList = require('./StockItemsList');

var ShopBox = React.createClass({

  getInitialState: function() {
    return {data: []};
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
          <ShoppingBasketHeader />
          <ShoppingBasketExpandButton />
          <ShoppingBasketDetails />
          <StockItemsList />
        </div>
        <div className='col-1'></div>
      </div>
    )
  }

})

module.exports= ShopBox;

