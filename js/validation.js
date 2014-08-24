angular.element(window).bind('load', function() {

});  
var app = angular.module('MyApp',[],function(){console.log('started')});
	app.controller('formValidat',function($scope){
	$scope.indexNumber = '0';
	$scope.index = $scope.indexNumber;
	$scope.userName='';
	$scope.email='';
	$scope.url='';
	$scope.message = '';
	$scope.nowTime =  getSystem();
	$scope.formSubmit = function() {
		if ($scope.myform.$valid) {
			creatHtml($scope);
		} else {
		   alert("Please complete your form");
		}
	}
});

function creatHtml($scope) {
	var number = Number($scope.indexNumber);
	number = number + 1;
	$scope.indexNumber = number;
	var strHtml = "<li id= "+number+">";
	strHtml =strHtml+ number;
	strHtml =strHtml+ "Responses<div class='clr'></div>";
	strHtml =strHtml+ "<div class='comment'>";
	strHtml =strHtml+ "<a href='#'><img src='images/userpic.gif' width='40' height='40' alt='user' class='userpic' /></a><p><a href='#'>";
	strHtml =strHtml+ $scope.userName;
	strHtml =strHtml+ "</a> Says:<br />";
	strHtml =strHtml+ getSystem ();
	strHtml =strHtml+ "</p><p>";		
	strHtml =strHtml+ $scope.message;
	strHtml =strHtml+ "</p></div><li>";
	document.getElementById("msg").insertAdjacentHTML("afterBegin",strHtml);
}
function getSystem () {
	    var now = new Date();
        var year = now.getFullYear();       
        var month = now.getMonth() + 1; 
        var day = now.getDate();  
        var hh = now.getHours(); 
        var mm = now.getMinutes(); 
       
        var clock = year + "-";
        if(month < 10)
            clock += "0";
       
        clock += month + "-";
       
        if(day < 10)
            clock += "0";     
        clock += day + " ";
       
        if(hh < 10)
            clock += "0";
        clock += hh + ":";
        if (mm < 10) clock += '0'; 
        clock += mm; 
        return(clock); 
}