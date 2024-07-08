document.addEventListener("DOMContentLoaded", function () {
  let form = document.getElementById("calculator__form");

  let operation;

  let plus = document.getElementById("plus");
    let minus = document.getElementById("minus");
    let div = document.getElementById("div");
    let mul = document.getElementById("mul");

    plus.addEventListener("click",function(){
      operation = "+"
    });
    minus.addEventListener("click",function(){
      operation = "-"
    });
    
    div.addEventListener("click",function(){
      operation = "/"
    });
    
    mul.addEventListener("click",function(){
      operation = "*"
    });

  form.addEventListener("submit",function(e){
    e.preventDefault();

     let result = document.getElementById("result");
    
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    let res = caluculation(num1,num2,operation)
    result.innerText = "Result: "+ res
  })  
});

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