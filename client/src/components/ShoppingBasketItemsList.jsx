var React = require('react');
var ShoppingBasketItem = require('./ShoppingBasketItem');

var ShoppingBasketItemsList = function(props){
  var itemNodes = props.shoppingCart.map(function(item){
    return (
      <ShoppingBasketItem
      key= {item.stockQuantity + '_' + item.id} 
      id={item.id}
      description={item.description} 
      colour= {item.colour}
      department= {item.department}
      category= {item.category}
      retailPrice={item.retailPrice} 
      salePrice={item.salePrice} 
      url={item.url}
      removeItemFromBasket={props.removeItemFromBasket}/>
    )
  })

  return (
    <div className='row'>
    {itemNodes}
    </div>
  )
}

module.exports = ShoppingBasketItemsList;