// events handling in  javascript

// javascript dom
function handleClick() {
  alert("You have clicked a button");
}

document.getElementById("btnn").onclick = handleClick;

//recommended way
document.getElementById("btnn").addEventListener("click", handleClick);
// js dom

// js events and forms
//
document
  .getElementById("start")
  .addEventListener("click", function handleClick() {
    document.addEventListener("mouseover", function (event) {
      console.log(event);
    });
  });

document
  .getElementById("stop")
  .addEventListener("click", function handleClick() {
    document.removeEventListener("mouseover", function (event) {
      console.log(event);
    });
  });
//
