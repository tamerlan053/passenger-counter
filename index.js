countEl = document.getElementById("count-el")
countEl.textContent = 2;

let count = 2;

function increment() {
    count += 1;
    countEl.textContent = count;
}

function save() {
    console.log(count)
}
