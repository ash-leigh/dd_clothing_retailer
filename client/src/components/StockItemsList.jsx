var React = require('react');
var StockItem = require('./StockItem');

var StockItemsList = function(props){
  var stockNodes = props.stock.map(function(item){
    return(
      <StockItem 
      key= {item.stockQuantity + '_' + item.id}
      id= {item.id} 
      description= {item.description} 
      colour= {item.colour}
      department= {item.department}
      category={item.category}
      retailPrice={item.retailPrice}
      salePrice={item.salePrice}
      stockQuantity={item.stockQuantity}
      url={item.url}
      addItemToBasket={props.addItemToBasket}
      removeItemFromBasket={props.removeItemFromBasket}
      getNumberOfItemInBasket={props.getNumberOfItemInBasket}
      />
      )
  })    
  return(
    <div className= 'row'>
    <div className= 'stock-list'>
    {stockNodes}
    </div>
    </div>
    )
}


module.exports = StockItemsList;
