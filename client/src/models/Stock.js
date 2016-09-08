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
        item.stockQuantity -= 1;
      }
    })
  },

  returnItem: function(returnedItem){
    _.forEach(this.items, function(item){
      if(item.id === returnedItem.id){
        item.stockQuantity += 1;
      }
    })
  }

//   getItems: function(){
//     var request = new XMLHttpRequest();
//     request.open('GET', 'http://localhost:3000/stock');
//     request.onload = function(){
//       if(request.status === 200){
//         var stockData = JSON.parse(request.responseText).map(function(item){
//           new StockItem({
//             description: item.description, 
//             colour: item.colour, 
//             department: item.department,
//             category: item.category,
//             retailPrice: item.retailPrice,
//             salePrice: item.salePrice,
//             stockQuantity: item.stockQuantity
//           })
//         })
//         this.items = stockData;
//       }
//     }
//   }

}

module.exports = Stock;
