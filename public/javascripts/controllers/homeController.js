myApp.controller('homeController', ['$scope', function($scope){
	console.log("hello from the homeController");

	$scope.myInterval = 2000;

	$scope.slides = [{
		image: "images/lg1.jpg",
		link: "http://keithryan.ie/"
	},
	{
		image: "images/lg2.jpg",
		link: "http://keithryan.ie/"
	},
	{
		image: "images/lg3.jpg",
		link: "http://keithryan.ie/"
	}]
}]);