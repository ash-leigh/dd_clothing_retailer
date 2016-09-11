var React = require('react');
var EditBasketButton = require('./EditBasketButton');
var ItemsInBasketCount = require('./ItemsInBasketCount');

var StockItem = React.createClass({

  getInitialState: function(){
    return{
      stockItem: {
      id: this.props.id,
      description: this.props.description,
      colour: this.props.colour,
      department: this.props.department,
      category: this.props.category,
      retailPrice: this.props.retailPrice,
      salePrice: this.props.salePrice,
      stockQuantity: this.props.stockQuantity
      }
    } 
  },

  render: function(){
    return(
      <div className='col-4'>

        <div className='row'>
          {this.state.stockItem.description}
         </div>

         <div className='row'>
          IMAGE
         </div>

         <div className='row'>
           <div className='col-6'>
           {this.state.stockItem.retailPrice}
           </div>
           <div className='col-6'>
             {this.state.stockItem.salePrice}
           </div>
         </div>

           <div className='row'>
             <div className='col-4'>
               <EditBasketButton 
               display='-'
               removeItemFromBasket={this.props.removeItemFromBasket}
               stockItem={this.state.stockItem}/>
             </div>
             <div className='col-4'>
               <ItemsInBasketCount getNumberOfItemInBasket={this.props.getNumberOfItemInBasket} stockItem={this.state.stockItem}/>
             </div>
             <div className='col-4'>
               <EditBasketButton 
               display='+' 
               addItemToBasket={this.props.addItemToBasket}
               stockItem={this.state.stockItem}/>
             </div>
           </div>

       </div>
    )
  }
})


module.exports = StockItem;


