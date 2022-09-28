const URL_API = "http://localhost:8080/login"



function getDataForm(e){
    //Indicar al evento que no recargue pagina
    e.preventDefault()
    const form = e.target
    const usuario = {
        email: form.email.value,
        contraseña: form.contraseña.value
        
    }
}


