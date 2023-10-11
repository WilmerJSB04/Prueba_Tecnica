const form = document.querySelector("form");
eField = form.querySelector(".email");
eInput = eField.querySelector("input");

function ValLogin() {
    console.log("SI")
    
    const validator = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    const inputCorreo = document.getElementById('r-correo');

    if(!validator.test(inputCorreo.value)){
        msgcorreo = 'Por favor ingrese un correo valido';
        alert(msgcorreo)
        return
    }

    login(inputCorreo.value);
}

function ValToken(){
    const inputToken = document.getElementById('token');

    if(!inputToken.value){
        msgcorreo = 'Por favor ingrese un token';
        alert(msgcorreo)
        return
    }

    confirmToken(inputToken.value);
}