 (function(){ // Wrapping the code in a closure is always good practice
    var app = angular.module('store', []); 

    app.controller('StoreController', function(){  //Notice that controller is attached to our app (inside).
    	this.product = gem;
    });

    var gem = {
	  name: 'Dodecahedron',
	  price: 2.95,
	  description: 'eastgfjbb',
	}
})();