// Esta función agrega un valor al final del contenido del display
function appendToDisplay(value) {
    document.getElementById('display').value += value; // Agrega el valor recibido al contenido actual del display
}

// Esta función limpia el contenido del display
function clearDisplay() {
    document.getElementById('display').value = ''; // Establece el contenido del display como vacío
}

// Esta función elimina el último carácter del contenido del display
function deleteLast() {
    let displayValue = document.getElementById('display').value; // Obtiene el valor actual del display
    document.getElementById('display').value = displayValue.slice(0, -1); // Elimina el último carácter y actualiza el display
}

// Esta función calcula el resultado de la expresión matemática en el display
function calculateResult() {
    try {
        let result = eval(document.getElementById('display').value); // Evalúa la expresión matemática
        document.getElementById('display').value = result; // Muestra el resultado en el display
    } catch (error) {
        alert('Expresión inválida'); // Muestra un mensaje de alerta si hay un error en la evaluación
    }
}
