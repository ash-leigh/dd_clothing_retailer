#Deloitte.retail

##Summary
A responsive website for a clothing retailer.

The retailer sells six different categories of clothes: women’s footwear, men’s footwear, women’s casualwear, men’s casualwear, women’s formalwear and men’s formalwear.

The page developed displays all available products and a shopping cart to which the products can be added.

Please see the approach section of this document for how the specifics of this brief were tackled in this project.

##Installation

You need [node.js](https://nodejs.org/en/) installed globally

	$ git clone git@github.com:ash-leigh/dd_clothing_retailer.git
	$ cd dd_clothing_retailer
	$ npm start

visit <http://localhost:3000>

##To Run Unit Tests  
	$ cd dd_clothing_retailer
	$ npm test

##Technologies Used
* [node.js](https://nodejs.org/en/)
* [express](http://expressjs.com/)
* [React](https://facebook.github.io/react/)
* [Lodash](https://lodash.com/docs/4.15.0)
* [Mochajs](https://mochajs.org/)
* [Chaijs](http://chaijs.com/)

##Approach

User stories:

1. As a User I can view the products and their category, price and availability information
	* Using a json file as a mock api the site loads with every item available displayed with an image, their description and price
	* Logic contains filter methods that can allow this view to be updated if a user would like to only see a subsection of products - only Womenswear etc. In outstanding features it details how these filter methods can be implemented into the UI
2. As a User I can add a product to my shopping cart
	* Each product has an add product button which adds it to the shopping cart
	* It determines whether the item has a sale price and adds this to the shopping cart total. If this returns null it will add the retail price
	* It updates the objects stock quantity
	* The user is shown this product in the basket section of the UI, in addition to an indication of the item being added to the shopping cart by way of a number on the item itself. This was done as if viewers are scrolling on mobile they would not need to go up to the top of the page to have a quick view of whether they had added that item to their cart
3. As a User I can remove a product from my shopping cart
	* This functionality can be executed in either the products display itself or in the shopping cart with each instance of the functionality updating the other
	* This rerenders the price, number of items in shopping basket and the items stock quantity
4. As a User I can view the total price for the products in my shopping cart
	* In addition to this the user can also view how many items they have added to their cart
5. As a User I can apply a voucher to my shopping cart.
	* Using a json file as a mock api the vouchers are hosted as they would be on a database
	* Users enter a voucher code as a string and the programme assesses whether their basket is eligible and applies the appropriate discount
	* There are two possible error messages that can be applied to the voucher - the first is displayed to the user if the code they entered did not match any of the voucher codes available and the second alerts them if their basket does not meet the eligibility criteria
	* There are two eligibility checks on the voucher itself. The first assesses whether the baskets total meets the voucher threshold and the second checks whether any of the items in the basket have the appropriate criteria - Footwear, Women's Casualwear etc.
	* To be more flexible the vouchers contain an array of objects that match properties of the items so that more than one checking criteria can be included in each voucher
6. As a User I can view the total price for the products in my shopping cart with discounts applied
	* When valid voucher code is entered the baskets total is automatically updated.
	* See outstanding features for ways this could be improved.
7. As a User I am alerted when I apply an invalid voucher to my shopping cart
	* As detailed in point 5 above there are two available error messages that can be displayed to the user in the voucher form depending on the cause of the voucher being invalid
8. As a User I am unable to Out of Stock products to the shopping cart
	* Once an items stock quantity goes to zero the user can no longer add that item to their basket
	* At the moment the appearance of that item does not change - See outstanding features for ways this could be improved

There are also discount vouchers available that can be redeemed. The discount vouchers are as follows:

* £5.00 off your order
* £10.00 off when you spend over £50.00
* £15.00 off when you have bought at least one footwear item and spent over £75.00



##Outstanding features

* Implement options for the user to filter products by category, department, colour in UI and re-render the product list
* Include functionality that determines whether an item is on sale and change appearance of this items price - display retail price with score through and the sale price in red
* When a user applies a valid voucher to their shopping cart the display of the total should show the original, the discount deducted and the new total
* At the moment multiple vouchers cannot be applied to the same cart - only the most recent voucher is applied. Functionality needs to be assessed to see how this could be fixed
* When item is out of stock user should be made aware of this by the items appearance changing. Image could be whited out slightly and button to add item should have a disabled state













