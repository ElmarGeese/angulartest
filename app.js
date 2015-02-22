/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function() {
    var app = angular.module('store', []);
    app.controller('TabController', function($scope, $window){
        this.tab = 1;
        $scope.list = [];
        $scope.text = 'hello';
        this.setTab = function(newValue){
            this.tab = newValue;
        };

        this.isSet = function(tabName){
            return this.tab === tabName;
        };
        
        $scope.submit=function() {
        if ($scope.review.body) {
          $scope.list.push($scope.review.body);
          $scope.text = '';
        };
        };
    });

    
    app.controller('StoreController', function(){
        this.products = gems;
    });

    var gems = [{
        name : 'Chris',
        price : 100000000000000000,
        description : 'Beautiful, Marvellous, Great, Unique, Perfect, Unbelievable',
        images : ['christiane.png','christiane2.png'],
        inStore : true,
        canPurchase : true,
        reviews : [
            {stars: 3,
             author: "unknown",
             body: "bla bla bla bla bla",
            },
            {stars: 4,
             author: "mama",
             body: "super toll klass spitze",
            }
        ]
    },
    {
        name : 'Tiane',
        price : 1000000000000000,
        description : 'Sweet',
        images: ['christiane2.png'],
        inStore : true,
        canPurchase: false
    },
        {
        name : 'Chrissiane',
        price : 100000000000,
        description : 'Sweet',
        images: [],
        inStore : true,
        canPurchase: true
    }
    ];
})();