var assert = require('chai').assert;
var ShoppingCart = require('../models/ShoppingCart');
var StockItem = require('../models/StockItem');
var Voucher = require('../models/Voucher');

describe('Shopping cart', function(){

  beforeEach(function(){
    shoppingCart = new ShoppingCart();
    stockItem = new StockItem({description: 'Almond Toe Court Shoes', colour: 'Patent Black', department: 'Womens', category: 'Footwear', retailPrice: 99.00, salePrice: null, stockQuantity: 5});
    saleItem = new StockItem({description: 'Fine Stripe Short Sleeve Shirt', color: 'Green', department: 'Mens', category: 'Casualwear', retailPrice: 49.99, salePrice: 39.99, stockQuantity: 3});
    fifteenOffVoucher = new Voucher({code: '15_OFF', discount: 15.00, eligibilityCriteria: [{category: 'Footwear'}], threshold: {total: 75.00}});
  })

  it('has no items to start', function(){
    assert.equal(shoppingCart.items.length, 0)
  })

  it('has a total of 0 to start', function(){
    assert.equal(shoppingCart.total, 0)
  })

  it('can add an item', function(){
    shoppingCart.addItem(stockItem);
    assert.equal(shoppingCart.items.length, 1)
    assert.equal(shoppingCart.total, 99.00)
  })

  it('can add a sale item', function(){
    shoppingCart.addItem(saleItem);
    assert.equal(shoppingCart.items.length, 1)
    assert.equal(shoppingCart.total, 39.99)
  })

  it('can remove an item', function(){
    shoppingCart.addItem(stockItem);
    shoppingCart.removeItem(stockItem);
    assert.equal(shoppingCart.items.length, 0)
    assert.equal(shoppingCart.total, 0)
  })

  it('can remove a sale item', function(){
    shoppingCart.addItem(saleItem);
    shoppingCart.removeItem(saleItem);
    assert.equal(shoppingCart.items.length, 0)
    assert.equal(shoppingCart.total, 0)
  })

  it('can apply voucher', function(){
    shoppingCart.addItem(stockItem);
    shoppingCart.addItem(saleItem);
    assert.equal(shoppingCart.applyVoucher(fifteenOffVoucher), true);
  })

  it('can refuse to apply voucher', function(){
    shoppingCart.addItem(saleItem);
    shoppingCart.addItem(saleItem);
    assert.equal(shoppingCart.applyVoucher(fifteenOffVoucher), false);
  })


})