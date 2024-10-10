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