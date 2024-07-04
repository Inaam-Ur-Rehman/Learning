function btnClick(){
    let body = document.querySelector("body");
    let btn = document.querySelector("button");
    let isDark = body.classList.contains("dark")
    if(isDark){
        body.classList.remove("dark")
        btn.innerText = "Toggle Dark Theme"
    }
    else{
        body.classList.add("dark")
        btn.innerText = "Toggle Light Theme"
    }
  }

document.addEventListener("DOMContentLoaded", function () {
  
  let btn = document.querySelector("button");
  btn.addEventListener("click", btnClick)
});


// let btn = document.querySelector("button");
//   console.log(btn)
//   btn.addEventListener("dblclick", function () {
//     alert("Btn Clicked");
//  });