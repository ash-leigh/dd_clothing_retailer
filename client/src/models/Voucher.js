var Voucher = function(params){
  this.code = params.code;
  this.discount = params.discount;
  this.itemRestrictions = params.itemRestrictions;
  this.totalRestriction = params.totalRestriction;
};

module.exports = Voucher;