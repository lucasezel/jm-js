//VARIABLES
let tablaProductos = $("#tablaProductos")
let formularioDatosUsuario = $("#datosUsuario")
let resumenCompra = $("#resumenCompra")
let logo = $("#logo")

//TRANSICIONES

//FUNCIÓN MOSTRAR PRODUCTOS ELEGIDOS
function mostrarProductosElegidos() {
    catalogo.fadeOut(1000, function () {
        formularioDatosUsuario.fadeOut(1000, function () {
            resumenCompra.fadeOut(1000, function () {
                tablaProductos.slideDown(2000)
            })
        })
    })
}

//FUNCIÓN SEGUIR COMPRANDO. 
function seguirComprando() {
    tablaProductos.fadeOut(1000, function () {
        catalogo.slideDown(2000)
    })
}

// FUNCION INICIAR COMPRA
function iniciarCompra() {
    if (carrito.length == 0) {
        alert("Ud no ha añadido ningún producto a su carrito")
    } else {
        tablaProductos.fadeOut(1000, function () {
            formularioDatosUsuario.slideDown(2000)
        })
    }
}

// FUNCION VOLVER
function volverCarrito() {
    formularioDatosUsuario.fadeOut(1000, function () {
        tablaProductos.slideDown(2000)
    })
}

//FUNCIÓN MOSTRAR RESUMEN
function mostrarResumen() {
    formularioDatosUsuario.fadeOut(1000, function () {
        resumenCompra.slideDown(2000)
    })
}

//FUNCIÓN VOLVER AL FORMULARIO
function volverFormulario() {
    resumenCompra.fadeOut(1000, function () {
        formularioDatosUsuario.slideDown(2000)
    })
}

//FUNCIION VOLVER ARRIBA
logo.click(function () {
    tablaProductos.fadeOut(1000, function () {
        formularioDatosUsuario.fadeOut(1000, function () {
            resumenCompra.fadeOut(1000, function () {
                catalogo.slideDown(2000)
            })
        })
    })
})