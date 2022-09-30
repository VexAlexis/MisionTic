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