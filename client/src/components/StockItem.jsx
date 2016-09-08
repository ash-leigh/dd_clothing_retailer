var React = require('react');
var EditBasketButton = require('./EditBasketButton');
var ItemsInBasketCount = require('./ItemsInBasketCount');

var StockItem = function(props){
  return(
    <div className='col-4 stock-item'>
      <div className='row'>
        {props.description}
       </div>
       <div className='row'>
        IMAGE
       </div>
       <div className='row'>
       {props.retailPrice}
       </div>
       <div className='row'>
         <div className='col-6'>
         {props.salePrice}
         </div>
         <div className='col-6'>
           <EditBasketButton display='-'/>
           <ItemsInBasketCount />
           <EditBasketButton display='+'/>
         </div>
       </div>
    </div>
  )
}

module.exports = StockItem;

