var React = require('react');
var ShoppingBasketItem = require('./ShoppingBasketItem');

var ShoppingBasketItemsList = function(){
  return(
    <div>
      ShoppingBasketItemsList:
      <div className='row'>
        <ShoppingBasketItem />
      </div>
    </div>
  )
}

module.exports = ShoppingBasketItemsList;