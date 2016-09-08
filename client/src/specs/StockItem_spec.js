var assert = require('chai').assert;
var StockItem = require('../models/StockItem');

describe('Stock Item', function(){

  beforeEach(function(){
    stockItem = new StockItem({
      id: 0,
      description: 'Almond Toe Court Shoes', 
      colour: 'Patent Black', 
      department: 'Womens', 
      category: 'Footwear', 
      retailPrice: 99.00, 
      salePrice: null, 
      stockQuantity: 5
    })
    saleItem = new StockItem({
      id: 8,
      description: 'Fine Stripe Short Sleeve Shirt', 
      color: 'Green', 
      department: 'Mens', 
      category: 'Casualwear', 
      retailPrice: 49.99, 
      salePrice: 39.99, 
      stockQuantity: 3
    })
  })

  it('has a description', function(){
    assert.equal(stockItem.description, 'Almond Toe Court Shoes')
  })

  it('has a colour', function(){
    assert.equal(stockItem.colour, 'Patent Black')
  })

  it('has a department', function(){
    assert.equal(stockItem.department, 'Womens')
  })

  it('has a category', function(){
    assert.equal(stockItem.category, 'Footwear')
  })

  it('has a retail price', function(){
    assert.equal(stockItem.retailPrice, 99.00)
  })

  it('return null if no sale price included', function(){
    assert.equal(stockItem.salePrice, null)
  })

  it('has a sale price', function(){
    assert.equal(saleItem.salePrice, 39.99)
  })

  it('has a quantity', function(){
    assert.equal(stockItem.stockQuantity, 5)
  })

})

