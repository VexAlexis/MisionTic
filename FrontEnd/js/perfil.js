const URL_API = "http://localhost:8080/usuario"

function mostrarUsuario(user){
    
        const user1 = user[0]
        if(user1){
            document.getElementById('input-nombre').setAttribute('value', user1.nombre)
            document.getElementById('input-apellido').setAttribute('value', user1.apellidos)
            document.getElementById('input-correo').setAttribute('value', user1.email)
            document.getElementById('input-usuario').setAttribute('value', user1.usuario)
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