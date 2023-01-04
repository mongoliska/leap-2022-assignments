const todoTarget = document.querySelector("#todoTarget");
const testTarget = document.querySelector("#testTarget");
const inputTarget = document.querySelector("#inputTarget");

console.log(todoTarget.childNodes);
const firstli = todoTarget.querySelectorAll("li")[0];
console.log(firstli)

inputTarget.addEventListener("change", function (e){  //can write "change", "input" | "keypress"dr Enter ajillana
    // if(e.key === 'Enter')
    testTarget.innerHTML = e.target.value;
});


const firstCB = document.querySelectorAll('input[type="checkbox"]')[0];

firstCB.addEventListener("click", function (e){

    firstCB.setAttribute("checked", "");
        // firstCB[0].style.textDecoration = 'line-through'
        if(firstCB.checked){
            firstli.style.textDecoration = 'line-through'
            console.log(firstli);
            firstCB.removeAttribute("checked", "")
        }else{
            firstli.style.textDecoration = 'none'
        }
})

