const todoTarget = document.querySelector("#todoTarget");
const testTarget = document.querySelector("#testTarget");
const inputTarget = document.querySelector("#inputTarget");

console.log(todoTarget.childNodes);
const firstli = todoTarget.querySelectorAll("li")[0];
console.log(firstli)

inputTarget.addEventListener("change", function (e){  //can write "change", "input" | "keypress"dr Enter ajillana
    // if(e.key === 'Enter')
    testTarget.innerHTML = e.target.value;


})