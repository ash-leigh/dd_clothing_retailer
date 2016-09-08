var React = require('react');
var StockItem = require('./StockItem');

var StockItemsList = function(){
  return(
    <div className= 'row'>
      StockItemsList:
      <StockItem />
    </div>
  )
}

module.exports = StockItemsList;