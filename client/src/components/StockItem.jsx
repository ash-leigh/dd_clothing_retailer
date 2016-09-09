var React = require('react');
var EditBasketButton = require('./EditBasketButton');
var ItemsInBasketCount = require('./ItemsInBasketCount');

var StockItem = function(props){
  return(
    <div className='col-4'>
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
           <EditBasketButton 
           display='-'
           // removeItem={props.removeItem}

           id={props.id}
           description={props.description}
           colour={props.colour}
           department= {props.department}
           category={props.category}
           retailPrice={props.retailPrice}
           salePrice={props.salePrice}
           stockQuantity={props.stockQuantity}/>
           <ItemsInBasketCount />
           <EditBasketButton 
            display='+' 
           addItem={props.addItem}

           id={props.id}
           description={props.description}
           colour={props.colour}
           department= {props.department}
           category={props.category}
           retailPrice={props.retailPrice}
           salePrice={props.salePrice}
           stockQuantity={props.stockQuantity}/>
         </div>
       </div>
    </div>
  )
}

module.exports = StockItem;


