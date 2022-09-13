$(document).ready(function() {

	$("#enviar").click(function (){



		doc = document.getElementById("informacion").addEventListener("submit", ingresarinformacion,true);

		function ingresarinformacion(e){

		e.preventDefault();

		var valido=document.informacion.checkValidity();

		if(cumple.value>=12){ 

			if(valido){informacion

			document.informacion.submit();

			alert("Informacion enviada");

				
		}} else{
				alert("Error al enviar el formulario. Usted debe ser mayor de 12 años");


					
			}

			}

		})

	
	


})