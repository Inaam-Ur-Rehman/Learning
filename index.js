document.addEventListener("DOMContentLoaded", function () {
  let form = document.getElementById("calculator__form");

  let firstInput = document.getElementById("num1");

  let operation;

  let plus = document.getElementById("plus");
  let minus = document.getElementById("minus");
  let div = document.getElementById("div");
  let mul = document.getElementById("mul");

  // get buttons

  let zero = document.getElementById("zero");
  let one = document.getElementById("one");
  let two = document.getElementById("two");
  let three = document.getElementById("three");
  let four = document.getElementById("four");
  let five = document.getElementById("five");
  let six = document.getElementById("six");
  let seven = document.getElementById("seven");
  let eight = document.getElementById("eight");
  let nine = document.getElementById("nine");


  plus.addEventListener("click", function () {
    operation = "+";
  });
  minus.addEventListener("click", function () {
    operation = "-";
  });

  div.addEventListener("click", function () {
    operation = "/";
  });

  mul.addEventListener("click", function () {
    operation = "*";
  });


  one.addEventListener("click", function(){
    firstInput.value += 1;
  })
  two.addEventListener("click", function(){
    firstInput.value += 2;
  })
  three.addEventListener("click", function(){
    firstInput.value += 3;
  })




  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let result = document.getElementById("result");

    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    let res = caluculation(num1, num2, operation);
    result.innerText = "Result: " + res;
  });
});

function caluculation(num1, num2, op) {
  if (op == "+") {
    return num1 + num2;
  } else if (op == "-") {
    return num1 - num2;
  } else if (op == "*") {
    return num1 * num2;
  } else if (op == "/") {
    return num1 / num2;
  } else if (op == "%") {
    return num1 % num2;
  } else {
    return "Enter valid operation";
  }
}
