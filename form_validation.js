function validarNombre(nombre) {
  if (nombre == ""){
        mensaje = "*Campo obligatorio.";
        document.getElementById("campo_nombre").innerHTML = mensaje;
        return false;
    }    
}

function validarApellido(apellido) {
  if (apellido == ""){
        mensaje = "*Campo obligatorio.";
        document.getElementById("campo_apellido").innerHTML = mensaje;
        return false;
    }    
}

function validarEdad(edad) {
  if (isNaN(parseInt(edad)) || parseInt(edad) < 1 || parseInt(edad) > 10) {
        mensaje = "*Ingrese un número entre 1 y 100.";
        document.getElementById("campo_edad").innerHTML = mensaje;
        return false;
  }
}

function validarTelefono(tel) {
  if ( isNaN(parseInt(tel)) || tel.length  < 7) { 
        mensaje = "*Ingrese un número válido." ;
        document.getElementById("campo_tel").innerHTML = mensaje;
        return false;
  }
}

function validarMail(correo) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(correo) != Boolean(true)){
        mensaje = "*Debe ingresar un correo válido.";
        document.getElementById("campo_mail").innerHTML = mensaje;
        return false;
  }
}

function validarConsulta(texto) {
  if (texto == "" || texto == "¡Tu consulta no molesta!"){
    mensaje = "*Haga su consulta.";
    document.getElementById("campo_consulta").innerHTML = mensaje;
    return false;
}    
}



function validateForm() {

  let apellido = validarApellido( 
    document.getElementById("apellido").value 
  ) 
  let nombre = validarNombre(
    document.getElementById("nombre").value
  ) 
  let tel = validarTelefono(
    document.getElementById("tel").value
  ) 
  let mail = validarMail(
    document.getElementById("mail").value
  ) 
  let consulta = validarConsulta(
    document.getElementById("consulta").value
  ) 
  

  if (nombre==0 || apellido==0 || mail==0 || tel==0 || consulta==0){
    return false;
  }
  
}