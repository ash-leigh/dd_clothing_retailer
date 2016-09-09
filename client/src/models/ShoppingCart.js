var ShoppingCart = require('./ShoppingCart');
var StockItem = require('./StockItem');
var Voucher = require('./Voucher');
var _ = require('lodash');

var ShoppingCart = function(){
  this.items = [],
  this.total = 0,
  this.availableVouchers = []
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

  removeItem: function(removedItem){

    for(var i = 0; i < this.items.length; i++){
      if(this.items[i].id === removedItem.id){
        this.items.splice(i, 1);
      }
    }
    if(removedItem.salePrice){
      this.total -= removedItem.salePrice;
    }
    else{
      this.total -= removedItem.retailPrice;
    }
  },

  numberOfItemCount: function(checkItem){
    var count = 0;
    _.forEach(this.items, function(item){
      if(item.id === checkItem.id){
        count++;
      }
    })
    return count;
  },

  checkVoucherCode: function(code, vouchers){
    _.forEach(vouchers, function(voucher){
      if(voucher.code === code){
        console.log(voucher.code)
        this.applyVoucher(voucher)
      }
    }.bind(this))
  },

  checkItemsEligibleForVoucher: function(voucher){
      var matchedItems = [];
      _.forEach(voucher.eligibilityCriteria, function(criteria){
        console.log(criteria)
        matchedItems = _.filter(this.items, _.matches(criteria));
      }.bind(this))
      matchedItems = _.uniq(matchedItems);
      return matchedItems.length === voucher.eligibilityCriteria.length
      console.log(matchedItems)
  },

  checkTotalEligibleForVoucher: function(voucher){
    return this.total >= voucher.threshold;
  },

  applyVoucher: function(voucher){
    if(this.checkItemsEligibleForVoucher(voucher) && this.checkTotalEligibleForVoucher(voucher)){
      this.total -= voucher.discount

      return true;
    }
    return false;
  }

};

module.exports = ShoppingCart;