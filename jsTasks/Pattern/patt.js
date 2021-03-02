let str = "";
let row = +prompt("How Many Lines Do U Want?");
let col = row;
for (let i = 1; i < row; i++) {
    for (let j = 1; j < col; j++) {
        if (i <= row / 2 && j >= (row / 2) - (i - 1) && j <= (row / 2) + (i - 1)) {
            str = str.concat("*");
        } else if (i >= row / 2 &&
            j > ((row / 2) - i) * (-1) &&
            j < (row - ((row / 2) - i) * (-1))) {
            str = str.concat("*");
        } else {
            str = str.concat(" ");
        }
    }
    str = str.concat("\n");
}
console.log(str);