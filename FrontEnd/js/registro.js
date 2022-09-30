const URL_API = "http://localhost:8080/usuario"

// function dataForm(){
//     const data = document.getElementById('input-nombre').getAttribute('value')
//     document.getElementById('input-usuario').setAttribute('value',data)
// }

function getForm (e){
    e.preventDefault()
    const form = e.target
    const usuario = {
        nombre: form.nombre.value,
        apellidos: form.apellido.value,
        email: form.email.value,
        usuario: form.usuario.value,
        contraseña: form.contraseña.value
    }
    sendData(usuario)
    clearInputs(form)
}

async function sendData(usuario){
    const resp = await fetch(URL_API,{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario)
    })
    const text = await resp.text()
    alert(text)
}

function clearInputs(form){
    form.nombre.value = ""
    form.apellido.value = ""
    form.email.value = ""
    form.usuario.value = ""
    form.contraseña.value = ""
}