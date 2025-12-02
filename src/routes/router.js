import {renderHome} from '../js/home.js';
import {renderShoppingCart} from '../js/shopping_cart.js';


const routes = {
    "/": {
        path: "/views/home.html",
        setup: renderHome
    },
    "/shopping": {
        path: "/views/shopping_cart.html",
        setup: renderShoppingCart
    },
        "/notFound": {
        path: "/views/notFound.html",
        setup: null
    }

};


export  async function renderRouter(){
    const app = document.getElementById("app");
    const path = window.location.pathname;
    const route = routes[path] || routes["/notFound"];
    try{
        const response = await fetch(route.path);
        const content = await response.text();

        if(!response.ok){
            throw new Error("There is an error with the response");
        };


        app.innerHTML="";
        app.innerHTML= content;


        if(route.setup){
            route.setup();
        };

    }catch(error){
        console.error("There is an error in the renderRouter: ", error);
    }
}


export function redirecTo(path){
    window.history.pushState({},"",`${path}`);
    return renderRouter();
}

window.addEventListener("popstate", renderRouter);



function initRouter() {
    document.addEventListener("DOMContentLoaded", renderRouter);
    document.body.addEventListener('click', (event) => {
        const target = event.target.closest('a');
        if (target && target.href.startsWith(window.location.origin)) {
            event.preventDefault(); 
            redirecTo(target.pathname);
        }
    });
}

initRouter();