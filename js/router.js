//路由
	    app.config([
	    "$stateProvider",
	    "$urlRouterProvider",
	    function($stateProvider,$urlRouterProvider){
	        $stateProvider
	        .state("home",{
	            url:"/home",
	            template:"<h1></h1>"
//	           templateUrl:"index.html"
				})
	        .state("market",{
	            url:"/market",
	            template:"<h1>超市（待更新...）</h1>"
//	           templateUrl:"market.html",
	//         resolve:{    
	//         loadMyCtrl:['$ocLazyLoad',function($ocLazyLoad){    
	//         return $ocLazyLoad.load('js/mock-phone-test.js');    
	//          }] 
	//      	}    
				})
	        .state("cart",{
	            url:"/cart",
	            template:"<h1>购物车（待更新...）</h1>"
//	           templateUrl:"cart.html",
	//         resolve:{    
	//         loadMyCtrl:['$ocLazyLoad',function($ocLazyLoad){    
	//         return $ocLazyLoad.load('js/cart.js');    
	//          }]
	//      	}
	        }).state("mine",{
	            url:"/mine",
	           template:"<h1>个人中心（待更新...）</h1>"
	        })
//	        $urlRouterProvider.otherwise("home");
	    }])

