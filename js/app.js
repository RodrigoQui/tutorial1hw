// (function(){
// 	var app = angular.module('store', []);
// 	var gems= [
//   {
//    name: 'dodecahedron', price: 1000, description: 'beautiful', picture: 'img01.jpg', discounts: [10,15,20], stock: 10,
//    reviews: [
//    {stars: 5, comments: 'lorem', author: 'alonso'},
//    {stars: 5, comments: 'lorem', author: 'alonso'},
//    {stars: 5, comments: 'lorem', author: 'alonso'},
//    ]
//  },

//  {
//    name: 'dodecahedron', price: 1000, description: 'beautiful', picture: 'img01.jpg', discounts: [10,15,20], stock: 10,
//    reviews: [
//    {stars: 5, comments: 'lorem', author: 'alonso'},
//    {stars: 5, comments: 'lorem', author: 'alonso'},
//    {stars: 5, comments: 'lorem', author: 'alonso'},
//    ]
//  },
//  {name: 'dodecahedron', price: 1000, description: 'beautiful', picture: 'img01.jpg', discounts: [10,15,20], stock: 10,
//  reviews: [
//  {stars: 5, comments: 'lorem', author: 'alonso'},
//  {stars: 5, comments: 'lorem', author: 'alonso'},
//  {stars: 5, comments: 'lorem', author: 'alonso'},

//  ]
// }
// ]
(function(){
 var app = angular.module('store', []);

app.controller('StoreController', ['$http', '$scope', function($http, $scope){
  var store = this;
  var url = 'http://localhost:3001/api/fgemproduct/';
  store. p ={
    name:'',
    price: 0,
    description: '',
    images:'',
    stock: 0,
    discounts: 0,
    stars: 0,
    comments:'',
    author:''
  };
  store.view = true;

  $http.get(url)
  .then (function success(response){
    console.log(response);
    console.log(response.data.fgemproducts);
    store.Product = response.data.fgemproducts;
    console.log(this.fgemproducts);

  });


  store.addProduct = function(fgemproducts){
    console.log(fgemproducts);
    $http.post( url, fgemproducts)
    .then(function success(response){
      console.log(response);
    },
    function err(err){
      console.log(err);
    })
  }

 var _id=this;
          $scope.borrar=function(fgemproduct){
          $http({
            method: 'DELETE',
            url: 'http://localhost:3001/api/fgemproduct/'+fgemproduct,
            
            headers: {
                'Content-type': 'application/json;charset=utf-8'
            }
        })
        .then(function(response) {
            document.location.reload();
            console.log(response.data);
        }, function(rejection) {
            console.log(rejection.data);
        });
    }
    



 // store.deleteProduct= function(id){
 //    console.log(id);
 //    $http.delete(url + id )
 //    .then(function success(response){
 //      console.log(`El producto con el id ${id} se ha eliminado`);
 //      document.location.reload();
 //    }, function err(err){
 //      console.log(`El producto no se ha eliminado ERR: ${err}`);

 //    })
 //  }









  store.getUniqueProduct= function(id){
    console.log(id);
    $http.get(url + id )
    .then (function success(response){
      console.log(response);
      store.product = response.data.fgemproducts;

    });
  }






}]);
})();