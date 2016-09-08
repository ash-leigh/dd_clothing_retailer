var StockItem = require('./StockItem');

var Stock = function(items){
  this.items = items;
};

Stock.prototype = {

  sellItem: function(){

  },

  returnItem: function(){
    
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
