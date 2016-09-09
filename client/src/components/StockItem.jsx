var React = require('react');
var EditBasketButton = require('./EditBasketButton');
var ItemsInBasketCount = require('./ItemsInBasketCount');

var StockItem = React.createClass({

  getInitialState: function(){
    return{
      stockItem: {
      id: this.props.id,
      description: this.props.description,
      colour: this.props.description,
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
         {this.state.stockItem.retailPrice}
         </div>
         <div className='row'>
           <div className='col-6'>
           {this.state.stockItem.salePrice}
           </div>
           <div className='col-6'>
             <EditBasketButton 
             display='-'
             removeItemFromBasket={this.props.removeItemFromBasket}
             stockItem={this.state.stockItem}/>
             <ItemsInBasketCount getNumberOfItemInBasket={this.props.getNumberOfItemInBasket} stockItem={this.state.stockItem}/>
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


