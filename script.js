/*
    1. Print integers 1 to N, but print “Fizz” if an integer is divisible by 3, “Buzz” if an integer is divisible by 5, and “FizzBuzz” if an integer is divisible by both 3 and 5.
*/

// I have 3 solutions using the 3 loops:

// using for loop
for ( let i = 1; i <= 16; i++){
    if (i % 15 === 0){
        console.log( i, 'FIZZBUZZ');
    } else if (i % 3 === 0){
        console.log(i, 'FIZZ');
    } else if (i % 5 === 0){
        console.log(i, 'BUZZ');
    } else {
        console.log(i);
    }
}

// using while loop
let i = 0;

while (i <= 16){
    i++;

    if (i % 15 === 0){
        console.log( i, 'FIZZBUZZ');
    } else if (i % 3 === 0){
        console.log(i, 'FIZZ');
    } else if (i % 5 === 0){
        console.log(i, 'BUZZ');
    } else {
        console.log(i);
    }
}

// using do while loop
do {
    if (i % 15 === 0){
        console.log( i, 'FIZZBUZZ');
    } else if (i % 3 === 0){
        console.log(i, 'FIZZ');
    } else if (i % 5 === 0){
        console.log(i, 'BUZZ');
    } else {
        console.log(i);
    }
    i++
}
while (i < 16);


/* 
    2. Write a function to check whether the word "script" (case-sensitive) appears in the 5th position / 4th index of a given word.
*/
// SOLUTION:
let word = "JavaScript";
let index = 4;

if (word.toLowerCase().indexOf('script') === index){
    console.log(true);
} else {
    console.log(false);
}


/*
    3. Write a JavaScript function that takes one argument "year" and determines if that year is a leap year.
*/
// SOLUTION:
let year = 2000;

if( year % 4 === 0 && year % 400 === 0){
    console.log(`The year ${year} is a leap year.`);
} else if ( year % 4 === 0 && year % 100 !== 0){
    console.log(`The year ${year} is a leap year.`);
} else {
    console.log(`The year ${year} is not a leap year.`);
};