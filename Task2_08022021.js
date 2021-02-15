// JavaScript source code
/*
2) Write down a program which returns the nth smallest number from randomly generated data.

Requirements: 
There should be User Input which defines the number of data [n] to store. Ask the User Minimum and Maximum range to generate the random numbers between that range. 
Ask the user which nth smallest number he wants to find from the generated data.

Output:
1) Display the Randomly Generated Data
2) Display the nth smallest number
*/
var num = prompt("Enter Total Num Of Elements?");
var min = prompt("Enter Minimum Value");
var max = prompt("Enter Maximum Value");
var arr = [];
for (var i = 0; i < num; i++) {
    arr[i] = parseInt(Math.random() * (max - min) + min);
}
console.log(arr);

// Bubble Sort 
for (i = 0; i < num - 1; i++) {
    for (var j = 0; j < num - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
            temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}
console.log(arr);
var select = prompt("Which Number You Want To Select?('1' - means smallest)");
console.log(arr[select - 1]);