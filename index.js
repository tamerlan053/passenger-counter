countEl = document.getElementById("count-el")
countEl.textContent = 2;

let count = 3;

function increment() {
    count += 1;
    countEl.textContent = count;
}
