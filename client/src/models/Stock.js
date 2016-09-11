var StockItem = require('./StockItem');
var _ = require('lodash');

var Stock = function(items){
  this.items = items;
};

Stock.prototype = {

  allStockCount: function(){
    var count = 0;
    _.forEach(this.items, function(item){
      count += item.stockQuantity;
    })
    return count;
  },

  itemStockCount: function(checkItem){
    var count = 0;
    _.forEach(this.items, function(item){
      if(item.id === checkItem.id){
        count += item.stockQuantity;
      }
    })
    return count;
  },

  checkIfItemIsInStock: function(item){
    return item.stockQuantity > 0;
  },

  sellItem: function(soldItem){
    _.forEach(this.items, function(item){
      if(item.id === soldItem.id){
        item.stockQuantity --;
      }
    })
  },

  returnItem: function(returnedItem){
    _.forEach(this.items, function(item){
      if(item.id === returnedItem.id){
        item.stockQuantity ++;
      }
    })
  }

}

module.exports = Stock;
