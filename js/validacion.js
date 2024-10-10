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



document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault(); // peviene el envio del formulario automatico
  
    const inputs = document.querySelectorAll('input');
    let esValido = true;
  
    inputs.forEach(input => {
      if (!input.checkValidity()) {
        input.classList.add('is-invalid'); // aplica el estilo de error
        input.classList.remove('is-valid'); // elimina el estilo de bien
        esValido = false; // marca el formulario como no valido
      } else {
        input.classList.remove('is-invalid'); // elimina el estilo de error
        input.classList.add('is-valid'); // aplica el estilo de éxito
      }
    });
  
    // validar que las contraseñas coincidan
    const password1 = document.getElementById('password1');
    const password2 = document.getElementById('password2');
    if (password1.value !== password2.value) {
      password2.classList.add('is-invalid');
      password2.classList.remove('is-valid');
      esValido = false;
    }
  
    if (esValido) {
      console.log('El formulario es valido y puede ser enviado.');
    } else {
      console.log('El formulario no es valido.');
    }
  });
  
  // validacion en tiempo real
  const inputs = document.querySelectorAll('input');
  inputs.forEach(input => {
    input.addEventListener('input', function () {
      if (input.checkValidity()) {
        input.classList.remove('is-invalid');
        input.classList.add('is-valid');
      } else {
        input.classList.remove('is-valid');
        input.classList.add('is-invalid');
      }
    });
  });
  