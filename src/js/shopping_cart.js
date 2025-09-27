export function renderShoppingCart() {
  renderCart();
  const btnSend = document.getElementById("send");
  btnSend?.addEventListener('click', (e)=>{
    e.preventDefault();
    sendMessage();
  })
}

function renderCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartList = document.getElementById("cart-items");
  console.log(cartList);

  // Limpiamos el contenedor
  cartList.innerHTML = "";

  if (cart.length === 0) {
    cartList.innerHTML =
      "<li class='text-gray-500'>El carrito está vacío.</li>";
    return;
  }

  // Recorremos los productos y los mostramos
  cart.forEach((product) => {
    const li = document.createElement("li");

    li.className = "flex justify-between bg-white shadow p-4 rounded-xs";
    li.innerHTML = `
        <div class="flex  items-center gap-4">
            <img src="${product.image}" alt="${
      product.name
    }" class="w-16 h-16 object-cover rounded" />
          <div>
          <p class="font-semibold text-green-700">${product.name}</p>
          <p class="text-sm text-gray-600">${product.description}</p>
          <p class="text-sm text-gray-800">Precio: $${
            product.price
          }</p>
        </div>
        </div>
      <div class="self-end">
        <button class="delete bg-red-600 px-2 py-1 rounded-xs text-white cursor-pointer hover:bg-red-700" data-id="${
          product.id
        }">Eliminar </button>
      </div>
      `;
    cartList.appendChild(li);
  });

  document.querySelectorAll(".delete").forEach((link) =>
    link.addEventListener("click", (e) => {
      console.log("click en eliminar");
      e.preventDefault();

      const id = e.currentTarget.getAttribute("data-id");
      removeItemFromCart(id);
      
    })
  );
}

export function removeItemFromCart(id) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
    console.log(cart);
  const index = cart.findIndex((item) => item.id.toString() === id.toString());
// we remove the specific item
  cart.splice(index,1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();


// Canttidades
  // console.log((cart[index].quantity ));
  // if (cart[index].quantity >= 1 && cart[index].id === id) {
  //   cart[index].quantity -= 1;
  //    console.log((cart[index].quantity ));
  //    localStorage.setItem("cart", JSON.stringify(cart));
  //    localStorage.getItem("cart");
  //    if(cart[index].quantity === 0){
  //     cart.splice(index, 1);
  //    }
  // }

  

};



function sendMessage(){
  const userName = document.getElementById("name").value;
  const userEmail = document.getElementById("email").value;
  const textForm = document.getElementById("message").value;

      if (!userName || !userEmail) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    let message = `Hola, mi nombre es ${encodeURIComponent(userName)} y mi email es ${encodeURIComponent(userEmail)}.%0AQuisiera hacer el siguiente pedido:%0A `;

    const information = JSON.parse(localStorage.getItem("cart"));
    information.forEach((item) => {
      message += `🛒 Producto: ${item.name}\n💰
        Precio: $${item.price}\n`
    });

    message += `%0A Adicionalmente quiero decir: ${encodeURIComponent(textForm)}`;
    console.log(message)



 const phoneNumber = 5730032323;
 const urlWhatsapp = `https://wa.me/${phoneNumber}?text=${message}`;
 window.open(urlWhatsapp, '_blank');

}