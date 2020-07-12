import Header from "../templates/Header";
import Character from "../pages/Character";
import Home from "../pages/Home";
import Error from "../pages/Error";
import getHash from "../utils/getHash";
import resolveRoutes from "../utils/resolveRoutes";


const routes = {
    '/': Home,
    '/:id': Character,
    '/contact': 'Contact'
}

const router = async () => {
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');

    header.innerHTML = await Header();

    let hash = getHash();
    let route = await resolveRoutes(hash);

    let render = routes[route] ? routes[route] : Error;
    //hacemos una validacion con brackats notacion y preguntamos si render es igual a route.

    content.innerHTML = await render();
}

export default router;
