var React = require('react');
var StockItem = require('./StockItem');

var StockItemsList = function(props){
    
  var stockNodes = props.stock.map(function(stock){
    return(
      <StockItem 
      key={stock.id}
      description={stock.description}
      colour={stock.colour}
      department={stock.department}
      category={stock.category}
      retailPrice={stock.retailPrice}
      salePrice={stock.salePrice}
      stockQuantity={stock.stockQuantity}/>
    )
  })    
  return(
    <div className= 'row'>
      StockItemsList:
      <div className= 'row'>
        {stockNodes}
      </div>
    </div>
  )
}

module.exports = StockItemsList;
