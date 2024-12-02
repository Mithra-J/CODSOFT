function clearDisplay() {
    document.getElementById("display").textContent = "";
}

function appendValue(value) {
    const display = document.getElementById("display");
    display.textContent += value;
}

function calculate() {
    const display = document.getElementById("display");
    try {
        display.textContent = eval(display.textContent);
    } catch {
        display.textContent = "Error";
    }
}
