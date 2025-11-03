
export function renderResult(text) {
    const output = document.getElementById("output");
    output.textContent = text;
    output.className = "success";
}

export function renderError(msg) {
    const output = document.getElementById("output");
    output.textContent = msg;
}

export function updateHistory(number, result) {
    const history = document.getElementById("history");
    const entry = document.createElement("p");
    entry.textContent = `${number}: ${result}`
    history.appendChild(entry);
}