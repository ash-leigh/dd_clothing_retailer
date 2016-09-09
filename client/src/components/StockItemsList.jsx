var React = require('react');
var StockItem = require('./StockItem');

var StockItemsList = function(props){
    
  var stockNodes = props.stock.map(function(item){
    return(
      <StockItem 
      key= {item.id}
      id= {item.id}
      description= {item.description}
      colour= {item.colour}
      department= {item.department}
      category={item.category}
      retailPrice={item.retailPrice}
      salePrice={item.salePrice}
      stockQuantity={item.stockQuantity}

      addItem={props.addItem}
      // removeItem={props.removeItem}
      />
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
