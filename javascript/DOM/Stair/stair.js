
let windowHeight = window.innerHeight;
let documentHeigt = document.body.offsetHeight
let targetScrollY = documentHeigt -windowHeight;

function getSCrollTopPercent (){
   return Math.round((window.scrollY * 100) / targetScrollY); 
}


// console.log('progress', progress)

// let height = document.querySelector(".progress");
// height.innerHTML = progress + "%";


function updateScroll (){
    document.querySelector(".progress").innerHTML = getSCrollTopPercent() + "%";
    document.querySelector(".box-inner").style.width = 
    getSCrollTopPercent() + "%";
}

document.addEventListener("scroll", updateScroll);
document.addEventListener("resize", function (){
windowHeight = window.innerHTML;
documentHeigt = document.body.offsetHeight;
targetScrollY = documentHeigt - windowHeight;
updateScroll ();
});

const runBoxTarget = document.querySelector(".run-box");

runBoxTarget.addEventListener('mouseenter', function (){    //mouseenter/mouseout
    runBoxTarget.classList.add("active");              //add/remove
});

runBoxTarget.addEventListener('mouseout', function (){    //mouseenter/mouseout
    runBoxTarget.classList.remove("active");              //add/remove
})