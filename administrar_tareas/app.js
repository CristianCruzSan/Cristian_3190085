//iniciamos un arreglo para poder almacenar las tareas
let tareas =[];

//Funcion para mostrar opciones
//menu despligable en alert para ver que opciones tenemos, aqui el usuario ingresa un numero 
function mostrarMenu(){
    return parseInt(prompt(`
        "Opciones diponibles"
        1.- Agregar tarea
        2.- Ver todas las tareas
        3.- Marcar mis tareas como completadas
        4.- Salir  

    `));
}
//Funcion para agregar tarea
function agregarTarea(){
    let nombre = prompt("Ingresa el nombre de la tarea");
    if(nombre){
        let tarea={
            nombre: nombre,
            completada: false /*la tarea esta false mientras este pendiente, 
            cambia a true cuando la funcion marcarTareaCompletada se realiza
            en el numero de tarea*/
        };
        tareas.push(tarea);
        alert("Tarea agregada con exito");
    }else{
        alert("El nombre de la tarea no puede estar vacio");
    }
}

//Funcion para ver las tareas
function verTarea(){
    if(tareas.length === 0){
        alert("No hay tareas en la lista");

    }else{
        let mensaje = "Listas de tareas: \n";
        /*Con el forEach vamos a recorrer los elementos del arrgelo, recibiendo 2 argumentos
        y realizando la numeracion de las taeas y mostrando el mensaje al usuario el status de la tarea */
        tareas.forEach((tarea,index)=>{
            mensaje+= `${index+1}.- ${tarea.nombre} [${tarea.completada ? "Completada":"Pendiente"} ]\n`;

        });
        alert (mensaje);
        
    }
}
//Funcion para agregar tarea como completada.

function marcarTareaCompletada(){
    let numero = parseInt(prompt("Introduce el  numero para marcar la tarea como completada"));
    /*En esta funcion usamos una validacion inicial para comprobar que el arreglo de tareas tiene un contenido
    despues con el numero de tarea la marcamos como completada (true) y mostramos el mensaje al usuario que su 
    tarea a sido completada */
    if( numero > 0 && numero <= tareas.length ){
        tareas[numero-1].completada=true;
        alert(`La tarea ${tareas[numero-1].nombre} ha sido completada`);

    }else{
        alert("Numero de tarea no valido (Fuera de rango....)");
    }
}

//Funcion principal para poder manejar nuestro programa
//Esta es la raiz de nuestra aplicacion, donde el usuario va a seleccionar el numero de accion a realizar
function iniciarPrograma(){
    let continuar = true;
    while(continuar){
        let opcion = mostrarMenu();//1
        switch(opcion){
            case 1:
                agregarTarea();
                break;
            case 2:
                verTarea();
                break;
            case 3:
                marcarTareaCompletada();
                break;
            case 4:
                alert("Saliendo del programa...");
                continuar = false;
                break;
            default:
                alert("Opcion no valida. Intentar nuevamente");
        }
    }
    alert("Programa Finalizado");
}
iniciarPrograma();