let listaRutinas = [
    {id: "1", nombre: "Rutina principiantes",categoria:"Hipertrofia",duracion:"24 dias",intensidad:"media",cantidadEjercicios:"12"},
    {id: "2", nombre: "Rutina intermedia",categoria:"Hipertrofia",duracion:"30 dias",intensidad:"Alta",cantidadEjercicios:"18"},
    {id: "3", nombre: "Rutina principiantes",categoria:"Cardio",duracion:"24 dias",intensidad:"media",cantidadEjercicios:"12"},
    {id: "4", nombre: "Rutina intermedia",categoria:"Cardio",duracion:"30 dias",intensidad:"Alta",cantidadEjercicios:"18"},
    {id: "5", nombre: "Rutina principiantes",categoria:"Fuerza",duracion:"24 dias",intensidad:"media",cantidadEjercicios:"12"},
    {id: "6", nombre: "Rutina intermedia",categoria:"Fuerza",duracion:"30 dias",intensidad:"Alta",cantidadEjercicios:"18"}
];

function rellenarTabla(){
    const tabla = document.getElementById('rutinas')
    let tbody = ''
    for (let i = 0; i < listaRutinas.length; i++) {
        const rutina = listaRutinas[i]
        tbody += `
        <tr>
            <td>${rutina.id}</td>
            <td>${rutina.nombre}</td>
            <td>${rutina.categoria}</td>
            <td>${rutina.duracion}</td>
            <td>${rutina.intensidad}</td>
            <td>${rutina.cantidadEjercicios}</td>
            <td> 
                <button class="boton-actualizar" onclick='actualizar(${JSON.stringify(rutina)})'>Actualizar</button> 
                <button class="boton-x" onclick='eliminarRutina(${rutina.id})'>X</button>
            </td>
        </tr>
        `
        }
        // tbody += ''
        tabla.innerHTML = tbody;
}

function main(){
    rellenarTabla()
}
main()


function nuevaRutina(){

    const tabla = document.querySelector(".no-mostrar");
    /* tabla.classList.remove('.no-mostrar'); */
    tabla.style.display = "inline-table";
}