
// 1. Obtener elementos del DOM
const inputCelsius = document.getElementById("celsius");
const botonConvertir = document.getElementById("convertir");
const resultado = document.getElementById("resultado");
const mensajeError = document.getElementById("error");

// 2. Crear la función de conversión
function convertirTemperatura() {

    // Obtener el valor del input
    const temperatura = inputCelsius.value;

    // 3. Validar los datos
    if (temperatura.trim() === "" || !Number.isFinite(Number(temperatura))) {

        mensajeError.textContent = "Error: Ingresa una temperatura válida.";
        resultado.textContent = "";
        return;
    }

    // Convertir el valor a tipo number
    const celsius = Number(temperatura);

    // 4. Realizar las conversiones
    const kelvin = celsius + 273.15;
    const fahrenheit = (celsius * 9 / 5) + 32;

    // 5. Mostrar los resultados en el DOM
    resultado.innerHTML = `
        <h2>Resultados</h2>
        <p>Grados Kelvin: ${kelvin.toFixed(2)}</p>
        <p>Grados Fahrenheit: ${fahrenheit.toFixed(2)}</p>
    `;

    // Limpiar mensaje de error
    mensajeError.textContent = "";
}

// 6. Escuchar el evento del botón
botonConvertir.addEventListener("click", convertirTemperatura);
