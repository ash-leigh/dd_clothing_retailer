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

  checkItemsEligibleForVoucher: function(voucher){
    var matchedItems = [];

    _.forEach(voucher.eligibilityCriteria, function(criteria){
      matchedItems = _.filter(this.items, _.matches(criteria));
    }.bind(this))
    matchedItems = _.uniq(matchedItems)

    return matchedItems.length === voucher.eligibilityCriteria.length
  } ,

  checkTotalEligibleForVoucher: function(voucher){
    return this.total >= voucher.threshold;
  } ,

  applyVoucher: function(voucher){
    if(this.checkItemsEligibleForVoucher(voucher) && this.checkTotalEligibleForVoucher(voucher)){
      this.total -= voucher.discount
      return true;
    }
    return false;
  }

};

module.exports = ShoppingCart;