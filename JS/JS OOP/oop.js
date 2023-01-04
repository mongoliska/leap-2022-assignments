class Student {
    constructor(name, birthYear, weight, height) {
        this.name = name;
        this.birthYear = birthYear;
        this.weight = weight;
        this.height = height;
    }
    
    getBMI(){
        return this.weight / this.height ** 2;
    }

    getAge(){
        return new Date().getFullYear - this.birthYear;
    }
}

const generateNumber = (min, max) => {
    return Math.round(Math.random() * (max - min)) + min;
};

const thisYear = new Date().getFullYear();
const students = [];

for (let i = 1; i <= 20; i++) {
    const student = new Student('Student' + i, generateNumber(1970, thisYear), generateNumber(40,120), generateNumber(155,190));
    students.push(student);
}

// let averageBMI;
// let averageAge;
// let studentWithMaxBMI;
// let studentWithMinBMI;
// let youngest;
// let oldest;

// claculate BMI av
// Calculate Age av
// highest BMI
// lowest BMI
// youngest 
// oldest 

console.log (students[0]);
let totalbmi=[];
    let avage=0;
    let maxBMI =0;
    let sum = 0;

for( let student of students){
    console.log(`Name : ${student.name}, Age : ${2022 - student.birthYear}`);
    let bmi = student.weight/((student.height/100)**2)
    totalbmi.push(Math.floor(bmi))
    for(let i =1;i<totalbmi; i++){
       sum= totalbmi[i]

    }

    console.log (students[0]);

    console.log(bmi);

    let age = 2022 - student.birthYear;
    console.log(age);
    avage = age+avage;
}

console.log(avage/students.length);

console.log(totalbmi);

// console.log(sum)

let maxValue = totalbmi.sort((a,b)=>b-a)
console.log(maxValue[0]);
console.log(maxValue[19]);





