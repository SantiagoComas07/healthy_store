


export function renderHome(){
  // Escuchar clicks en todos los botones "Add to cart"

    const buttons = document.querySelectorAll(".add-to-cart");

    buttons.forEach(button => {
      button.addEventListener("click", () => {
        const product = {
          id: parseInt(button.dataset.id),
          name: button.dataset.name,
          description: button.dataset.description,
          price: parseFloat(button.dataset.price),
          image: button.dataset.image,
          quantity: 1
        };

        addToCart(product);
      });
    });

};



 
  // Leer el carrito desde localStorage
  function getCart() {
    const cart = localStorage.getItem("cart");
    return cart ? JSON.parse(cart) : [];
  }

  // Guardar el carrito en localStorage
  function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  // Agregar un producto al carrito
  function addToCart(product) {
    const cart = getCart();
    const existingProduct = cart.find(item => item.id === product.id);

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push(product);
    }

    saveCart(cart);
    console.log("Producto agregado:", product);
    console.log("Carrito actual:", cart);
  };