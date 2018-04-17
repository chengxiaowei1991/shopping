 var data=Mock.mock("http://z.cn/getItems",{
    'items|12':[{
        'id|+1':1,
        'price':/[1-9]{4}/,
        'name':/(iphone|meizu|huawei|xiaomi)[0-9]/,
        'img':"@DataImage(400x400,phone)",
        // 'img':Mock.Random.dataImage('400x400'),
        'saled':/[1-9]{4}/,
        'better':/[1-9]{4}/
    }]
});
app.controller('AppCtrl', ['$scope', function($scope){
}]);
app.controller("itemsController",function($scope,$http){
$scope.items=[];
$http.get("http://z.cn/getItems").then(function(res){
    console.log(res);
    $scope.items=res.data.items;
})
$scope.searchKey="";
$scope.orderKey="";
$scope.tip="";
$scope.results=function(val){
    // var a=0,
    // if($scope.searchKey.test([0-9])==true){
    //     a=1;
    // }
    // if(val.name.indexOf($scope.searchKey)==-1||val.name.test())
    if(val.name.indexOf($scope.searchKey)==-1)
    {$scope.tip="好遗憾哦~没有找到您要的商品。。。"}
    else if(val.name.indexOf($scope.searchKey)!=-1)
    {$scope.tip=""};
    return val.name.indexOf($scope.searchKey)!=-1
}
        // if(val.name.indexOf($scope.searchKey)==-1){
            // $scope.tip="没有找到您要的商品"
        // }else{
        //     return 
        //     }
    // }
})
// $('<pre>').text(JSON.stringify(data, null,1)).appendTo('body');
//    $http服务 专门用来发送ajax请求的服务 Angular内置服务