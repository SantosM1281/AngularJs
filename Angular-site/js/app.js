 (function(){ // Wrapping the code in a closure is always good practice
    var app = angular.module('store', []); 

    app.controller('StoreController', function(){  //Notice that controller is attached to our app (inside).
    	this.products = gems;
    });

    var gems = [
    {
	  name: "Dodecahedron",
	  price: 2.00,
	  description: ". . .",
	  canPurchase: true,
	},
	{
	  name: "Pentagonal Gem",
	  price: 5.95,
	  description: ". . .",
	  canPurchase: false,
	},
    ];


app.controller("PanelController", function(){
	this.tab = 1;

	this.selectTab = function(setTab) {
		this.tab = setTab;
	};
});

// reviews

app.controller("StoreController", function(){
	this.products = [
	{
		name: 'Awesome Multi-touch Keyboard',
		price: 250.00,
		description: [...],
		reviews: {
			{
				stars: 5,
				body: "I love this product!",
				author: "joe@thomas.com"
			},
			{
				stars: 1,
				body: "This product sucks!",
				author: "tim@jones.com"
			}
		}
	}]
})


})();