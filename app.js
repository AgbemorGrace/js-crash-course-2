let num1 = 10;
let num2 = 20;
let num3 = "10";
let word1 = "Hello";
let word2 = "hello";

console.log(num1 < num2);
console.log(num1 > num2);
console.log(num1 <= num2);
console.log(num1 >= num2);
console.log(!true);
console.log(!false);
console.log(num1 == num3);
console.log(num1 === num3); //equality check
console.log(word1 === word2);
console.log(word1 !== word2);


control flow
let item = "Gino";
if (item === "Annapurna"){
    console.log("Buy Ananapurna");
}else if (item=== "U2"){
    console.log("Buy U2");
}else if(item ==="A1"){
    console.log("Buy A1");
}else{
    console.log("Buy Rocky salt");
}



//GRADING SYSTEM
let score = 200;
if (score >= 0 && score <= 100){
    if(score >= 90){
    console.log("Excellent");
    }
else if (score >= 80){
    console.log("Very Good");
} 
else if(score >= 70){
    console.log("Good");
}else if (score >= 60){
    console.log("Average");
}else if(score >=50){
    console.log("Credit");
}else if (score >= 40){
    console.log("Pass");
}else if(score >=0){
    console.log("Fail");
}}else{
    console.log("Please enter a valid score");
 }

//Function

function sum(a,b){
    let total = a + b;
    return total;
    console.log(a + b);
}
let eleven = sum(2,6);
let fifteen = sum(7,8);
let nineteen = sum(9,10);
console.log(eleven);

function multiply(a,b = 4){
    let total= a * b;
    return total;
}
let four = multiply(2);
console.log(four);

let ten = multiply(2,5);
let fteen =multiply(3,5);
return total;


//LOOPS
//FOR LOOP

for (let i = 1;i<=10; i++){
    console.log(i+ ".I will not talk in class again");
}
console.log("i am a good student");

//WHILE LOOP

let num = 1 ;
while(num<=10){
    console.log(num);
num =num + 1;
}

//DO...WHILE

let age =1;
do {
    console.log (age +".You can't vote")
age++; 
}
while(age < 18);   

//ARRAY methods

let ages = [19,26,24,18,22,35,30,33,31,29];
for(let age of ages){
    console.log(age);
     console.log(ages[age]);
     console.log(Math.pow(age,2));
}

let marriage= ages.filter(function(num) {
     return num > 25;
    let marriage = ages.filter((mark)>=mark >25);
 })
console.log(marriage);

//map

let squares = ages.map((age)=> age*age);
console.log(squares);

//find

let eighteen = ages.find((age)=> age === 18);
console.log(eighteen);