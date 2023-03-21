countEl = document.getElementById("count-el")
saveEl = document.getElementById("save-el")
countEl.textContent = 2;

let count = 2;

function increment() {
    count += 1;
    countEl.textContent = count;
}

function save() {
    
    let countStr = " " + count + " - ";
    saveEl.innerText += countStr;
    countEl.textContent = 0;
    count = 0;
}
