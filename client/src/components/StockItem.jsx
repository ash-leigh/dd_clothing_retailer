var React = require('react');
var EditBasketButton = require('./EditBasketButton');
var ItemsInBasketCount = require('./ItemsInBasketCount');

var StockItem = function(props){


  return(
    <div className='col-4'>
    <div className='product-box'>
      <div className='row'>
        {props.description}
       </div>

       <div className='product-image'>
        <img src={props.url}></img>
       </div>

       <div className='row product-details'>
         <div className='col-6'>
         <div className='product-left'>
         £ {props.retailPrice}
         </div>
         </div>
         <div className='col-6'>
         <div className='product-right'>
           £ {props.salePrice}
         </div>
         </div>
       </div>

         <div className='row product-details'>
           <div className='col-4'>
           <div className='product-right'>
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
           </div>
           <div className='col-4'>
           <div className='product-center'>
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
           </div>
           <div className='col-4'>
           <div className='product-left'>
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
         </div>
     </div>
  )
}

module.exports = StockItem;


