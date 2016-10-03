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


})();