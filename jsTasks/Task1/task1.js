var n = +prompt("How Many Records Do You Want");
var arr = [];
for (var i = 0; i < n; i++) {

    var fullName = prompt("Enter Name Of Person").toLowerCase().trim();
    var age = +prompt("Enter Age Of Person");
    var city = prompt("Enter Person's Native Place")

    var fName = fullName.slice(0, fullName.indexOf(" "));
    var lName = fullName.slice(fullName.indexOf(" ") + 1).trim();
    var person = {
        name: {
            firstName: fName,
            lastName: lName,
        },
        age: age,
        city: city,
    };
    arr.push(person);
}
console.log(arr);

function cmp(x, y) {
    var xName = x.name.firstName;
    var yName = y.name.lastName;
    if (xName < yName) { //Ascending
        return -1;
    }
    if (xName > yName) {
        return 1;
    }
    return 0;
}
console.log(arr.sort(cmp));

var search = prompt("Enter Name Of Person Which You Want to Find(use lowercase)");
for (i = 0; i < arr.length; i++) {
    if (search == arr[i].name.firstName.toLowerCase()) {
        console.log(arr[i]);
    }
}