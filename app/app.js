
var mycustomerapp = angular.module('mycustomerapp',['ngRoute']);
mycustomerapp.config(['routeprovider', function(routeprovider){
  $routeprovider
 .when('/home',{
   templateUrl:'views/home.html'
 })
 .when('/directory',{
   templateUrl:'views/directory.html',
   controller:'CustomerController'
 }).otherwise({
   redirectTo:'/home'
 });
}]);
mycustomerapp.controller('CustomerController', ['$scope','$http', function($scope,$http){
  $scope.removeCustomer = function(customer){
    var removeCustomer = $scope.customers.indexOf(customer);
    $scope.customers.splice(removeCustomer, 1);
  };
  $scope.addCustomer = function(){
   $scope.customers.push({
        name: $scope.newcustomer.name,
        shirt: $scope.newcustomer.shirt,
        rate: parseInt($scope.newcustomer.rate),
        available:true

      });
      $scope.newcustomer.name="";
      $scope.newcustomer.shirt="";
      $scope.newcustomer.rate="";

    };
$http.get('data/customers.json').sucess (function(data){
$scope.customers= data;
});


}]);
