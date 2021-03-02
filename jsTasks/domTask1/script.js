let arr = [];

const addData = (e) => {
    e.preventDefault();
    let person = {
        fName: document.forms['form']['fname'].value,
        lName: document.forms['form']['lname'].value,
        age: document.forms['form']['age'].value,
        movie: document.forms['form']['movie'].value,
    }
    arr.push(person);
    document.forms[0].reset();
    console.log(arr);
}
document.addEventListener('DOMcontentLoaded', () => {
    document.getElementById('sub').addEventListener('submit', addData);
});