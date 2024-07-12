function calcularImpuestoUSD() {
    fetch("https://dolarapi.com/v1/dolares/oficial")
        .then(response => response.json())
        .then(datos => {
            const dolarVenta = datos.venta; /* tomo el valor del dolar venta desde la api */
            const precioUSD = document.getElementById('precioUSD').value; /* tomo el valor de dolar dado en el input del html */

            if (precioUSD) {
                const precioEnARS = precioUSD * dolarVenta * 1.10; /* Los bancos suelen tomar la cotiz un +10% más por eso agregar un *1.10 */
                const impuesto = precioEnARS * 0.59;
                const precioTotal = precioEnARS + impuesto;

                document.getElementById('resultadoUSD').innerText = `El precio total en ARS con impuestos es: ${precioTotal.toFixed(2)} ARS`;
            } else {
                document.getElementById('resultadoUSD').innerText = 'Por favor, ingrese un precio en USD.';
            }
        })
       
}

function calcularImpuestoARS(){
        const precioARS = document.getElementById('precioARS').value; /* tomo el valor de dolar dado en el input del html */

            if (precioARS) {
                const precioTotal = precioARS * 1.59; /*Calculo total con el impuesto que actualmente es del 59% en San Luis Villa Mercedes */
                document.getElementById('resultadoARS').innerText = `El precio total en ARS con impuestos es: ${precioTotal.toFixed(2)} ARS`;
            } else {
                document.getElementById('resultadoARS').innerText = 'Por favor, ingrese un precio en ARS.';
            }
       
}

