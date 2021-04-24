//VARIABLES
let nombre = ""
let apellido = ""
let direccion = ""
let telefono = ""
let email = ""
const formulario = document.getElementById("formulario")

formulario.addEventListener("submit", function (e) {
    e.preventDefault()
    formulario.classList.add("was-validated")
    nombre = document.getElementById("nombre").value
    apellido = document.getElementById("apellido").value
    direccion = document.getElementById("direccion").value
    telefono = document.getElementById("telefono").value
    email = document.getElementById("email").value
    if (formulario.checkValidity() === false) {
        return false
    } else {
        resumen()
        mostrarResumen()
    }

})

//FUNCION RESUMEN
function resumen() {
    const resumen = `<div class="container">
                <h4>RESUMEN DE SU COMPRA</h4>
                <hr>
                <p>Nombre: ${nombre} ${apellido}</p>
                <p>Dirección: ${direccion}</p>
                <p>Teléfono: ${telefono}</p>
                <p>Cantidad de productos: ${cantidadProductos()}</p> 
                <p>Total de la compra: $ ${total()}</p>
                
                <div class="row">
                    <div class="col-12 d-flex justify-content-around">
                    <button type="button" class="btn btn-sm btn-secondary" onclick="volverFormulario()">Volver<i class="fas fa-arrow-left"></i></button>
                    <button type="button" class="btn btn-sm btn-dark" onclick="confirmarCompra()">Confirmar compra<i class="fas fa-check"></i></button>
                    </div>
                    </div>
                 </div>`
    resumenCompra.html(resumen)
}

//FUNCIÓN CONFIRMAR COMPRA
function confirmarCompra() {
    alert(`Muchas gracias por su compra ${nombre}, en breve le estaremos enviando sus productos a ${direccion}.`)
    vaciarCarrito()
}