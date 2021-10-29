const form = document.getElementById ("form")
const nombre = document.getElementById ("nombre")
const apellido = document.getElementById ("apellido")
const direccion = document.getElementById ("direccion")
const ciudad = document.getElementById ("ciudad")
const email = document.getElementById ("email")
const telefono = document.getElementById ("tel")
const codigo = document.getElementById ("codigo_postal")
const fecha = document.getElementById ("fecha")
const genero = document.getElementById ("genero")
const estudios = document.getElementById ("estudios")
const checkbox = document.getElementById('formulario_terminos')
const parrafo = document.getElementById ("warnings")


form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/
    parrafo.innerHTML = ""
    
    if(nombre.value.length <2){
        warnings += `El nombre no es válido <br>`
        entrar = true
    }

    if(apellido.value.length <4){
        warnings += `El apellido no es válido <br>`
        entrar = true
    }

    if(direccion.value.length <5){
        warnings += `La dirección no es válida <br>`
        entrar = true
    }

    if(ciudad.value.length <4){
        warnings += `La ciudad no es válida <br>`
        entrar = true
    }

    if (!regexEmail.test(email.value)) {
            warnings += `El mail no es válido <br>`
            entrar = true
    }

    if(tel.value.length <8){
        warnings += `El número telefónico no es válido <br>`
        entrar = true
    }


    if(codigo_postal.value.length <2){
        warnings += `El código postal no es válido <br>`
        entrar = true
    }

    if(fecha.value.length <10){
        warnings += `La Fecha de Nac. no es válida <br>`
        entrar = true
    }


    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Enviado"
    }
}
)


























/**(function () {
    var formulario = document.getElementsByName ('formulario') [0],
    elementos = formulario.elements,
    boton = document.getElementById ('btn');

    var validarNombre = function (){
        if (formulario.firstname.value == 0) {
            alert ("completa el campo nombre");
        }
    };

    var validar = function () {
        validarNombre ();
    };

    formulario.eddEventlisterner ("submit", validar);
} ()
/** */