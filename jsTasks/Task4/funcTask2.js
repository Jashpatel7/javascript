var num1 = +prompt("Enter First Number");
var num2 = +prompt("Enter Second Number");
var min, max;
if (num1 > num2) {
    min = num2;
    max = num1;
} else {
    min = num1;
    max = num2;
}
var range = max - min + 1;
var arr = [];
var sum = 0;
for (var i = 0; i <= range; i++) {
    arr[i] = min + i;
}
arr.pop();
console.log("Normal Array")
console.log(arr);
var sum = 0;
var resultArr = [];

function add(min, max) {
    if (min == max + 1) {
        return resultArr;
    } else if (min <= max) {
        sum += min;
        resultArr[resultArr.length] = sum;
        return add(min + 1, max);
    }
}
console.log("Change Array");
add(min, max);
console.log(resultArr);