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

  removeItem: function(removedItem){
    
    for(var item of this.items){
      if(item.id === removedItem.id){

        var index = this.items.indexOf(removedItem)+ 1;
        console.log(index)
        this.items.splice(index, 1);
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
        count += 1;
      }
    })
    return count;
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