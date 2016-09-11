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
         <div className='col-6'>
         {props.retailPrice}
         </div>
         <div className='col-6'>
           {props.salePrice}
         </div>
       </div>

         <div className='row'>
           <div className='col-4'>
             <EditBasketButton 
             display='-'
             removeItemFromBasket={props.removeItemFromBasket}
             id= {props.id} 
             description= {props.description} 
             colour= {props.colour}
             department= {props.department}
             category={props.category}
             retailPrice={props.retailPrice}
             salePrice={props.salePrice}
             stockQuantity={props.stockQuantity}
             />
           </div>
           <div className='col-4'>
             <ItemsInBasketCount 
             getNumberOfItemInBasket={props.getNumberOfItemInBasket} 
             id= {props.id} 
             description= {props.description} 
             colour= {props.colour}
             department= {props.department}
             category={props.category}
             retailPrice={props.retailPrice}
             salePrice={props.salePrice}
             stockQuantity={props.stockQuantity}
             />
           </div>
           <div className='col-4'>
             <EditBasketButton 
              display='+' 
              addItemToBasket={props.addItemToBasket}
              id= {props.id} 
              description= {props.description} 
              colour= {props.colour}
              department= {props.department}
              category={props.category}
              retailPrice={props.retailPrice}
              salePrice={props.salePrice}
              stockQuantity={props.stockQuantity}
             />
           </div>
         </div>
     </div>
  )
}

module.exports = StockItem;


