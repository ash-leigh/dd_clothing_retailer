var assert = require('chai').assert;
var Stock = require('../models/Stock');
var StockItem = require('../models/StockItem');
var sampleProducts = require('../db/sampleProducts');

describe('Stock', function(){

  beforeEach(function(){
    stock = new Stock(sampleProducts);
    stockItem = new StockItem({
      id: 4,
      description: "Flip Flops",
      colour: "Blue",
      department: "Mens",
      category: "Footwear",
      retailPrice: 19.00,
      salePrice: null,
      stockQuantity: 0
    });
    saleItem = new StockItem({
      id: 8,
      description: 'Fine Stripe Short Sleeve Shirt', 
      colour: 'Green', 
      department: 'Mens', 
      category: 'Casualwear', 
      retailPrice: 49.99, 
      salePrice: 39.99, 
      stockQuantity: 3
    });
  })

  it('can count all stock', function(){
    assert.equal(stock.allStockCount(), 68)
  })

  it('can count stock of specific item', function(){
    assert.equal(stock.itemStockCount(saleItem), 3)
  })

  it('can check whether an item is in stock', function(){
    assert.equal(stock.checkIfItemIsInStock(stockItem), false)
  })

  it('can check whether an item is not in stock', function(){
    assert.equal(stock.checkIfItemIsInStock(saleItem), true)
  })

  it('can remove a sold item from stock', function(){
    stock.sellItem(saleItem)
    assert.equal(stock.itemStockCount(saleItem), 2)
  })

  it('can add a returned item to stock', function(){
    stock.sellItem(saleItem)
    stock.sellItem(saleItem)
    stock.returnItem(saleItem)
    assert.equal(stock.itemStockCount(saleItem), 1)
  })


})