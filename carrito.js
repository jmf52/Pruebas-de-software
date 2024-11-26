// Inicializar el carrito vacío o cargarlo desde localStorage
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Función para agregar un producto al carrito
function agregarAlCarrito(nombre, precio, imagen) {
    carrito.push({ nombre, precio, imagen });
    localStorage.setItem("carrito", JSON.stringify(carrito));
    actualizarCarrito();
}

// Actualizar el carrito en la página
function actualizarCarrito() {
    const listaCarrito = document.getElementById("lista-carrito");
    const total = document.getElementById("total");
    const mensajeCarrito = document.getElementById("mensaje-carrito");

    if (listaCarrito) {
        listaCarrito.innerHTML = "";
        let totalPrecio = 0;

        carrito.forEach((producto) => {
            const item = document.createElement("li");
            item.innerHTML = `
                <img src="${producto.imagen}" alt="${producto.nombre}" class="carrito-img">
                <span>${producto.nombre} - $${producto.precio.toFixed(2)} MXN</span>
            `;
            listaCarrito.appendChild(item);
            totalPrecio += producto.precio;
        });

        total.textContent = totalPrecio.toFixed(2);
        mensajeCarrito.textContent = carrito.length === 0 ? "Tu carrito está vacío." : "";
    }
}

// Finalizar la compra
document.addEventListener("DOMContentLoaded", () => {
    actualizarCarrito();

    const btnComprar = document.getElementById("btn-comprar");
    if (btnComprar) {
        btnComprar.addEventListener("click", () => {
            if (carrito.length > 0) {
                alert("Compra realizada con éxito!");
                carrito = [];
                localStorage.setItem("carrito", JSON.stringify(carrito));
                actualizarCarrito();
            } else {
                alert("Tu carrito está vacío.");
            }
        });
    }
});
