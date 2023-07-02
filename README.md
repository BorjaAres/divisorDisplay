Certainly! Here's a readme file for the program:

---

## Divisors Display Program

This program prompts the user to enter a number and displays its divisors. The divisors of a number are the numbers that divide the given number without leaving a remainder.

### Program Execution

1. The program prompts the user to enter a number using the `prompt()` function.
2. The program loops through numbers starting from 2 up to half of the given number using a `for` loop.
3. For each iteration, the program checks if the given number is divisible by the current loop value `i` using the modulo operator (`%`).
4. If the remainder is 0, it means that the given number is divisible by `i`, and the current value of `i` is added to the `divisors` string.
5. After the loop completes, the program displays a message in the HTML element with the ID `myDiv1`. The message includes the given number and the divisors separated by spaces.

### Example Output

If the user enters the number 12, the program will display the message "12 is divisible by 2 3 4 6" in the HTML element.

### How to Run

To run the program, open the HTML file in a web browser. The program will prompt you to enter a number and display the divisors in the HTML element with the ID `myDiv1`. You can also follow this link: https://divisorsdisplay.netlify.app/

Feel free to modify the program or enhance it according to your needs.
