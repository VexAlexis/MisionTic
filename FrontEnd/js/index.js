const URL_API = "http://localhost:8080/usuario/login"

function getDataForm(e){
    //Indicar al evento que no recargue pagina
    e.preventDefault()
    const form = e.target
    const user = {
        email: form.email.value,
        contraseña: form.contraseña.value
    }
    login(user);
    
}

async function login(usuario){
    const resp = await fetch(URL_API,{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario)
    })
    const response = await resp.text()
    if(response.includes("EXITOSO")){
        localStorage.setItem("userLogged",JSON.stringify(usuario));
        window.location.href = "../ventanas/perfil.html"
    }
    
}





