function sanitizeInput(input) {
    // Remove caracteres perigosos
    const div = document.createElement("div");
    div.textContent = input;
    return div.innerHTML;
}

function search() {
    const input = document.getElementById("search").value;
    const sanitizedInput = sanitizeInput(input);
    document.getElementById("result").innerText = `Resultado: ${sanitizedInput}`;
}