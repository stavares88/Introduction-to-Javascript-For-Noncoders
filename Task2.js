// 1. Write a program that determines the type of triangle based on the lengths of its sides (`side1`, `side2`, and `side3`). 
// The types of triangles are equilateral, isosceles, and scalene.

let side1 = 3;
let side2 = 1;
let side3 = 5;

 let valid = ((side1+side2)>side3)&&((side2+side3)>side1)&&((side3+side1)>side2);

if (valid) {
  console.log("it is a valid Triangle");
}else{
  console.log("not a valid Triangle")
}

if(side1==side2&&side2==side3){
  console.log("equilateral Triangle");
}else if(side1==side2||side2==side3||side3==side1){
  console.log("isosceles triangle")
}else{
  console.log("scalene triangle");
}

// 2. Use a for loop to print the square of numbers from 1 to 10.

console.log('for loop');
for(let i=1;i<=10;i++)
{
  console.log(i);
  
}

// 3. Write a code that simulates access control to a restricted area. 
// If a user is an administrator (isAdmin is true) and their age is 18 or older (age >= 18),
// they have access. Otherwise, access is denied. 

var isAdmin = true;
var age = 20;
if (isAdmin && age>=18)
console.log("access is granted");
else
console.log("access is denied");


// 4. Write a code that checks if a customer is eligible for a discount on a ticket. 
// Customers who are either students (isStudent is true) or seniors (isSenior is true) 
// are eligible for a discount.

var isStudent = true;  // Set to true if the customer is a student
var isSenior = true;   // Set to true if the customer is a senior citizen

var isStudent= true;
var isSenior= true;
var isEligible= false;
if (isStudent || isSenior)
    isEligible = true;

if (isEligible)
    console.log("Eligible for discount")
else
    console.log("Not Eligible for discount")

// 5. Write a program to calculate the factorial of a given number using a loop.

//4! = 4*3*2*1 = 24
//5! = 5*4*3*2*1 = 120

let n=5, i=1, fact=1
while(i<=n)
{
  fact = fact*i 
  i++
}
console.log(fact)

//for loop
for(i=1;i<=n;i++)
{
  fact=fact*i 
}
console.log(fact)