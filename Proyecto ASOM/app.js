//pagina1
function iniciarSesion() {
    var usuario, contraseña;
    usuario = document.getElementById("correo").value;
    contraseña = document.getElementById("clave").value;
    if (usuario == "sebasortiz@gmail.com" && contraseña == "sebas-12") {
        window.location = "./index1.html";


    }
    else if (usuario == "" && contraseña == "") {
        alert("Ingrese el usuario y la contaseña");
    }
    else {
        alert("El usuario o la contaseña esta incorrecta");
    }
}
function crearCuenta() {
    window.location = "./crearusuario.html";
}
//pagina2
function validarRegistro() {
    validarNombre()
    validarApellido()
    validarGenero()
    validarCedula()
    validarTelefono()
    validarNacimiento()
    validarCorreo()
    validarContraseña()
    validarContraseña1()
    validarCondiciones()
    window.location = "./practica.html"
}
function validarNombre() {
    if (registro.nombre.value == 0) {
        alert("ingrese su nombre");
    }
}
function validarApellido() {
    if (registro.apellidos.value == 0) {
        alert("ingrese su apellido");
    }
}
function validarGenero() {
    if (registro.genero[0].checked == true || registro.genero[1].checked == true) {
    }
    else {
        alert("Ingrese su genero");
    }
}
function validarCedula() {
    if (registro.cedula.value == 0) {
        alert("ingrese su cedula");
    }
}
function validarTelefono() {
    if (registro.telefono.value == 0) {
        alert("ingrese su numero de telefono");
    }
}
function validarNacimiento() {
    if (registro.fn.value == 0) {
        alert("ingrese su fecha de nacimiento");
    }
}
function validarCorreo() {
    if (registro.ce.value == 0) {
        alert("ingrese su correo");
    }
}
function validarContraseña() {
    if (registro.clave.value == 0) {
        alert("ingrese su contraseña");
    }
}
function validarContraseña1() {
    if (registro.clave1.value == 0) {
        alert("Verifique su contraseña");
    }
}
function validarCondiciones() {
    if (registro.terminos.checked == true) {
    }
    else {
        alert("Acepte terminos y condiciones");
    }
}



//pagina3
var contadorJ = 0;
function CotadorClicks() {
    document.getElementById("contador").innerHTML = ++contadorJ;
}
var contadorJ1 = 0;
function CotadorClicks1() {
    document.getElementById("contador1").innerHTML = ++contadorJ1;
}
function video() {
    var video = document.getElementById("iszhu");
    if (video.className == "", "normal") {
        video.setAttribute("class", "grande");
    }

}
function video2() {
    var video = document.getElementById("iszhu");
    if (video.className == "", "grande") {
        video.setAttribute("class", "normal");
    }

}
function video3() {
    var video = document.getElementById("iszhu");
    if (video.className == "", "grande", "normal") {
        video.setAttribute("class", "pequeño");
    }

}

function cambio(x) {
    x.style.color = "black";
    x.style.fontSize = "40px";

}
function cambio2(x) {
    x.style.color = "red";
    x.style.fontSize = "50px";
}
function pagina2() {
    window.location = "./index2.html";
}

