function generateTriangle(rows,withSpace){
    if(typeof rows === 'undefined')
        rows = 3;
    if(typeof withSpace === 'undefined')
        withSpace = false;
    let result = '';

    // urvuu daraalaltai
    for(let i =rows; i>=1; i--){
        for(let j=i;j>=1;j--){
            result+=`${j} `;
        }
        result+=`\n`;
    }

    // zov daraalaltai
    for(let i =1; i<=rows; i++){
        for(let j=1;j<=i;j++){
            result+=`${j} `;
        }
        result+=`\n`;
    }


    return result;
}

console.log(generateTriangle(5,true));
console.log(generateTriangle(3));
console.log(generateTriangle());

function generateTriangle(rows){
    let result = '';
    for(let i =rows; i>=1; i--){
        for(let j=i;j>=1;j--){
            result+=`${j} `;
        }
        result+=`\n`;
    }
    return result;
}

console.log(generateTriangle(5,true));
console.log(generateTriangle(3));
console.log(generateTriangle());