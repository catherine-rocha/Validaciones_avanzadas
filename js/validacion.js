document.getElementById("regBtn").addEventListener("click", function (event) {
    const password1 = document.getElementById("password1").value;
    const password2 = document.getElementById("password2").value;
    const terminos = document.getElementById("terminos");


  if (password1 !== password2) {
    event.preventDefault(); 
    alert('Las contraseñas no coinciden');
    return; 
  }


  if (!terminos.checked) {
    event.preventDefault();
    alert('Debes aceptar los términos y condiciones.');
  }
});


function validarCampo(input) {
    let mensajeError = input.nextElementSibling; // slecciona el elemento (el div para el mensaje)
    
    if (input.value.trim() === '') {
      input.classList.remove('border-success'); // eliminar clase verde si no hay nada
      input.classList.add('border-danger');     // agregar clase verde
      mensajeError.textContent = "Debe rellenar este campo"; // mensaje de error
    } else {
      input.classList.remove('border-danger');  // eliminar clase roja
      input.classList.add('border-success');     // agregar clase verde
      mensajeError.textContent = '';              // impiar mensaje
    }
  }
  
  function validarFormulario() {
    let esValido = true;
    let inputs = document.querySelectorAll('input');
  
    inputs.forEach(input => {
      // validar cada campo y verificar si es valido
      if (input.value.trim() === '') {
        esValido = false;
      }
      validarCampo(input); //llama funcion para validar cada input
    });
  
    return esValido;
  }
  
  //validar en tiempo real
  let inputs = document.querySelectorAll('input');
  inputs.forEach(input => {
    input.addEventListener('input', function () {
      validarCampo(input); // llama a la funcion de validacion para cada cambio
    });
  });
  
  //validar al mandar el formulario
  document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    if (validarFormulario()) {
      console.log("El formulario es valido.");
    } else {
      console.log("El formulario no es valido.");
    }
  });