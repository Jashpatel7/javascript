function count(str) {

    let countCharWithSpace = 0;
    for (let letter of str) {
        countCharWithSpace++;
    }
    let space = ' ';
    let countSpace = 0;
    let pos = 0;
    while (true) {
        let nextPos = str.indexOf(space, pos);
        if (nextPos == -1) break;
        countSpace++;
        pos = nextPos + 1;
    }
    let words = str.split(' ');
    let Words = [];
    for (var i = 0; i < words.length; i++) {
        if (words[i] != "") {
            Words.push(words[i]);
        }
    }
    console.log(words);
    console.log(Words);
    console.log(`Total Character Present (including Space) are ${countCharWithSpace}.`);
    console.log(`Total Space Present in"${str}"is ${countSpace}.`);
    console.log(`Total Character Present(excluding space) in"${str}"are ${countCharWithSpace - countSpace}.`);
    console.log(`Total Words Present in:"${str}"is ${Words.length}.`)

}

let sample = prompt("Enter String");
count(sample);