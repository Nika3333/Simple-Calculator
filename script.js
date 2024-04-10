const display = document.querySelector('input')

function appendToDisplay(input) {
    display.value += input
}

function clearDisplay() {
    display.value = ""
}

function deleteUnite() {
    display.value = display.value.slice(0, -1)
}

function calculate() {
    display.value = eval(display.value)
}