function calcularCalorias() {
    var peso = document.getElementById("peso").value;
    var edad = document.getElementById("edad").value;
    var altura = document.getElementById("altura").value;
    var factoractv = document.getElementById("Fa").value;

// Calcular TMB (Tasa Metabólica Basal) utilizando la fórmula de Harris-Benedict
        var tmb = (10 * peso) + (6.25 * altura) - (5 * edad) + 5;

        // Calcular la Termogénesis
        var termogenesis = tmb * 0.1; // Porcentaje típico para la termogénesis

        // Calcular el total de calorías necesarias (TMB + Termogénesis)
        var total = (tmb * factoractv) + termogenesis;

        // Mostrar los resultados en la página
        if(peso > 0)
            {
                document.getElementById("tmb").textContent = tmb.toFixed(2);
                document.getElementById("total").textContent = total.toFixed(2);
                document.getElementById("termo").textContent = termogenesis.toFixed(2);
            }

            // Calcular superávit y déficit (opcional)
            // Supongamos que el objetivo es 2000 kcal al día
            var deficit = total - 500;
            var superavit = total + 500;

            if(peso > 0)
            {
                document.getElementById("super").textContent = superavit.toFixed(2);
                document.getElementById("defic").textContent = deficit.toFixed(2);
            }

}
        // Escuchar cambios en los campos y volver a calcular
        document.getElementById("peso").addEventListener("change", calcularCalorias);
        document.getElementById("edad").addEventListener("change", calcularCalorias);
        document.getElementById("altura").addEventListener("change", calcularCalorias);
        document.getElementById("Fa").addEventListener("change", calcularCalorias);

        
function calcular() {
        // Obtener los valores de edad, altura y peso
        var edad = parseInt(document.getElementById("edad").value);
        var altura = parseInt(document.getElementById("altura").value);
        var peso = parseInt(document.getElementById("peso").value);
        var factoractv = parseInt(document.getElementById("Fa").value); // Supongamos que inicialmente no hay déficit
        
        // Realizar cálculos (aquí puedes implementar tus cálculos de calorías)
        var tmb = calcularTMB(edad, altura, peso); // Supongamos que tienes una función llamada calcularTMB que devuelve la TMB calculada
        var total = tmb; // En este ejemplo, el total de Kcal es igual a la TMB
        var superavit = 0; // Supongamos que inicialmente no hay superávit
        var deficit = 0; // Supongamos que inicialmente no hay déficit
        
        // Mostrar los resultados en la página
        document.getElementById("tmb").textContent = tmb;
        document.getElementById("total").textContent = total;
        document.getElementById("super").textContent = superavit;
        document.getElementById("defic").textContent = deficit;
        document.getElementById("termo").textContent = termogenesis;
}
    
function reiniciar() {
    // Restablecer los valores de entrada a cero
    location.reload();
    
        // Restablecer los resultados a cero
        document.getElementById("tmb").textContent = "0000";
        document.getElementById("total").textContent = "0000";
        document.getElementById("super").textContent = "0000";
        document.getElementById("defic").textContent = "0000";
        document.getElementById("termo").textContent = "0000";
}

calcularCalorias();