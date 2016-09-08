var assert = require('chai').assert;
var Voucher = require('../models/Voucher');

describe('Voucher', function(){

  beforeEach(function(){
    fiveOffVoucher = new Voucher({code: '5_OFF', discount: 5.00, itemRestrictions: [], totalRestriction: 0});
    tenOffVoucher = new Voucher({code: '10_OFF', discount: 10.00, itemRestrictions: [], totalRestriction: 50.00});
    fifteenOffVoucher = new Voucher({code: '15_OFF', discount: 15.00, itemRestrictions: [{category: 'Footwear'}], totalRestriction: 75.00});
  })

  it('has a code', function(){
    assert.equal(fiveOffVoucher.code, '5_OFF');
  })

  it('has a discount amount', function(){
    assert.equal(tenOffVoucher.discount, 10.00);
  })

  it('has item restrictions', function(){
    assert.equal(fifteenOffVoucher.itemRestrictions.length, 1);
  })

  it('has total restriction', function(){
    assert.equal(fifteenOffVoucher.totalRestriction, 75.00);
  })



})