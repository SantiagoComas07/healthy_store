

// Incremente the number for the id

import { alertSuccesfully } from "./alerts.js";

let numero=0;


export function renderHome(){
  // Escuchar clicks en todos los botones "Add to cart"

    const buttons = document.querySelectorAll(".add-to-cart");
    buttons.forEach(button => {
      button.addEventListener("click", () => {
        const product = {
          id: generateNewId(),
          name: button.dataset.name,
          description: button.dataset.description,
          price: button.dataset.price,
          image: button.dataset.image,
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
    alertSuccesfully("The product has been added to the shopping-cart");
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

  function generateNewId(){
    let prefix = 'A0';
    numero += 1;
    let codigo = prefix + numero.toString();
    return codigo;

  }


  export function hamburguerBtn(){
    const toggleBtn = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    toggleBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }