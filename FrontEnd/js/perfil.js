const URL_API = "http://localhost:8080/usuario"

function mostrarUsuario(user){
    
        const user1 = user[0]
    
        if(user1){
            const usuario = JSON.stringify(user1)
            
            document.getElementById('input-nombre').setAttribute('value', usuario.nombre)
            document.getElementById('input-apellido').setAttribute('value', usuario.apellidos)
            document.getElementById('input-correo').setAttribute('value', usuario.email)
            document.getElementById('input-usuario').setAttribute('value', usuario.usuario)
        }
    
}


async function obtenerUsuario(url){
    const resp = await fetch(url)
    const user = await resp.json()
    return user
}

async function main(){
    const url = "http://localhost:8080/usuario"
    const user = await obtenerUsuario(url)
    console.log(user[0])
    mostrarUsuario(user)
}

main()