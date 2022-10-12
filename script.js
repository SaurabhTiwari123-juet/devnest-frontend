// events handling in  javascript

function handleClick() {
  alert("You have clicked a button");
}

document.getElementById("btnn").onclick = handleClick;

//recommended way
document.getElementById("btnn").addEventListener("click", handleClick);
// js dom
