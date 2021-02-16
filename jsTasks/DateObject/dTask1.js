//To Get Total No. Of Days
function getDays(d) {
    let months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'August', 'Sep', 'Oct', 'Nov', 'Dec'];
    let x = d.getMonth();
    if (x == 0 || x == 2 || x == 4 || x == 6 || x == 7 || x == 9 || x == 11) {
        return console.log(`${months[x]} has 31 Days..`);
    } else if (x == 3 || x == 5 || x == 8 || x == 10) {
        return console.log(`${months[x]} has 30 Days..`);
    } else {
        return console.log(`${months[x]} has 28 Days..`);
    }
}

// For Find Last Day Of Month
function lastDay(d) {
    let months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'August', 'Sep', 'Oct', 'Nov', 'Dec'];
    let D = d.getDate();
    let last;
    let x = d.getMonth();
    if (x == 0 || x == 2 || x == 4 || x == 6 || x == 7 || x == 9 || x == 11) {
        last = 31;
        d.setDate(last);
        let n = d.toDateString();
        return n;
    } else if (x == 3 || x == 5 || x == 8 || x == 10) {
        last = 30;
        d.setDate(last);
        let n = d.toDateString();
        return n;
    } else {
        last = 28;
        d.setDate(last);
        let n = d.toDateString();
        return n;
    }
}

// Find Diifference Between two Dates In Term Of Months...
function diff(d1, d2) {
    let xMonth = d1.getMonth();
    let yMonth = d2.getMonth();
    let xYear = d1.getFullYear();
    let yYear = d2.getFullYear();
    let diff = Math.abs(xYear - yYear);
    if (diff == 0) {
        return console.log(`Approximately Time Difference Between ${d1} and ${d2} In terms of Months is ${Math.abs(xMonth-yMonth)}`);
    } else {
        let total;
        total = diff * 12;
        absMonthDif = Math.abs(xMonth - yMonth);
        total = total + absMonthDif;
        return console.log(`Approximately Time Difference Between ${d1} and ${d2} In terms of Months is ${total}`);
    }
}

//Write a JavaScript function to get the week end date.
function findWeekEnd(d) {
    let curDay = d.getDay();
    let curDate = d.getDate();
    let weekEnd1 = curDate - curDay + 6; // Saturday
    let weekEnd2 = curDate - (curDay - 1) + 6; // Sunday
    let d1 = new Date();
    let d2 = new Date();
    d1.setDate(weekEnd1);
    d2.setDate(weekEnd2);
    return console.log(`End Days Of Week are ${d1} and ${d2}`);

}

// Write a JavaScript function to add specified weeks to a date
function addWeeks(d, week) {
    let dummy = d;
    let totalAddingDay = week * 7;
    d.setDate(totalAddingDay + d.getDate());
    return console.log(`After ${week} Weeks The Date is ${d}`);
}

//Write a JavaScript function to get timezone offset in seconds.
function timezoneOffset(d) {
    let mins = d.getTimezoneOffset();
    let seconds = mins * 60;
    return console.log(`The Difference Between UTC and the local time zone (in Seconds) is ${seconds} Seconds`);
}

let str1 = prompt("Enter Date (YYYY-MM-DD) Format", '2016-04-11');
let dt = new Date(Date.parse(str1));
let dummy = dt; //Copy Date Object
let today = new Date();

getDays(dt);
getDays(today);
lastDay(dt); // For Find Last Day of Particular date.
diff(dummy, today); // find Difference in terms of Months From Given Date to Today
findWeekEnd(today);

let week = +prompt("Enter Number of Weeks Which You Want To Add into Today's Date?", 1);

addWeeks(today, week);
timezoneOffset(today);
