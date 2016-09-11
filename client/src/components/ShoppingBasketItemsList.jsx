var React = require('react');
var ShoppingBasketItem = require('./ShoppingBasketItem');

var ShoppingBasketItemsList = React.createClass({

  render: function(){
    var itemNodes = this.props.shoppingCart.map(function(item){
      return (
        <ShoppingBasketItem 
        key={item.id} 
        id={item.id}
        description={item.description} 
        colour= {item.colour}
        department= {item.department}
        category= {item.category}
        retailPrice={item.retailPrice} 
        salePrice={item.salePrice} 
        removeItemFromBasket={this.props.removeItemFromBasket}/>
      )
    }.bind(this))

    return (
      <div className='row'>
        {itemNodes}
      </div>
    )
  }
})

module.exports = ShoppingBasketItemsList;