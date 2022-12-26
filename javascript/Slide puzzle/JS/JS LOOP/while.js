const n = 5;
let isPrime = true;
for(let j = 2; j<n; j++){
    debugger;
    isPrime = n%j!==0;
    if(!isPrime)
        break;
}

console.log(isPrime);