//Validacion de nombre y appeliodo
function iniciar() {
    var nombre = document.getElementById("nombre");
    var apellido = document.getElementById("apellido");
    
    nombre.addEventListener("input", validacion, true);
    apellido.addEventListener("input", validacion, true);
   

    validacion();
}

function validacion() {
    if (nombre.value == '' && apellido.value == '') {
        nombre.setCustomValidity('Agregue  al menos su nombre');
        nombre.style.background = '#FAA00E';
        
        apellido.setCustomValidity('Agruegue su Apellido');
        apellido.style.background = '#FAA00E';


    } else {
        nombre.setCustomValidity('');
        nombre.style.background = '#DBDF99';
        apellido.setCustomValidity('');
        apellido.style.background = '#DBDF99';
        
    }
}
window.addEventListener("load", iniciar, false);

