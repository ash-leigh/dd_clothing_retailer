var React = require('react');
var ShoppingBasketItem = require('./ShoppingBasketItem');

var ShoppingBasketItemsList = React.createClass({

  render: function(){
    var itemNodes = this.props.shoppingCart.map(function(item){
      return (
      <div className='row'>
        <ShoppingBasketItem key={item.id} description={item.description} retailPrice={item.retailPrice} salePrice={item.salePrice}/>
      </div>
      )
    })

    return (
      <div className='row'>
        {itemNodes}
      </div>
    )
  }
})

module.exports = ShoppingBasketItemsList;