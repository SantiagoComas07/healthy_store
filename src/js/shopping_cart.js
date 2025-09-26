


export function renderShoppingCart(){
    renderCart();
};





function renderCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartList = document.getElementById("cart-items");
    console.log(cartList);

    // Limpiamos el contenedor
    cartList.innerHTML = "";

    if (cart.length === 0) {
      cartList.innerHTML = "<li class='text-gray-500'>El carrito está vacío.</li>";
      return;
    }

    // Recorremos los productos y los mostramos
    cart.forEach(product => {
      const li = document.createElement("li");
  
      li.className = "flex justify-between bg-white shadow p-4 rounded-xs";
      li.innerHTML = `
        <div class="flex  items-center gap-4">
            <img src="../../public/img/products.jpg" alt="${product.name}" class="w-16 h-16 object-cover rounded" />
          <div>
          <p class="font-semibold text-green-700">${product.name}</p>
          <p class="text-sm text-gray-600">${product.description}</p>
          <p class="text-sm text-gray-800">Cantidad: <strong>${product.quantity}</strong></p>
          <p class="text-sm text-gray-800">Precio: $${(product.price * product.quantity).toFixed(2)}</p>
        </div>
        </div>
      <div class="self-end">
        <button class="delete bg-red-600 px-2 py-1 rounded-xs text-white cursor-pointer hover:bg-red-700">Eliminar</button>
      </div>
      `;
      cartList.appendChild(li);
    });
  }


  function deleteProductCart(id){
    
  }