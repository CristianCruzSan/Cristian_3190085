var productos = [
    { nombre: 'Camisa', precio: 300 },
    { nombre: 'Pantalón', precio: 500 },
    { nombre: 'Zapatos', precio: 800 },
    { nombre: 'Sombrero', precio: 200 }
];

var carrito = [];
var total = 0; // Se inicializa el total en 0

// Función para mostrar el menú de productos
function mostrarMenu() {
    var menu = "Seleccione una opción:\n";
    for (var i = 0; i < productos.length; i++) {
        menu += (i + 1) + ". " + productos[i].nombre + " - $" + productos[i].precio + "\n";
    }
    menu += (productos.length + 1) + ". Ver Carrito y Total\n";
    menu += (productos.length + 2) + ". Agregar Nuevo Producto\n"; // Opción para agregar un nuevo producto
    menu += (productos.length + 3) + ". Salir\n";
    return menu;
}

// Función para agregar un producto al carrito
function agregarAlCarrito(index) {
    var productoSeleccionado = productos[index];
    carrito.push(productoSeleccionado);
    total += productoSeleccionado.precio; // Actualiza el total
    console.log('Producto "' + productoSeleccionado.nombre + '" agregado al carrito.');
}

// Función para mostrar el carrito y el total
function mostrarCarritoYTotal() {
    if (carrito.length === 0) {
        console.log("El carrito está vacío.");
    } else {
        var mensajeCarrito = "Carrito de compras:\n";
        for (var i = 0; i < carrito.length; i++) {
            mensajeCarrito += (i + 1) + ". " + carrito[i].nombre + " - $" + carrito[i].precio + "\n";
        }
        mensajeCarrito += "\nTotal: $" + total; // Muestra el total actualizado
        console.log(mensajeCarrito);
    }
}

// Función para agregar un nuevo producto al inventario
function agregarNuevoProducto() {
    var nombreProducto = prompt("Ingrese el nombre del nuevo producto:");
    var precioProducto = prompt("Ingrese el precio del nuevo producto:");
    precioProducto = Number(precioProducto);

    // Validar si el precio ingresado es un número válido y mayor que 0
    if (precioProducto > 0) {
        productos.push({ nombre: nombreProducto, precio: precioProducto });
        console.log('Producto "' + nombreProducto + '" agregado a la tienda con un precio de $' + precioProducto + ".");
    } else {
        console.log("El precio ingresado no es válido.");
    }
}


// Bucle principal de la tienda
var opcion;
do {
    opcion = prompt(mostrarMenu());
    opcion = Number(opcion);

    if (isNaN(opcion) || opcion < 1 || opcion > productos.length + 3) {
        console.log("Opción no válida, por favor intenta de nuevo.");
    } else if (opcion >= 1 && opcion <= productos.length) {
        agregarAlCarrito(opcion - 1);
    } else if (opcion === productos.length + 1) {
        mostrarCarritoYTotal();
    } else if (opcion === productos.length + 2) {
        agregarNuevoProducto();
    }
} while (opcion !== productos.length + 3);

console.log("Gracias por visitar la tienda.");
