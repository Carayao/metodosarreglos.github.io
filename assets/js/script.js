const boton = document.querySelector('#agregar');
const arregloTareas = [];
let contador = 1;

const eliminarTarea = function (idTarea) {
    const posicion = arregloTareas.findIndex((e) => e.id == idTarea);

    if (posicion >= 0) {
        arregloTareas.splice(posicion, 1);
        listadoTareas()
    }
}

const tareaRealizada = function(idTarea) {
    const posicion = arregloTareas.findIndex((e) => e.id == idTarea);

    arregloTareas[posicion].realizada = !arregloTareas[posicion].realizada;

    listadoTareas();

}
const listadoTareas = function () {

    const tablaTareas = document.querySelector('#tablaTareas');
    const totalTareas = document.querySelector('#resultadoTotal')
    const totalTareasRealizadas = document.querySelector('#resultadoRealizadas')


    let tareasHtml = `
    <thead>
        <tr>
            <th>#ID</th>
            <th>Tarea</th>
        </tr>
     </thead>
     <tbody>`;

    for (const tarea of arregloTareas) {
        if (tarea.realizada) {
            statusCheck = 'checked';
        } else { 
            statusCheck = '';
        }
        tareasHtml += `
     <tr>
        <td>${tarea.id}</td>
        <td>${tarea.nombre}</td>
        <td><input type="checkbox" ${statusCheck} onclick="tareaRealizada(${tarea.id})"></td>
        <td><button class="btn btn-danger" onclick="eliminarTarea(${tarea.id})">Eliminar</button></td>
    </tr>
        `;
    }
    tareasHtml += '</tbody>';

    tablaTareas.innerHTML = tareasHtml;
    totalTareas.innerHTML = arregloTareas.length;

    const arregloTareasRealizadas = arregloTareas.filter((e) => e.realizada == true);

    totalTareasRealizadas.innerHTML = arregloTareasRealizadas.length;

}


boton.addEventListener('click', function () {
    /*nombre de la tarea*/
    const nombreTarea = document.querySelector('#input').value;
    /*numero de ID*/
    const id = contador;
    /*Check box sin marcar*/
    const realizado = false;

    /*crear objeto*/
    const arreglo = {
        id: id,
        nombre: nombreTarea,
        realizada: realizado,
    }

    /*agregar elementos al arreglo*/
    arregloTareas.push(arreglo);

    listadoTareas();

    contador++;

});




