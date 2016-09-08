var ShoppingCart = require('./ShoppingCart');
var StockItem = require('./StockItem');
var _ = require('lodash');

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

  checkVoucherEligibili

  applyVoucher: function(voucher){
    var matchedItems = [];

    _.forEach(voucher.eligibilityCriteria, function(criteria){
      matchedItems = _.filter(this.items, _.matches(criteria));
    }.bind(this))

    matchedItems = _.uniq(matchedItems)

    console.log(matchedItems.length)
    console.log(voucher.eligibilityCriteria.length)

    return matchedItems.length === voucher.eligibilityCriteria.length
  }

};

module.exports = ShoppingCart;