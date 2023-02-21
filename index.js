let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let nullEl = document.getElementById("null-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

function nulls() {
    saveEl.textContent = "Day by day: "
    countEl.textContent = 0
    count = 0
}
