//CREO LAS VARIABLES
let catalogo = $("#catalogo")
let productos = []
let producto = ""
let carrito = []
let cantidadItems = $("#cantidadItems")
let jsonProductos = []
let encabezado = $(".navbar")

//FUNCIÓN PARA ARMAR EL CATÁLOGO EN EL DOCUMENTO HTML. RECORRO EL JSON DE LOS PRODUCTOS
function armarCatalogo() {
    $.ajax({
        url: "assets/js/mates.json",
        dataType: "json",
        success: function (response) {
            jsonProductos = response
            jsonProductos.forEach((mates) => {
                producto =  `<div class="col-md-4 py-5 pro-tienda bg-img-white">
                <img src=${mates.img} class="img-fluid">
                <h3 class="card-text text-center">$ ${new Intl.NumberFormat("de-DE").format(mates.precio)}</h3>
                <div class="d-flex justify-content-center align-items-center">
                <button type="button" class="btn btn-light" id=${mates.id} onclick="agregoProductos2(${mates.id})">Agregar</button>
                </div>
            </div>`
                productos.push(producto)
            })
            catalogo.html(productos)
        }
    })
}

//FUNCIÓN CARRITO INICIAL
//Se fija si en el local storage ya existe un carrito cargado y lo levanta en la variable carrito para mostrarlo en la carga inicial
function carritoInicial() {
    if (localStorage.carritoCargado != undefined && localStorage.length > 0) {
        carrito = JSON.parse(localStorage.carritoCargado);
        contarItemsCarrito();
    }
}

//CONTAR CANTIDAD DE ITEMS CARRITO.
function contarItemsCarrito() {
    cantidadItems.text(carrito.length)
}

//FUNCIÓN DE CARGA DEL CATÁLOGO Y DEL CARRITO INICIAL ALMACENADO EN LOCAL STORAGE
$(document).ready(function () {
    carritoInicial()
    armarCatalogo()
    encabezado.show(2000, function () {
        catalogo.slideDown(3000)
    })
})