//1. Create a variable `isHappy` and assign it a boolean value based on the value of the given String variable `action`, whether it is `Smile` or not.

var action = "Smile" 
var isHappy= action == "Smile";
console.log(isHappy);

// 2. Create a variable `allSubjects` and assign it a string representing concatenation of other string variables indicating various subjects.

var allSubjects = ["History", "Physics", "Art", "Math"];
console.log(allSubjects);

// 3. Write a program to compare two numbers, `num1` and `num2`, and check if `num1` is greater than or equal to `num2`.

var num1 = 10;
var num2 = 5;

if(num1>=num2){
    console.log("num1 is greater than or equal to num2");
} else{
    console.log("num2 is greater than or equal to num1");
}

// 4. Write a program to calculate the square of a given number, `num`.

var num = 4;
var square = num * num;
console.log("the square of", num, "is", square);

// 5. Write a program to check if a given number, `num`, is even or odd.

var num = 7;
if (num % 2 == 0){console.log(num+"is even");
} else{
    console.log(num+" is odd");
}

// 6. Write a program to check if a given year, `year`, is a leap year and divisible by 400 or divisible by 4 but not divisible by 100.

var year = 2024;
if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
    console.log(year + " is a leap year");
  } else {
    console.log(year + " is not a leap year");
  }

// 7. Write a program that checks if a given character, `char`, is a vowel or a consonant.

var char = "a";
var char = "a";
var lowercaseChar = char.toLowerCase();

if (
    lowercaseChar === "a" ||
    lowercaseChar === "e" ||
    lowercaseChar === "i" ||
    lowercaseChar === "o" ||
    lowercaseChar === "u"
  ) {
    console.log(char + " is a vowel");
  } else {
    console.log(char + " is a consonant");
  }

// 8. Write a program that determines the largest among three numbers, `num1`, `num2`, and `num3`.

var num1 = 10;
var num2 = 5;
var num3 = 8;
var largest;
if( num1 >= num2 && num1 >= num3 ){
    largest=num1;
}
else if ( num2 >= num1 && num2 >= num3 ){
    largest=num2;
}
else {
    largest=num3;
}
console.log(largest);

// 9. Write a program that determines the sign of a given number, `num` (positive, negative, or zero), using the ternary operator.

var num = -5;
var sign = (num > 0) ? "positive" : (num < 0) ? "negative" : "zero";

console.log("The number is",sign );


// 10. Write a program that determines the grade based on a given percentage, `percentage`. Use the following grading scale: A (90-100), B (80-89), C (70-79), D (60-69), F (0-59).

var percentage = 85;
var grade;
if(percentage >= 90 && percentage <= 100){
    grade = "A";
} 
else if (percentage >=80 && percentage <= 90) {
    grade="B";
}
else if (percentage >=70 && percentage <= 80) {
    grade="c";
}
else if (percentage >=60 && percentage <= 70) {
    grade="D";
}
else{grade="F";}
console.log("The grade for", percentage,"percentage is",grade);