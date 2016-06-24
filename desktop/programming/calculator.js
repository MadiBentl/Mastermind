var add = function(a, b){
	var total = Number(a) + Number(b);
	return total;
};

var subtract = function(a, b){
	var total = Number(a) - Number(b);
	return total;
};

var multiply = function(a, b){
	var total = Number(a) * Number(b);
	return total;
};

var divide = function(a, b){
	var total = Number(a) / Number(b);
	return total;
};

var num = "";
var num2 = "";
var equation = "";

$(document).ready(function(){
    $(".clear").click(function(){
	    num = "";
	    num2 = "";
	    equation = "";
        $("#display").text(num);
    });
    $(".one").click(function(){
	    equation == "" ? num = num + "1" : num2 = num2 + "1";
	    equation == "" ? $("#display").text(num) : $("#display").text(num2);
    });
    $(".two").click(function(){
	    equation == "" ? num = num + "2" : num2 = num2 + "2";
        equation == "" ? $("#display").text(num) : $("#display").text(num2);
    });
    $(".three").click(function(){
	    equation == "" ? num = num + "3" : num2 = num2 + "3";
        equation == "" ? $("#display").text(num) : $("#display").text(num2);
    });
    $(".four").click(function(){
	    equation == "" ? num = num + "4" : num2 = num2 + "4";
        equation == "" ? $("#display").text(num) : $("#display").text(num2);
    });
    $(".five").click(function(){
	    equation == "" ? num = num + "5" : num2 = num2 + "5";
        equation == "" ? $("#display").text(num) : $("#display").text(num2);
    });
    $(".six").click(function(){
	    equation == "" ? num = num + "6" : num2 = num2 + "6";
        equation == "" ? $("#display").text(num) : $("#display").text(num2);
    });
    $(".seven").click(function(){
	    equation == "" ? num = num + "7" : num2 = num2 + "7";
        equation == "" ? $("#display").text(num) : $("#display").text(num2);
    });
    $(".eight").click(function(){
	    equation == "" ? num = num + "8" : num2 = num2 + "8";
        equation == "" ? $("#display").text(num) : $("#display").text(num2);
    });
    $(".nine").click(function(){
	    equation == "" ? num = num + "9" : num2 = num2 + "9";
        equation == "" ? $("#display").text(num) : $("#display").text(num2);
    });
    $(".zero").click(function(){
	    equation == "" ? num = num + "0" : num2 = num2 + "0";
        $equation == "" ? $("#display").text(num) : $("#display").text(num2);
    });
    $(".decimal").click(function(){
	    num = num + ".";
        $("#display").text(num);
    });
    $(".add").click(function(){
	    equation = "add";
        $("#display").text("+");
    });
    $(".minus").click(function(){
	    equation = "subtract";
        $("#display").text("-");
    });
    $(".multiply").click(function(){
	    equation = "multiply";
        $("#display").text("X");
    });
    $(".divide").click(function(){
	    equation = "divide";
        $("#display").text("/");
    });
    $(".equal").click(function(){
	    if (num != "" && num2 != ""){
		    if (equation == "add"){
			    num = add(num, num2);
			    $("#display").text(num);
			    num2 = "";
			    equation = "";
		    }
		    else if (equation == "subtract"){
			    num = subtract(num, num2);
			    $("#display").text(num);
			    num2 = "";
			    equation = "";
		    }
		    else if (equation == "multiply"){
			    num = multiply(num, num2);
			    $("#display").text(num);
			    num2 = "";
			    equation = "";
		    }
		    else if (equation == "divide"){
			  num = divide(num, num2);
			    $("#display").text(num);
			    num2 = "";
			    equation = "";
		    }
		    else{
			  $("#display").text("ERROR");;
		    };
	    }
    });
});

//problems:
// decimal point for num1, num2; multiple decimal pts
// math functions are concatenating strings, need to convert strings to integers
// clicking "+" button displays "add" for all math functions