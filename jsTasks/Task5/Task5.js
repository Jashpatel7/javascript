/*
    Write down a function that separates the firstName and lastName from a 
    string (considering the first word of string as the First Name and rest as the Last Name) 
    and perform a search using the first name in the static JSON Data.
*/
function Show() {
    var n = prompt("How Many Records Do You Want", '1');
    let persons = [];
    for (var i = 0; i < n; i++) {
        persons[i] = {};
        fullName = prompt(`Enter the full name of Person`, 'raj patel').toLowerCase().trim();
        persons[i].lName = "";
        persons[i].fName = fullName.slice(0, fullName.indexOf(" "));
        persons[i].lName = fullName.slice(fullName.indexOf(" ") + 1).trim();
        // For No Space in Last Name 
        //persons[i].lName = fullName.slice(fullName.indexOf(" ") + 1).split(" ").join("");
        /*
            split() method is used to split a string into multiple sub-strings and return them 
                    in the form of an array.
            join() method is used to join an array of strings using a separator. This will 
                   return a new string with the joined string using the specified separator. 
                   This method is used on the returned array and no separator (“”) is used 
                   to join the strings. This will join the strings in the array and return 
                   a new string. This will remove all the spaces in the original string.
        */
    }
    return persons;
}

let persons = [];
persons = Show();
console.log(persons);
var found = [];
var search = prompt("Enter Name Of Person Which You Want to Find(use lowercase)");
for (i = 0; i < persons.length; i++) {
    if (search == persons[i].fName.toLowerCase()) {
        console.log(persons[i]);
    }
}