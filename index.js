function caluculation(num1, num2, op){
    if(op == "+") {
        return num1 + num2
    }
    else if(op == "-"){
        return num1 - num2
    }
    else if(op == "*"){
        return num1 * num2
    }
    else if(op == "/"){
        return num1 / num2
    }
    else if(op == "%"){
        return num1 % num2
    }
    else{
        return "Enter valid operation"
    }
}

var sum = caluculation(5, 7, "+");
var min = caluculation(5, 7, "-");
var mul = caluculation(5, 7, "*");
var div = caluculation(5, 7, "/");
var rem = caluculation(7, 5, "%");
