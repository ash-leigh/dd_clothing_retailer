var ShoppingCart = require('./ShoppingCart');
var StockItem = require('./StockItem');

var ShoppingCart = function(){
  this.items = [],
  this.total = 0
};

ShoppingCart.prototype = {

  addItem: function(item){
    this.items.push(item);
    if(item.salePrice){
      this.total += item.salePrice;
    }
    else{
      this.total += item.retailPrice;
    }
  },

  removeItem: function(item){
    var index = this.items.indexOf(item);
    this.items.splice(index, 1);
    if(item.salePrice){
      this.total -= item.salePrice;
    }
    else{
      this.total -= item.retailPrice;
    }
  },

  applyVoucher: function(voucher){
    for(var restriction in voucher.restrictions){
      for(var item in this.items){
      //   var stockItem = new StockItem({description: item.description, color: item.colour, department: item.department, category: item.category, retailPrice: item.retailPrice, salePrice: item.salePrice, stockQuantity: item.stockQuantity})
        if(Object.hasOwnProperty(restriction) === Object.hasOwnProperty(item)){
          return true;
        }
      }
    }
  }

};

module.exports = ShoppingCart;