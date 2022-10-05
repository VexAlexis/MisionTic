const URL_API = "http://localhost:8080/usuario"
let usuarioActual;

function mostrarUsuario(user){
    
        if(user){
            document.getElementById('input-nombre').setAttribute('value', user.nombre)
            document.getElementById('input-apellido').setAttribute('value', user.apellidos)
            document.getElementById('input-correo').setAttribute('value', user.email)
            document.getElementById('input-usuario').setAttribute('value', user.usuario)
        }   
}

function obtenerUsuarioActual(){
    usuarioActual = JSON.parse(localStorage.getItem("userLogged"))
    console.log(usuarioActual); 
}

async function consultarEnApi(correo){
    const resp = await fetch(`${URL_API}/perfil/${correo}`,{
        method: 'GET'
    })
    const user = await resp.json()
    return user
}

async function main(){
    obtenerUsuarioActual()
    const user = await consultarEnApi(usuarioActual.email)
    mostrarUsuario(user)
}

main()



function actulizarUsuario(e){
    e.preventDefault()
    const form = e.target
    const usuario = {
        nombre: form.nombre.value,
        apellidos: form.apellido.value,
        email: form.correo.value,
        usuario: form.usuario.value
    }
    enviarActualizacion(usuario)
}

async function enviarActualizacion(usuario){
    const resp = await fetch(URL_API,{
        method: 'PUT',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario)
    })
    const text = await resp.text()
    alert(text)
}