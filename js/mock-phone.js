//mock数据
		var data=Mock.mock("http://z.cn/getItems",{
		    'items|20':[{
		        'id|+1':1,
		        'price':/[1-9]{4}/,
		        'name':/(Iphone|Meizu|Huawei|Xiaomi)[0-9]/,
		        'img':"@DataImage(400x400,phone)",
		        // 'img':Mock.Random.dataImage('400x400'),
		        'saled':/[1-9]{4}/,
		        'better':/[1-9]{4}/
		    }]
		});
		var app=angular.module("myApp",['ui.router']);
	    app.controller("itemsController",function($scope,$http){
	    $scope.items=[];
	    $http.get("http://z.cn/getItems").then(function(res){
//	        console.log(res);
	        $scope.items=res.data.items;
	    })
	    $scope.searchKey="";
	    $scope.orderKey="";
	    $scope.tip="";
	    $scope.count=0;
	    $scope.results=function(val){
        var ores=val.name.indexOf($scope.searchKey);
        if($scope.searchKey.length<=1)
        {$scope.tip=""}
        else if(ores==-1)
        {$scope.tip="好遗憾~没有找到您要的商品..."};
        return ores!=-1;
   		}
	    });