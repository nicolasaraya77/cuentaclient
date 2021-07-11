//layouts
import GuestLayout from "../layouts/LayoutGuest";
//pages Home (portal comercial)
import Home from "../pages/Guest/Home";
import Contact from "../pages/Guest/Contact";
import About from "../pages/Guest/Contact";
/**
 * @const routes
 * @description Arreglo de objetos del sistema de rutas
 */

//sistema de rutas del pos (array de objetos con path, layout padre, pagina hija y si la ruta del path es exacta)
// los :namestore indican ruta dinámica, es decir que se muestre el nombre del almacen de la api
const routes = [
  {
    path: "/",
    layout: GuestLayout,
    component: Home,
    exact: true,
  },
  {
    path: "/contacto",
    layout: GuestLayout,
    component: Contact,
    exact: true,
  },
  {
    path: "/nosotros",
    layout: GuestLayout,
    component: About,
    exact: true,
  },
  {
    layout: GuestLayout,
    component: Home,
  },
];

export default routes;
