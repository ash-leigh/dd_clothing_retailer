var StockItem = function(params){
  this.description = params.description;
  this.colour = params.colour;
  this.department = params.department;
  this.category = params.category;
  this.retailPrice = params.retailPrice;
  this.salePrice = params.salePrice;
  this.stockQuantity = params.stockQuantity;
};


module.exports = StockItem;