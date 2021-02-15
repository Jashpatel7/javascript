function per() {
    //this.name = prompt("Enter Your Name").toUpperCase();
    this.age = +prompt("Enter Your Age");
    this.city = prompt("Enter Your City Name").toLowerCase();
    this.name {
        fname = prompt("First name");
        lname = prompt("last Name")
    };
    var no = prompt("How Many Records Do u Want?");
    var persons = {};
    var personsArr = [];
    for (var i = 0; i < no; i++) {
        persons[i] = new per();
        personsArr[i] = persons[i];
    }
    console.log("Normal Array");
    console.log(personsArr);

    var sortArr = [];
    for (i = 0; i < personsArr.length; i++) {
        sortArr[i] = personsArr[i];
    }

    function cmp(x, y) {
        xCity = x.city;
        yCity = y.city;

        var compare = 0;
        if (xCity < yCity) {
            compare = 1;
        } else {
            compare = -1;
        }
        return compare;
    }
    console.log("Sorted Array(By Age_Ascending)");
    console.log(sortArr.sort(cmp));

    // Search By Name
    var found = {};
    var search = prompt("Enter Name Of Person Which You Want to Find(use lowercase)");
    for (i = 0; i < personsArr.length; i++) {
        if (search == personsArr[i].name.toLowerCase()) {
            found = personsArr[i];
            break;
        }
    }

    console.log(found);