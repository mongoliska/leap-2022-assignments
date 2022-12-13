let isTimeOut = false;
let score = 0;

let seconds = 0;
let minutes = 0;

//setInterval

function updateTimer(){
    seconds+=1;
    if(seconds === 60){
        minutes +=1;
        seconds = 0;
    }
    console.log(`${minutes}:${seconds}`);
}

setInterval(updateTimer, 1000);


const scoreTarget = document.querySelector("#scoreTarget");

function updateScore(point){
    score+=point;
    scoreTarget.innerHTML = score;
}


const parent=document.querySelector('ul');  
function getRandomNumber(min , max){     
    return Math.floor(Math.random()*(max-min))+min;  
} 
function getRandomColor() {     
    const green = getRandomNumber(0, 255);     
    const red = getRandomNumber(0, 255);     
    const blue = getRandomNumber(0, 255);     
    return [red,green,blue];  
}

const titleCount = 9;                  

function getDifferentColor(colors){
    const random = getRandomNumber(0,2);
    const newColors = [...colors];
    let color = colors[random]
    if(color < 126) {
        color -=100;
    } else {
        color +=100
    }
    newColors[random] = color;
    return `rgb(${newColors[0]}, ${newColors[1]}, ${newColors[2]})`
}


function reDraw() {
    parent.innerHTML = "";
    const colors = getRandomColor();

const randomIndex = getRandomNumber(0,8);

for(let i = 0; i < titleCount; i++){
    const li = document.createElement('li');
    const isNormal = i !==randomIndex;
    if (isNormal){
    li.style.backgroundColor = `rgb(${colors[0]}, ${colors[1]}, ${colors[2]})`
    }else{
        li.style.backgroundColor = getDifferentColor(colors);
    }
    //setTimeOut
    li.addEventListener("click", function(){
        if(!isTimeOut){
                if (!isNormal){
                updateScore(1);
                reDraw();

            }
            else{
                updateScore(-2);
                reDraw();
            }
        }else{
            alert("Time run out your score is:"+ score);
        }
    });
    parent.appendChild(li);
}
}
reDraw();
setTimeout(function (){
    isTimeOut = true;
}, 10000);


