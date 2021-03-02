var createLabel = [];

function finalCall() {
    console.log("Hello");
    let q = +document.getElementById("num").value;
    console.log(typeof(q));
    let choice = document.getElementById("input-dropdown").value;

    let sec = document.getElementById('demo1');

    for (let i = 0; i < q; i++) {
        sec.innerHTML += `<input type="text" name="label-text" placeholder="Enter Label Here.."><br>`
    }
    console.log(choice);
}

function addField(ch) {
    let type = ch;
    let p = document.getElementById("demo");
    p.innerHTML += `<label for="how many" id="num-label">Enter Quantity: </label>`;
    p.innerHTML += `<input type="number" name="number" id="num" required>`;
    let btn = document.createElement("button");
    btn.innerHTML = "ADD";
    btn.setAttribute("onclick", "finalCall();return false");
    btn.id = "next";
    p.appendChild(btn);


}

function showOption(current) {
    let choice = document.getElementById("input-dropdown").value;
    console.log(choice);
    addField(choice);
}