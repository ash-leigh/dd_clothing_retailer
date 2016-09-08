var assert = require('chai').assert;
var Stock = require('../models/Stock');
var sampleProducts = require('../db/sampleProducts');

describe('Stock', function(){

  beforeEach(function(){
    stock = new Stock(sampleProducts);
  })

  it('has items', function(){
    assert.equal(stock.items.length, 13)
  })

  it('can check whether an item is in stock', function(){
    
  })


})