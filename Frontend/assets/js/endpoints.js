const environmentFront = 'http://localhost'; // Cambiar en caso de que se necesite (Sólo es para el front)
const environmentBack = 'http://localhost:3000'; // Cambiar en caso de que se necesite (Esto es para el servidor)

function login(correo){
    axios.post(`${environmentBack}/api/auth`, {
        email: correo,
    })
    .then(function (response) {
        
        alert(response.data.message)
        setTimeout(() => {
            newDoc('await')    
        }, 1000);
        
    })
    .catch(function (error) {
        alert('Ha ocurrido un error')
        console.log(error);
    });
}

function newDoc(ruta) {
    window.location.assign(`${environmentFront}/Frontend/${ruta}/${ruta}.html`)
}

function confirmToken(token){
    axios.post(`${environmentBack}/api/auth-token`, {
        token: token,
    })
    .then(function (response) {

        alert(response.data.message)
        setTimeout(() => {
            newDoc('success')    
        }, 1000);
    })
    .catch(function (error) {
        alert('Ha ocurrido un error')
        console.log(error);
    });
}