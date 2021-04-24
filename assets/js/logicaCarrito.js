//VARIABLES
let checkout = $("#checkout")
let productosElegidos = $("#productosElegidos")
let subtotal = 0

//AGREGO PRODUCTOS AL CARRITO A UN ARRAY "CARRITO"
//SE LLAMA A LA FUNCION contarItemsCarrito, PARA QUE SE MUESTRE EL NÚMERO EN EL CARRITO
//SE GUARDA EL CARRITO EN EL LOCALSTORANGE
function agregoProductos2(id) {
    const index = carrito.findIndex(item => item.id === id);
    if (index > -1) {
        carrito[index].cantidad += 1
    } else {
        const productoAAgregar = Object.assign({}, jsonProductos.find(item => item.id === id))
        carrito.push(productoAAgregar)
    }
    alert("El producto fue agregado exitosamente")
    contarItemsCarrito()
    localStorage.setItem("carritoCargado", JSON.stringify(carrito))
}

//REVISAR CARRITO
checkout.click(revisarCarrito)

function revisarCarrito() {
    mostrarProductosElegidos()
    productosElegidos.html("")
    let linea = ""

    for (let i = 0; i < carrito.length; i++) {
        subtotal = carrito[i].precio * carrito[i].cantidad
        linea =
            `<tr>
    <td scope="row">${i + 1}</td>
    <td>${carrito[i].tipo} - ${carrito[i].nombre} </td>
    <td class="d-flex justify-content-around"> <i onclick=disminuirCantidad(${i})><span role="button" class="fas fa-minus-circle"></span></i>${carrito[i].cantidad}<i onclick=aumentarCantidad(${i})><span role="button" class="fas fa-plus-circle"></span></i></td>
    <td class="text-center">$ ${new Intl.NumberFormat("de-DE").format(carrito[i].precio)} </td>
    <td class="text-center">$ ${new Intl.NumberFormat("de-DE").format(subtotal)} </td>
    <td class="text-center" onclick=eliminarProductoCarrito(${i})> <b  role="button" class="fas fa-times-circle"></b></td> 
  </tr>`;
        productosElegidos.append(linea)
    }

    linea =
        ` <tr>
  <td scope="row"></td>
  <td><b>TOTAL</b> </td>
  <td class="text-center"><b>${cantidadProductos()}</b></td>
  <td></td>
  <td class= "text-center"><b>$ ${total()}</b></td>
  <td ></td> 
</tr>`
    productosElegidos.append(linea)

}

//CALCULA EL TOTAL DEL CARRITO
function total() {
    const total = carrito.reduce((acc, cur) => {
        acc += cur.precio * cur.cantidad
        return acc
    }, 0);
    return new Intl.NumberFormat("de-DE").format(total)
}

//FUNCION CUENTA CANTIDAD DE PRODUCTOS
function cantidadProductos() {
    const QProductos = carrito.reduce((acc, cur) => {
        acc += cur.cantidad
        return acc
    }, 0);
    return QProductos
}

//FUNCION ELIMINA PRODUCTO DEL CARRITO
function eliminarProductoCarrito(index) {
    const removed = carrito.splice(index, 1)
    productosElegidos.html("")
    revisarCarrito()
    contarItemsCarrito()
    localStorage.setItem("carritoCargado", JSON.stringify(carrito))
}

//FUNCIÓN DISMINUIR CANTIDAD 
//Se fija si hay una sola unidad elimina el producto. Sino disminuye la cantidad en una unidad
function disminuirCantidad(index) {
    if (carrito[index].cantidad === 1) {
        eliminarProductoCarrito(index)
    } else {
        carrito[index].cantidad = carrito[index].cantidad - 1
        revisarCarrito()
        localStorage.setItem("carritoCargado", JSON.stringify(carrito))
    }
}

//FUNCIÓN AUMENTAR CANTIDAD 
function aumentarCantidad(index) {
    carrito[index].cantidad = carrito[index].cantidad + 1
    revisarCarrito()
    localStorage.setItem("carritoCargado", JSON.stringify(carrito))
}

//FUNCIÓN ELIMINAR PRODUCTOS CARRITO
function eliminarProductosCarrito() {
    if (confirm("¿Desea eliminar todos los productos del carrito?")) {
        vaciarCarrito()
    }
}

//FUNCIÓN VACIAR CARRITO
//Puede ser invocada en el resumen del carrito o al confirmar la compra
function vaciarCarrito() {
    carrito = []
    contarItemsCarrito()
    formulario.reset()
    formulario.classList.remove("was-validated")
    tablaProductos.fadeOut(1000)
    resumenCompra.fadeOut(1000)
    catalogo.slideDown(2000)
    localStorage.clear()
}