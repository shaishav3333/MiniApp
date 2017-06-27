var app = angular.module("Myapp", ['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider
        .when("/tab", {
            templateUrl : "tab1.html"
        })
        .when("/tb2", {
            templateUrl : "tab2.html"
        })
        .when("/tb3", {
            templateUrl : "tab3.html"
        })

        .otherwise({redirectTo:'/tab'});
});

app.controller('myCtrl',function($scope){
    $scope.names = [
        {"name":"Show","value":"all"},
        {"name":"Text","value":"text"},
        {"name":"Video","value":"video"},
        {"name":"photo","value":"photo"}
    ]


  $scope.change=function(a){
        console.log(a)

      if( $scope.v=="all"){
          $scope.v=""
          $scope.value="Show All"

      }
      else {
          $scope.value = $scope.v;
      }
  }
    $scope.dtaa=["text1.txt","text2.txt","photo1.jpg","photo2.jpg","video1.mp4","video2.mp4"];

    $scope.aplist=["item1","item2","item3"];
    console.log($scope.v);

    $scope.adding = function () {
        $scope.aplist.splice(0,0,$scope.naminput);
        $scope.naminput="";
    }

    $scope.image=["images/image1.jpg","images/image2.jpg","images/image3.jpg","images/image4.jpg","images/image5.jpg"];
    $scope.im = $scope.image[0];

    $scope.sr = function (a) {
        //$scope.im = a || 0;
        $scope.im = $scope.image[a];
    }

});