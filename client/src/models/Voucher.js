var Voucher = function(params){
  this.code = params.code;
  this.discount = params.discount;
  this.eligibilityCriteria = params.eligibilityCriteria;
  this.threshold = params.threshold;
};

module.exports = Voucher;