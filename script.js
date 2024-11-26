document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    const cartList = document.getElementById('lista-carrito');
    const totalElement = document.getElementById('total');
    const btnVaciar = document.getElementById('vaciar-carrito');

    // Función para actualizar el carrito
    function actualizarCarrito() {
        cartList.innerHTML = '';
        let total = 0;
        cart.forEach((product, index) => {
            const listItem = document.createElement('li');
            listItem.textContent = `${product.name} - $${product.price} MXN`;
            cartList.appendChild(listItem);
            total += product.price;
        });
        totalElement.textContent = `Total: $${total} MXN`;
    }

    // Añadir productos al carrito
    document.querySelectorAll('.btn-add-cart').forEach((button) => {
        button.addEventListener('click', (event) => {
            const product = event.target.closest('.product');
            const name = product.dataset.name;
            const price = parseInt(product.dataset.price);
            cart.push({ name, price });
            actualizarCarrito();
        });
    });

    // Vaciar carrito
    btnVaciar.addEventListener('click', () => {
        cart.length = 0;
        actualizarCarrito();
    });
});

