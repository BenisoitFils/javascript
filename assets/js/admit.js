document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("aumentar").addEventListener("click", aumentarCantidad);
    document.getElementById("disminuir").addEventListener("click", disminuirCantidad);
});


function aumentarCantidad() {
    var cantidadElemento = document.querySelector("#cantidad");
    var precioElemento = document.querySelector("#precio");
    var totalElemento = document.querySelector("#total");
    
    var cantidadActual = parseInt(cantidadElemento.innerHTML);
    var precio = parseInt(precioElemento.innerHTML);
    
    cantidadElemento.innerHTML = cantidadActual + 1;
    totalElemento.innerHTML = (cantidadActual + 1) * precio;
}

function disminuirCantidad() {
    var cantidadElemento = document.querySelector("#cantidad");
    var precioElemento = document.querySelector("#precio");
    var totalElemento = document.querySelector("#total");
    
    var cantidadActual = parseInt(cantidadElemento.innerHTML);
    var precio = parseInt(precioElemento.innerHTML);
    
    if (cantidadActual > 1) {
        cantidadElemento.innerHTML = cantidadActual - 1;
        totalElemento.innerHTML = (cantidadActual - 1) * precio;
    }
}
