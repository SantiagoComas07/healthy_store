import './src/css/style.css';

import {redirecTo, renderRouter} from './src/routes/router.js'
import { removeItemFromCart } from './src/js/shopping_cart.js';
import { hamburguerBtn } from './src/js/home.js';

window.addEventListener("DOMContentLoaded", renderRouter);


hamburguerBtn()


// Logic for the change of view

document.querySelectorAll(".nav-link").forEach(link =>
    link.addEventListener("click", (e)=>{
        e.preventDefault();
        const path = link.getAttribute("href");
        redirecTo(path)
        

    })
);


