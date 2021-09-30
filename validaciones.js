// console.log("empece");

function capturar() {
  // hago referencia el documento que llamo el js y lo almacena en una variable
  let form = document.formulario;
  //   alert(form.in_usuario.value);
  alert(validar_nombreUsuario(form.in_usuario.value));
  alert(validar_contrasena(form.in_contrasena.value));
}

function validar_nombreUsuario(string) {
  let validStringFormat = /\w{4,9}/;
  if (validStringFormat.test(string)) {
    // alert("usario valido");
    return true;
  } else {
    // alert("nombre de usuario invalido");
    return false;
  }
}

function validar_contrasena(string) {
  let comparacion = /\w{6,}/;
  if (comparacion.test(string)) {
    // alert("Registro de Usuario exitoso");
    return true;
  } else {
    // alert("La contraseña no cumple con los parámetros de seguridad");
    return false;
  }
}

module.exports.validar_nombreUsuario = validar_nombreUsuario;
module.exports.validar_contrasena = validar_contrasena;
