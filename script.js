//?     15. Write a program that displays the divisors of a given number on the screen.

let number = prompt('Enter a number to find its divisors');
let divisors = '';

for (let i = 2; i < number / 2; i++) {
    if (number % i === 0) {
      divisors += i + " "
    }
}

document.getElementById('myDiv1').innerHTML = number + ' is divisible by ' + divisors;